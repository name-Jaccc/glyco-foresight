#!/usr/bin/env python3
"""Build a frontend-friendly dashboard payload from cohort CSV outputs."""

from __future__ import annotations

import csv
import json
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT_DIR = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT_DIR / "foresight_output_reference_healthy"
DASHBOARD_DIR = ROOT_DIR / "dashboard"
DATA_DIR = DASHBOARD_DIR / "data"
JSON_PATH = DATA_DIR / "dashboard-data.json"
JS_PATH = DATA_DIR / "dashboard-data.js"
COHORTS = [
    ("healthy", "Healthy"),
    ("prediabetes", "Prediabetes"),
    ("t2d", "T2D"),
]


def read_csv_rows(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def to_float(value: Any) -> float | None:
    if value in (None, "", "nan", "NaN"):
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def to_int(value: Any) -> int | None:
    number = to_float(value)
    if number is None:
        return None
    return int(round(number))


def mean(values: list[float | None]) -> float | None:
    numeric = [value for value in values if value is not None]
    if not numeric:
        return None
    return sum(numeric) / len(numeric)


def pct(value: float | None) -> float | None:
    if value is None:
        return None
    return value * 100.0


def round_or_none(value: float | None, digits: int = 1) -> float | None:
    if value is None:
        return None
    return round(value, digits)


def build_validation_map(rows: list[dict[str, str]]) -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    for row in rows:
        module = row.get("module", "")
        result[module] = {
            "target": row.get("target", ""),
            "n": to_int(row.get("n")),
            "auc": round_or_none(to_float(row.get("auc")), 3),
            "correlation": round_or_none(to_float(row.get("correlation")), 3),
            "f1_at_60": round_or_none(to_float(row.get("f1_at_60")), 3),
            "precision_at_60": round_or_none(to_float(row.get("precision_at_60")), 3),
            "sensitivity_at_60": round_or_none(to_float(row.get("sensitivity_at_60")), 3),
            "accuracy_at_60": round_or_none(to_float(row.get("accuracy_at_60")), 3),
        }
    return result


def parse_report_summary(report_path: Path) -> list[str]:
    lines = report_path.read_text(encoding="utf-8").splitlines()
    summary: list[str] = []
    for line in lines:
        if line.startswith("- ") and "event =" in line:
            summary.append(line[2:])
    return summary[:6]


def build_cohort_payload(cohort_key: str, cohort_label: str) -> dict[str, Any]:
    cohort_dir = OUTPUT_DIR / cohort_key
    subject_rows = read_csv_rows(cohort_dir / "subject_level_table_aligned.csv")
    meal_validation = build_validation_map(read_csv_rows(cohort_dir / "meal_prediction_validation_overall.csv"))
    stability_validation = build_validation_map(read_csv_rows(cohort_dir / "stability_prediction_validation_overall.csv"))
    recommendation_rows = read_csv_rows(cohort_dir / "personalized_meal_recommendations.csv")
    daily_rows = read_csv_rows(cohort_dir / "day_level_table_aligned.csv")
    meal_rows = read_csv_rows(cohort_dir / "meal_level_table_aligned.csv")

    valid_next_day_rows = [row for row in daily_rows if to_int(row.get("has_next_day")) == 1]
    summary = {
        "subjects": len(subject_rows),
        "meals": len(meal_rows),
        "days": len(daily_rows),
        "mean_bmi": round_or_none(mean([to_float(row.get("BMI")) for row in subject_rows]), 2),
        "mean_a1c": round_or_none(mean([to_float(row.get("A1c PDL (Lab)")) for row in subject_rows]), 2),
        "mean_fasting_glucose": round_or_none(mean([to_float(row.get("Fasting GLU - PDL (Lab)")) for row in subject_rows]), 1),
        "mean_glucose": round_or_none(mean([to_float(row.get("mean_glucose")) for row in subject_rows]), 1),
    }

    framework = {
        "meal_response": {
            "label": "Postprandial Excursion",
            "mean_score": round_or_none(mean([to_float(row.get("meal_response_risk_score")) for row in meal_rows]), 2),
            "event_rate_pct": round_or_none(pct(mean([to_float(row.get("postprandial_excursion_event")) for row in meal_rows])), 1),
        },
        "recovery": {
            "label": "Recovery Delay",
            "mean_score": round_or_none(mean([to_float(row.get("recovery_risk_score")) for row in meal_rows]), 2),
            "event_rate_pct": round_or_none(pct(mean([to_float(row.get("prolonged_hyperglycaemia_event")) for row in meal_rows])), 1),
        },
        "next_day": {
            "label": "Next-Day Instability",
            "mean_score": round_or_none(mean([to_float(row.get("next_day_instability_risk")) for row in valid_next_day_rows]), 2),
            "event_rate_pct": round_or_none(pct(mean([to_float(row.get("next_day_instability_event")) for row in valid_next_day_rows])), 1),
        },
        "drift": {
            "label": "Daily Variability Drift",
            "mean_score": round_or_none(mean([to_float(row.get("glycaemic_drift_score")) for row in daily_rows]), 2),
            "event_rate_pct": round_or_none(pct(mean([to_float(row.get("glycaemic_drift_event")) for row in daily_rows])), 1),
        },
        "transition": {
            "label": "State Transition",
            "mean_score": round_or_none(mean([to_float(row.get("state_transition_risk")) for row in daily_rows]), 2),
            "alerts": sum(to_int(row.get("instability_alert")) or 0 for row in daily_rows),
        },
        "dii": {
            "label": "Daily Instability Index",
            "mean_score": round_or_none(mean([to_float(row.get("daily_instability_index")) for row in daily_rows]), 2),
        },
    }

    subjects = sorted(
        [
            {
                "subject": row.get("subject"),
                "group": row.get("group"),
                "a1c": round_or_none(to_float(row.get("A1c PDL (Lab)")), 2),
                "bmi": round_or_none(to_float(row.get("BMI")), 1),
                "mean_glucose": round_or_none(to_float(row.get("mean_glucose")), 1),
                "days_covered": round_or_none(to_float(row.get("days_covered")), 1),
                "n_meals": to_int(row.get("n_meals")),
                "meal_response_risk_mean": round_or_none(to_float(row.get("meal_response_risk_score_mean")), 1),
                "recovery_risk_mean": round_or_none(to_float(row.get("recovery_risk_score_mean")), 1),
                "next_day_risk_mean": round_or_none(to_float(row.get("next_day_instability_risk_mean")), 1),
                "drift_score_mean": round_or_none(to_float(row.get("glycaemic_drift_score_mean")), 1),
                "transition_risk_max": round_or_none(to_float(row.get("state_transition_risk_max")), 1),
                "unstable_day_rate_pct": round_or_none(pct(to_float(row.get("unstable_day_rate"))), 1),
                "instability_alert_count": to_int(row.get("instability_alert_count")),
            }
            for row in subject_rows
        ],
        key=lambda item: (
            item["next_day_risk_mean"] is None,
            -(item["next_day_risk_mean"] or -1),
            -(item["transition_risk_max"] or -1),
        ),
    )

    top_alerts = sorted(
        [
            {
                "subject": row.get("subject"),
                "day": row.get("day"),
                "transition_risk": round_or_none(to_float(row.get("state_transition_risk")), 1),
                "daily_instability_index": round_or_none(to_float(row.get("daily_instability_index")), 1),
                "daily_glucose_cv": round_or_none(to_float(row.get("daily_glucose_cv")), 3),
                "time_above_140_pct": round_or_none(to_float(row.get("time_above_140_pct")), 1),
                "excursion_frequency": round_or_none(to_float(row.get("excursion_frequency")), 2),
                "next_day_risk": round_or_none(to_float(row.get("next_day_instability_risk")), 1),
            }
            for row in daily_rows
        ],
        key=lambda item: item["transition_risk"] or -1,
        reverse=True,
    )[:10]

    recommendations = sorted(
        [
            {
                "subject": row.get("subject"),
                "meal_slot": row.get("meal_slot"),
                "confidence": round_or_none(to_float(row.get("recommendation_confidence")), 0),
                "support_n_meals": to_int(row.get("subject_support_n_meals")),
                "estimated_meal_response_risk": round_or_none(to_float(row.get("estimated_meal_response_risk")), 1),
                "estimated_recovery_risk": round_or_none(to_float(row.get("estimated_recovery_risk")), 1),
                "estimated_next_day_instability_risk": round_or_none(to_float(row.get("estimated_next_day_instability_risk")), 1),
                "carbs_range": f"{round_or_none(to_float(row.get('recommended_carbs_min_g')), 1)}-{round_or_none(to_float(row.get('recommended_carbs_max_g')), 1)} g",
                "protein_range": f"{round_or_none(to_float(row.get('recommended_protein_min_g')), 1)}-{round_or_none(to_float(row.get('recommended_protein_max_g')), 1)} g",
                "fat_range": f"{round_or_none(to_float(row.get('recommended_fat_min_g')), 1)}-{round_or_none(to_float(row.get('recommended_fat_max_g')), 1)} g",
                "fiber_range": f"{round_or_none(to_float(row.get('recommended_fiber_min_g')), 1)}-{round_or_none(to_float(row.get('recommended_fiber_max_g')), 1)} g",
                "summary": row.get("recommendation_summary", ""),
            }
            for row in recommendation_rows
        ],
        key=lambda item: ((item["confidence"] or -1), (item["support_n_meals"] or -1)),
        reverse=True,
    )[:18]

    subject_details: dict[str, Any] = {}
    for subject_row in subjects:
        subject_id = str(subject_row["subject"])
        subject_day_rows = [row for row in daily_rows if row.get("subject") == subject_id]
        subject_meal_rows = [row for row in meal_rows if row.get("subject") == subject_id]
        subject_recommendations = [row for row in recommendation_rows if row.get("subject") == subject_id]

        daily_trace = [
            {
                "day": row.get("day"),
                "mean_glucose": round_or_none(to_float(row.get("daily_mean_glucose")), 1),
                "meal_risk": round_or_none(to_float(row.get("meal_response_risk_score_mean")), 1),
                "recovery_risk": round_or_none(to_float(row.get("recovery_risk_score_mean")), 1),
                "drift_score": round_or_none(to_float(row.get("glycaemic_drift_score")), 1),
                "transition_risk": round_or_none(to_float(row.get("state_transition_risk")), 1),
                "next_day_risk": round_or_none(to_float(row.get("next_day_instability_risk")), 1),
                "time_above_140_pct": round_or_none(to_float(row.get("time_above_140_pct")), 1),
                "daily_glucose_cv": round_or_none(to_float(row.get("daily_glucose_cv")), 3),
            }
            for row in sorted(subject_day_rows, key=lambda item: item.get("day", ""))
        ]

        meal_slot_summary: list[dict[str, Any]] = []
        for meal_slot in ["breakfast", "lunch", "dinner", "snack"]:
            slot_rows = [row for row in subject_meal_rows if (row.get("meal_type") or "").lower().find(meal_slot) >= 0]
            if not slot_rows:
                continue
            meal_slot_summary.append(
                {
                    "meal_slot": meal_slot,
                    "n_meals": len(slot_rows),
                    "mean_meal_risk": round_or_none(mean([to_float(row.get("meal_response_risk_score")) for row in slot_rows]), 1),
                    "mean_recovery_risk": round_or_none(mean([to_float(row.get("recovery_risk_score")) for row in slot_rows]), 1),
                    "mean_peak_glucose": round_or_none(mean([to_float(row.get("peak_glucose")) for row in slot_rows]), 1),
                    "mean_carbs": round_or_none(mean([to_float(row.get("meal_carbs")) for row in slot_rows]), 1),
                }
            )

        recent_meals = sorted(
            [
                {
                    "meal_start": row.get("meal_start"),
                    "meal_type": row.get("meal_type"),
                    "meal_carbs": round_or_none(to_float(row.get("meal_carbs")), 1),
                    "peak_glucose": round_or_none(to_float(row.get("peak_glucose")), 1),
                    "meal_risk": round_or_none(to_float(row.get("meal_response_risk_score")), 1),
                    "recovery_risk": round_or_none(to_float(row.get("recovery_risk_score")), 1),
                }
                for row in subject_meal_rows
            ],
            key=lambda item: item["meal_start"] or "",
            reverse=True,
        )[:8]

        subject_details[subject_id] = {
            "overview": subject_row,
            "daily_trace": daily_trace,
            "meal_slot_summary": meal_slot_summary,
            "recent_meals": recent_meals,
            "recommendations": [
                {
                    "meal_slot": row.get("meal_slot"),
                    "confidence": round_or_none(to_float(row.get("recommendation_confidence")), 0),
                    "estimated_meal_response_risk": round_or_none(to_float(row.get("estimated_meal_response_risk")), 1),
                    "estimated_recovery_risk": round_or_none(to_float(row.get("estimated_recovery_risk")), 1),
                    "estimated_next_day_instability_risk": round_or_none(to_float(row.get("estimated_next_day_instability_risk")), 1),
                    "summary": row.get("recommendation_summary", ""),
                }
                for row in subject_recommendations
            ],
        }

    return {
        "key": cohort_key,
        "label": cohort_label,
        "summary": summary,
        "framework": framework,
        "narrative": parse_report_summary(cohort_dir / "report.md"),
        "validations": {
            "meal_response": meal_validation.get("meal_response_risk_score", {}),
            "recovery": meal_validation.get("recovery_risk_score", {}),
            "next_day": stability_validation.get("next_day_instability_risk", {}),
            "drift": stability_validation.get("glycaemic_drift_score", {}),
        },
        "subjects": subjects,
        "subject_details": subject_details,
        "top_alerts": top_alerts,
        "recommendations": recommendations,
    }


def build_payload() -> dict[str, Any]:
    cohorts = [build_cohort_payload(key, label) for key, label in COHORTS]
    comparison = []
    domain_labels = {
        "meal_response": "Meal Risk",
        "recovery": "Recovery Risk",
        "next_day": "Next-Day Risk",
        "drift": "Drift Score",
        "transition": "Transition Risk",
        "dii": "Instability Index",
    }
    for cohort in cohorts:
        comparison.append(
            {
                "key": cohort["key"],
                "label": cohort["label"],
                "subjects": cohort["summary"]["subjects"],
                "meals": cohort["summary"]["meals"],
                "days": cohort["summary"]["days"],
                "recovery_event_rate_pct": cohort["framework"]["recovery"]["event_rate_pct"],
                "next_day_event_rate_pct": cohort["framework"]["next_day"]["event_rate_pct"],
                "meal_auc": cohort["validations"]["meal_response"].get("auc"),
                "recovery_auc": cohort["validations"]["recovery"].get("auc"),
                "next_day_auc": cohort["validations"]["next_day"].get("auc"),
                "drift_auc": cohort["validations"]["drift"].get("auc"),
            }
        )

    healthy = next(cohort for cohort in cohorts if cohort["key"] == "healthy")
    comparison_domains = []
    for key, label in domain_labels.items():
        row = {"key": key, "label": label}
        for cohort in cohorts:
            row[cohort["key"]] = cohort["framework"][key]["mean_score"]
        comparison_domains.append(row)

    for cohort in cohorts:
        deltas = []
        for key, label in domain_labels.items():
            cohort_value = cohort["framework"][key]["mean_score"]
            healthy_value = healthy["framework"][key]["mean_score"]
            delta = None if cohort_value is None or healthy_value is None else round(cohort_value - healthy_value, 2)
            deltas.append(
                {
                    "key": key,
                    "label": label,
                    "cohort_value": cohort_value,
                    "healthy_value": healthy_value,
                    "delta_from_healthy": delta,
                }
            )
        cohort["healthy_reference_delta"] = deltas

    return {
        "project": {
            "title": "CGM Metabolic Foresight Dashboard",
            "subtitle": "Meal-aware metabolic risk surveillance scored against the healthy cohort reference distribution.",
            "reference_scheme": "healthy_reference",
            "reference_explainer": "All displayed scores are recalibrated on the healthy cohort distribution, so higher scores in prediabetes and T2D represent deviation away from the healthy metabolic pattern on a common scale.",
            "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M"),
        },
        "comparison": comparison,
        "comparison_domains": comparison_domains,
        "cohorts": cohorts,
    }


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    payload = build_payload()
    json_text = json.dumps(payload, indent=2, ensure_ascii=False)
    JSON_PATH.write_text(json_text + "\n", encoding="utf-8")
    JS_PATH.write_text(f"window.CGM_DASHBOARD_DATA = {json_text};\n", encoding="utf-8")
    print(f"Wrote dashboard data to {JSON_PATH}")
    print(f"Wrote dashboard script data to {JS_PATH}")


if __name__ == "__main__":
    main()
