window.CGM_DASHBOARD_DATA = {
  "project": {
    "title": "CGM Metabolic Foresight Dashboard",
    "subtitle": "Meal-aware metabolic risk surveillance scored against the healthy cohort reference distribution.",
    "reference_scheme": "healthy_reference",
    "reference_explainer": "All displayed scores are recalibrated on the healthy cohort distribution, so higher scores in prediabetes and T2D represent deviation away from the healthy metabolic pattern on a common scale.",
    "last_updated": "2026-04-22 12:54"
  },
  "comparison": [
    {
      "key": "healthy",
      "label": "Healthy",
      "subjects": 15,
      "meals": 539,
      "days": 174,
      "recovery_event_rate_pct": 62.9,
      "next_day_event_rate_pct": 3.1,
      "meal_auc": 0.993,
      "recovery_auc": 0.935,
      "next_day_auc": 0.982
    },
    {
      "key": "prediabetes",
      "label": "Prediabetes",
      "subjects": 14,
      "meals": 488,
      "days": 157,
      "recovery_event_rate_pct": 72.3,
      "next_day_event_rate_pct": 12.6,
      "meal_auc": 0.99,
      "recovery_auc": 0.884,
      "next_day_auc": 0.94
    },
    {
      "key": "t2d",
      "label": "T2D",
      "subjects": 14,
      "meals": 424,
      "days": 165,
      "recovery_event_rate_pct": 78.8,
      "next_day_event_rate_pct": 54.3,
      "meal_auc": 0.985,
      "recovery_auc": 0.877,
      "next_day_auc": 0.965
    }
  ],
  "comparison_domains": [
    {
      "key": "meal_response",
      "label": "Meal Response Risk Score",
      "healthy": 50.66,
      "prediabetes": 60.8,
      "t2d": 74.83
    },
    {
      "key": "recovery",
      "label": "Recovery Risk Score",
      "healthy": 45.23,
      "prediabetes": 51.66,
      "t2d": 59.39
    },
    {
      "key": "next_day",
      "label": "Next-Day Instability Risk Score",
      "healthy": 50.08,
      "prediabetes": 53.15,
      "t2d": 62.57
    },
    {
      "key": "transition",
      "label": "State Transition Risk",
      "healthy": 59.98,
      "prediabetes": 75.43,
      "t2d": 94.38
    }
  ],
  "cohorts": [
    {
      "key": "healthy",
      "label": "Healthy",
      "summary": {
        "subjects": 15,
        "meals": 539,
        "days": 174,
        "mean_bmi": 28.15,
        "mean_a1c": 5.23,
        "mean_fasting_glucose": 95.7,
        "mean_glucose": 84.7
      },
      "framework": {
        "meal_response": {
          "label": "Meal Response Risk Score",
          "mean_score": 50.66,
          "event_rate_pct": 16.0
        },
        "recovery": {
          "label": "Recovery Risk Score",
          "mean_score": 45.23,
          "event_rate_pct": 62.9
        },
        "next_day": {
          "label": "Next-Day Instability Risk Score",
          "mean_score": 50.08,
          "event_rate_pct": 3.1
        },
        "transition": {
          "label": "State Transition Risk",
          "mean_score": 59.98,
          "alerts": 0
        }
      },
      "narrative": [
        "Meal Response Risk Score: event = peak glucose >= 180 mg/dL or delta glucose >= 54 mg/dL; mean Meal Response Risk Score = 50.66; event rate = 16.0%",
        "Recovery Risk Score: event = no recovery to baseline within 2h; mean Recovery Risk Score = 45.23; event rate = 62.9%",
        "Next-Day Instability Risk Score: event = next-day hyperglycaemia burden with TAR > 25%; mean Next-Day Instability Risk = 50.08; event rate = 3.1%",
        "Glycaemic Drift Score: event = CV increase >= 10% from baseline or sustained elevation >= 3 days; mean Glycaemic Drift Score = 54.19; event rate = 43.1%"
      ],
      "validations": {
        "meal_response": {
          "target": "postprandial_excursion_event",
          "n": 539,
          "auc": 0.993,
          "correlation": 0.716,
          "f1_at_60": 0.754,
          "precision_at_60": 0.606,
          "sensitivity_at_60": 1.0,
          "accuracy_at_60": 0.896
        },
        "recovery": {
          "target": "prolonged_hyperglycaemia_event",
          "n": 539,
          "auc": 0.935,
          "correlation": 0.627,
          "f1_at_60": 0.209,
          "precision_at_60": 0.93,
          "sensitivity_at_60": 0.118,
          "accuracy_at_60": 0.44
        },
        "next_day": {
          "target": "next_day_instability_event",
          "n": 162,
          "auc": 0.982,
          "correlation": 0.6,
          "f1_at_60": 0.769,
          "precision_at_60": 0.625,
          "sensitivity_at_60": 1.0,
          "accuracy_at_60": 0.981
        }
      },
      "subjects": [
        {
          "subject": "33",
          "group": "healthy",
          "a1c": 5.6,
          "bmi": 30.0,
          "mean_glucose": 121.4,
          "days_covered": 11.0,
          "n_meals": 25,
          "meal_response_risk_mean": 75.8,
          "recovery_risk_mean": 68.5,
          "next_day_risk_mean": 59.7,
          "transition_risk_max": 99.9,
          "unstable_day_rate_pct": 8.3
        },
        {
          "subject": "2",
          "group": "healthy",
          "a1c": 5.5,
          "bmi": 30.9,
          "mean_glucose": 79.0,
          "days_covered": 11.8,
          "n_meals": 29,
          "meal_response_risk_mean": 57.7,
          "recovery_risk_mean": 49.7,
          "next_day_risk_mean": 50.8,
          "transition_risk_max": 95.3,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "21",
          "group": "healthy",
          "a1c": 5.3,
          "bmi": 25.7,
          "mean_glucose": 100.9,
          "days_covered": 11.2,
          "n_meals": 38,
          "meal_response_risk_mean": 64.5,
          "recovery_risk_mean": 49.7,
          "next_day_risk_mean": 50.6,
          "transition_risk_max": 98.1,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "18",
          "group": "healthy",
          "a1c": 5.4,
          "bmi": 38.1,
          "mean_glucose": 100.8,
          "days_covered": 19.2,
          "n_meals": 36,
          "meal_response_risk_mean": 57.1,
          "recovery_risk_mean": 56.5,
          "next_day_risk_mean": 50.5,
          "transition_risk_max": 89.4,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "15",
          "group": "healthy",
          "a1c": 5.4,
          "bmi": 24.3,
          "mean_glucose": 50.7,
          "days_covered": 12.0,
          "n_meals": 45,
          "meal_response_risk_mean": 33.7,
          "recovery_risk_mean": 34.7,
          "next_day_risk_mean": 50.1,
          "transition_risk_max": 63.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "4",
          "group": "healthy",
          "a1c": 5.5,
          "bmi": 42.4,
          "mean_glucose": 91.1,
          "days_covered": 9.9,
          "n_meals": 51,
          "meal_response_risk_mean": 53.7,
          "recovery_risk_mean": 51.0,
          "next_day_risk_mean": 49.6,
          "transition_risk_max": 90.2,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "34",
          "group": "healthy",
          "a1c": 4.6,
          "bmi": 25.8,
          "mean_glucose": 79.3,
          "days_covered": 10.2,
          "n_meals": 32,
          "meal_response_risk_mean": 45.7,
          "recovery_risk_mean": 39.4,
          "next_day_risk_mean": 49.6,
          "transition_risk_max": 55.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "32",
          "group": "healthy",
          "a1c": 5.3,
          "bmi": 22.9,
          "mean_glucose": 67.6,
          "days_covered": 9.6,
          "n_meals": 10,
          "meal_response_risk_mean": 41.2,
          "recovery_risk_mean": 36.6,
          "next_day_risk_mean": 49.5,
          "transition_risk_max": 67.7,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "48",
          "group": "healthy",
          "a1c": 4.8,
          "bmi": 21.1,
          "mean_glucose": 82.5,
          "days_covered": 12.1,
          "n_meals": 35,
          "meal_response_risk_mean": 54.7,
          "recovery_risk_mean": 45.9,
          "next_day_risk_mean": 48.9,
          "transition_risk_max": 81.2,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "19",
          "group": "healthy",
          "a1c": 5.6,
          "bmi": 36.4,
          "mean_glucose": 85.2,
          "days_covered": 10.0,
          "n_meals": 43,
          "meal_response_risk_mean": 49.7,
          "recovery_risk_mean": 41.8,
          "next_day_risk_mean": 48.7,
          "transition_risk_max": 67.1,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "27",
          "group": "healthy",
          "a1c": 4.7,
          "bmi": 27.1,
          "mean_glucose": 76.5,
          "days_covered": 10.1,
          "n_meals": 34,
          "meal_response_risk_mean": 45.9,
          "recovery_risk_mean": 46.1,
          "next_day_risk_mean": 48.6,
          "transition_risk_max": 93.2,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "6",
          "group": "healthy",
          "a1c": 5.2,
          "bmi": 29.3,
          "mean_glucose": 88.9,
          "days_covered": 10.0,
          "n_meals": 37,
          "meal_response_risk_mean": 51.8,
          "recovery_risk_mean": 46.2,
          "next_day_risk_mean": 48.6,
          "transition_risk_max": 81.5,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "1",
          "group": "healthy",
          "a1c": 5.4,
          "bmi": 22.3,
          "mean_glucose": 88.5,
          "days_covered": 10.2,
          "n_meals": 40,
          "meal_response_risk_mean": 43.0,
          "recovery_risk_mean": 39.6,
          "next_day_risk_mean": 48.1,
          "transition_risk_max": 45.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "31",
          "group": "healthy",
          "a1c": 5.1,
          "bmi": 23.1,
          "mean_glucose": 81.9,
          "days_covered": 9.5,
          "n_meals": 46,
          "meal_response_risk_mean": 44.8,
          "recovery_risk_mean": 35.9,
          "next_day_risk_mean": 47.9,
          "transition_risk_max": 88.6,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "17",
          "group": "healthy",
          "a1c": 5.0,
          "bmi": 22.7,
          "mean_glucose": 76.5,
          "days_covered": 11.2,
          "n_meals": 38,
          "meal_response_risk_mean": 47.2,
          "recovery_risk_mean": 42.2,
          "next_day_risk_mean": 47.5,
          "transition_risk_max": 61.4,
          "unstable_day_rate_pct": 0.0
        }
      ],
      "subject_details": {
        "33": {
          "overview": {
            "subject": "33",
            "group": "healthy",
            "a1c": 5.6,
            "bmi": 30.0,
            "mean_glucose": 121.4,
            "days_covered": 11.0,
            "n_meals": 25,
            "meal_response_risk_mean": 75.8,
            "recovery_risk_mean": 68.5,
            "next_day_risk_mean": 59.7,
            "drift_score_mean": 64.5,
            "transition_risk_max": 99.9,
            "unstable_day_rate_pct": 8.3,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-04-16",
              "mean_glucose": 109.9,
              "meal_risk": 64.2,
              "recovery_risk": 61.1,
              "transition_risk": 89.3,
              "next_day_risk": 57.5,
              "time_above_140_pct": 10.6,
              "daily_glucose_cv": 0.205
            },
            {
              "day": "2022-04-17",
              "mean_glucose": 122.8,
              "meal_risk": 64.8,
              "recovery_risk": 34.0,
              "transition_risk": 99.4,
              "next_day_risk": 60.6,
              "time_above_140_pct": 22.7,
              "daily_glucose_cv": 0.421
            },
            {
              "day": "2022-04-18",
              "mean_glucose": 127.3,
              "meal_risk": 74.9,
              "recovery_risk": 71.0,
              "transition_risk": 99.9,
              "next_day_risk": 61.5,
              "time_above_140_pct": 35.6,
              "daily_glucose_cv": 0.271
            },
            {
              "day": "2022-04-19",
              "mean_glucose": 122.0,
              "meal_risk": 80.2,
              "recovery_risk": 67.5,
              "transition_risk": 99.3,
              "next_day_risk": 60.1,
              "time_above_140_pct": 22.4,
              "daily_glucose_cv": 0.381
            },
            {
              "day": "2022-04-20",
              "mean_glucose": 121.4,
              "meal_risk": 87.9,
              "recovery_risk": 84.5,
              "transition_risk": 99.9,
              "next_day_risk": 62.5,
              "time_above_140_pct": 29.4,
              "daily_glucose_cv": 0.33
            },
            {
              "day": "2022-04-21",
              "mean_glucose": 116.9,
              "meal_risk": 78.0,
              "recovery_risk": 78.4,
              "transition_risk": 98.9,
              "next_day_risk": 60.4,
              "time_above_140_pct": 21.3,
              "daily_glucose_cv": 0.307
            },
            {
              "day": "2022-04-22",
              "mean_glucose": 124.5,
              "meal_risk": 71.4,
              "recovery_risk": 67.9,
              "transition_risk": 99.7,
              "next_day_risk": 62.1,
              "time_above_140_pct": 26.9,
              "daily_glucose_cv": 0.395
            },
            {
              "day": "2022-04-23",
              "mean_glucose": 120.0,
              "meal_risk": 72.4,
              "recovery_risk": 68.1,
              "transition_risk": 99.5,
              "next_day_risk": 60.7,
              "time_above_140_pct": 26.4,
              "daily_glucose_cv": 0.311
            },
            {
              "day": "2022-04-24",
              "mean_glucose": 134.2,
              "meal_risk": 95.1,
              "recovery_risk": 90.3,
              "transition_risk": 99.9,
              "next_day_risk": 62.3,
              "time_above_140_pct": 31.0,
              "daily_glucose_cv": 0.366
            },
            {
              "day": "2022-04-25",
              "mean_glucose": 118.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 93.0,
              "next_day_risk": 56.6,
              "time_above_140_pct": 14.7,
              "daily_glucose_cv": 0.216
            },
            {
              "day": "2022-04-26",
              "mean_glucose": 122.7,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 97.7,
              "next_day_risk": 58.5,
              "time_above_140_pct": 18.8,
              "daily_glucose_cv": 0.368
            },
            {
              "day": "2022-04-27",
              "mean_glucose": 99.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 49.6,
              "next_day_risk": 53.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.094
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 7,
              "mean_meal_risk": 96.0,
              "mean_recovery_risk": 94.6,
              "mean_peak_glucose": 261.7,
              "mean_carbs": 61.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 7,
              "mean_meal_risk": 67.2,
              "mean_recovery_risk": 54.0,
              "mean_peak_glucose": 160.8,
              "mean_carbs": 60.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 69.3,
              "mean_recovery_risk": 61.7,
              "mean_peak_glucose": 157.4,
              "mean_carbs": 26.0
            },
            {
              "meal_slot": "snack",
              "n_meals": 2,
              "mean_meal_risk": 63.9,
              "mean_recovery_risk": 59.3,
              "mean_peak_glucose": 150.0,
              "mean_carbs": 43.5
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-04-24 13:07:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 240.0,
              "meal_risk": 92.2,
              "recovery_risk": 85.7
            },
            {
              "meal_start": "2022-04-24 07:40:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 277.0,
              "meal_risk": 98.1,
              "recovery_risk": 94.9
            },
            {
              "meal_start": "2022-04-23 20:39:00",
              "meal_type": "dinner",
              "meal_carbs": 30.0,
              "peak_glucose": 157.8,
              "meal_risk": 67.3,
              "recovery_risk": 62.0
            },
            {
              "meal_start": "2022-04-23 16:45:00",
              "meal_type": "snack",
              "meal_carbs": 37.0,
              "peak_glucose": 169.0,
              "meal_risk": 77.5,
              "recovery_risk": 74.2
            },
            {
              "meal_start": "2022-04-22 19:41:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 162.1,
              "meal_risk": 82.1,
              "recovery_risk": 92.5
            },
            {
              "meal_start": "2022-04-22 13:13:00",
              "meal_type": "lunch",
              "meal_carbs": 76.0,
              "peak_glucose": 99.5,
              "meal_risk": 33.2,
              "recovery_risk": 15.1
            },
            {
              "meal_start": "2022-04-22 09:56:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 300.0,
              "meal_risk": 98.9,
              "recovery_risk": 95.9
            },
            {
              "meal_start": "2022-04-21 19:17:00",
              "meal_type": "dinner",
              "meal_carbs": 20.0,
              "peak_glucose": 131.0,
              "meal_risk": 50.4,
              "recovery_risk": 52.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 79.3,
              "estimated_recovery_risk": 76.1,
              "estimated_next_day_instability_risk": 56.6,
              "summary": "For breakfast, target about 45.0-69.5 g carbs, 44.0-66.0 g protein, 10.5-26.2 g fat, and 0.0-3.5 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 61.1,
              "estimated_recovery_risk": 50.9,
              "estimated_next_day_instability_risk": 56.4,
              "summary": "For lunch, target about 46.0-84.0 g carbs, 19.5-44.0 g protein, 16.2-30.2 g fat, and 7.0-10.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 62.3,
              "estimated_recovery_risk": 55.5,
              "estimated_next_day_instability_risk": 56.9,
              "summary": "For dinner, target about 3.0-33.8 g carbs, 6.0-50.0 g protein, 5.2-20.0 g fat, and 0.0-1.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 33.0,
              "estimated_meal_response_risk": 50.0,
              "estimated_recovery_risk": 45.3,
              "estimated_next_day_instability_risk": 52.1,
              "summary": "For snack, target about 40.2-46.8 g carbs, 2.0-4.0 g protein, 1.0-1.0 g fat, and 4.8-6.2 g fiber."
            }
          ]
        },
        "2": {
          "overview": {
            "subject": "2",
            "group": "healthy",
            "a1c": 5.5,
            "bmi": 30.9,
            "mean_glucose": 79.0,
            "days_covered": 11.8,
            "n_meals": 29,
            "meal_response_risk_mean": 57.7,
            "recovery_risk_mean": 49.7,
            "next_day_risk_mean": 50.8,
            "drift_score_mean": 77.9,
            "transition_risk_max": 95.3,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2019-11-15",
              "mean_glucose": 53.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 47.5,
              "next_day_risk": 50.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.156
            },
            {
              "day": "2019-11-16",
              "mean_glucose": 72.8,
              "meal_risk": 49.2,
              "recovery_risk": 47.5,
              "transition_risk": 62.5,
              "next_day_risk": 51.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.245
            },
            {
              "day": "2019-11-17",
              "mean_glucose": 77.8,
              "meal_risk": 43.7,
              "recovery_risk": 52.4,
              "transition_risk": 50.8,
              "next_day_risk": 49.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.14
            },
            {
              "day": "2019-11-18",
              "mean_glucose": 68.8,
              "meal_risk": 54.6,
              "recovery_risk": 47.0,
              "transition_risk": 77.2,
              "next_day_risk": 52.2,
              "time_above_140_pct": 0.8,
              "daily_glucose_cv": 0.344
            },
            {
              "day": "2019-11-19",
              "mean_glucose": 79.8,
              "meal_risk": 56.0,
              "recovery_risk": 49.7,
              "transition_risk": 78.4,
              "next_day_risk": 51.1,
              "time_above_140_pct": 4.0,
              "daily_glucose_cv": 0.283
            },
            {
              "day": "2019-11-20",
              "mean_glucose": 83.6,
              "meal_risk": 66.7,
              "recovery_risk": 49.9,
              "transition_risk": 77.4,
              "next_day_risk": 50.9,
              "time_above_140_pct": 1.9,
              "daily_glucose_cv": 0.228
            },
            {
              "day": "2019-11-21",
              "mean_glucose": 89.8,
              "meal_risk": 81.8,
              "recovery_risk": 62.2,
              "transition_risk": 95.3,
              "next_day_risk": 51.6,
              "time_above_140_pct": 9.0,
              "daily_glucose_cv": 0.315
            },
            {
              "day": "2019-11-22",
              "mean_glucose": 79.8,
              "meal_risk": 50.6,
              "recovery_risk": 49.6,
              "transition_risk": 64.8,
              "next_day_risk": 49.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.142
            },
            {
              "day": "2019-11-23",
              "mean_glucose": 81.9,
              "meal_risk": 72.1,
              "recovery_risk": 54.2,
              "transition_risk": 92.1,
              "next_day_risk": 52.6,
              "time_above_140_pct": 3.9,
              "daily_glucose_cv": 0.282
            },
            {
              "day": "2019-11-24",
              "mean_glucose": 80.9,
              "meal_risk": 65.6,
              "recovery_risk": 50.0,
              "transition_risk": 72.2,
              "next_day_risk": 51.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.247
            },
            {
              "day": "2019-11-25",
              "mean_glucose": 80.4,
              "meal_risk": 34.6,
              "recovery_risk": 21.5,
              "transition_risk": 87.8,
              "next_day_risk": 50.9,
              "time_above_140_pct": 6.8,
              "daily_glucose_cv": 0.299
            },
            {
              "day": "2019-11-26",
              "mean_glucose": 78.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 80.4,
              "next_day_risk": 49.6,
              "time_above_140_pct": 5.8,
              "daily_glucose_cv": 0.317
            },
            {
              "day": "2019-11-27",
              "mean_glucose": 78.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 88.1,
              "next_day_risk": 50.1,
              "time_above_140_pct": 7.8,
              "daily_glucose_cv": 0.387
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 59.3,
              "mean_recovery_risk": 46.5,
              "mean_peak_glucose": 120.9,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 62.9,
              "mean_recovery_risk": 53.0,
              "mean_peak_glucose": 115.2,
              "mean_carbs": 63.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 7,
              "mean_meal_risk": 55.1,
              "mean_recovery_risk": 51.0,
              "mean_peak_glucose": 111.9,
              "mean_carbs": 39.3
            },
            {
              "meal_slot": "snack",
              "n_meals": 3,
              "mean_meal_risk": 42.2,
              "mean_recovery_risk": 47.7,
              "mean_peak_glucose": 100.3,
              "mean_carbs": 15.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2019-11-25 20:23:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 77.0,
              "meal_risk": 34.6,
              "recovery_risk": 21.5
            },
            {
              "meal_start": "2019-11-24 17:58:00",
              "meal_type": "Dinner",
              "meal_carbs": 90.0,
              "peak_glucose": 108.0,
              "meal_risk": 57.9,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2019-11-24 11:48:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 132.0,
              "meal_risk": 74.5,
              "recovery_risk": 51.9
            },
            {
              "meal_start": "2019-11-24 08:09:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 128.0,
              "meal_risk": 64.4,
              "recovery_risk": 45.8
            },
            {
              "meal_start": "2019-11-23 19:04:00",
              "meal_type": "Dinner",
              "meal_carbs": 30.0,
              "peak_glucose": 124.0,
              "meal_risk": 68.5,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2019-11-23 14:30:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 121.0,
              "meal_risk": 68.6,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2019-11-23 09:59:00",
              "meal_type": "Breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 157.0,
              "meal_risk": 79.1,
              "recovery_risk": 57.9
            },
            {
              "meal_start": "2019-11-22 18:50:00",
              "meal_type": "Dinner",
              "meal_carbs": 42.0,
              "peak_glucose": 103.0,
              "meal_risk": 44.6,
              "recovery_risk": 47.6
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 58.2,
              "estimated_recovery_risk": 47.7,
              "estimated_next_day_instability_risk": 50.7,
              "summary": "For breakfast, target about 66.0-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 59.2,
              "estimated_recovery_risk": 50.8,
              "estimated_next_day_instability_risk": 50.7,
              "summary": "For lunch, target about 18.2-53.0 g carbs, 28.2-68.5 g protein, 14.8-23.2 g fat, and 4.8-10.8 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 52.8,
              "estimated_recovery_risk": 48.2,
              "estimated_next_day_instability_risk": 50.7,
              "summary": "For dinner, target about 31.5-44.5 g carbs, 21.5-23.5 g protein, 22.5-35.0 g fat, and 3.0-4.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 50.0,
              "estimated_meal_response_risk": 43.6,
              "estimated_recovery_risk": 42.8,
              "estimated_next_day_instability_risk": 49.8,
              "summary": "For snack, target about 10.5-23.5 g carbs, 3.0-5.5 g protein, 0.0-3.5 g fat, and 0.5-1.5 g fiber."
            }
          ]
        },
        "21": {
          "overview": {
            "subject": "21",
            "group": "healthy",
            "a1c": 5.3,
            "bmi": 25.7,
            "mean_glucose": 100.9,
            "days_covered": 11.2,
            "n_meals": 38,
            "meal_response_risk_mean": 64.5,
            "recovery_risk_mean": 49.7,
            "next_day_risk_mean": 50.6,
            "drift_score_mean": 52.1,
            "transition_risk_max": 98.1,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-06-08",
              "mean_glucose": 79.8,
              "meal_risk": 52.4,
              "recovery_risk": 51.8,
              "transition_risk": 49.2,
              "next_day_risk": 51.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.178
            },
            {
              "day": "2020-06-09",
              "mean_glucose": 98.7,
              "meal_risk": 61.8,
              "recovery_risk": 48.1,
              "transition_risk": 54.3,
              "next_day_risk": 49.9,
              "time_above_140_pct": 1.2,
              "daily_glucose_cv": 0.172
            },
            {
              "day": "2020-06-10",
              "mean_glucose": 105.5,
              "meal_risk": 60.1,
              "recovery_risk": 48.1,
              "transition_risk": 72.2,
              "next_day_risk": 49.8,
              "time_above_140_pct": 4.2,
              "daily_glucose_cv": 0.171
            },
            {
              "day": "2020-06-11",
              "mean_glucose": 106.9,
              "meal_risk": 82.0,
              "recovery_risk": 63.1,
              "transition_risk": 98.1,
              "next_day_risk": 49.2,
              "time_above_140_pct": 13.4,
              "daily_glucose_cv": 0.271
            },
            {
              "day": "2020-06-12",
              "mean_glucose": 99.7,
              "meal_risk": 57.8,
              "recovery_risk": 53.0,
              "transition_risk": 67.6,
              "next_day_risk": 51.9,
              "time_above_140_pct": 0.8,
              "daily_glucose_cv": 0.115
            },
            {
              "day": "2020-06-13",
              "mean_glucose": 101.1,
              "meal_risk": 67.7,
              "recovery_risk": 53.7,
              "transition_risk": 73.9,
              "next_day_risk": 52.0,
              "time_above_140_pct": 2.6,
              "daily_glucose_cv": 0.139
            },
            {
              "day": "2020-06-14",
              "mean_glucose": 110.9,
              "meal_risk": 73.2,
              "recovery_risk": 60.8,
              "transition_risk": 96.6,
              "next_day_risk": 48.0,
              "time_above_140_pct": 14.8,
              "daily_glucose_cv": 0.243
            },
            {
              "day": "2020-06-15",
              "mean_glucose": 102.3,
              "meal_risk": 71.4,
              "recovery_risk": 52.1,
              "transition_risk": 77.5,
              "next_day_risk": 51.2,
              "time_above_140_pct": 3.8,
              "daily_glucose_cv": 0.17
            },
            {
              "day": "2020-06-16",
              "mean_glucose": 99.6,
              "meal_risk": 56.2,
              "recovery_risk": 38.8,
              "transition_risk": 65.4,
              "next_day_risk": 50.7,
              "time_above_140_pct": 1.8,
              "daily_glucose_cv": 0.146
            },
            {
              "day": "2020-06-17",
              "mean_glucose": 100.4,
              "meal_risk": 66.3,
              "recovery_risk": 43.4,
              "transition_risk": 84.1,
              "next_day_risk": 50.4,
              "time_above_140_pct": 5.7,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2020-06-18",
              "mean_glucose": 98.3,
              "meal_risk": 79.0,
              "recovery_risk": 48.8,
              "transition_risk": 81.7,
              "next_day_risk": 52.6,
              "time_above_140_pct": 2.6,
              "daily_glucose_cv": 0.157
            },
            {
              "day": "2020-06-19",
              "mean_glucose": 99.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 68.2,
              "next_day_risk": 49.8,
              "time_above_140_pct": 1.5,
              "daily_glucose_cv": 0.155
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 71.0,
              "mean_recovery_risk": 52.2,
              "mean_peak_glucose": 151.2,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 64.4,
              "mean_recovery_risk": 56.4,
              "mean_peak_glucose": 134.6,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 66.2,
              "mean_recovery_risk": 52.2,
              "mean_peak_glucose": 143.7,
              "mean_carbs": 150.2
            },
            {
              "meal_slot": "snack",
              "n_meals": 8,
              "mean_meal_risk": 54.7,
              "mean_recovery_risk": 34.9,
              "mean_peak_glucose": 131.5,
              "mean_carbs": 101.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-06-18 07:52:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 169.0,
              "meal_risk": 79.0,
              "recovery_risk": 48.8
            },
            {
              "meal_start": "2020-06-17 22:13:00",
              "meal_type": "snack",
              "meal_carbs": 282.0,
              "peak_glucose": 133.2,
              "meal_risk": 45.2,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2020-06-17 20:52:00",
              "meal_type": "dinner",
              "meal_carbs": 472.0,
              "peak_glucose": 159.0,
              "meal_risk": 79.3,
              "recovery_risk": 60.6
            },
            {
              "meal_start": "2020-06-17 13:00:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 156.0,
              "meal_risk": 79.4,
              "recovery_risk": 60.6
            },
            {
              "meal_start": "2020-06-17 05:27:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 133.0,
              "meal_risk": 61.5,
              "recovery_risk": 50.4
            },
            {
              "meal_start": "2020-06-16 22:30:00",
              "meal_type": "snack",
              "meal_carbs": 24.0,
              "peak_glucose": 116.0,
              "meal_risk": 47.5,
              "recovery_risk": 33.0
            },
            {
              "meal_start": "2020-06-16 21:26:00",
              "meal_type": "snack",
              "meal_carbs": 112.0,
              "peak_glucose": 116.0,
              "meal_risk": 46.9,
              "recovery_risk": 41.3
            },
            {
              "meal_start": "2020-06-16 19:24:00",
              "meal_type": "snack",
              "meal_carbs": 1.0,
              "peak_glucose": 115.0,
              "meal_risk": 39.2,
              "recovery_risk": 1.9
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.0,
              "estimated_recovery_risk": 51.5,
              "estimated_next_day_instability_risk": 50.4,
              "summary": "For breakfast, target about 55.5-66.0 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 60.4,
              "estimated_recovery_risk": 53.2,
              "estimated_next_day_instability_risk": 50.3,
              "summary": "For lunch, target about 18.2-83.8 g carbs, 28.2-71.5 g protein, 14.8-45.1 g fat, and 4.8-12.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 60.6,
              "estimated_recovery_risk": 49.6,
              "estimated_next_day_instability_risk": 50.3,
              "summary": "For dinner, target about 26.5-62.0 g carbs, 7.8-23.5 g protein, 6.2-12.2 g fat, and 4.8-7.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.7,
              "estimated_recovery_risk": 36.8,
              "estimated_next_day_instability_risk": 49.9,
              "summary": "For snack, target about 28.8-84.2 g carbs, 1.5-10.5 g protein, 1.5-5.0 g fat, and 11.5-30.5 g fiber."
            }
          ]
        },
        "18": {
          "overview": {
            "subject": "18",
            "group": "healthy",
            "a1c": 5.4,
            "bmi": 38.1,
            "mean_glucose": 100.8,
            "days_covered": 19.2,
            "n_meals": 36,
            "meal_response_risk_mean": 57.1,
            "recovery_risk_mean": 56.5,
            "next_day_risk_mean": 50.5,
            "drift_score_mean": 38.4,
            "transition_risk_max": 89.4,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-01-28",
              "mean_glucose": 85.2,
              "meal_risk": 49.3,
              "recovery_risk": 51.7,
              "transition_risk": 47.6,
              "next_day_risk": 51.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2024-02-07",
              "mean_glucose": 97.5,
              "meal_risk": 66.5,
              "recovery_risk": 59.3,
              "transition_risk": 80.5,
              "next_day_risk": 52.4,
              "time_above_140_pct": 1.8,
              "daily_glucose_cv": 0.229
            },
            {
              "day": "2024-02-08",
              "mean_glucose": 98.6,
              "meal_risk": 68.0,
              "recovery_risk": 59.0,
              "transition_risk": 85.2,
              "next_day_risk": 50.9,
              "time_above_140_pct": 5.8,
              "daily_glucose_cv": 0.258
            },
            {
              "day": "2024-02-09",
              "mean_glucose": 109.5,
              "meal_risk": 68.6,
              "recovery_risk": 65.4,
              "transition_risk": 89.4,
              "next_day_risk": 49.1,
              "time_above_140_pct": 9.8,
              "daily_glucose_cv": 0.198
            },
            {
              "day": "2024-02-10",
              "mean_glucose": 102.4,
              "meal_risk": 60.0,
              "recovery_risk": 69.1,
              "transition_risk": 84.0,
              "next_day_risk": 50.1,
              "time_above_140_pct": 8.1,
              "daily_glucose_cv": 0.175
            },
            {
              "day": "2024-02-11",
              "mean_glucose": 102.2,
              "meal_risk": 66.2,
              "recovery_risk": 58.1,
              "transition_risk": 77.1,
              "next_day_risk": 49.5,
              "time_above_140_pct": 5.3,
              "daily_glucose_cv": 0.202
            },
            {
              "day": "2024-02-12",
              "mean_glucose": 105.4,
              "meal_risk": 49.4,
              "recovery_risk": 52.9,
              "transition_risk": 47.9,
              "next_day_risk": 50.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.09
            },
            {
              "day": "2024-02-13",
              "mean_glucose": 102.3,
              "meal_risk": 33.8,
              "recovery_risk": 49.8,
              "transition_risk": 41.3,
              "next_day_risk": 51.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.07
            },
            {
              "day": "2024-02-14",
              "mean_glucose": 98.2,
              "meal_risk": 47.4,
              "recovery_risk": 40.4,
              "transition_risk": 44.9,
              "next_day_risk": 50.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.122
            },
            {
              "day": "2024-02-15",
              "mean_glucose": 100.2,
              "meal_risk": 52.7,
              "recovery_risk": 52.5,
              "transition_risk": 43.2,
              "next_day_risk": 50.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.1
            },
            {
              "day": "2024-02-16",
              "mean_glucose": 100.6,
              "meal_risk": 65.8,
              "recovery_risk": 58.5,
              "transition_risk": 52.5,
              "next_day_risk": 49.4,
              "time_above_140_pct": 0.8,
              "daily_glucose_cv": 0.16
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 63.5,
              "mean_recovery_risk": 58.3,
              "mean_peak_glucose": 138.2,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 53.2,
              "mean_recovery_risk": 55.4,
              "mean_peak_glucose": 118.9,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 11,
              "mean_meal_risk": 56.9,
              "mean_recovery_risk": 55.9,
              "mean_peak_glucose": 133.2,
              "mean_carbs": 82.5
            },
            {
              "meal_slot": "snack",
              "n_meals": 5,
              "mean_meal_risk": 52.9,
              "mean_recovery_risk": 56.5,
              "mean_peak_glucose": 135.0,
              "mean_carbs": 50.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-02-16 08:03:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 141.0,
              "meal_risk": 65.8,
              "recovery_risk": 58.5
            },
            {
              "meal_start": "2024-02-15 18:09:00",
              "meal_type": "Dinner",
              "meal_carbs": 80.0,
              "peak_glucose": 126.0,
              "meal_risk": 54.4,
              "recovery_risk": 55.6
            },
            {
              "meal_start": "2024-02-15 13:03:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 123.0,
              "meal_risk": 58.2,
              "recovery_risk": 58.0
            },
            {
              "meal_start": "2024-02-15 08:36:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 119.0,
              "meal_risk": 45.3,
              "recovery_risk": 43.8
            },
            {
              "meal_start": "2024-02-14 19:02:00",
              "meal_type": "Dinner",
              "meal_carbs": 74.0,
              "peak_glucose": 108.0,
              "meal_risk": 43.1,
              "recovery_risk": 39.4
            },
            {
              "meal_start": "2024-02-14 13:32:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 139.0,
              "meal_risk": 46.2,
              "recovery_risk": 41.9
            },
            {
              "meal_start": "2024-02-14 07:26:00",
              "meal_type": "Breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 136.0,
              "meal_risk": 52.9,
              "recovery_risk": 39.9
            },
            {
              "meal_start": "2024-02-13 22:19:00",
              "meal_type": "Snack",
              "meal_carbs": 59.0,
              "peak_glucose": 111.0,
              "meal_risk": 36.4,
              "recovery_risk": 53.8
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 61.0,
              "estimated_recovery_risk": 55.6,
              "estimated_next_day_instability_risk": 50.3,
              "summary": "For breakfast, target about 55.5-66.0 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 53.0,
              "estimated_recovery_risk": 52.5,
              "estimated_next_day_instability_risk": 50.4,
              "summary": "For lunch, target about 34.8-77.2 g carbs, 29.5-79.0 g protein, 16.5-27.5 g fat, and 9.5-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 54.6,
              "estimated_recovery_risk": 52.3,
              "estimated_next_day_instability_risk": 50.3,
              "summary": "For dinner, target about 74.0-113.0 g carbs, 29.0-51.0 g protein, 19.0-49.0 g fat, and 8.0-15.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 83.0,
              "estimated_meal_response_risk": 48.7,
              "estimated_recovery_risk": 48.2,
              "estimated_next_day_instability_risk": 49.9,
              "summary": "For snack, target about 31.2-49.8 g carbs, 14.0-42.0 g protein, 4.0-12.0 g fat, and 1.8-3.2 g fiber."
            }
          ]
        },
        "15": {
          "overview": {
            "subject": "15",
            "group": "healthy",
            "a1c": 5.4,
            "bmi": 24.3,
            "mean_glucose": 50.7,
            "days_covered": 12.0,
            "n_meals": 45,
            "meal_response_risk_mean": 33.7,
            "recovery_risk_mean": 34.7,
            "next_day_risk_mean": 50.1,
            "drift_score_mean": 46.2,
            "transition_risk_max": 63.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-01-25",
              "mean_glucose": 78.6,
              "meal_risk": 43.3,
              "recovery_risk": 30.1,
              "transition_risk": 48.7,
              "next_day_risk": 47.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.171
            },
            {
              "day": "2024-01-26",
              "mean_glucose": 69.9,
              "meal_risk": 42.7,
              "recovery_risk": 41.4,
              "transition_risk": 56.9,
              "next_day_risk": 49.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.185
            },
            {
              "day": "2024-01-27",
              "mean_glucose": 52.9,
              "meal_risk": 34.9,
              "recovery_risk": 37.1,
              "transition_risk": 49.8,
              "next_day_risk": 49.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.139
            },
            {
              "day": "2024-01-28",
              "mean_glucose": 56.0,
              "meal_risk": 41.8,
              "recovery_risk": 34.8,
              "transition_risk": 63.0,
              "next_day_risk": 50.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.325
            },
            {
              "day": "2024-01-29",
              "mean_glucose": 56.5,
              "meal_risk": 37.2,
              "recovery_risk": 46.9,
              "transition_risk": 54.7,
              "next_day_risk": 50.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.231
            },
            {
              "day": "2024-01-30",
              "mean_glucose": 47.4,
              "meal_risk": 28.5,
              "recovery_risk": 44.7,
              "transition_risk": 47.5,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.138
            },
            {
              "day": "2024-01-31",
              "mean_glucose": 47.1,
              "meal_risk": 35.2,
              "recovery_risk": 28.3,
              "transition_risk": 52.9,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.211
            },
            {
              "day": "2024-02-01",
              "mean_glucose": 40.7,
              "meal_risk": 13.5,
              "recovery_risk": 10.5,
              "transition_risk": 44.1,
              "next_day_risk": 51.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.089
            },
            {
              "day": "2024-02-02",
              "mean_glucose": 44.7,
              "meal_risk": 29.6,
              "recovery_risk": 36.5,
              "transition_risk": 62.2,
              "next_day_risk": 52.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.253
            },
            {
              "day": "2024-02-03",
              "mean_glucose": 43.2,
              "meal_risk": 28.1,
              "recovery_risk": 27.8,
              "transition_risk": 59.4,
              "next_day_risk": 52.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.248
            },
            {
              "day": "2024-02-04",
              "mean_glucose": 42.9,
              "meal_risk": 37.3,
              "recovery_risk": 50.1,
              "transition_risk": 50.7,
              "next_day_risk": 50.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.137
            },
            {
              "day": "2024-02-05",
              "mean_glucose": 40.9,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 41.6,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.064
            },
            {
              "day": "2024-02-06",
              "mean_glucose": 40.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 36.7,
              "next_day_risk": 47.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.0
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 41.5,
              "mean_recovery_risk": 47.2,
              "mean_peak_glucose": 77.1,
              "mean_carbs": 58.2
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 41.9,
              "mean_recovery_risk": 30.0,
              "mean_peak_glucose": 81.5,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 30.5,
              "mean_recovery_risk": 40.2,
              "mean_peak_glucose": 66.7,
              "mean_carbs": 41.8
            },
            {
              "meal_slot": "snack",
              "n_meals": 17,
              "mean_meal_risk": 26.4,
              "mean_recovery_risk": 27.8,
              "mean_peak_glucose": 62.6,
              "mean_carbs": 26.8
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-02-04 09:32:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 69.0,
              "meal_risk": 37.3,
              "recovery_risk": 50.1
            },
            {
              "meal_start": "2024-02-03 22:22:00",
              "meal_type": "dinner",
              "meal_carbs": 78.0,
              "peak_glucose": 60.0,
              "meal_risk": 32.9,
              "recovery_risk": 50.5
            },
            {
              "meal_start": "2024-02-03 19:00:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 40.0,
              "meal_risk": 5.6,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2024-02-03 17:34:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 40.0,
              "meal_risk": 5.6,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2024-02-03 12:40:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 129.0,
              "meal_risk": 74.0,
              "recovery_risk": 49.0
            },
            {
              "meal_start": "2024-02-03 09:37:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 51.0,
              "meal_risk": 22.3,
              "recovery_risk": 35.4
            },
            {
              "meal_start": "2024-02-02 22:55:00",
              "meal_type": "snack",
              "meal_carbs": 50.0,
              "peak_glucose": 49.0,
              "meal_risk": 18.2,
              "recovery_risk": 33.8
            },
            {
              "meal_start": "2024-02-02 21:39:00",
              "meal_type": "snack",
              "meal_carbs": 50.0,
              "peak_glucose": 49.0,
              "meal_risk": 17.9,
              "recovery_risk": 39.4
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 46.7,
              "estimated_recovery_risk": 48.2,
              "estimated_next_day_instability_risk": 50.5,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 45.5,
              "estimated_recovery_risk": 35.6,
              "estimated_next_day_instability_risk": 50.3,
              "summary": "For lunch, target about 34.0-55.8 g carbs, 18.0-68.5 g protein, 13.8-17.8 g fat, and 4.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 37.3,
              "estimated_recovery_risk": 41.7,
              "estimated_next_day_instability_risk": 50.4,
              "summary": "For dinner, target about 5.0-22.0 g carbs, 7.5-12.5 g protein, 5.2-13.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 30.5,
              "estimated_recovery_risk": 30.5,
              "estimated_next_day_instability_risk": 50.5,
              "summary": "For snack, target about 0.0-31.0 g carbs, 0.0-0.5 g protein, 0.0-0.0 g fat, and 0.0-0.5 g fiber."
            }
          ]
        },
        "4": {
          "overview": {
            "subject": "4",
            "group": "healthy",
            "a1c": 5.5,
            "bmi": 42.4,
            "mean_glucose": 91.1,
            "days_covered": 9.9,
            "n_meals": 51,
            "meal_response_risk_mean": 53.7,
            "recovery_risk_mean": 51.0,
            "next_day_risk_mean": 49.6,
            "drift_score_mean": 49.6,
            "transition_risk_max": 90.2,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-09-11",
              "mean_glucose": 91.6,
              "meal_risk": 59.6,
              "recovery_risk": 56.2,
              "transition_risk": 47.8,
              "next_day_risk": 49.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.16
            },
            {
              "day": "2023-09-12",
              "mean_glucose": 91.9,
              "meal_risk": 58.8,
              "recovery_risk": 49.0,
              "transition_risk": 72.5,
              "next_day_risk": 48.2,
              "time_above_140_pct": 3.8,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2023-09-13",
              "mean_glucose": 93.7,
              "meal_risk": 56.8,
              "recovery_risk": 54.3,
              "transition_risk": 58.3,
              "next_day_risk": 50.3,
              "time_above_140_pct": 0.9,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2023-09-14",
              "mean_glucose": 98.2,
              "meal_risk": 67.2,
              "recovery_risk": 63.6,
              "transition_risk": 90.2,
              "next_day_risk": 46.5,
              "time_above_140_pct": 8.6,
              "daily_glucose_cv": 0.226
            },
            {
              "day": "2023-09-15",
              "mean_glucose": 87.3,
              "meal_risk": 43.2,
              "recovery_risk": 43.6,
              "transition_risk": 56.6,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.145
            },
            {
              "day": "2023-09-16",
              "mean_glucose": 86.3,
              "meal_risk": 49.5,
              "recovery_risk": 48.9,
              "transition_risk": 46.2,
              "next_day_risk": 50.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.137
            },
            {
              "day": "2023-09-17",
              "mean_glucose": 89.5,
              "meal_risk": 60.5,
              "recovery_risk": 53.5,
              "transition_risk": 79.6,
              "next_day_risk": 48.9,
              "time_above_140_pct": 4.0,
              "daily_glucose_cv": 0.23
            },
            {
              "day": "2023-09-18",
              "mean_glucose": 88.7,
              "meal_risk": 44.9,
              "recovery_risk": 42.7,
              "transition_risk": 55.2,
              "next_day_risk": 50.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.173
            },
            {
              "day": "2023-09-19",
              "mean_glucose": 90.5,
              "meal_risk": 50.3,
              "recovery_risk": 54.5,
              "transition_risk": 48.2,
              "next_day_risk": 50.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.165
            },
            {
              "day": "2023-09-20",
              "mean_glucose": 94.4,
              "meal_risk": 52.4,
              "recovery_risk": 48.7,
              "transition_risk": 50.2,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.139
            },
            {
              "day": "2023-09-21",
              "mean_glucose": 88.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 45.4,
              "next_day_risk": 49.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.078
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 65.7,
              "mean_recovery_risk": 57.6,
              "mean_peak_glucose": 140.9,
              "mean_carbs": 57.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 56.0,
              "mean_recovery_risk": 59.9,
              "mean_peak_glucose": 112.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 17,
              "mean_meal_risk": 48.7,
              "mean_recovery_risk": 47.6,
              "mean_peak_glucose": 111.7,
              "mean_carbs": 75.8
            },
            {
              "meal_slot": "snack",
              "n_meals": 15,
              "mean_meal_risk": 50.6,
              "mean_recovery_risk": 44.9,
              "mean_peak_glucose": 114.6,
              "mean_carbs": 37.9
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-09-20 20:30:00",
              "meal_type": "Dinner",
              "meal_carbs": 25.0,
              "peak_glucose": 116.0,
              "meal_risk": 51.8,
              "recovery_risk": 56.2
            },
            {
              "meal_start": "2023-09-20 18:01:00",
              "meal_type": "Dinner",
              "meal_carbs": 100.0,
              "peak_glucose": 103.3,
              "meal_risk": 44.9,
              "recovery_risk": 50.3
            },
            {
              "meal_start": "2023-09-20 16:39:00",
              "meal_type": "Snacks",
              "meal_carbs": 27.0,
              "peak_glucose": 98.0,
              "meal_risk": 41.7,
              "recovery_risk": 40.3
            },
            {
              "meal_start": "2023-09-20 13:18:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 137.0,
              "meal_risk": 72.7,
              "recovery_risk": 58.3
            },
            {
              "meal_start": "2023-09-20 09:30:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 113.0,
              "meal_risk": 50.7,
              "recovery_risk": 38.5
            },
            {
              "meal_start": "2023-09-19 21:59:00",
              "meal_type": "Dinner",
              "meal_carbs": 34.0,
              "peak_glucose": 124.0,
              "meal_risk": 51.3,
              "recovery_risk": 46.3
            },
            {
              "meal_start": "2023-09-19 20:31:00",
              "meal_type": "Snacks",
              "meal_carbs": 35.0,
              "peak_glucose": 124.0,
              "meal_risk": 39.5,
              "recovery_risk": 52.3
            },
            {
              "meal_start": "2023-09-19 20:00:00",
              "meal_type": "Dinner",
              "meal_carbs": 14.0,
              "peak_glucose": 124.0,
              "meal_risk": 48.2,
              "recovery_risk": 55.6
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 62.3,
              "estimated_recovery_risk": 54.9,
              "estimated_next_day_instability_risk": 49.8,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 54.9,
              "estimated_recovery_risk": 55.5,
              "estimated_next_day_instability_risk": 49.7,
              "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 48.9,
              "estimated_recovery_risk": 46.9,
              "estimated_next_day_instability_risk": 49.9,
              "summary": "For dinner, target about 32.0-111.5 g carbs, 28.5-52.5 g protein, 11.5-30.5 g fat, and 4.0-6.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 49.1,
              "estimated_recovery_risk": 43.6,
              "estimated_next_day_instability_risk": 49.4,
              "summary": "For snack, target about 29.0-40.8 g carbs, 0.8-11.8 g protein, 2.0-11.0 g fat, and 0.0-2.2 g fiber."
            }
          ]
        },
        "34": {
          "overview": {
            "subject": "34",
            "group": "healthy",
            "a1c": 4.6,
            "bmi": 25.8,
            "mean_glucose": 79.3,
            "days_covered": 10.2,
            "n_meals": 32,
            "meal_response_risk_mean": 45.7,
            "recovery_risk_mean": 39.4,
            "next_day_risk_mean": 49.6,
            "drift_score_mean": 60.5,
            "transition_risk_max": 55.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-03-02",
              "mean_glucose": 84.8,
              "meal_risk": 41.2,
              "recovery_risk": 50.2,
              "transition_risk": 44.2,
              "next_day_risk": 50.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.113
            },
            {
              "day": "2022-03-03",
              "mean_glucose": 87.1,
              "meal_risk": 50.6,
              "recovery_risk": 39.0,
              "transition_risk": 55.0,
              "next_day_risk": 48.2,
              "time_above_140_pct": 0.1,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2022-03-04",
              "mean_glucose": 85.9,
              "meal_risk": 48.5,
              "recovery_risk": 51.6,
              "transition_risk": 48.6,
              "next_day_risk": 49.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.127
            },
            {
              "day": "2022-03-05",
              "mean_glucose": 92.0,
              "meal_risk": 51.0,
              "recovery_risk": 26.0,
              "transition_risk": 49.5,
              "next_day_risk": 48.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.173
            },
            {
              "day": "2022-03-06",
              "mean_glucose": 76.2,
              "meal_risk": 40.2,
              "recovery_risk": 25.9,
              "transition_risk": 54.1,
              "next_day_risk": 49.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.231
            },
            {
              "day": "2022-03-07",
              "mean_glucose": 64.3,
              "meal_risk": 42.5,
              "recovery_risk": 38.2,
              "transition_risk": 54.5,
              "next_day_risk": 50.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.244
            },
            {
              "day": "2022-03-08",
              "mean_glucose": 72.8,
              "meal_risk": 46.4,
              "recovery_risk": 38.3,
              "transition_risk": 50.9,
              "next_day_risk": 50.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2022-03-09",
              "mean_glucose": 69.5,
              "meal_risk": 40.5,
              "recovery_risk": 43.5,
              "transition_risk": 52.4,
              "next_day_risk": 50.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.215
            },
            {
              "day": "2022-03-10",
              "mean_glucose": 80.5,
              "meal_risk": 45.6,
              "recovery_risk": 37.1,
              "transition_risk": 49.7,
              "next_day_risk": 49.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.177
            },
            {
              "day": "2022-03-11",
              "mean_glucose": 83.6,
              "meal_risk": 44.9,
              "recovery_risk": 40.1,
              "transition_risk": 47.1,
              "next_day_risk": 49.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.145
            },
            {
              "day": "2022-03-12",
              "mean_glucose": 77.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 51.5,
              "next_day_risk": 48.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.197
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 4,
              "mean_meal_risk": 45.3,
              "mean_recovery_risk": 35.4,
              "mean_peak_glucose": 119.2,
              "mean_carbs": 45.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 49.6,
              "mean_recovery_risk": 44.3,
              "mean_peak_glucose": 109.3,
              "mean_carbs": 69.9
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 41.2,
              "mean_recovery_risk": 29.1,
              "mean_peak_glucose": 96.2,
              "mean_carbs": 34.9
            },
            {
              "meal_slot": "snack",
              "n_meals": 10,
              "mean_meal_risk": 46.6,
              "mean_recovery_risk": 45.7,
              "mean_peak_glucose": 104.4,
              "mean_carbs": 30.1
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-03-11 18:13:00",
              "meal_type": "dinner",
              "meal_carbs": 32.0,
              "peak_glucose": 111.0,
              "meal_risk": 46.8,
              "recovery_risk": 26.8
            },
            {
              "meal_start": "2022-03-11 12:10:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 111.0,
              "meal_risk": 46.4,
              "recovery_risk": 50.6
            },
            {
              "meal_start": "2022-03-11 10:45:00",
              "meal_type": "snack",
              "meal_carbs": 150.0,
              "peak_glucose": 101.8,
              "meal_risk": 45.8,
              "recovery_risk": 51.7
            },
            {
              "meal_start": "2022-03-11 07:24:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 112.0,
              "meal_risk": 40.7,
              "recovery_risk": 31.4
            },
            {
              "meal_start": "2022-03-10 13:37:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 109.0,
              "meal_risk": 45.6,
              "recovery_risk": 37.1
            },
            {
              "meal_start": "2022-03-09 19:05:00",
              "meal_type": "dinner",
              "meal_carbs": 24.0,
              "peak_glucose": 82.0,
              "meal_risk": 24.6,
              "recovery_risk": 34.7
            },
            {
              "meal_start": "2022-03-09 13:15:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 115.0,
              "meal_risk": 56.4,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2022-03-08 12:32:00",
              "meal_type": "lunch",
              "meal_carbs": 76.0,
              "peak_glucose": 102.7,
              "meal_risk": 42.7,
              "recovery_risk": 13.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 67.0,
              "estimated_meal_response_risk": 51.3,
              "estimated_recovery_risk": 43.6,
              "estimated_next_day_instability_risk": 49.8,
              "summary": "For breakfast, target about 34.5-55.5 g carbs, 22.0-22.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.7,
              "estimated_recovery_risk": 45.2,
              "estimated_next_day_instability_risk": 49.8,
              "summary": "For lunch, target about 36.2-77.2 g carbs, 21.5-71.5 g protein, 17.4-28.6 g fat, and 9.2-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 44.2,
              "estimated_recovery_risk": 34.6,
              "estimated_next_day_instability_risk": 49.7,
              "summary": "For dinner, target about 22.0-52.5 g carbs, 15.2-47.0 g protein, 11.0-15.2 g fat, and 3.0-4.2 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 45.9,
              "estimated_recovery_risk": 43.7,
              "estimated_next_day_instability_risk": 49.4,
              "summary": "For snack, target about 3.0-6.5 g carbs, 10.0-18.2 g protein, 10.2-13.5 g fat, and 0.0-1.2 g fiber."
            }
          ]
        },
        "32": {
          "overview": {
            "subject": "32",
            "group": "healthy",
            "a1c": 5.3,
            "bmi": 22.9,
            "mean_glucose": 67.6,
            "days_covered": 9.6,
            "n_meals": 10,
            "meal_response_risk_mean": 41.2,
            "recovery_risk_mean": 36.6,
            "next_day_risk_mean": 49.5,
            "drift_score_mean": 54.7,
            "transition_risk_max": 67.7,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-01-01",
              "mean_glucose": 69.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 43.2,
              "next_day_risk": 47.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.1
            },
            {
              "day": "2022-01-02",
              "mean_glucose": 82.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 50.4,
              "next_day_risk": 47.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.179
            },
            {
              "day": "2022-01-03",
              "mean_glucose": 77.7,
              "meal_risk": 51.1,
              "recovery_risk": 33.2,
              "transition_risk": 48.0,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2022-01-04",
              "mean_glucose": 82.7,
              "meal_risk": 42.8,
              "recovery_risk": 36.3,
              "transition_risk": 55.0,
              "next_day_risk": 49.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.238
            },
            {
              "day": "2022-01-05",
              "mean_glucose": 72.6,
              "meal_risk": 44.6,
              "recovery_risk": 44.5,
              "transition_risk": 47.1,
              "next_day_risk": 49.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.131
            },
            {
              "day": "2022-01-06",
              "mean_glucose": 70.4,
              "meal_risk": 52.0,
              "recovery_risk": 46.2,
              "transition_risk": 50.6,
              "next_day_risk": 49.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.186
            },
            {
              "day": "2022-01-07",
              "mean_glucose": 66.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 57.1,
              "next_day_risk": 49.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.266
            },
            {
              "day": "2022-01-08",
              "mean_glucose": 58.3,
              "meal_risk": 37.0,
              "recovery_risk": 38.1,
              "transition_risk": 55.4,
              "next_day_risk": 51.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.257
            },
            {
              "day": "2022-01-09",
              "mean_glucose": 53.9,
              "meal_risk": 35.4,
              "recovery_risk": 22.9,
              "transition_risk": 52.4,
              "next_day_risk": 51.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.21
            },
            {
              "day": "2022-01-10",
              "mean_glucose": 55.9,
              "meal_risk": 29.9,
              "recovery_risk": 30.3,
              "transition_risk": 67.7,
              "next_day_risk": 53.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.393
            },
            {
              "day": "2022-01-11",
              "mean_glucose": 40.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 43.3,
              "next_day_risk": 48.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.031
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 1,
              "mean_meal_risk": 45.9,
              "mean_recovery_risk": 40.1,
              "mean_peak_glucose": 99.0,
              "mean_carbs": 24.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 7,
              "mean_meal_risk": 43.9,
              "mean_recovery_risk": 37.2,
              "mean_peak_glucose": 102.8,
              "mean_carbs": 57.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 2,
              "mean_meal_risk": 29.4,
              "mean_recovery_risk": 32.7,
              "mean_peak_glucose": 66.0,
              "mean_carbs": 0.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-01-10 19:35:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 44.0,
              "meal_risk": 26.1,
              "recovery_risk": 15.8
            },
            {
              "meal_start": "2022-01-10 13:31:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 106.3,
              "meal_risk": 33.8,
              "recovery_risk": 44.8
            },
            {
              "meal_start": "2022-01-09 12:50:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 72.0,
              "meal_risk": 35.4,
              "recovery_risk": 22.9
            },
            {
              "meal_start": "2022-01-08 19:56:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 88.0,
              "meal_risk": 32.8,
              "recovery_risk": 49.6
            },
            {
              "meal_start": "2022-01-08 12:18:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 94.0,
              "meal_risk": 41.1,
              "recovery_risk": 26.6
            },
            {
              "meal_start": "2022-01-06 12:47:00",
              "meal_type": "lunch",
              "meal_carbs": 93.0,
              "peak_glucose": 108.0,
              "meal_risk": 58.1,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2022-01-06 04:23:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 99.0,
              "meal_risk": 45.9,
              "recovery_risk": 40.1
            },
            {
              "meal_start": "2022-01-05 12:38:00",
              "meal_type": "lunch",
              "meal_carbs": 19.0,
              "peak_glucose": 96.0,
              "meal_risk": 44.6,
              "recovery_risk": 44.5
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 17.0,
              "estimated_meal_response_risk": 54.4,
              "estimated_recovery_risk": 48.5,
              "estimated_next_day_instability_risk": 49.8,
              "summary": "For breakfast, target about 24.0-24.0 g carbs, 22.0-22.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 47.5,
              "estimated_recovery_risk": 41.2,
              "estimated_next_day_instability_risk": 50.1,
              "summary": "For lunch, target about 41.5-68.5 g carbs, 32.0-60.0 g protein, 18.5-20.0 g fat, and 8.5-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 33.0,
              "estimated_meal_response_risk": 43.8,
              "estimated_recovery_risk": 41.0,
              "estimated_next_day_instability_risk": 50.7,
              "summary": "For dinner, target about 0.0-0.0 g carbs, 0.0-0.0 g protein, 0.0-0.0 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 44.4,
              "estimated_recovery_risk": 39.8,
              "estimated_next_day_instability_risk": 49.3,
              "summary": "For snack, target about 7.0-36.5 g carbs, 0.2-10.0 g protein, 0.0-11.0 g fat, and 0.0-3.2 g fiber."
            }
          ]
        },
        "48": {
          "overview": {
            "subject": "48",
            "group": "healthy",
            "a1c": 4.8,
            "bmi": 21.1,
            "mean_glucose": 82.5,
            "days_covered": 12.1,
            "n_meals": 35,
            "meal_response_risk_mean": 54.7,
            "recovery_risk_mean": 45.9,
            "next_day_risk_mean": 48.9,
            "drift_score_mean": 46.6,
            "transition_risk_max": 81.2,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-11-14",
              "mean_glucose": 72.8,
              "meal_risk": 50.0,
              "recovery_risk": 50.2,
              "transition_risk": 49.6,
              "next_day_risk": 49.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2022-11-15",
              "mean_glucose": 74.4,
              "meal_risk": 53.7,
              "recovery_risk": 48.5,
              "transition_risk": 68.0,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.266
            },
            {
              "day": "2022-11-16",
              "mean_glucose": 70.0,
              "meal_risk": 42.0,
              "recovery_risk": 35.5,
              "transition_risk": 60.7,
              "next_day_risk": 50.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.264
            },
            {
              "day": "2022-11-17",
              "mean_glucose": 65.5,
              "meal_risk": 61.0,
              "recovery_risk": 54.0,
              "transition_risk": 81.2,
              "next_day_risk": 51.4,
              "time_above_140_pct": 2.0,
              "daily_glucose_cv": 0.374
            },
            {
              "day": "2022-11-18",
              "mean_glucose": 60.6,
              "meal_risk": 49.4,
              "recovery_risk": 41.3,
              "transition_risk": 66.7,
              "next_day_risk": 52.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.31
            },
            {
              "day": "2022-11-19",
              "mean_glucose": 83.9,
              "meal_risk": 51.3,
              "recovery_risk": 44.3,
              "transition_risk": 54.8,
              "next_day_risk": 48.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.156
            },
            {
              "day": "2022-11-20",
              "mean_glucose": 91.2,
              "meal_risk": 60.6,
              "recovery_risk": 47.1,
              "transition_risk": 75.0,
              "next_day_risk": 49.5,
              "time_above_140_pct": 1.4,
              "daily_glucose_cv": 0.162
            },
            {
              "day": "2022-11-21",
              "mean_glucose": 93.0,
              "meal_risk": 58.1,
              "recovery_risk": 45.2,
              "transition_risk": 67.7,
              "next_day_risk": 47.6,
              "time_above_140_pct": 2.0,
              "daily_glucose_cv": 0.169
            },
            {
              "day": "2022-11-22",
              "mean_glucose": 94.4,
              "meal_risk": 66.9,
              "recovery_risk": 51.2,
              "transition_risk": 77.4,
              "next_day_risk": 47.8,
              "time_above_140_pct": 3.6,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2022-11-23",
              "mean_glucose": 92.1,
              "meal_risk": 53.3,
              "recovery_risk": 41.4,
              "transition_risk": 54.8,
              "next_day_risk": 47.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.134
            },
            {
              "day": "2022-11-24",
              "mean_glucose": 92.5,
              "meal_risk": 46.7,
              "recovery_risk": 46.7,
              "transition_risk": 59.9,
              "next_day_risk": 47.4,
              "time_above_140_pct": 2.6,
              "daily_glucose_cv": 0.163
            },
            {
              "day": "2022-11-25",
              "mean_glucose": 94.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 45.8,
              "next_day_risk": 46.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.121
            },
            {
              "day": "2022-11-26",
              "mean_glucose": 86.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 42.6,
              "next_day_risk": 47.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.084
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 59.6,
              "mean_recovery_risk": 46.2,
              "mean_peak_glucose": 124.1,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 57.0,
              "mean_recovery_risk": 48.6,
              "mean_peak_glucose": 111.2,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 12,
              "mean_meal_risk": 48.2,
              "mean_recovery_risk": 42.5,
              "mean_peak_glucose": 110.1,
              "mean_carbs": 49.8
            },
            {
              "meal_slot": "snack",
              "n_meals": 3,
              "mean_meal_risk": 56.8,
              "mean_recovery_risk": 49.1,
              "mean_peak_glucose": 125.3,
              "mean_carbs": 35.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-11-24 11:24:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 112.0,
              "meal_risk": 46.7,
              "recovery_risk": 46.7
            },
            {
              "meal_start": "2022-11-23 22:36:00",
              "meal_type": "snack",
              "meal_carbs": 40.0,
              "peak_glucose": 128.0,
              "meal_risk": 52.8,
              "recovery_risk": 44.5
            },
            {
              "meal_start": "2022-11-23 19:08:00",
              "meal_type": "dinner",
              "meal_carbs": 14.0,
              "peak_glucose": 114.0,
              "meal_risk": 47.0,
              "recovery_risk": 32.2
            },
            {
              "meal_start": "2022-11-23 13:22:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 117.0,
              "meal_risk": 59.2,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2022-11-23 10:22:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 125.0,
              "meal_risk": 53.9,
              "recovery_risk": 36.5
            },
            {
              "meal_start": "2022-11-22 21:36:00",
              "meal_type": "dinner",
              "meal_carbs": 31.0,
              "peak_glucose": 124.0,
              "meal_risk": 57.8,
              "recovery_risk": 50.1
            },
            {
              "meal_start": "2022-11-22 16:35:00",
              "meal_type": "snack",
              "meal_carbs": 59.0,
              "peak_glucose": 149.0,
              "meal_risk": 74.7,
              "recovery_risk": 58.1
            },
            {
              "meal_start": "2022-11-22 13:25:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 125.0,
              "meal_risk": 61.4,
              "recovery_risk": 52.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 58.4,
              "estimated_recovery_risk": 47.5,
              "estimated_next_day_instability_risk": 49.5,
              "summary": "For breakfast, target about 55.5-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 55.5,
              "estimated_recovery_risk": 48.0,
              "estimated_next_day_instability_risk": 49.6,
              "summary": "For lunch, target about 18.2-50.2 g carbs, 57.5-79.0 g protein, 14.8-26.4 g fat, and 4.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 48.6,
              "estimated_recovery_risk": 43.0,
              "estimated_next_day_instability_risk": 49.5,
              "summary": "For dinner, target about 45.0-76.0 g carbs, 11.0-56.0 g protein, 12.0-33.0 g fat, and 5.0-6.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 50.0,
              "estimated_meal_response_risk": 49.1,
              "estimated_recovery_risk": 43.2,
              "estimated_next_day_instability_risk": 48.7,
              "summary": "For snack, target about 24.0-49.5 g carbs, 4.0-9.5 g protein, 6.5-16.5 g fat, and 2.0-4.0 g fiber."
            }
          ]
        },
        "19": {
          "overview": {
            "subject": "19",
            "group": "healthy",
            "a1c": 5.6,
            "bmi": 36.4,
            "mean_glucose": 85.2,
            "days_covered": 10.0,
            "n_meals": 43,
            "meal_response_risk_mean": 49.7,
            "recovery_risk_mean": 41.8,
            "next_day_risk_mean": 48.7,
            "drift_score_mean": 44.1,
            "transition_risk_max": 67.1,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-09-29",
              "mean_glucose": 78.9,
              "meal_risk": 51.1,
              "recovery_risk": 43.7,
              "transition_risk": 55.1,
              "next_day_risk": 50.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.169
            },
            {
              "day": "2020-09-30",
              "mean_glucose": 81.2,
              "meal_risk": 51.1,
              "recovery_risk": 45.1,
              "transition_risk": 67.1,
              "next_day_risk": 49.4,
              "time_above_140_pct": 1.7,
              "daily_glucose_cv": 0.226
            },
            {
              "day": "2020-10-01",
              "mean_glucose": 84.2,
              "meal_risk": 44.4,
              "recovery_risk": 29.1,
              "transition_risk": 55.5,
              "next_day_risk": 48.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.184
            },
            {
              "day": "2020-10-02",
              "mean_glucose": 87.9,
              "meal_risk": 56.5,
              "recovery_risk": 44.8,
              "transition_risk": 49.6,
              "next_day_risk": 47.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.182
            },
            {
              "day": "2020-10-03",
              "mean_glucose": 74.1,
              "meal_risk": 44.3,
              "recovery_risk": 39.1,
              "transition_risk": 58.9,
              "next_day_risk": 50.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.231
            },
            {
              "day": "2020-10-04",
              "mean_glucose": 84.6,
              "meal_risk": 48.0,
              "recovery_risk": 50.4,
              "transition_risk": 53.7,
              "next_day_risk": 49.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.159
            },
            {
              "day": "2020-10-05",
              "mean_glucose": 89.9,
              "meal_risk": 43.7,
              "recovery_risk": 34.9,
              "transition_risk": 47.6,
              "next_day_risk": 48.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.109
            },
            {
              "day": "2020-10-06",
              "mean_glucose": 91.1,
              "meal_risk": 47.4,
              "recovery_risk": 34.2,
              "transition_risk": 44.0,
              "next_day_risk": 48.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.11
            },
            {
              "day": "2020-10-07",
              "mean_glucose": 86.7,
              "meal_risk": 56.3,
              "recovery_risk": 50.7,
              "transition_risk": 44.3,
              "next_day_risk": 47.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.114
            },
            {
              "day": "2020-10-08",
              "mean_glucose": 91.6,
              "meal_risk": 63.1,
              "recovery_risk": 51.6,
              "transition_risk": 66.8,
              "next_day_risk": 47.3,
              "time_above_140_pct": 2.2,
              "daily_glucose_cv": 0.165
            },
            {
              "day": "2020-10-09",
              "mean_glucose": 83.7,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 43.7,
              "next_day_risk": 47.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.028
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 8,
              "mean_meal_risk": 54.9,
              "mean_recovery_risk": 49.6,
              "mean_peak_glucose": 117.1,
              "mean_carbs": 56.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 48.2,
              "mean_recovery_risk": 42.1,
              "mean_peak_glucose": 100.8,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 12,
              "mean_meal_risk": 49.8,
              "mean_recovery_risk": 34.7,
              "mean_peak_glucose": 117.0,
              "mean_carbs": 52.0
            },
            {
              "meal_slot": "snack",
              "n_meals": 13,
              "mean_meal_risk": 47.6,
              "mean_recovery_risk": 43.3,
              "mean_peak_glucose": 106.2,
              "mean_carbs": 21.4
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-10-08 18:13:00",
              "meal_type": "dinner",
              "meal_carbs": 40.0,
              "peak_glucose": 135.0,
              "meal_risk": 64.3,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2020-10-08 16:32:00",
              "meal_type": "snack",
              "meal_carbs": 40.0,
              "peak_glucose": 135.0,
              "meal_risk": 64.9,
              "recovery_risk": 51.6
            },
            {
              "meal_start": "2020-10-08 12:45:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 150.0,
              "meal_risk": 77.4,
              "recovery_risk": 58.8
            },
            {
              "meal_start": "2020-10-08 09:06:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 112.0,
              "meal_risk": 46.0,
              "recovery_risk": 43.8
            },
            {
              "meal_start": "2020-10-07 18:28:00",
              "meal_type": "dinner",
              "meal_carbs": 65.0,
              "peak_glucose": 120.0,
              "meal_risk": 57.5,
              "recovery_risk": 52.1
            },
            {
              "meal_start": "2020-10-07 16:55:00",
              "meal_type": "snack",
              "meal_carbs": 61.0,
              "peak_glucose": 120.0,
              "meal_risk": 57.3,
              "recovery_risk": 51.9
            },
            {
              "meal_start": "2020-10-07 14:44:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 110.0,
              "meal_risk": 54.2,
              "recovery_risk": 48.1
            },
            {
              "meal_start": "2020-10-06 21:36:00",
              "meal_type": "snack",
              "meal_carbs": 15.0,
              "peak_glucose": 100.0,
              "meal_risk": 41.7,
              "recovery_risk": 30.7
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 55.3,
              "estimated_recovery_risk": 49.8,
              "estimated_next_day_instability_risk": 49.2,
              "summary": "For breakfast, target about 45.0-69.5 g carbs, 44.0-66.0 g protein, 10.5-26.2 g fat, and 0.0-3.5 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 49.7,
              "estimated_recovery_risk": 43.6,
              "estimated_next_day_instability_risk": 49.2,
              "summary": "For lunch, target about 18.2-77.2 g carbs, 29.5-71.5 g protein, 14.8-27.5 g fat, and 4.8-12.8 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 49.7,
              "estimated_recovery_risk": 37.6,
              "estimated_next_day_instability_risk": 49.2,
              "summary": "For dinner, target about 43.0-55.0 g carbs, 35.0-42.0 g protein, 13.0-33.0 g fat, and 5.0-5.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 46.7,
              "estimated_recovery_risk": 42.3,
              "estimated_next_day_instability_risk": 49.1,
              "summary": "For snack, target about 0.0-16.0 g carbs, 0.0-2.0 g protein, 0.0-5.0 g fat, and 0.0-14.5 g fiber."
            }
          ]
        },
        "27": {
          "overview": {
            "subject": "27",
            "group": "healthy",
            "a1c": 4.7,
            "bmi": 27.1,
            "mean_glucose": 76.5,
            "days_covered": 10.1,
            "n_meals": 34,
            "meal_response_risk_mean": 45.9,
            "recovery_risk_mean": 46.1,
            "next_day_risk_mean": 48.6,
            "drift_score_mean": 55.4,
            "transition_risk_max": 93.2,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-06-10",
              "mean_glucose": 66.8,
              "meal_risk": 42.4,
              "recovery_risk": 46.7,
              "transition_risk": 45.4,
              "next_day_risk": 48.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.129
            },
            {
              "day": "2024-06-11",
              "mean_glucose": 77.6,
              "meal_risk": 48.3,
              "recovery_risk": 39.5,
              "transition_risk": 47.8,
              "next_day_risk": 47.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.155
            },
            {
              "day": "2024-06-12",
              "mean_glucose": 69.7,
              "meal_risk": 44.7,
              "recovery_risk": 51.7,
              "transition_risk": 54.5,
              "next_day_risk": 49.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.232
            },
            {
              "day": "2024-06-13",
              "mean_glucose": 79.6,
              "meal_risk": 66.6,
              "recovery_risk": 56.4,
              "transition_risk": 93.2,
              "next_day_risk": 49.3,
              "time_above_140_pct": 8.0,
              "daily_glucose_cv": 0.397
            },
            {
              "day": "2024-06-14",
              "mean_glucose": 80.6,
              "meal_risk": 38.5,
              "recovery_risk": 48.7,
              "transition_risk": 58.7,
              "next_day_risk": 48.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2024-06-15",
              "mean_glucose": 80.4,
              "meal_risk": 47.6,
              "recovery_risk": 47.1,
              "transition_risk": 64.5,
              "next_day_risk": 49.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.223
            },
            {
              "day": "2024-06-16",
              "mean_glucose": 82.2,
              "meal_risk": 44.9,
              "recovery_risk": 36.1,
              "transition_risk": 53.9,
              "next_day_risk": 47.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.162
            },
            {
              "day": "2024-06-17",
              "mean_glucose": 78.3,
              "meal_risk": 37.2,
              "recovery_risk": 45.7,
              "transition_risk": 45.2,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.118
            },
            {
              "day": "2024-06-18",
              "mean_glucose": 76.4,
              "meal_risk": 48.5,
              "recovery_risk": 47.3,
              "transition_risk": 48.3,
              "next_day_risk": 47.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2024-06-19",
              "mean_glucose": 74.4,
              "meal_risk": 44.6,
              "recovery_risk": 46.5,
              "transition_risk": 50.1,
              "next_day_risk": 48.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.185
            },
            {
              "day": "2024-06-20",
              "mean_glucose": 66.6,
              "meal_risk": 37.2,
              "recovery_risk": 48.2,
              "transition_risk": 46.1,
              "next_day_risk": 49.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.127
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 41.1,
              "mean_recovery_risk": 45.1,
              "mean_peak_glucose": 95.0,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 50.2,
              "mean_recovery_risk": 52.7,
              "mean_peak_glucose": 103.1,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 50.4,
              "mean_recovery_risk": 48.1,
              "mean_peak_glucose": 106.2,
              "mean_carbs": 75.3
            },
            {
              "meal_slot": "snack",
              "n_meals": 5,
              "mean_meal_risk": 38.4,
              "mean_recovery_risk": 30.9,
              "mean_peak_glucose": 95.1,
              "mean_carbs": 12.6
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-06-20 08:35:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 86.9,
              "meal_risk": 37.2,
              "recovery_risk": 48.2
            },
            {
              "meal_start": "2024-06-19 18:45:00",
              "meal_type": "dinner",
              "meal_carbs": 69.0,
              "peak_glucose": 98.0,
              "meal_risk": 51.2,
              "recovery_risk": 51.7
            },
            {
              "meal_start": "2024-06-19 18:03:00",
              "meal_type": "snack",
              "meal_carbs": 5.0,
              "peak_glucose": 98.0,
              "meal_risk": 37.2,
              "recovery_risk": 48.7
            },
            {
              "meal_start": "2024-06-19 13:40:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 121.0,
              "meal_risk": 65.3,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2024-06-19 10:11:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 91.0,
              "meal_risk": 24.6,
              "recovery_risk": 33.2
            },
            {
              "meal_start": "2024-06-18 18:38:00",
              "meal_type": "dinner",
              "meal_carbs": 24.0,
              "peak_glucose": 123.0,
              "meal_risk": 65.5,
              "recovery_risk": 51.9
            },
            {
              "meal_start": "2024-06-18 12:45:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 88.0,
              "meal_risk": 39.1,
              "recovery_risk": 41.9
            },
            {
              "meal_start": "2024-06-18 09:20:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 94.0,
              "meal_risk": 40.8,
              "recovery_risk": 48.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 46.1,
              "estimated_recovery_risk": 46.8,
              "estimated_next_day_instability_risk": 49.0,
              "summary": "For breakfast, target about 24.0-66.0 g carbs, 22.0-33.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 51.0,
              "estimated_recovery_risk": 50.7,
              "estimated_next_day_instability_risk": 49.0,
              "summary": "For lunch, target about 34.0-51.2 g carbs, 21.5-68.5 g protein, 16.2-18.9 g fat, and 9.2-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.1,
              "estimated_recovery_risk": 46.7,
              "estimated_next_day_instability_risk": 49.0,
              "summary": "For dinner, target about 58.8-82.2 g carbs, 11.5-24.8 g protein, 7.2-30.2 g fat, and 6.2-10.2 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 83.0,
              "estimated_meal_response_risk": 41.4,
              "estimated_recovery_risk": 35.3,
              "estimated_next_day_instability_risk": 48.8,
              "summary": "For snack, target about 0.0-0.0 g carbs, 0.0-0.0 g protein, 0.0-0.0 g fat, and 0.0-0.0 g fiber."
            }
          ]
        },
        "6": {
          "overview": {
            "subject": "6",
            "group": "healthy",
            "a1c": 5.2,
            "bmi": 29.3,
            "mean_glucose": 88.9,
            "days_covered": 10.0,
            "n_meals": 37,
            "meal_response_risk_mean": 51.8,
            "recovery_risk_mean": 46.2,
            "next_day_risk_mean": 48.6,
            "drift_score_mean": 54.8,
            "transition_risk_max": 81.5,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-04-07",
              "mean_glucose": 80.2,
              "meal_risk": 38.2,
              "recovery_risk": 48.4,
              "transition_risk": 45.5,
              "next_day_risk": 49.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.131
            },
            {
              "day": "2023-04-08",
              "mean_glucose": 82.1,
              "meal_risk": 49.9,
              "recovery_risk": 44.8,
              "transition_risk": 46.4,
              "next_day_risk": 48.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.14
            },
            {
              "day": "2023-04-09",
              "mean_glucose": 79.2,
              "meal_risk": 47.5,
              "recovery_risk": 49.4,
              "transition_risk": 59.1,
              "next_day_risk": 50.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.186
            },
            {
              "day": "2023-04-10",
              "mean_glucose": 79.0,
              "meal_risk": 66.4,
              "recovery_risk": 54.6,
              "transition_risk": 81.5,
              "next_day_risk": 49.3,
              "time_above_140_pct": 3.9,
              "daily_glucose_cv": 0.318
            },
            {
              "day": "2023-04-11",
              "mean_glucose": 84.1,
              "meal_risk": 47.4,
              "recovery_risk": 37.6,
              "transition_risk": 55.1,
              "next_day_risk": 48.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2023-04-12",
              "mean_glucose": 85.8,
              "meal_risk": 57.2,
              "recovery_risk": 49.6,
              "transition_risk": 58.4,
              "next_day_risk": 49.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.179
            },
            {
              "day": "2023-04-13",
              "mean_glucose": 105.7,
              "meal_risk": 61.8,
              "recovery_risk": 54.2,
              "transition_risk": 78.2,
              "next_day_risk": 47.6,
              "time_above_140_pct": 5.8,
              "daily_glucose_cv": 0.164
            },
            {
              "day": "2023-04-14",
              "mean_glucose": 91.1,
              "meal_risk": 43.0,
              "recovery_risk": 42.5,
              "transition_risk": 49.3,
              "next_day_risk": 48.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.09
            },
            {
              "day": "2023-04-15",
              "mean_glucose": 97.9,
              "meal_risk": 60.2,
              "recovery_risk": 40.9,
              "transition_risk": 73.3,
              "next_day_risk": 48.2,
              "time_above_140_pct": 2.8,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2023-04-16",
              "mean_glucose": 96.3,
              "meal_risk": 47.7,
              "recovery_risk": 41.8,
              "transition_risk": 50.1,
              "next_day_risk": 47.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.105
            },
            {
              "day": "2023-04-17",
              "mean_glucose": 95.1,
              "meal_risk": 61.9,
              "recovery_risk": 52.4,
              "transition_risk": 46.7,
              "next_day_risk": 47.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.139
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 50.7,
              "mean_recovery_risk": 44.9,
              "mean_peak_glucose": 115.2,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 54.1,
              "mean_recovery_risk": 46.3,
              "mean_peak_glucose": 119.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 51.6,
              "mean_recovery_risk": 46.2,
              "mean_peak_glucose": 116.2,
              "mean_carbs": 60.1
            },
            {
              "meal_slot": "snack",
              "n_meals": 7,
              "mean_meal_risk": 50.6,
              "mean_recovery_risk": 47.6,
              "mean_peak_glucose": 116.3,
              "mean_carbs": 42.3
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-04-17 07:00:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 126.0,
              "meal_risk": 61.9,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2023-04-16 20:26:00",
              "meal_type": "snack",
              "meal_carbs": 60.0,
              "peak_glucose": 113.0,
              "meal_risk": 36.2,
              "recovery_risk": 47.6
            },
            {
              "meal_start": "2023-04-16 19:15:00",
              "meal_type": "dinner",
              "meal_carbs": 59.0,
              "peak_glucose": 121.0,
              "meal_risk": 49.9,
              "recovery_risk": 19.9
            },
            {
              "meal_start": "2023-04-16 17:39:00",
              "meal_type": "snack",
              "meal_carbs": 26.0,
              "peak_glucose": 121.0,
              "meal_risk": 49.0,
              "recovery_risk": 48.4
            },
            {
              "meal_start": "2023-04-16 13:48:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 131.0,
              "meal_risk": 59.6,
              "recovery_risk": 48.6
            },
            {
              "meal_start": "2023-04-16 07:16:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 114.0,
              "meal_risk": 44.0,
              "recovery_risk": 44.6
            },
            {
              "meal_start": "2023-04-15 20:19:00",
              "meal_type": "dinner",
              "meal_carbs": 41.0,
              "peak_glucose": 153.0,
              "meal_risk": 73.8,
              "recovery_risk": 60.1
            },
            {
              "meal_start": "2023-04-15 12:52:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 119.8,
              "meal_risk": 46.1,
              "recovery_risk": 13.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 52.5,
              "estimated_recovery_risk": 46.7,
              "estimated_next_day_instability_risk": 49.0,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 53.6,
              "estimated_recovery_risk": 46.5,
              "estimated_next_day_instability_risk": 49.2,
              "summary": "For lunch, target about 18.2-50.2 g carbs, 57.5-79.0 g protein, 14.8-26.4 g fat, and 4.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.9,
              "estimated_recovery_risk": 45.6,
              "estimated_next_day_instability_risk": 49.2,
              "summary": "For dinner, target about 38.5-57.0 g carbs, 15.8-21.5 g protein, 14.8-26.2 g fat, and 2.8-19.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 48.0,
              "estimated_recovery_risk": 44.3,
              "estimated_next_day_instability_risk": 48.9,
              "summary": "For snack, target about 22.0-43.5 g carbs, 2.5-5.0 g protein, 8.5-14.5 g fat, and 1.5-4.0 g fiber."
            }
          ]
        },
        "1": {
          "overview": {
            "subject": "1",
            "group": "healthy",
            "a1c": 5.4,
            "bmi": 22.3,
            "mean_glucose": 88.5,
            "days_covered": 10.2,
            "n_meals": 40,
            "meal_response_risk_mean": 43.0,
            "recovery_risk_mean": 39.6,
            "next_day_risk_mean": 48.1,
            "drift_score_mean": 43.4,
            "transition_risk_max": 45.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-05-01",
              "mean_glucose": 84.7,
              "meal_risk": 45.3,
              "recovery_risk": 49.3,
              "transition_risk": 44.8,
              "next_day_risk": 47.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.122
            },
            {
              "day": "2020-05-02",
              "mean_glucose": 88.1,
              "meal_risk": 39.4,
              "recovery_risk": 35.4,
              "transition_risk": 43.6,
              "next_day_risk": 48.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.101
            },
            {
              "day": "2020-05-03",
              "mean_glucose": 88.9,
              "meal_risk": 41.5,
              "recovery_risk": 48.3,
              "transition_risk": 42.5,
              "next_day_risk": 48.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.088
            },
            {
              "day": "2020-05-04",
              "mean_glucose": 90.8,
              "meal_risk": 40.3,
              "recovery_risk": 44.2,
              "transition_risk": 44.0,
              "next_day_risk": 47.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.106
            },
            {
              "day": "2020-05-05",
              "mean_glucose": 89.1,
              "meal_risk": 45.6,
              "recovery_risk": 31.5,
              "transition_risk": 42.4,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.086
            },
            {
              "day": "2020-05-06",
              "mean_glucose": 89.1,
              "meal_risk": 40.9,
              "recovery_risk": 34.2,
              "transition_risk": 41.6,
              "next_day_risk": 49.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.077
            },
            {
              "day": "2020-05-07",
              "mean_glucose": 91.9,
              "meal_risk": 46.5,
              "recovery_risk": 45.0,
              "transition_risk": 43.9,
              "next_day_risk": 47.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.104
            },
            {
              "day": "2020-05-08",
              "mean_glucose": 87.7,
              "meal_risk": 48.0,
              "recovery_risk": 26.7,
              "transition_risk": 44.6,
              "next_day_risk": 46.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.116
            },
            {
              "day": "2020-05-09",
              "mean_glucose": 88.3,
              "meal_risk": 44.6,
              "recovery_risk": 31.8,
              "transition_risk": 45.0,
              "next_day_risk": 46.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.122
            },
            {
              "day": "2020-05-10",
              "mean_glucose": 83.7,
              "meal_risk": 42.2,
              "recovery_risk": 48.0,
              "transition_risk": 43.0,
              "next_day_risk": 48.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.092
            },
            {
              "day": "2020-05-11",
              "mean_glucose": 90.5,
              "meal_risk": 41.8,
              "recovery_risk": 39.8,
              "transition_risk": 41.1,
              "next_day_risk": 49.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.068
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 41.8,
              "mean_recovery_risk": 35.8,
              "mean_peak_glucose": 111.1,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 42.9,
              "mean_recovery_risk": 37.9,
              "mean_peak_glucose": 99.5,
              "mean_carbs": 66.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 11,
              "mean_meal_risk": 45.4,
              "mean_recovery_risk": 44.9,
              "mean_peak_glucose": 107.8,
              "mean_carbs": 21.8
            },
            {
              "meal_slot": "snack",
              "n_meals": 9,
              "mean_meal_risk": 41.4,
              "mean_recovery_risk": 39.2,
              "mean_peak_glucose": 108.8,
              "mean_carbs": 21.1
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-05-11 10:58:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 111.0,
              "meal_risk": 41.8,
              "recovery_risk": 39.8
            },
            {
              "meal_start": "2020-05-10 19:59:00",
              "meal_type": "Dinner",
              "meal_carbs": 26.0,
              "peak_glucose": 100.9,
              "meal_risk": 41.0,
              "recovery_risk": 50.3
            },
            {
              "meal_start": "2020-05-10 12:47:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 101.0,
              "meal_risk": 46.3,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2020-05-10 09:27:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 105.0,
              "meal_risk": 39.4,
              "recovery_risk": 41.2
            },
            {
              "meal_start": "2020-05-09 18:26:00",
              "meal_type": "Dinner",
              "meal_carbs": 28.0,
              "peak_glucose": 124.0,
              "meal_risk": 49.0,
              "recovery_risk": 35.4
            },
            {
              "meal_start": "2020-05-09 13:46:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 92.0,
              "meal_risk": 39.0,
              "recovery_risk": 20.9
            },
            {
              "meal_start": "2020-05-09 09:35:00",
              "meal_type": "Breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 120.0,
              "meal_risk": 45.7,
              "recovery_risk": 39.0
            },
            {
              "meal_start": "2020-05-08 22:29:00",
              "meal_type": "Snacks",
              "meal_carbs": 28.0,
              "peak_glucose": 108.0,
              "meal_risk": 43.2,
              "recovery_risk": 11.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 46.5,
              "estimated_recovery_risk": 40.6,
              "estimated_next_day_instability_risk": 48.8,
              "summary": "For breakfast, target about 55.5-66.0 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 46.1,
              "estimated_recovery_risk": 40.8,
              "estimated_next_day_instability_risk": 48.6,
              "summary": "For lunch, target about 42.2-87.0 g carbs, 62.0-85.0 g protein, 19.2-46.5 g fat, and 9.8-12.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 46.7,
              "estimated_recovery_risk": 44.7,
              "estimated_next_day_instability_risk": 48.7,
              "summary": "For dinner, target about 26.0-32.0 g carbs, 4.0-9.0 g protein, 4.0-17.0 g fat, and 0.0-3.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 42.5,
              "estimated_recovery_risk": 39.4,
              "estimated_next_day_instability_risk": 48.5,
              "summary": "For snack, target about 15.8-23.2 g carbs, 0.0-0.5 g protein, 0.0-2.0 g fat, and 0.0-0.0 g fiber."
            }
          ]
        },
        "31": {
          "overview": {
            "subject": "31",
            "group": "healthy",
            "a1c": 5.1,
            "bmi": 23.1,
            "mean_glucose": 81.9,
            "days_covered": 9.5,
            "n_meals": 46,
            "meal_response_risk_mean": 44.8,
            "recovery_risk_mean": 35.9,
            "next_day_risk_mean": 47.9,
            "drift_score_mean": 77.3,
            "transition_risk_max": 88.6,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-06-29",
              "mean_glucose": 72.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 40.5,
              "next_day_risk": 47.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.064
            },
            {
              "day": "2022-06-30",
              "mean_glucose": 85.8,
              "meal_risk": 55.1,
              "recovery_risk": 49.9,
              "transition_risk": 63.8,
              "next_day_risk": 47.9,
              "time_above_140_pct": 0.2,
              "daily_glucose_cv": 0.217
            },
            {
              "day": "2022-07-01",
              "mean_glucose": 78.0,
              "meal_risk": 38.1,
              "recovery_risk": 36.8,
              "transition_risk": 46.6,
              "next_day_risk": 48.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.067
            },
            {
              "day": "2022-07-02",
              "mean_glucose": 86.1,
              "meal_risk": 47.9,
              "recovery_risk": 30.4,
              "transition_risk": 88.6,
              "next_day_risk": 47.5,
              "time_above_140_pct": 7.2,
              "daily_glucose_cv": 0.325
            },
            {
              "day": "2022-07-03",
              "mean_glucose": 77.5,
              "meal_risk": 35.8,
              "recovery_risk": 20.6,
              "transition_risk": 49.7,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.099
            },
            {
              "day": "2022-07-04",
              "mean_glucose": 83.5,
              "meal_risk": 46.6,
              "recovery_risk": 45.6,
              "transition_risk": 50.3,
              "next_day_risk": 47.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.178
            },
            {
              "day": "2022-07-05",
              "mean_glucose": 79.7,
              "meal_risk": 37.8,
              "recovery_risk": 32.4,
              "transition_risk": 47.0,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.143
            },
            {
              "day": "2022-07-06",
              "mean_glucose": 79.6,
              "meal_risk": 40.0,
              "recovery_risk": 35.7,
              "transition_risk": 44.6,
              "next_day_risk": 48.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.112
            },
            {
              "day": "2022-07-07",
              "mean_glucose": 85.1,
              "meal_risk": 51.5,
              "recovery_risk": 33.1,
              "transition_risk": 57.2,
              "next_day_risk": 47.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.191
            },
            {
              "day": "2022-07-08",
              "mean_glucose": 83.6,
              "meal_risk": 44.5,
              "recovery_risk": 35.6,
              "transition_risk": 52.7,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.177
            },
            {
              "day": "2022-07-09",
              "mean_glucose": 80.7,
              "meal_risk": 49.7,
              "recovery_risk": 48.7,
              "transition_risk": 47.0,
              "next_day_risk": 47.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.104
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 46.6,
              "mean_recovery_risk": 47.2,
              "mean_peak_glucose": 103.4,
              "mean_carbs": 58.2
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 52.7,
              "mean_recovery_risk": 42.2,
              "mean_peak_glucose": 111.0,
              "mean_carbs": 63.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 13,
              "mean_meal_risk": 40.8,
              "mean_recovery_risk": 30.4,
              "mean_peak_glucose": 97.3,
              "mean_carbs": 26.1
            },
            {
              "meal_slot": "snack",
              "n_meals": 15,
              "mean_meal_risk": 42.5,
              "mean_recovery_risk": 30.1,
              "mean_peak_glucose": 101.2,
              "mean_carbs": 22.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-07-09 06:51:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 109.5,
              "meal_risk": 49.7,
              "recovery_risk": 48.7
            },
            {
              "meal_start": "2022-07-08 20:06:00",
              "meal_type": "dinner",
              "meal_carbs": 65.0,
              "peak_glucose": 93.0,
              "meal_risk": 36.0,
              "recovery_risk": 45.0
            },
            {
              "meal_start": "2022-07-08 18:07:00",
              "meal_type": "snack",
              "meal_carbs": 12.0,
              "peak_glucose": 96.6,
              "meal_risk": 40.9,
              "recovery_risk": 28.9
            },
            {
              "meal_start": "2022-07-08 17:31:00",
              "meal_type": "snack",
              "meal_carbs": 11.0,
              "peak_glucose": 97.0,
              "meal_risk": 44.2,
              "recovery_risk": 45.0
            },
            {
              "meal_start": "2022-07-08 15:00:00",
              "meal_type": "snack",
              "meal_carbs": 7.0,
              "peak_glucose": 97.7,
              "meal_risk": 36.0,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2022-07-08 11:54:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 135.0,
              "meal_risk": 72.0,
              "recovery_risk": 52.3
            },
            {
              "meal_start": "2022-07-08 07:18:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 94.0,
              "meal_risk": 37.8,
              "recovery_risk": 40.6
            },
            {
              "meal_start": "2022-07-07 18:15:00",
              "meal_type": "snack",
              "meal_carbs": 146.0,
              "peak_glucose": 114.0,
              "meal_risk": 46.7,
              "recovery_risk": 39.3
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.0,
              "estimated_recovery_risk": 48.3,
              "estimated_next_day_instability_risk": 48.7,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 52.7,
              "estimated_recovery_risk": 43.8,
              "estimated_next_day_instability_risk": 48.7,
              "summary": "For lunch, target about 18.2-49.0 g carbs, 29.5-68.5 g protein, 14.8-17.4 g fat, and 4.8-11.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 43.2,
              "estimated_recovery_risk": 34.2,
              "estimated_next_day_instability_risk": 48.5,
              "summary": "For dinner, target about 7.0-65.0 g carbs, 1.0-19.0 g protein, 0.0-10.0 g fat, and 0.0-4.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 43.0,
              "estimated_recovery_risk": 32.5,
              "estimated_next_day_instability_risk": 48.3,
              "summary": "For snack, target about 5.5-28.2 g carbs, 1.1-4.9 g protein, 0.2-5.0 g fat, and 0.4-2.5 g fiber."
            }
          ]
        },
        "17": {
          "overview": {
            "subject": "17",
            "group": "healthy",
            "a1c": 5.0,
            "bmi": 22.7,
            "mean_glucose": 76.5,
            "days_covered": 11.2,
            "n_meals": 38,
            "meal_response_risk_mean": 47.2,
            "recovery_risk_mean": 42.2,
            "next_day_risk_mean": 47.5,
            "drift_score_mean": 45.8,
            "transition_risk_max": 61.4,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-10-10",
              "mean_glucose": 65.0,
              "meal_risk": 37.5,
              "recovery_risk": 37.4,
              "transition_risk": 50.1,
              "next_day_risk": 49.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2023-10-11",
              "mean_glucose": 69.8,
              "meal_risk": 56.7,
              "recovery_risk": 52.0,
              "transition_risk": 61.4,
              "next_day_risk": 48.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.219
            },
            {
              "day": "2023-10-12",
              "mean_glucose": 68.7,
              "meal_risk": 43.7,
              "recovery_risk": 41.6,
              "transition_risk": 54.2,
              "next_day_risk": 48.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2023-10-13",
              "mean_glucose": 78.9,
              "meal_risk": 54.0,
              "recovery_risk": 43.9,
              "transition_risk": 53.0,
              "next_day_risk": 46.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.221
            },
            {
              "day": "2023-10-14",
              "mean_glucose": 76.8,
              "meal_risk": 43.5,
              "recovery_risk": 41.5,
              "transition_risk": 46.3,
              "next_day_risk": 48.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.121
            },
            {
              "day": "2023-10-15",
              "mean_glucose": 74.0,
              "meal_risk": 54.0,
              "recovery_risk": 50.3,
              "transition_risk": 52.9,
              "next_day_risk": 47.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.209
            },
            {
              "day": "2023-10-16",
              "mean_glucose": 82.3,
              "meal_risk": 49.7,
              "recovery_risk": 36.5,
              "transition_risk": 48.3,
              "next_day_risk": 46.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.156
            },
            {
              "day": "2023-10-17",
              "mean_glucose": 78.3,
              "meal_risk": 41.9,
              "recovery_risk": 34.5,
              "transition_risk": 46.6,
              "next_day_risk": 47.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.142
            },
            {
              "day": "2023-10-18",
              "mean_glucose": 79.5,
              "meal_risk": 46.2,
              "recovery_risk": 38.6,
              "transition_risk": 47.8,
              "next_day_risk": 47.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.157
            },
            {
              "day": "2023-10-19",
              "mean_glucose": 83.3,
              "meal_risk": 42.8,
              "recovery_risk": 44.5,
              "transition_risk": 45.3,
              "next_day_risk": 47.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.121
            },
            {
              "day": "2023-10-20",
              "mean_glucose": 81.1,
              "meal_risk": 57.1,
              "recovery_risk": 51.8,
              "transition_risk": 52.1,
              "next_day_risk": 46.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.2
            },
            {
              "day": "2023-10-21",
              "mean_glucose": 76.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 44.0,
              "next_day_risk": 47.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.089
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 8,
              "mean_meal_risk": 52.1,
              "mean_recovery_risk": 46.1,
              "mean_peak_glucose": 109.2,
              "mean_carbs": 62.5
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 47.3,
              "mean_recovery_risk": 39.4,
              "mean_peak_glucose": 98.5,
              "mean_carbs": 63.6
            },
            {
              "meal_slot": "dinner",
              "n_meals": 7,
              "mean_meal_risk": 46.5,
              "mean_recovery_risk": 42.9,
              "mean_peak_glucose": 99.4,
              "mean_carbs": 71.0
            },
            {
              "meal_slot": "snack",
              "n_meals": 14,
              "mean_meal_risk": 44.7,
              "mean_recovery_risk": 41.5,
              "mean_peak_glucose": 99.0,
              "mean_carbs": 23.4
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-10-20 16:40:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 118.0,
              "meal_risk": 57.1,
              "recovery_risk": 51.8
            },
            {
              "meal_start": "2023-10-19 21:00:00",
              "meal_type": "dinner",
              "meal_carbs": 131.0,
              "peak_glucose": 102.0,
              "meal_risk": 43.2,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2023-10-19 19:02:00",
              "meal_type": "snack",
              "meal_carbs": 10.0,
              "peak_glucose": 102.0,
              "meal_risk": 36.5,
              "recovery_risk": 45.0
            },
            {
              "meal_start": "2023-10-19 12:51:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 116.0,
              "meal_risk": 56.4,
              "recovery_risk": 44.4
            },
            {
              "meal_start": "2023-10-19 08:30:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 99.0,
              "meal_risk": 34.9,
              "recovery_risk": 36.3
            },
            {
              "meal_start": "2023-10-18 20:46:00",
              "meal_type": "dinner",
              "meal_carbs": 108.0,
              "peak_glucose": 104.0,
              "meal_risk": 50.4,
              "recovery_risk": 45.7
            },
            {
              "meal_start": "2023-10-18 18:08:00",
              "meal_type": "snack",
              "meal_carbs": 14.0,
              "peak_glucose": 98.8,
              "meal_risk": 40.5,
              "recovery_risk": 46.7
            },
            {
              "meal_start": "2023-10-18 15:01:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 90.0,
              "meal_risk": 36.2,
              "recovery_risk": 9.5
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 53.7,
              "estimated_recovery_risk": 47.6,
              "estimated_next_day_instability_risk": 48.4,
              "summary": "For breakfast, target about 45.0-69.5 g carbs, 22.0-44.0 g protein, 10.5-26.2 g fat, and 0.0-3.5 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 49.2,
              "estimated_recovery_risk": 42.0,
              "estimated_next_day_instability_risk": 48.6,
              "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 47.8,
              "estimated_recovery_risk": 43.5,
              "estimated_next_day_instability_risk": 48.6,
              "summary": "For dinner, target about 42.5-106.0 g carbs, 19.5-33.0 g protein, 6.0-10.0 g fat, and 0.5-6.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 44.6,
              "estimated_recovery_risk": 41.1,
              "estimated_next_day_instability_risk": 48.1,
              "summary": "For snack, target about 2.5-13.0 g carbs, 1.0-9.8 g protein, 0.0-0.8 g fat, and 0.0-0.0 g fiber."
            }
          ]
        }
      },
      "top_alerts": [
        {
          "subject": "33",
          "day": "2022-04-18",
          "transition_risk": 99.9,
          "daily_glucose_cv": 0.271,
          "time_above_140_pct": 35.6,
          "excursion_frequency": 0.5,
          "next_day_risk": 61.5
        },
        {
          "subject": "33",
          "day": "2022-04-20",
          "transition_risk": 99.9,
          "daily_glucose_cv": 0.33,
          "time_above_140_pct": 29.4,
          "excursion_frequency": 1.0,
          "next_day_risk": 62.5
        },
        {
          "subject": "33",
          "day": "2022-04-24",
          "transition_risk": 99.9,
          "daily_glucose_cv": 0.366,
          "time_above_140_pct": 31.0,
          "excursion_frequency": 1.0,
          "next_day_risk": 62.3
        },
        {
          "subject": "33",
          "day": "2022-04-22",
          "transition_risk": 99.7,
          "daily_glucose_cv": 0.395,
          "time_above_140_pct": 26.9,
          "excursion_frequency": 0.67,
          "next_day_risk": 62.1
        },
        {
          "subject": "33",
          "day": "2022-04-23",
          "transition_risk": 99.5,
          "daily_glucose_cv": 0.311,
          "time_above_140_pct": 26.4,
          "excursion_frequency": 0.5,
          "next_day_risk": 60.7
        },
        {
          "subject": "33",
          "day": "2022-04-17",
          "transition_risk": 99.4,
          "daily_glucose_cv": 0.421,
          "time_above_140_pct": 22.7,
          "excursion_frequency": 0.33,
          "next_day_risk": 60.6
        },
        {
          "subject": "33",
          "day": "2022-04-19",
          "transition_risk": 99.3,
          "daily_glucose_cv": 0.381,
          "time_above_140_pct": 22.4,
          "excursion_frequency": 0.5,
          "next_day_risk": 60.1
        },
        {
          "subject": "33",
          "day": "2022-04-21",
          "transition_risk": 98.9,
          "daily_glucose_cv": 0.307,
          "time_above_140_pct": 21.3,
          "excursion_frequency": 0.67,
          "next_day_risk": 60.4
        },
        {
          "subject": "21",
          "day": "2020-06-11",
          "transition_risk": 98.1,
          "daily_glucose_cv": 0.271,
          "time_above_140_pct": 13.4,
          "excursion_frequency": 1.0,
          "next_day_risk": 49.2
        },
        {
          "subject": "33",
          "day": "2022-04-26",
          "transition_risk": 97.7,
          "daily_glucose_cv": 0.368,
          "time_above_140_pct": 18.8,
          "excursion_frequency": 0.0,
          "next_day_risk": 58.5
        }
      ],
      "recommendations": [
        {
          "subject": "4",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 17,
          "estimated_meal_response_risk": 48.9,
          "estimated_recovery_risk": 46.9,
          "estimated_next_day_instability_risk": 49.9,
          "carbs_range": "32.0-111.5 g",
          "protein_range": "28.5-52.5 g",
          "fat_range": "11.5-30.5 g",
          "fiber_range": "4.0-6.5 g",
          "summary": "For dinner, target about 32.0-111.5 g carbs, 28.5-52.5 g protein, 11.5-30.5 g fat, and 4.0-6.5 g fiber."
        },
        {
          "subject": "15",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 17,
          "estimated_meal_response_risk": 30.5,
          "estimated_recovery_risk": 30.5,
          "estimated_next_day_instability_risk": 50.5,
          "carbs_range": "0.0-31.0 g",
          "protein_range": "0.0-0.5 g",
          "fat_range": "0.0-0.0 g",
          "fiber_range": "0.0-0.5 g",
          "summary": "For snack, target about 0.0-31.0 g carbs, 0.0-0.5 g protein, 0.0-0.0 g fat, and 0.0-0.5 g fiber."
        },
        {
          "subject": "4",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 15,
          "estimated_meal_response_risk": 49.1,
          "estimated_recovery_risk": 43.6,
          "estimated_next_day_instability_risk": 49.4,
          "carbs_range": "29.0-40.8 g",
          "protein_range": "0.8-11.8 g",
          "fat_range": "2.0-11.0 g",
          "fiber_range": "0.0-2.2 g",
          "summary": "For snack, target about 29.0-40.8 g carbs, 0.8-11.8 g protein, 2.0-11.0 g fat, and 0.0-2.2 g fiber."
        },
        {
          "subject": "31",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 15,
          "estimated_meal_response_risk": 43.0,
          "estimated_recovery_risk": 32.5,
          "estimated_next_day_instability_risk": 48.3,
          "carbs_range": "5.5-28.2 g",
          "protein_range": "1.1-4.9 g",
          "fat_range": "0.2-5.0 g",
          "fiber_range": "0.4-2.5 g",
          "summary": "For snack, target about 5.5-28.2 g carbs, 1.1-4.9 g protein, 0.2-5.0 g fat, and 0.4-2.5 g fiber."
        },
        {
          "subject": "17",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 14,
          "estimated_meal_response_risk": 44.6,
          "estimated_recovery_risk": 41.1,
          "estimated_next_day_instability_risk": 48.1,
          "carbs_range": "2.5-13.0 g",
          "protein_range": "1.0-9.8 g",
          "fat_range": "0.0-0.8 g",
          "fiber_range": "0.0-0.0 g",
          "summary": "For snack, target about 2.5-13.0 g carbs, 1.0-9.8 g protein, 0.0-0.8 g fat, and 0.0-0.0 g fiber."
        },
        {
          "subject": "19",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 13,
          "estimated_meal_response_risk": 46.7,
          "estimated_recovery_risk": 42.3,
          "estimated_next_day_instability_risk": 49.1,
          "carbs_range": "0.0-16.0 g",
          "protein_range": "0.0-2.0 g",
          "fat_range": "0.0-5.0 g",
          "fiber_range": "0.0-14.5 g",
          "summary": "For snack, target about 0.0-16.0 g carbs, 0.0-2.0 g protein, 0.0-5.0 g fat, and 0.0-14.5 g fiber."
        },
        {
          "subject": "31",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 13,
          "estimated_meal_response_risk": 43.2,
          "estimated_recovery_risk": 34.2,
          "estimated_next_day_instability_risk": 48.5,
          "carbs_range": "7.0-65.0 g",
          "protein_range": "1.0-19.0 g",
          "fat_range": "0.0-10.0 g",
          "fiber_range": "0.0-4.0 g",
          "summary": "For dinner, target about 7.0-65.0 g carbs, 1.0-19.0 g protein, 0.0-10.0 g fat, and 0.0-4.0 g fiber."
        },
        {
          "subject": "19",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 12,
          "estimated_meal_response_risk": 49.7,
          "estimated_recovery_risk": 37.6,
          "estimated_next_day_instability_risk": 49.2,
          "carbs_range": "43.0-55.0 g",
          "protein_range": "35.0-42.0 g",
          "fat_range": "13.0-33.0 g",
          "fiber_range": "5.0-5.0 g",
          "summary": "For dinner, target about 43.0-55.0 g carbs, 35.0-42.0 g protein, 13.0-33.0 g fat, and 5.0-5.0 g fiber."
        },
        {
          "subject": "48",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 12,
          "estimated_meal_response_risk": 48.6,
          "estimated_recovery_risk": 43.0,
          "estimated_next_day_instability_risk": 49.5,
          "carbs_range": "45.0-76.0 g",
          "protein_range": "11.0-56.0 g",
          "fat_range": "12.0-33.0 g",
          "fiber_range": "5.0-6.0 g",
          "summary": "For dinner, target about 45.0-76.0 g carbs, 11.0-56.0 g protein, 12.0-33.0 g fat, and 5.0-6.0 g fiber."
        },
        {
          "subject": "1",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 11,
          "estimated_meal_response_risk": 46.7,
          "estimated_recovery_risk": 44.7,
          "estimated_next_day_instability_risk": 48.7,
          "carbs_range": "26.0-32.0 g",
          "protein_range": "4.0-9.0 g",
          "fat_range": "4.0-17.0 g",
          "fiber_range": "0.0-3.0 g",
          "summary": "For dinner, target about 26.0-32.0 g carbs, 4.0-9.0 g protein, 4.0-17.0 g fat, and 0.0-3.0 g fiber."
        },
        {
          "subject": "18",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 11,
          "estimated_meal_response_risk": 54.6,
          "estimated_recovery_risk": 52.3,
          "estimated_next_day_instability_risk": 50.3,
          "carbs_range": "74.0-113.0 g",
          "protein_range": "29.0-51.0 g",
          "fat_range": "19.0-49.0 g",
          "fiber_range": "8.0-15.0 g",
          "summary": "For dinner, target about 74.0-113.0 g carbs, 29.0-51.0 g protein, 19.0-49.0 g fat, and 8.0-15.0 g fiber."
        },
        {
          "subject": "1",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 46.5,
          "estimated_recovery_risk": 40.6,
          "estimated_next_day_instability_risk": 48.8,
          "carbs_range": "55.5-66.0 g",
          "protein_range": "22.0-33.0 g",
          "fat_range": "10.5-18.4 g",
          "fiber_range": "0.0-0.0 g",
          "summary": "For breakfast, target about 55.5-66.0 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-0.0 g fiber."
        },
        {
          "subject": "1",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 46.1,
          "estimated_recovery_risk": 40.8,
          "estimated_next_day_instability_risk": 48.6,
          "carbs_range": "42.2-87.0 g",
          "protein_range": "62.0-85.0 g",
          "fat_range": "19.2-46.5 g",
          "fiber_range": "9.8-12.0 g",
          "summary": "For lunch, target about 42.2-87.0 g carbs, 62.0-85.0 g protein, 19.2-46.5 g fat, and 9.8-12.0 g fiber."
        },
        {
          "subject": "2",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 58.2,
          "estimated_recovery_risk": 47.7,
          "estimated_next_day_instability_risk": 50.7,
          "carbs_range": "66.0-73.0 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-7.0 g",
          "summary": "For breakfast, target about 66.0-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
        },
        {
          "subject": "4",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 54.9,
          "estimated_recovery_risk": 55.5,
          "estimated_next_day_instability_risk": 49.7,
          "carbs_range": "18.2-40.8 g",
          "protein_range": "29.0-68.5 g",
          "fat_range": "14.8-17.8 g",
          "fiber_range": "4.8-13.0 g",
          "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
        },
        {
          "subject": "6",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 52.5,
          "estimated_recovery_risk": 46.7,
          "estimated_next_day_instability_risk": 49.0,
          "carbs_range": "24.0-67.8 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-18.4 g",
          "fiber_range": "0.0-1.8 g",
          "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
        },
        {
          "subject": "6",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 53.6,
          "estimated_recovery_risk": 46.5,
          "estimated_next_day_instability_risk": 49.2,
          "carbs_range": "18.2-50.2 g",
          "protein_range": "57.5-79.0 g",
          "fat_range": "14.8-26.4 g",
          "fiber_range": "4.8-14.2 g",
          "summary": "For lunch, target about 18.2-50.2 g carbs, 57.5-79.0 g protein, 14.8-26.4 g fat, and 4.8-14.2 g fiber."
        },
        {
          "subject": "6",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 50.9,
          "estimated_recovery_risk": 45.6,
          "estimated_next_day_instability_risk": 49.2,
          "carbs_range": "38.5-57.0 g",
          "protein_range": "15.8-21.5 g",
          "fat_range": "14.8-26.2 g",
          "fiber_range": "2.8-19.5 g",
          "summary": "For dinner, target about 38.5-57.0 g carbs, 15.8-21.5 g protein, 14.8-26.2 g fat, and 2.8-19.5 g fiber."
        }
      ],
      "healthy_reference_delta": [
        {
          "key": "meal_response",
          "label": "Meal Response Risk Score",
          "cohort_value": 50.66,
          "healthy_value": 50.66,
          "delta_from_healthy": 0.0
        },
        {
          "key": "recovery",
          "label": "Recovery Risk Score",
          "cohort_value": 45.23,
          "healthy_value": 45.23,
          "delta_from_healthy": 0.0
        },
        {
          "key": "next_day",
          "label": "Next-Day Instability Risk Score",
          "cohort_value": 50.08,
          "healthy_value": 50.08,
          "delta_from_healthy": 0.0
        },
        {
          "key": "transition",
          "label": "State Transition Risk",
          "cohort_value": 59.98,
          "healthy_value": 59.98,
          "delta_from_healthy": 0.0
        }
      ]
    },
    {
      "key": "prediabetes",
      "label": "Prediabetes",
      "summary": {
        "subjects": 14,
        "meals": 488,
        "days": 157,
        "mean_bmi": 36.44,
        "mean_a1c": 5.83,
        "mean_fasting_glucose": 108.6,
        "mean_glucose": 100.9
      },
      "framework": {
        "meal_response": {
          "label": "Meal Response Risk Score",
          "mean_score": 60.8,
          "event_rate_pct": 28.3
        },
        "recovery": {
          "label": "Recovery Risk Score",
          "mean_score": 51.66,
          "event_rate_pct": 72.3
        },
        "next_day": {
          "label": "Next-Day Instability Risk Score",
          "mean_score": 53.15,
          "event_rate_pct": 12.6
        },
        "transition": {
          "label": "State Transition Risk",
          "mean_score": 75.43,
          "alerts": 0
        }
      },
      "narrative": [
        "Meal Response Risk Score: event = peak glucose >= 180 mg/dL or delta glucose >= 54 mg/dL; mean Meal Response Risk Score = 60.80; event rate = 28.3%",
        "Recovery Risk Score: event = no recovery to baseline within 2h; mean Recovery Risk Score = 51.66; event rate = 72.3%",
        "Next-Day Instability Risk Score: event = next-day hyperglycaemia burden with TAR > 25%; mean Next-Day Instability Risk = 53.15; event rate = 12.6%",
        "Glycaemic Drift Score: event = CV increase >= 10% from baseline or sustained elevation >= 3 days; mean Glycaemic Drift Score = 51.90; event rate = 31.2%"
      ],
      "validations": {
        "meal_response": {
          "target": "postprandial_excursion_event",
          "n": 488,
          "auc": 0.99,
          "correlation": 0.773,
          "f1_at_60": 0.721,
          "precision_at_60": 0.563,
          "sensitivity_at_60": 1.0,
          "accuracy_at_60": 0.781
        },
        "recovery": {
          "target": "prolonged_hyperglycaemia_event",
          "n": 488,
          "auc": 0.884,
          "correlation": 0.563,
          "f1_at_60": 0.436,
          "precision_at_60": 0.943,
          "sensitivity_at_60": 0.283,
          "accuracy_at_60": 0.469
        },
        "next_day": {
          "target": "next_day_instability_event",
          "n": 143,
          "auc": 0.94,
          "correlation": 0.642,
          "f1_at_60": 0.686,
          "precision_at_60": 0.706,
          "sensitivity_at_60": 0.667,
          "accuracy_at_60": 0.923
        }
      },
      "subjects": [
        {
          "subject": "20",
          "group": "prediabetes",
          "a1c": 6.4,
          "bmi": 36.0,
          "mean_glucose": 131.5,
          "days_covered": 11.3,
          "n_meals": 35,
          "meal_response_risk_mean": 74.4,
          "recovery_risk_mean": 65.6,
          "next_day_risk_mean": 61.2,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "33",
          "group": "healthy",
          "a1c": 5.6,
          "bmi": 30.0,
          "mean_glucose": 121.4,
          "days_covered": 11.0,
          "n_meals": 25,
          "meal_response_risk_mean": 75.8,
          "recovery_risk_mean": 68.5,
          "next_day_risk_mean": 59.7,
          "transition_risk_max": 99.9,
          "unstable_day_rate_pct": 8.3
        },
        {
          "subject": "13",
          "group": "prediabetes",
          "a1c": 6.2,
          "bmi": 32.6,
          "mean_glucose": 126.1,
          "days_covered": 11.0,
          "n_meals": 38,
          "meal_response_risk_mean": 64.9,
          "recovery_risk_mean": 51.6,
          "next_day_risk_mean": 55.8,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "44",
          "group": "prediabetes",
          "a1c": 6.0,
          "bmi": 35.9,
          "mean_glucose": 111.8,
          "days_covered": 10.1,
          "n_meals": 36,
          "meal_response_risk_mean": 69.4,
          "recovery_risk_mean": 56.9,
          "next_day_risk_mean": 55.7,
          "transition_risk_max": 99.7,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "11",
          "group": "prediabetes",
          "a1c": 5.7,
          "bmi": 29.2,
          "mean_glucose": 110.9,
          "days_covered": 10.3,
          "n_meals": 36,
          "meal_response_risk_mean": 62.3,
          "recovery_risk_mean": 49.1,
          "next_day_risk_mean": 52.5,
          "transition_risk_max": 99.7,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "7",
          "group": "prediabetes",
          "a1c": 5.9,
          "bmi": 27.1,
          "mean_glucose": 54.3,
          "days_covered": 7.2,
          "n_meals": 9,
          "meal_response_risk_mean": 39.6,
          "recovery_risk_mean": 39.8,
          "next_day_risk_mean": 51.9,
          "transition_risk_max": 86.9,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "9",
          "group": "prediabetes",
          "a1c": 5.7,
          "bmi": 37.0,
          "mean_glucose": 106.4,
          "days_covered": 10.0,
          "n_meals": 40,
          "meal_response_risk_mean": 60.5,
          "recovery_risk_mean": 52.1,
          "next_day_risk_mean": 51.7,
          "transition_risk_max": 96.9,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "10",
          "group": "prediabetes",
          "a1c": 5.7,
          "bmi": 35.8,
          "mean_glucose": 92.6,
          "days_covered": 11.2,
          "n_meals": 39,
          "meal_response_risk_mean": 57.1,
          "recovery_risk_mean": 44.7,
          "next_day_risk_mean": 51.7,
          "transition_risk_max": 93.2,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "43",
          "group": "prediabetes",
          "a1c": 6.0,
          "bmi": 49.1,
          "mean_glucose": 89.7,
          "days_covered": 10.1,
          "n_meals": 51,
          "meal_response_risk_mean": 54.3,
          "recovery_risk_mean": 45.3,
          "next_day_risk_mean": 51.4,
          "transition_risk_max": 82.3,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "26",
          "group": "prediabetes",
          "a1c": 5.9,
          "bmi": 31.2,
          "mean_glucose": 97.5,
          "days_covered": 11.3,
          "n_meals": 34,
          "meal_response_risk_mean": 65.9,
          "recovery_risk_mean": 50.1,
          "next_day_risk_mean": 51.3,
          "transition_risk_max": 96.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "8",
          "group": "prediabetes",
          "a1c": 5.8,
          "bmi": 39.9,
          "mean_glucose": 93.8,
          "days_covered": 10.2,
          "n_meals": 30,
          "meal_response_risk_mean": 59.4,
          "recovery_risk_mean": 47.0,
          "next_day_risk_mean": 50.5,
          "transition_risk_max": 92.6,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "18",
          "group": "healthy",
          "a1c": 5.4,
          "bmi": 38.1,
          "mean_glucose": 100.8,
          "days_covered": 19.2,
          "n_meals": 36,
          "meal_response_risk_mean": 57.1,
          "recovery_risk_mean": 56.5,
          "next_day_risk_mean": 50.5,
          "transition_risk_max": 88.3,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "4",
          "group": "healthy",
          "a1c": 5.5,
          "bmi": 42.4,
          "mean_glucose": 91.1,
          "days_covered": 9.9,
          "n_meals": 51,
          "meal_response_risk_mean": 53.7,
          "recovery_risk_mean": 51.0,
          "next_day_risk_mean": 49.6,
          "transition_risk_max": 87.9,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "16",
          "group": "prediabetes",
          "a1c": 5.8,
          "bmi": 45.9,
          "mean_glucose": 84.8,
          "days_covered": 11.3,
          "n_meals": 28,
          "meal_response_risk_mean": 49.1,
          "recovery_risk_mean": 42.1,
          "next_day_risk_mean": 48.2,
          "transition_risk_max": 70.1,
          "unstable_day_rate_pct": 0.0
        }
      ],
      "subject_details": {
        "20": {
          "overview": {
            "subject": "20",
            "group": "prediabetes",
            "a1c": 6.4,
            "bmi": 36.0,
            "mean_glucose": 131.5,
            "days_covered": 11.3,
            "n_meals": 35,
            "meal_response_risk_mean": 74.4,
            "recovery_risk_mean": 65.6,
            "next_day_risk_mean": 61.2,
            "drift_score_mean": 57.3,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-03-19",
              "mean_glucose": 132.8,
              "meal_risk": 78.8,
              "recovery_risk": 76.5,
              "transition_risk": 100.0,
              "next_day_risk": 66.0,
              "time_above_140_pct": 50.3,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2024-03-20",
              "mean_glucose": 137.2,
              "meal_risk": 84.3,
              "recovery_risk": 73.2,
              "transition_risk": 100.0,
              "next_day_risk": 64.6,
              "time_above_140_pct": 49.0,
              "daily_glucose_cv": 0.232
            },
            {
              "day": "2024-03-21",
              "mean_glucose": 124.9,
              "meal_risk": 68.3,
              "recovery_risk": 59.5,
              "transition_risk": 99.7,
              "next_day_risk": 60.7,
              "time_above_140_pct": 28.5,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2024-03-22",
              "mean_glucose": 143.2,
              "meal_risk": 85.2,
              "recovery_risk": 80.6,
              "transition_risk": 100.0,
              "next_day_risk": 65.4,
              "time_above_140_pct": 54.5,
              "daily_glucose_cv": 0.221
            },
            {
              "day": "2024-03-23",
              "mean_glucose": 135.0,
              "meal_risk": 68.5,
              "recovery_risk": 56.8,
              "transition_risk": 99.8,
              "next_day_risk": 60.0,
              "time_above_140_pct": 32.2,
              "daily_glucose_cv": 0.22
            },
            {
              "day": "2024-03-24",
              "mean_glucose": 136.8,
              "meal_risk": 69.1,
              "recovery_risk": 61.5,
              "transition_risk": 99.8,
              "next_day_risk": 61.5,
              "time_above_140_pct": 36.9,
              "daily_glucose_cv": 0.153
            },
            {
              "day": "2024-03-25",
              "mean_glucose": 130.9,
              "meal_risk": 76.7,
              "recovery_risk": 57.8,
              "transition_risk": 99.8,
              "next_day_risk": 60.5,
              "time_above_140_pct": 29.0,
              "daily_glucose_cv": 0.253
            },
            {
              "day": "2024-03-26",
              "mean_glucose": 121.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 98.0,
              "next_day_risk": 57.7,
              "time_above_140_pct": 19.5,
              "daily_glucose_cv": 0.199
            },
            {
              "day": "2024-03-27",
              "mean_glucose": 128.1,
              "meal_risk": 69.5,
              "recovery_risk": 63.6,
              "transition_risk": 99.6,
              "next_day_risk": 60.0,
              "time_above_140_pct": 28.6,
              "daily_glucose_cv": 0.23
            },
            {
              "day": "2024-03-28",
              "mean_glucose": 129.1,
              "meal_risk": 78.4,
              "recovery_risk": 70.3,
              "transition_risk": 99.7,
              "next_day_risk": 60.6,
              "time_above_140_pct": 28.8,
              "daily_glucose_cv": 0.226
            },
            {
              "day": "2024-03-29",
              "mean_glucose": 129.0,
              "meal_risk": 70.1,
              "recovery_risk": 71.2,
              "transition_risk": 99.1,
              "next_day_risk": 58.0,
              "time_above_140_pct": 25.0,
              "daily_glucose_cv": 0.208
            },
            {
              "day": "2024-03-30",
              "mean_glucose": 128.9,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 98.2,
              "next_day_risk": 58.8,
              "time_above_140_pct": 23.7,
              "daily_glucose_cv": 0.155
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 77.0,
              "mean_recovery_risk": 70.2,
              "mean_peak_glucose": 183.4,
              "mean_carbs": 58.2
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 74.9,
              "mean_recovery_risk": 66.7,
              "mean_peak_glucose": 160.9,
              "mean_carbs": 67.6
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 80.3,
              "mean_recovery_risk": 74.8,
              "mean_peak_glucose": 177.9,
              "mean_carbs": 79.7
            },
            {
              "meal_slot": "snack",
              "n_meals": 8,
              "mean_meal_risk": 64.0,
              "mean_recovery_risk": 49.0,
              "mean_peak_glucose": 160.4,
              "mean_carbs": 27.2
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-03-29 04:58:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 162.0,
              "meal_risk": 70.1,
              "recovery_risk": 71.2
            },
            {
              "meal_start": "2024-03-28 18:46:00",
              "meal_type": "dinner",
              "meal_carbs": 159.0,
              "peak_glucose": 180.0,
              "meal_risk": 81.4,
              "recovery_risk": 79.8
            },
            {
              "meal_start": "2024-03-28 10:28:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 210.0,
              "meal_risk": 92.5,
              "recovery_risk": 75.6
            },
            {
              "meal_start": "2024-03-28 05:06:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 166.0,
              "meal_risk": 61.2,
              "recovery_risk": 55.5
            },
            {
              "meal_start": "2024-03-27 19:45:00",
              "meal_type": "dinner",
              "meal_carbs": 17.0,
              "peak_glucose": 171.0,
              "meal_risk": 66.1,
              "recovery_risk": 55.9
            },
            {
              "meal_start": "2024-03-27 16:29:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 187.0,
              "meal_risk": 84.5,
              "recovery_risk": 78.7
            },
            {
              "meal_start": "2024-03-27 10:28:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 126.0,
              "meal_risk": 55.6,
              "recovery_risk": 50.9
            },
            {
              "meal_start": "2024-03-27 09:27:00",
              "meal_type": "snack",
              "meal_carbs": 3.0,
              "peak_glucose": 126.0,
              "meal_risk": 55.7,
              "recovery_risk": 49.6
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 73.6,
              "estimated_recovery_risk": 65.3,
              "estimated_next_day_instability_risk": 58.3,
              "summary": "For breakfast, target about 24.0-73.0 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 69.4,
              "estimated_recovery_risk": 61.2,
              "estimated_next_day_instability_risk": 58.9,
              "summary": "For lunch, target about 18.2-55.5 g carbs, 29.0-70.5 g protein, 14.8-26.0 g fat, and 4.0-7.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 72.8,
              "estimated_recovery_risk": 66.3,
              "estimated_next_day_instability_risk": 58.8,
              "summary": "For dinner, target about 48.5-112.8 g carbs, 12.8-37.8 g protein, 9.8-68.2 g fat, and 1.0-15.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 61.1,
              "estimated_recovery_risk": 48.3,
              "estimated_next_day_instability_risk": 57.8,
              "summary": "For snack, target about 9.5-24.5 g carbs, 0.0-5.0 g protein, 4.0-17.0 g fat, and 0.0-1.0 g fiber."
            }
          ]
        },
        "33": {
          "overview": {
            "subject": "33",
            "group": "healthy",
            "a1c": 5.6,
            "bmi": 30.0,
            "mean_glucose": 121.4,
            "days_covered": 11.0,
            "n_meals": 25,
            "meal_response_risk_mean": 75.8,
            "recovery_risk_mean": 68.5,
            "next_day_risk_mean": 59.7,
            "drift_score_mean": 64.5,
            "transition_risk_max": 99.9,
            "unstable_day_rate_pct": 8.3,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-04-16",
              "mean_glucose": 109.9,
              "meal_risk": 64.2,
              "recovery_risk": 61.1,
              "transition_risk": 89.3,
              "next_day_risk": 57.5,
              "time_above_140_pct": 10.6,
              "daily_glucose_cv": 0.205
            },
            {
              "day": "2022-04-17",
              "mean_glucose": 122.8,
              "meal_risk": 64.8,
              "recovery_risk": 34.0,
              "transition_risk": 99.2,
              "next_day_risk": 60.5,
              "time_above_140_pct": 22.7,
              "daily_glucose_cv": 0.421
            },
            {
              "day": "2022-04-18",
              "mean_glucose": 127.3,
              "meal_risk": 74.9,
              "recovery_risk": 71.0,
              "transition_risk": 99.9,
              "next_day_risk": 61.5,
              "time_above_140_pct": 35.6,
              "daily_glucose_cv": 0.271
            },
            {
              "day": "2022-04-19",
              "mean_glucose": 122.0,
              "meal_risk": 80.2,
              "recovery_risk": 67.5,
              "transition_risk": 99.2,
              "next_day_risk": 60.1,
              "time_above_140_pct": 22.4,
              "daily_glucose_cv": 0.381
            },
            {
              "day": "2022-04-20",
              "mean_glucose": 121.4,
              "meal_risk": 87.9,
              "recovery_risk": 84.5,
              "transition_risk": 99.8,
              "next_day_risk": 62.5,
              "time_above_140_pct": 29.4,
              "daily_glucose_cv": 0.33
            },
            {
              "day": "2022-04-21",
              "mean_glucose": 116.9,
              "meal_risk": 78.0,
              "recovery_risk": 78.4,
              "transition_risk": 99.2,
              "next_day_risk": 60.3,
              "time_above_140_pct": 21.3,
              "daily_glucose_cv": 0.307
            },
            {
              "day": "2022-04-22",
              "mean_glucose": 124.5,
              "meal_risk": 71.4,
              "recovery_risk": 67.9,
              "transition_risk": 99.7,
              "next_day_risk": 62.1,
              "time_above_140_pct": 26.9,
              "daily_glucose_cv": 0.395
            },
            {
              "day": "2022-04-23",
              "mean_glucose": 120.0,
              "meal_risk": 72.4,
              "recovery_risk": 68.1,
              "transition_risk": 99.6,
              "next_day_risk": 60.7,
              "time_above_140_pct": 26.4,
              "daily_glucose_cv": 0.311
            },
            {
              "day": "2022-04-24",
              "mean_glucose": 134.2,
              "meal_risk": 95.1,
              "recovery_risk": 90.3,
              "transition_risk": 99.9,
              "next_day_risk": 62.3,
              "time_above_140_pct": 31.0,
              "daily_glucose_cv": 0.366
            },
            {
              "day": "2022-04-25",
              "mean_glucose": 118.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 96.7,
              "next_day_risk": 56.5,
              "time_above_140_pct": 14.7,
              "daily_glucose_cv": 0.216
            },
            {
              "day": "2022-04-26",
              "mean_glucose": 122.7,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 97.9,
              "next_day_risk": 58.6,
              "time_above_140_pct": 18.8,
              "daily_glucose_cv": 0.368
            },
            {
              "day": "2022-04-27",
              "mean_glucose": 99.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 42.7,
              "next_day_risk": 53.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.094
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 7,
              "mean_meal_risk": 96.0,
              "mean_recovery_risk": 94.6,
              "mean_peak_glucose": 261.7,
              "mean_carbs": 61.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 7,
              "mean_meal_risk": 67.2,
              "mean_recovery_risk": 54.0,
              "mean_peak_glucose": 160.8,
              "mean_carbs": 60.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 69.3,
              "mean_recovery_risk": 61.7,
              "mean_peak_glucose": 157.4,
              "mean_carbs": 26.0
            },
            {
              "meal_slot": "snack",
              "n_meals": 2,
              "mean_meal_risk": 63.9,
              "mean_recovery_risk": 59.3,
              "mean_peak_glucose": 150.0,
              "mean_carbs": 43.5
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-04-24 13:07:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 240.0,
              "meal_risk": 92.2,
              "recovery_risk": 85.7
            },
            {
              "meal_start": "2022-04-24 07:40:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 277.0,
              "meal_risk": 98.1,
              "recovery_risk": 94.9
            },
            {
              "meal_start": "2022-04-23 20:39:00",
              "meal_type": "dinner",
              "meal_carbs": 30.0,
              "peak_glucose": 157.8,
              "meal_risk": 67.3,
              "recovery_risk": 62.0
            },
            {
              "meal_start": "2022-04-23 16:45:00",
              "meal_type": "snack",
              "meal_carbs": 37.0,
              "peak_glucose": 169.0,
              "meal_risk": 77.5,
              "recovery_risk": 74.2
            },
            {
              "meal_start": "2022-04-22 19:41:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 162.1,
              "meal_risk": 82.1,
              "recovery_risk": 92.5
            },
            {
              "meal_start": "2022-04-22 13:13:00",
              "meal_type": "lunch",
              "meal_carbs": 76.0,
              "peak_glucose": 99.5,
              "meal_risk": 33.2,
              "recovery_risk": 15.1
            },
            {
              "meal_start": "2022-04-22 09:56:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 300.0,
              "meal_risk": 98.9,
              "recovery_risk": 95.9
            },
            {
              "meal_start": "2022-04-21 19:17:00",
              "meal_type": "dinner",
              "meal_carbs": 20.0,
              "peak_glucose": 131.0,
              "meal_risk": 50.4,
              "recovery_risk": 52.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 84.0,
              "estimated_recovery_risk": 78.7,
              "estimated_next_day_instability_risk": 57.8,
              "summary": "For breakfast, target about 45.0-69.5 g carbs, 44.0-66.0 g protein, 10.5-26.2 g fat, and 0.0-3.5 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 64.0,
              "estimated_recovery_risk": 52.8,
              "estimated_next_day_instability_risk": 57.7,
              "summary": "For lunch, target about 46.0-84.0 g carbs, 19.5-44.0 g protein, 16.2-30.2 g fat, and 7.0-10.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 65.8,
              "estimated_recovery_risk": 57.9,
              "estimated_next_day_instability_risk": 57.9,
              "summary": "For dinner, target about 3.0-33.8 g carbs, 6.0-50.0 g protein, 5.2-20.0 g fat, and 0.0-1.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 33.0,
              "estimated_meal_response_risk": 58.5,
              "estimated_recovery_risk": 50.7,
              "estimated_next_day_instability_risk": 54.4,
              "summary": "For snack, target about 40.2-46.8 g carbs, 2.0-4.0 g protein, 1.0-1.0 g fat, and 4.8-6.2 g fiber."
            }
          ]
        },
        "13": {
          "overview": {
            "subject": "13",
            "group": "prediabetes",
            "a1c": 6.2,
            "bmi": 32.6,
            "mean_glucose": 126.1,
            "days_covered": 11.0,
            "n_meals": 38,
            "meal_response_risk_mean": 64.9,
            "recovery_risk_mean": 51.6,
            "next_day_risk_mean": 55.8,
            "drift_score_mean": 50.2,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-01-25",
              "mean_glucose": 114.0,
              "meal_risk": 62.5,
              "recovery_risk": 42.5,
              "transition_risk": 85.1,
              "next_day_risk": 54.8,
              "time_above_140_pct": 8.3,
              "daily_glucose_cv": 0.165
            },
            {
              "day": "2024-01-26",
              "mean_glucose": 123.4,
              "meal_risk": 69.9,
              "recovery_risk": 58.8,
              "transition_risk": 97.3,
              "next_day_risk": 55.2,
              "time_above_140_pct": 17.2,
              "daily_glucose_cv": 0.236
            },
            {
              "day": "2024-01-27",
              "mean_glucose": 119.4,
              "meal_risk": 59.0,
              "recovery_risk": 38.0,
              "transition_risk": 86.9,
              "next_day_risk": 54.5,
              "time_above_140_pct": 9.3,
              "daily_glucose_cv": 0.134
            },
            {
              "day": "2024-01-28",
              "mean_glucose": 125.9,
              "meal_risk": 79.6,
              "recovery_risk": 68.4,
              "transition_risk": 99.1,
              "next_day_risk": 55.2,
              "time_above_140_pct": 24.8,
              "daily_glucose_cv": 0.211
            },
            {
              "day": "2024-01-29",
              "mean_glucose": 120.6,
              "meal_risk": 61.2,
              "recovery_risk": 51.3,
              "transition_risk": 97.2,
              "next_day_risk": 54.6,
              "time_above_140_pct": 20.0,
              "daily_glucose_cv": 0.143
            },
            {
              "day": "2024-01-30",
              "mean_glucose": 121.5,
              "meal_risk": 61.4,
              "recovery_risk": 43.7,
              "transition_risk": 86.8,
              "next_day_risk": 54.8,
              "time_above_140_pct": 7.7,
              "daily_glucose_cv": 0.12
            },
            {
              "day": "2024-01-31",
              "mean_glucose": 128.6,
              "meal_risk": 76.4,
              "recovery_risk": 65.6,
              "transition_risk": 98.9,
              "next_day_risk": 56.0,
              "time_above_140_pct": 23.4,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2024-02-01",
              "mean_glucose": 122.0,
              "meal_risk": 61.9,
              "recovery_risk": 56.6,
              "transition_risk": 91.4,
              "next_day_risk": 53.6,
              "time_above_140_pct": 12.8,
              "daily_glucose_cv": 0.122
            },
            {
              "day": "2024-02-02",
              "mean_glucose": 122.2,
              "meal_risk": 56.5,
              "recovery_risk": 49.1,
              "transition_risk": 83.9,
              "next_day_risk": 53.7,
              "time_above_140_pct": 11.0,
              "daily_glucose_cv": 0.109
            },
            {
              "day": "2024-02-03",
              "mean_glucose": 124.0,
              "meal_risk": 60.3,
              "recovery_risk": 34.3,
              "transition_risk": 98.0,
              "next_day_risk": 54.9,
              "time_above_140_pct": 23.3,
              "daily_glucose_cv": 0.132
            },
            {
              "day": "2024-02-04",
              "mean_glucose": 151.0,
              "meal_risk": 72.8,
              "recovery_risk": 62.6,
              "transition_risk": 100.0,
              "next_day_risk": 62.8,
              "time_above_140_pct": 59.6,
              "daily_glucose_cv": 0.209
            },
            {
              "day": "2024-02-05",
              "mean_glucose": 153.8,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 59.3,
              "time_above_140_pct": 58.0,
              "daily_glucose_cv": 0.16
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 71.2,
              "mean_recovery_risk": 57.5,
              "mean_peak_glucose": 174.5,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 71.5,
              "mean_recovery_risk": 53.0,
              "mean_peak_glucose": 157.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 59.4,
              "mean_recovery_risk": 45.7,
              "mean_peak_glucose": 142.3,
              "mean_carbs": 79.9
            },
            {
              "meal_slot": "snack",
              "n_meals": 9,
              "mean_meal_risk": 56.2,
              "mean_recovery_risk": 49.5,
              "mean_peak_glucose": 142.6,
              "mean_carbs": 30.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-02-04 07:07:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 180.0,
              "meal_risk": 72.8,
              "recovery_risk": 62.6
            },
            {
              "meal_start": "2024-02-03 15:58:00",
              "meal_type": "dinner",
              "meal_carbs": 104.0,
              "peak_glucose": 140.0,
              "meal_risk": 52.6,
              "recovery_risk": 6.4
            },
            {
              "meal_start": "2024-02-03 15:00:00",
              "meal_type": "snack",
              "meal_carbs": 72.0,
              "peak_glucose": 142.0,
              "meal_risk": 58.2,
              "recovery_risk": 52.8
            },
            {
              "meal_start": "2024-02-03 11:04:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 155.0,
              "meal_risk": 68.4,
              "recovery_risk": 68.1
            },
            {
              "meal_start": "2024-02-03 08:08:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 172.6,
              "meal_risk": 62.1,
              "recovery_risk": 9.8
            },
            {
              "meal_start": "2024-02-02 18:19:00",
              "meal_type": "snack",
              "meal_carbs": 41.0,
              "peak_glucose": 137.0,
              "meal_risk": 52.8,
              "recovery_risk": 39.2
            },
            {
              "meal_start": "2024-02-02 15:41:00",
              "meal_type": "dinner",
              "meal_carbs": 147.0,
              "peak_glucose": 143.0,
              "meal_risk": 60.7,
              "recovery_risk": 53.5
            },
            {
              "meal_start": "2024-02-02 12:39:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 141.0,
              "meal_risk": 65.9,
              "recovery_risk": 53.0
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 69.9,
              "estimated_recovery_risk": 57.1,
              "estimated_next_day_instability_risk": 54.7,
              "summary": "For breakfast, target about 55.5-67.8 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 67.5,
              "estimated_recovery_risk": 52.4,
              "estimated_next_day_instability_risk": 54.2,
              "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 59.3,
              "estimated_recovery_risk": 47.6,
              "estimated_next_day_instability_risk": 54.1,
              "summary": "For dinner, target about 31.5-84.5 g carbs, 37.2-61.8 g protein, 17.0-26.2 g fat, and 3.8-7.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 56.2,
              "estimated_recovery_risk": 48.7,
              "estimated_next_day_instability_risk": 53.9,
              "summary": "For snack, target about 8.8-26.0 g carbs, 0.8-5.8 g protein, 0.0-8.2 g fat, and 0.0-3.0 g fiber."
            }
          ]
        },
        "44": {
          "overview": {
            "subject": "44",
            "group": "prediabetes",
            "a1c": 6.0,
            "bmi": 35.9,
            "mean_glucose": 111.8,
            "days_covered": 10.1,
            "n_meals": 36,
            "meal_response_risk_mean": 69.4,
            "recovery_risk_mean": 56.9,
            "next_day_risk_mean": 55.7,
            "drift_score_mean": 55.6,
            "transition_risk_max": 99.7,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-10-17",
              "mean_glucose": 87.1,
              "meal_risk": 57.6,
              "recovery_risk": 51.5,
              "transition_risk": 60.3,
              "next_day_risk": 53.7,
              "time_above_140_pct": 1.6,
              "daily_glucose_cv": 0.234
            },
            {
              "day": "2022-10-18",
              "mean_glucose": 105.8,
              "meal_risk": 74.9,
              "recovery_risk": 65.0,
              "transition_risk": 99.4,
              "next_day_risk": 57.1,
              "time_above_140_pct": 20.6,
              "daily_glucose_cv": 0.305
            },
            {
              "day": "2022-10-19",
              "mean_glucose": 111.7,
              "meal_risk": 62.2,
              "recovery_risk": 50.3,
              "transition_risk": 90.5,
              "next_day_risk": 54.4,
              "time_above_140_pct": 9.9,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2022-10-20",
              "mean_glucose": 121.7,
              "meal_risk": 75.0,
              "recovery_risk": 65.8,
              "transition_risk": 99.7,
              "next_day_risk": 57.4,
              "time_above_140_pct": 27.8,
              "daily_glucose_cv": 0.211
            },
            {
              "day": "2022-10-21",
              "mean_glucose": 110.3,
              "meal_risk": 64.4,
              "recovery_risk": 35.8,
              "transition_risk": 98.8,
              "next_day_risk": 55.1,
              "time_above_140_pct": 20.7,
              "daily_glucose_cv": 0.289
            },
            {
              "day": "2022-10-22",
              "mean_glucose": 110.2,
              "meal_risk": 71.8,
              "recovery_risk": 55.3,
              "transition_risk": 93.8,
              "next_day_risk": 55.0,
              "time_above_140_pct": 12.1,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2022-10-23",
              "mean_glucose": 119.0,
              "meal_risk": 77.2,
              "recovery_risk": 65.0,
              "transition_risk": 99.7,
              "next_day_risk": 58.2,
              "time_above_140_pct": 26.9,
              "daily_glucose_cv": 0.232
            },
            {
              "day": "2022-10-24",
              "mean_glucose": 108.6,
              "meal_risk": 66.7,
              "recovery_risk": 60.4,
              "transition_risk": 94.6,
              "next_day_risk": 54.5,
              "time_above_140_pct": 11.9,
              "daily_glucose_cv": 0.217
            },
            {
              "day": "2022-10-25",
              "mean_glucose": 114.9,
              "meal_risk": 67.7,
              "recovery_risk": 57.9,
              "transition_risk": 98.0,
              "next_day_risk": 55.3,
              "time_above_140_pct": 18.2,
              "daily_glucose_cv": 0.285
            },
            {
              "day": "2022-10-26",
              "mean_glucose": 122.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 98.0,
              "next_day_risk": 54.2,
              "time_above_140_pct": 21.3,
              "daily_glucose_cv": 0.175
            },
            {
              "day": "2022-10-27",
              "mean_glucose": 106.0,
              "meal_risk": 74.4,
              "recovery_risk": 64.2,
              "transition_risk": 97.0,
              "next_day_risk": 57.3,
              "time_above_140_pct": 12.0,
              "daily_glucose_cv": 0.177
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 78.9,
              "mean_recovery_risk": 69.3,
              "mean_peak_glucose": 166.8,
              "mean_carbs": 62.9
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 57.8,
              "mean_recovery_risk": 45.0,
              "mean_peak_glucose": 121.3,
              "mean_carbs": 61.6
            },
            {
              "meal_slot": "dinner",
              "n_meals": 12,
              "mean_meal_risk": 68.6,
              "mean_recovery_risk": 58.7,
              "mean_peak_glucose": 160.1,
              "mean_carbs": 41.9
            },
            {
              "meal_slot": "snack",
              "n_meals": 6,
              "mean_meal_risk": 74.0,
              "mean_recovery_risk": 52.4,
              "mean_peak_glucose": 164.0,
              "mean_carbs": 17.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-10-27 08:58:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 159.0,
              "meal_risk": 74.4,
              "recovery_risk": 64.2
            },
            {
              "meal_start": "2022-10-25 21:51:00",
              "meal_type": "dinner",
              "meal_carbs": 17.0,
              "peak_glucose": 141.0,
              "meal_risk": 57.5,
              "recovery_risk": 52.3
            },
            {
              "meal_start": "2022-10-25 20:36:00",
              "meal_type": "dinner",
              "meal_carbs": 50.0,
              "peak_glucose": 141.0,
              "meal_risk": 54.5,
              "recovery_risk": 43.4
            },
            {
              "meal_start": "2022-10-25 16:42:00",
              "meal_type": "dinner",
              "meal_carbs": 49.0,
              "peak_glucose": 214.0,
              "meal_risk": 93.7,
              "recovery_risk": 78.0
            },
            {
              "meal_start": "2022-10-25 11:04:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 114.0,
              "meal_risk": 51.3,
              "recovery_risk": 51.1
            },
            {
              "meal_start": "2022-10-25 07:45:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 173.0,
              "meal_risk": 81.2,
              "recovery_risk": 64.7
            },
            {
              "meal_start": "2022-10-24 16:22:00",
              "meal_type": "dinner",
              "meal_carbs": 12.0,
              "peak_glucose": 148.0,
              "meal_risk": 57.8,
              "recovery_risk": 54.4
            },
            {
              "meal_start": "2022-10-24 15:25:00",
              "meal_type": "snack",
              "meal_carbs": 10.0,
              "peak_glucose": 148.0,
              "meal_risk": 70.7,
              "recovery_risk": 59.8
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 74.8,
              "estimated_recovery_risk": 64.7,
              "estimated_next_day_instability_risk": 54.9,
              "summary": "For breakfast, target about 55.5-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 58.4,
              "estimated_recovery_risk": 47.2,
              "estimated_next_day_instability_risk": 54.7,
              "summary": "For lunch, target about 18.2-83.8 g carbs, 28.2-71.5 g protein, 14.8-45.1 g fat, and 4.8-12.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 65.8,
              "estimated_recovery_risk": 56.4,
              "estimated_next_day_instability_risk": 54.7,
              "summary": "For dinner, target about 13.0-33.0 g carbs, 3.0-6.0 g protein, 3.0-7.0 g fat, and 0.0-1.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.0,
              "estimated_recovery_risk": 50.0,
              "estimated_next_day_instability_risk": 54.6,
              "summary": "For snack, target about 15.0-21.5 g carbs, 2.5-4.0 g protein, 7.5-13.0 g fat, and 1.0-2.5 g fiber."
            }
          ]
        },
        "11": {
          "overview": {
            "subject": "11",
            "group": "prediabetes",
            "a1c": 5.7,
            "bmi": 29.2,
            "mean_glucose": 110.9,
            "days_covered": 10.3,
            "n_meals": 36,
            "meal_response_risk_mean": 62.3,
            "recovery_risk_mean": 49.1,
            "next_day_risk_mean": 52.5,
            "drift_score_mean": 49.4,
            "transition_risk_max": 99.7,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-10-03",
              "mean_glucose": 107.4,
              "meal_risk": 56.0,
              "recovery_risk": 46.3,
              "transition_risk": 45.5,
              "next_day_risk": 51.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.13
            },
            {
              "day": "2020-10-04",
              "mean_glucose": 109.0,
              "meal_risk": 70.8,
              "recovery_risk": 55.3,
              "transition_risk": 84.2,
              "next_day_risk": 52.9,
              "time_above_140_pct": 5.5,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2020-10-05",
              "mean_glucose": 108.0,
              "meal_risk": 57.5,
              "recovery_risk": 53.5,
              "transition_risk": 87.6,
              "next_day_risk": 53.1,
              "time_above_140_pct": 9.1,
              "daily_glucose_cv": 0.197
            },
            {
              "day": "2020-10-06",
              "mean_glucose": 120.6,
              "meal_risk": 71.3,
              "recovery_risk": 59.2,
              "transition_risk": 99.7,
              "next_day_risk": 54.0,
              "time_above_140_pct": 27.7,
              "daily_glucose_cv": 0.272
            },
            {
              "day": "2020-10-07",
              "mean_glucose": 105.5,
              "meal_risk": 50.8,
              "recovery_risk": 35.7,
              "transition_risk": 57.0,
              "next_day_risk": 51.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.096
            },
            {
              "day": "2020-10-08",
              "mean_glucose": 110.1,
              "meal_risk": 66.7,
              "recovery_risk": 44.1,
              "transition_risk": 79.9,
              "next_day_risk": 52.3,
              "time_above_140_pct": 5.3,
              "daily_glucose_cv": 0.169
            },
            {
              "day": "2020-10-09",
              "mean_glucose": 113.8,
              "meal_risk": 60.9,
              "recovery_risk": 35.6,
              "transition_risk": 78.3,
              "next_day_risk": 52.7,
              "time_above_140_pct": 6.8,
              "daily_glucose_cv": 0.133
            },
            {
              "day": "2020-10-10",
              "mean_glucose": 106.8,
              "meal_risk": 52.5,
              "recovery_risk": 49.0,
              "transition_risk": 76.2,
              "next_day_risk": 52.2,
              "time_above_140_pct": 6.4,
              "daily_glucose_cv": 0.145
            },
            {
              "day": "2020-10-11",
              "mean_glucose": 109.9,
              "meal_risk": 72.8,
              "recovery_risk": 63.0,
              "transition_risk": 94.7,
              "next_day_risk": 52.8,
              "time_above_140_pct": 13.8,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2020-10-12",
              "mean_glucose": 114.1,
              "meal_risk": 68.1,
              "recovery_risk": 38.4,
              "transition_risk": 93.7,
              "next_day_risk": 53.2,
              "time_above_140_pct": 12.4,
              "daily_glucose_cv": 0.21
            },
            {
              "day": "2020-10-13",
              "mean_glucose": 113.9,
              "meal_risk": 71.6,
              "recovery_risk": 63.5,
              "transition_risk": 95.9,
              "next_day_risk": 51.5,
              "time_above_140_pct": 16.4,
              "daily_glucose_cv": 0.202
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 71.0,
              "mean_recovery_risk": 54.5,
              "mean_peak_glucose": 161.3,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 62.0,
              "mean_recovery_risk": 49.1,
              "mean_peak_glucose": 147.9,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 64.9,
              "mean_recovery_risk": 52.3,
              "mean_peak_glucose": 145.3,
              "mean_carbs": 80.8
            },
            {
              "meal_slot": "snack",
              "n_meals": 7,
              "mean_meal_risk": 46.8,
              "mean_recovery_risk": 37.0,
              "mean_peak_glucose": 120.3,
              "mean_carbs": 16.1
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-10-13 07:31:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 158.0,
              "meal_risk": 71.6,
              "recovery_risk": 63.5
            },
            {
              "meal_start": "2020-10-12 13:17:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 205.0,
              "meal_risk": 74.5,
              "recovery_risk": 36.5
            },
            {
              "meal_start": "2020-10-12 07:30:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 159.0,
              "meal_risk": 61.8,
              "recovery_risk": 40.2
            },
            {
              "meal_start": "2020-10-11 18:33:00",
              "meal_type": "dinner",
              "meal_carbs": 54.0,
              "peak_glucose": 165.0,
              "meal_risk": 79.7,
              "recovery_risk": 65.8
            },
            {
              "meal_start": "2020-10-11 11:54:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 141.0,
              "meal_risk": 68.6,
              "recovery_risk": 53.4
            },
            {
              "meal_start": "2020-10-11 07:30:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 151.0,
              "meal_risk": 70.3,
              "recovery_risk": 69.7
            },
            {
              "meal_start": "2020-10-10 19:04:00",
              "meal_type": "dinner",
              "meal_carbs": 63.0,
              "peak_glucose": 159.0,
              "meal_risk": 69.6,
              "recovery_risk": 58.3
            },
            {
              "meal_start": "2020-10-10 15:49:00",
              "meal_type": "snack",
              "meal_carbs": 24.0,
              "peak_glucose": 122.0,
              "meal_risk": 52.7,
              "recovery_risk": 52.4
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 69.8,
              "estimated_recovery_risk": 55.2,
              "estimated_next_day_instability_risk": 52.8,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 61.2,
              "estimated_recovery_risk": 49.8,
              "estimated_next_day_instability_risk": 52.8,
              "summary": "For lunch, target about 18.2-49.0 g carbs, 29.5-68.5 g protein, 14.8-17.4 g fat, and 4.8-11.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 62.9,
              "estimated_recovery_risk": 51.8,
              "estimated_next_day_instability_risk": 52.7,
              "summary": "For dinner, target about 49.0-164.2 g carbs, 56.8-80.8 g protein, 26.5-56.2 g fat, and 6.0-15.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.7,
              "estimated_recovery_risk": 41.3,
              "estimated_next_day_instability_risk": 52.5,
              "summary": "For snack, target about 4.5-18.5 g carbs, 2.0-16.0 g protein, 0.5-2.0 g fat, and 1.0-3.5 g fiber."
            }
          ]
        },
        "7": {
          "overview": {
            "subject": "7",
            "group": "prediabetes",
            "a1c": 5.9,
            "bmi": 27.1,
            "mean_glucose": 54.3,
            "days_covered": 7.2,
            "n_meals": 9,
            "meal_response_risk_mean": 39.6,
            "recovery_risk_mean": 39.8,
            "next_day_risk_mean": 51.9,
            "drift_score_mean": 50.1,
            "transition_risk_max": 86.9,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-11-03",
              "mean_glucose": 82.5,
              "meal_risk": 53.3,
              "recovery_risk": 46.5,
              "transition_risk": 86.9,
              "next_day_risk": 50.6,
              "time_above_140_pct": 6.0,
              "daily_glucose_cv": 0.338
            },
            {
              "day": "2023-11-04",
              "mean_glucose": 65.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 71.3,
              "next_day_risk": 50.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.369
            },
            {
              "day": "2023-11-05",
              "mean_glucose": 55.0,
              "meal_risk": 38.0,
              "recovery_risk": 35.1,
              "transition_risk": 56.9,
              "next_day_risk": 51.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.257
            },
            {
              "day": "2023-11-06",
              "mean_glucose": 50.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 60.8,
              "next_day_risk": 51.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.318
            },
            {
              "day": "2023-11-07",
              "mean_glucose": 45.7,
              "meal_risk": 43.3,
              "recovery_risk": 40.5,
              "transition_risk": 55.3,
              "next_day_risk": 52.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.242
            },
            {
              "day": "2023-11-08",
              "mean_glucose": 52.1,
              "meal_risk": 37.0,
              "recovery_risk": 38.0,
              "transition_risk": 56.2,
              "next_day_risk": 52.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.264
            },
            {
              "day": "2023-11-09",
              "mean_glucose": 45.7,
              "meal_risk": 18.5,
              "recovery_risk": 38.2,
              "transition_risk": 52.1,
              "next_day_risk": 53.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.204
            },
            {
              "day": "2023-11-10",
              "mean_glucose": 47.9,
              "meal_risk": 38.2,
              "recovery_risk": 39.9,
              "transition_risk": 63.9,
              "next_day_risk": 53.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.346
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 1,
              "mean_meal_risk": 44.1,
              "mean_recovery_risk": 47.7,
              "mean_peak_glucose": 76.0,
              "mean_carbs": 24.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 4,
              "mean_meal_risk": 39.2,
              "mean_recovery_risk": 37.7,
              "mean_peak_glucose": 88.2,
              "mean_carbs": 39.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 3,
              "mean_meal_risk": 41.9,
              "mean_recovery_risk": 43.6,
              "mean_peak_glucose": 82.3,
              "mean_carbs": 31.0
            },
            {
              "meal_slot": "snack",
              "n_meals": 1,
              "mean_meal_risk": 29.9,
              "mean_recovery_risk": 28.3,
              "mean_peak_glucose": 60.0,
              "mean_carbs": 25.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-11-10 12:24:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 84.0,
              "meal_risk": 38.2,
              "recovery_risk": 39.9
            },
            {
              "meal_start": "2023-11-09 18:30:00",
              "meal_type": "dinner",
              "meal_carbs": 40.0,
              "peak_glucose": 49.0,
              "meal_risk": 18.5,
              "recovery_risk": 38.2
            },
            {
              "meal_start": "2023-11-08 20:29:00",
              "meal_type": "snack",
              "meal_carbs": 25.0,
              "peak_glucose": 60.0,
              "meal_risk": 29.9,
              "recovery_risk": 28.3
            },
            {
              "meal_start": "2023-11-08 08:47:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 76.0,
              "meal_risk": 44.1,
              "recovery_risk": 47.7
            },
            {
              "meal_start": "2023-11-07 12:18:00",
              "meal_type": "lunch",
              "meal_carbs": 19.0,
              "peak_glucose": 84.0,
              "meal_risk": 43.3,
              "recovery_risk": 40.5
            },
            {
              "meal_start": "2023-11-05 19:18:00",
              "meal_type": "dinner",
              "meal_carbs": 29.0,
              "peak_glucose": 88.9,
              "meal_risk": 40.1,
              "recovery_risk": 45.7
            },
            {
              "meal_start": "2023-11-05 12:23:00",
              "meal_type": "lunch",
              "meal_carbs": 16.0,
              "peak_glucose": 79.0,
              "meal_risk": 35.8,
              "recovery_risk": 24.5
            },
            {
              "meal_start": "2023-11-03 19:26:00",
              "meal_type": "dinner",
              "meal_carbs": 24.0,
              "peak_glucose": 109.0,
              "meal_risk": 67.1,
              "recovery_risk": 47.0
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 17.0,
              "estimated_meal_response_risk": 63.5,
              "estimated_recovery_risk": 55.1,
              "estimated_next_day_instability_risk": 52.8,
              "summary": "For breakfast, target about 24.0-24.0 g carbs, 22.0-22.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 67.0,
              "estimated_meal_response_risk": 50.5,
              "estimated_recovery_risk": 45.2,
              "estimated_next_day_instability_risk": 52.6,
              "summary": "For lunch, target about 22.0-34.0 g carbs, 68.5-73.5 g protein, 14.8-16.2 g fat, and 6.2-10.8 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 50.0,
              "estimated_meal_response_risk": 52.8,
              "estimated_recovery_risk": 48.2,
              "estimated_next_day_instability_risk": 52.6,
              "summary": "For dinner, target about 26.5-34.5 g carbs, 26.5-34.5 g protein, 8.5-19.0 g fat, and 0.0-8.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 17.0,
              "estimated_meal_response_risk": 51.9,
              "estimated_recovery_risk": 44.0,
              "estimated_next_day_instability_risk": 52.5,
              "summary": "For snack, target about 25.0-25.0 g carbs, 1.0-1.0 g protein, 0.0-0.0 g fat, and 4.0-4.0 g fiber."
            }
          ]
        },
        "9": {
          "overview": {
            "subject": "9",
            "group": "prediabetes",
            "a1c": 5.7,
            "bmi": 37.0,
            "mean_glucose": 106.4,
            "days_covered": 10.0,
            "n_meals": 40,
            "meal_response_risk_mean": 60.5,
            "recovery_risk_mean": 52.1,
            "next_day_risk_mean": 51.7,
            "drift_score_mean": 48.7,
            "transition_risk_max": 96.9,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-09-15",
              "mean_glucose": 85.4,
              "meal_risk": 59.9,
              "recovery_risk": 53.5,
              "transition_risk": 65.9,
              "next_day_risk": 53.9,
              "time_above_140_pct": 1.2,
              "daily_glucose_cv": 0.205
            },
            {
              "day": "2020-09-16",
              "mean_glucose": 105.0,
              "meal_risk": 76.6,
              "recovery_risk": 61.0,
              "transition_risk": 96.9,
              "next_day_risk": 53.0,
              "time_above_140_pct": 13.4,
              "daily_glucose_cv": 0.284
            },
            {
              "day": "2020-09-17",
              "mean_glucose": 103.9,
              "meal_risk": 65.4,
              "recovery_risk": 52.1,
              "transition_risk": 74.5,
              "next_day_risk": 51.4,
              "time_above_140_pct": 3.1,
              "daily_glucose_cv": 0.157
            },
            {
              "day": "2020-09-18",
              "mean_glucose": 110.0,
              "meal_risk": 58.8,
              "recovery_risk": 48.7,
              "transition_risk": 84.2,
              "next_day_risk": 50.7,
              "time_above_140_pct": 8.0,
              "daily_glucose_cv": 0.219
            },
            {
              "day": "2020-09-19",
              "mean_glucose": 102.6,
              "meal_risk": 54.8,
              "recovery_risk": 55.0,
              "transition_risk": 59.8,
              "next_day_risk": 52.1,
              "time_above_140_pct": 1.2,
              "daily_glucose_cv": 0.131
            },
            {
              "day": "2020-09-20",
              "mean_glucose": 105.2,
              "meal_risk": 51.4,
              "recovery_risk": 47.2,
              "transition_risk": 78.3,
              "next_day_risk": 52.3,
              "time_above_140_pct": 6.2,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2020-09-21",
              "mean_glucose": 116.0,
              "meal_risk": 60.5,
              "recovery_risk": 51.0,
              "transition_risk": 91.9,
              "next_day_risk": 51.3,
              "time_above_140_pct": 12.8,
              "daily_glucose_cv": 0.178
            },
            {
              "day": "2020-09-22",
              "mean_glucose": 109.8,
              "meal_risk": 56.1,
              "recovery_risk": 51.7,
              "transition_risk": 89.8,
              "next_day_risk": 51.0,
              "time_above_140_pct": 10.6,
              "daily_glucose_cv": 0.245
            },
            {
              "day": "2020-09-23",
              "mean_glucose": 112.9,
              "meal_risk": 61.0,
              "recovery_risk": 52.9,
              "transition_risk": 90.2,
              "next_day_risk": 51.4,
              "time_above_140_pct": 11.1,
              "daily_glucose_cv": 0.163
            },
            {
              "day": "2020-09-24",
              "mean_glucose": 103.8,
              "meal_risk": 65.8,
              "recovery_risk": 49.6,
              "transition_risk": 67.0,
              "next_day_risk": 51.8,
              "time_above_140_pct": 2.6,
              "daily_glucose_cv": 0.155
            },
            {
              "day": "2020-09-25",
              "mean_glucose": 109.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 45.9,
              "next_day_risk": 50.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.045
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 65.2,
              "mean_recovery_risk": 52.2,
              "mean_peak_glucose": 146.4,
              "mean_carbs": 57.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 55.0,
              "mean_recovery_risk": 49.6,
              "mean_peak_glucose": 110.3,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 8,
              "mean_meal_risk": 54.7,
              "mean_recovery_risk": 48.7,
              "mean_peak_glucose": 128.4,
              "mean_carbs": 54.6
            },
            {
              "meal_slot": "snack",
              "n_meals": 13,
              "mean_meal_risk": 65.2,
              "mean_recovery_risk": 56.2,
              "mean_peak_glucose": 142.1,
              "mean_carbs": 25.1
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-09-24 19:29:00",
              "meal_type": "dinner",
              "meal_carbs": 133.0,
              "peak_glucose": 142.0,
              "meal_risk": 72.4,
              "recovery_risk": 55.9
            },
            {
              "meal_start": "2020-09-24 12:29:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 127.0,
              "meal_risk": 65.0,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2020-09-24 07:51:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 142.0,
              "meal_risk": 60.1,
              "recovery_risk": 40.6
            },
            {
              "meal_start": "2020-09-23 20:22:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 150.0,
              "meal_risk": 58.0,
              "recovery_risk": 41.0
            },
            {
              "meal_start": "2020-09-23 17:59:00",
              "meal_type": "dinner",
              "meal_carbs": 124.0,
              "peak_glucose": 155.0,
              "meal_risk": 73.6,
              "recovery_risk": 61.9
            },
            {
              "meal_start": "2020-09-23 12:23:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 103.0,
              "meal_risk": 47.8,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2020-09-23 07:29:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 151.0,
              "meal_risk": 64.7,
              "recovery_risk": 56.3
            },
            {
              "meal_start": "2020-09-22 21:55:00",
              "meal_type": "snack",
              "meal_carbs": 26.0,
              "peak_glucose": 145.0,
              "meal_risk": 64.9,
              "recovery_risk": 51.8
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.0,
              "estimated_recovery_risk": 53.7,
              "estimated_next_day_instability_risk": 52.1,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 56.5,
              "estimated_recovery_risk": 50.1,
              "estimated_next_day_instability_risk": 52.3,
              "summary": "For lunch, target about 42.2-84.0 g carbs, 62.0-85.0 g protein, 19.2-46.6 g fat, and 10.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 56.4,
              "estimated_recovery_risk": 49.6,
              "estimated_next_day_instability_risk": 52.2,
              "summary": "For dinner, target about 26.0-57.5 g carbs, 21.5-33.5 g protein, 20.0-32.5 g fat, and 4.0-5.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 62.7,
              "estimated_recovery_risk": 53.7,
              "estimated_next_day_instability_risk": 52.0,
              "summary": "For snack, target about 5.0-25.0 g carbs, 1.0-1.0 g protein, 0.0-1.0 g fat, and 2.0-3.0 g fiber."
            }
          ]
        },
        "10": {
          "overview": {
            "subject": "10",
            "group": "prediabetes",
            "a1c": 5.7,
            "bmi": 35.8,
            "mean_glucose": 92.6,
            "days_covered": 11.2,
            "n_meals": 39,
            "meal_response_risk_mean": 57.1,
            "recovery_risk_mean": 44.7,
            "next_day_risk_mean": 51.7,
            "drift_score_mean": 46.1,
            "transition_risk_max": 93.2,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-06-21",
              "mean_glucose": 91.7,
              "meal_risk": 55.5,
              "recovery_risk": 44.4,
              "transition_risk": 66.7,
              "next_day_risk": 53.0,
              "time_above_140_pct": 1.8,
              "daily_glucose_cv": 0.184
            },
            {
              "day": "2020-06-22",
              "mean_glucose": 100.1,
              "meal_risk": 70.1,
              "recovery_risk": 41.6,
              "transition_risk": 89.6,
              "next_day_risk": 52.5,
              "time_above_140_pct": 7.4,
              "daily_glucose_cv": 0.25
            },
            {
              "day": "2020-06-23",
              "mean_glucose": 85.7,
              "meal_risk": 63.8,
              "recovery_risk": 49.0,
              "transition_risk": 85.3,
              "next_day_risk": 53.5,
              "time_above_140_pct": 4.7,
              "daily_glucose_cv": 0.317
            },
            {
              "day": "2020-06-24",
              "mean_glucose": 74.3,
              "meal_risk": 63.8,
              "recovery_risk": 45.9,
              "transition_risk": 91.0,
              "next_day_risk": 55.5,
              "time_above_140_pct": 5.5,
              "daily_glucose_cv": 0.435
            },
            {
              "day": "2020-06-25",
              "mean_glucose": 84.0,
              "meal_risk": 48.1,
              "recovery_risk": 40.5,
              "transition_risk": 62.9,
              "next_day_risk": 51.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.184
            },
            {
              "day": "2020-06-26",
              "mean_glucose": 90.9,
              "meal_risk": 48.4,
              "recovery_risk": 37.0,
              "transition_risk": 47.5,
              "next_day_risk": 51.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.149
            },
            {
              "day": "2020-06-27",
              "mean_glucose": 93.9,
              "meal_risk": 56.6,
              "recovery_risk": 51.7,
              "transition_risk": 55.1,
              "next_day_risk": 50.7,
              "time_above_140_pct": 1.0,
              "daily_glucose_cv": 0.187
            },
            {
              "day": "2020-06-28",
              "mean_glucose": 92.0,
              "meal_risk": 55.7,
              "recovery_risk": 51.7,
              "transition_risk": 47.9,
              "next_day_risk": 50.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.153
            },
            {
              "day": "2020-06-29",
              "mean_glucose": 104.8,
              "meal_risk": 61.2,
              "recovery_risk": 49.7,
              "transition_risk": 93.2,
              "next_day_risk": 51.1,
              "time_above_140_pct": 11.9,
              "daily_glucose_cv": 0.227
            },
            {
              "day": "2020-06-30",
              "mean_glucose": 97.4,
              "meal_risk": 51.2,
              "recovery_risk": 38.3,
              "transition_risk": 54.8,
              "next_day_risk": 50.6,
              "time_above_140_pct": 0.2,
              "daily_glucose_cv": 0.154
            },
            {
              "day": "2020-07-01",
              "mean_glucose": 102.7,
              "meal_risk": 62.6,
              "recovery_risk": 52.4,
              "transition_risk": 81.2,
              "next_day_risk": 50.0,
              "time_above_140_pct": 7.8,
              "daily_glucose_cv": 0.208
            },
            {
              "day": "2020-07-02",
              "mean_glucose": 94.8,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 49.7,
              "next_day_risk": 50.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.161
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 63.9,
              "mean_recovery_risk": 50.3,
              "mean_peak_glucose": 134.5,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 65.8,
              "mean_recovery_risk": 55.1,
              "mean_peak_glucose": 133.8,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 6,
              "mean_meal_risk": 39.9,
              "mean_recovery_risk": 28.2,
              "mean_peak_glucose": 105.2,
              "mean_carbs": 31.7
            },
            {
              "meal_slot": "snack",
              "n_meals": 13,
              "mean_meal_risk": 53.1,
              "mean_recovery_risk": 40.1,
              "mean_peak_glucose": 120.1,
              "mean_carbs": 25.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-07-01 05:40:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 131.0,
              "meal_risk": 62.6,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2020-06-30 17:40:00",
              "meal_type": "snack",
              "meal_carbs": 24.0,
              "peak_glucose": 121.0,
              "meal_risk": 47.3,
              "recovery_risk": 23.2
            },
            {
              "meal_start": "2020-06-30 16:27:00",
              "meal_type": "snack",
              "meal_carbs": 2.0,
              "peak_glucose": 123.0,
              "meal_risk": 45.0,
              "recovery_risk": 38.9
            },
            {
              "meal_start": "2020-06-30 13:19:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 129.0,
              "meal_risk": 50.0,
              "recovery_risk": 48.2
            },
            {
              "meal_start": "2020-06-30 07:27:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 141.0,
              "meal_risk": 62.5,
              "recovery_risk": 43.0
            },
            {
              "meal_start": "2020-06-29 20:07:00",
              "meal_type": "dinner",
              "meal_carbs": 28.0,
              "peak_glucose": 122.0,
              "meal_risk": 30.6,
              "recovery_risk": 32.2
            },
            {
              "meal_start": "2020-06-29 17:19:00",
              "meal_type": "snack",
              "meal_carbs": 82.0,
              "peak_glucose": 189.0,
              "meal_risk": 77.3,
              "recovery_risk": 42.2
            },
            {
              "meal_start": "2020-06-29 11:10:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 120.0,
              "meal_risk": 63.7,
              "recovery_risk": 51.9
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 65.1,
              "estimated_recovery_risk": 52.4,
              "estimated_next_day_instability_risk": 52.1,
              "summary": "For breakfast, target about 24.0-73.0 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 63.8,
              "estimated_recovery_risk": 53.8,
              "estimated_next_day_instability_risk": 52.4,
              "summary": "For lunch, target about 34.8-93.2 g carbs, 41.0-78.0 g protein, 16.5-26.0 g fat, and 4.0-7.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 48.7,
              "estimated_recovery_risk": 38.5,
              "estimated_next_day_instability_risk": 52.9,
              "summary": "For dinner, target about 26.0-53.0 g carbs, 4.0-11.5 g protein, 3.0-5.0 g fat, and 0.0-3.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 54.0,
              "estimated_recovery_risk": 42.1,
              "estimated_next_day_instability_risk": 52.1,
              "summary": "For snack, target about 2.0-24.0 g carbs, 1.0-10.0 g protein, 3.0-8.0 g fat, and 0.0-3.0 g fiber."
            }
          ]
        },
        "43": {
          "overview": {
            "subject": "43",
            "group": "prediabetes",
            "a1c": 6.0,
            "bmi": 49.1,
            "mean_glucose": 89.7,
            "days_covered": 10.1,
            "n_meals": 51,
            "meal_response_risk_mean": 54.3,
            "recovery_risk_mean": 45.3,
            "next_day_risk_mean": 51.4,
            "drift_score_mean": 52.2,
            "transition_risk_max": 82.3,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2025-10-14",
              "mean_glucose": 77.7,
              "meal_risk": 50.4,
              "recovery_risk": 51.8,
              "transition_risk": 47.6,
              "next_day_risk": 52.1,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2025-10-15",
              "mean_glucose": 94.7,
              "meal_risk": 56.5,
              "recovery_risk": 48.1,
              "transition_risk": 78.1,
              "next_day_risk": 51.7,
              "time_above_140_pct": 2.8,
              "daily_glucose_cv": 0.24
            },
            {
              "day": "2025-10-16",
              "mean_glucose": 94.4,
              "meal_risk": 56.0,
              "recovery_risk": 51.0,
              "transition_risk": 72.9,
              "next_day_risk": 51.0,
              "time_above_140_pct": 3.8,
              "daily_glucose_cv": 0.193
            },
            {
              "day": "2025-10-17",
              "mean_glucose": 94.3,
              "meal_risk": 63.4,
              "recovery_risk": 50.6,
              "transition_risk": 82.3,
              "next_day_risk": 50.7,
              "time_above_140_pct": 4.8,
              "daily_glucose_cv": 0.272
            },
            {
              "day": "2025-10-18",
              "mean_glucose": 88.3,
              "meal_risk": 49.7,
              "recovery_risk": 41.3,
              "transition_risk": 58.5,
              "next_day_risk": 51.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.199
            },
            {
              "day": "2025-10-19",
              "mean_glucose": 79.6,
              "meal_risk": 53.1,
              "recovery_risk": 35.9,
              "transition_risk": 72.9,
              "next_day_risk": 51.9,
              "time_above_140_pct": 1.8,
              "daily_glucose_cv": 0.311
            },
            {
              "day": "2025-10-20",
              "mean_glucose": 88.0,
              "meal_risk": 66.6,
              "recovery_risk": 50.6,
              "transition_risk": 68.9,
              "next_day_risk": 52.3,
              "time_above_140_pct": 0.5,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2025-10-21",
              "mean_glucose": 93.3,
              "meal_risk": 48.0,
              "recovery_risk": 47.5,
              "transition_risk": 68.9,
              "next_day_risk": 50.7,
              "time_above_140_pct": 2.8,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2025-10-22",
              "mean_glucose": 97.0,
              "meal_risk": 51.4,
              "recovery_risk": 41.8,
              "transition_risk": 54.6,
              "next_day_risk": 50.5,
              "time_above_140_pct": 1.5,
              "daily_glucose_cv": 0.161
            },
            {
              "day": "2025-10-23",
              "mean_glucose": 83.9,
              "meal_risk": 54.2,
              "recovery_risk": 42.3,
              "transition_risk": 50.0,
              "next_day_risk": 51.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2025-10-24",
              "mean_glucose": 91.6,
              "meal_risk": 41.6,
              "recovery_risk": 45.8,
              "transition_risk": 46.5,
              "next_day_risk": 52.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.134
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 51.9,
              "mean_recovery_risk": 39.4,
              "mean_peak_glucose": 125.5,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 51.7,
              "mean_recovery_risk": 46.6,
              "mean_peak_glucose": 106.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 24,
              "mean_meal_risk": 57.2,
              "mean_recovery_risk": 47.4,
              "mean_peak_glucose": 122.3,
              "mean_carbs": 47.9
            },
            {
              "meal_slot": "snack",
              "n_meals": 7,
              "mean_meal_risk": 52.0,
              "mean_recovery_risk": 45.0,
              "mean_peak_glucose": 123.4,
              "mean_carbs": 37.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2025-10-24 08:12:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 109.0,
              "meal_risk": 41.6,
              "recovery_risk": 45.8
            },
            {
              "meal_start": "2025-10-23 22:34:00",
              "meal_type": "dinner",
              "meal_carbs": 18.0,
              "peak_glucose": 116.0,
              "meal_risk": 51.4,
              "recovery_risk": 34.2
            },
            {
              "meal_start": "2025-10-23 21:56:00",
              "meal_type": "dinner",
              "meal_carbs": 84.0,
              "peak_glucose": 116.0,
              "meal_risk": 61.9,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2025-10-23 17:47:00",
              "meal_type": "dinner",
              "meal_carbs": 34.0,
              "peak_glucose": 111.0,
              "meal_risk": 50.0,
              "recovery_risk": 27.1
            },
            {
              "meal_start": "2025-10-23 17:17:00",
              "meal_type": "dinner",
              "meal_carbs": 35.0,
              "peak_glucose": 111.0,
              "meal_risk": 56.5,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2025-10-23 12:52:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 110.0,
              "meal_risk": 58.0,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2025-10-23 08:08:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 107.0,
              "meal_risk": 47.4,
              "recovery_risk": 35.0
            },
            {
              "meal_start": "2025-10-22 21:34:00",
              "meal_type": "dinner",
              "meal_carbs": 28.0,
              "peak_glucose": 143.0,
              "meal_risk": 62.1,
              "recovery_risk": 55.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.0,
              "estimated_recovery_risk": 45.1,
              "estimated_next_day_instability_risk": 51.9,
              "summary": "For breakfast, target about 66.0-73.0 g carbs, 22.0-66.0 g protein, 34.1-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 54.3,
              "estimated_recovery_risk": 48.2,
              "estimated_next_day_instability_risk": 51.9,
              "summary": "For lunch, target about 18.2-52.5 g carbs, 29.0-71.5 g protein, 14.8-28.6 g fat, and 4.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.5,
              "estimated_recovery_risk": 48.0,
              "estimated_next_day_instability_risk": 51.5,
              "summary": "For dinner, target about 16.5-53.5 g carbs, 2.0-5.0 g protein, 2.5-13.8 g fat, and 1.0-2.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 53.8,
              "estimated_recovery_risk": 45.9,
              "estimated_next_day_instability_risk": 51.9,
              "summary": "For snack, target about 24.5-53.0 g carbs, 2.0-16.0 g protein, 7.0-26.5 g fat, and 5.5-10.0 g fiber."
            }
          ]
        },
        "26": {
          "overview": {
            "subject": "26",
            "group": "prediabetes",
            "a1c": 5.9,
            "bmi": 31.2,
            "mean_glucose": 97.5,
            "days_covered": 11.3,
            "n_meals": 34,
            "meal_response_risk_mean": 65.9,
            "recovery_risk_mean": 50.1,
            "next_day_risk_mean": 51.3,
            "drift_score_mean": 56.9,
            "transition_risk_max": 96.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2021-03-26",
              "mean_glucose": 84.1,
              "meal_risk": 57.7,
              "recovery_risk": 52.0,
              "transition_risk": 50.2,
              "next_day_risk": 51.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.191
            },
            {
              "day": "2021-03-27",
              "mean_glucose": 90.0,
              "meal_risk": 64.5,
              "recovery_risk": 45.8,
              "transition_risk": 77.7,
              "next_day_risk": 52.2,
              "time_above_140_pct": 2.4,
              "daily_glucose_cv": 0.222
            },
            {
              "day": "2021-03-28",
              "mean_glucose": 97.5,
              "meal_risk": 56.5,
              "recovery_risk": 46.3,
              "transition_risk": 69.7,
              "next_day_risk": 52.1,
              "time_above_140_pct": 2.7,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2021-03-29",
              "mean_glucose": 97.7,
              "meal_risk": 69.8,
              "recovery_risk": 50.5,
              "transition_risk": 90.2,
              "next_day_risk": 50.6,
              "time_above_140_pct": 7.6,
              "daily_glucose_cv": 0.257
            },
            {
              "day": "2021-03-30",
              "mean_glucose": 93.9,
              "meal_risk": 64.9,
              "recovery_risk": 43.2,
              "transition_risk": 79.6,
              "next_day_risk": 52.3,
              "time_above_140_pct": 3.7,
              "daily_glucose_cv": 0.228
            },
            {
              "day": "2021-03-31",
              "mean_glucose": 94.9,
              "meal_risk": 68.2,
              "recovery_risk": 51.2,
              "transition_risk": 70.6,
              "next_day_risk": 51.4,
              "time_above_140_pct": 2.3,
              "daily_glucose_cv": 0.184
            },
            {
              "day": "2021-04-01",
              "mean_glucose": 101.6,
              "meal_risk": 70.8,
              "recovery_risk": 52.9,
              "transition_risk": 96.0,
              "next_day_risk": 50.1,
              "time_above_140_pct": 12.7,
              "daily_glucose_cv": 0.248
            },
            {
              "day": "2021-04-02",
              "mean_glucose": 101.5,
              "meal_risk": 61.7,
              "recovery_risk": 52.2,
              "transition_risk": 68.9,
              "next_day_risk": 50.4,
              "time_above_140_pct": 2.1,
              "daily_glucose_cv": 0.166
            },
            {
              "day": "2021-04-03",
              "mean_glucose": 102.1,
              "meal_risk": 68.7,
              "recovery_risk": 52.4,
              "transition_risk": 91.5,
              "next_day_risk": 51.4,
              "time_above_140_pct": 7.7,
              "daily_glucose_cv": 0.21
            },
            {
              "day": "2021-04-04",
              "mean_glucose": 99.4,
              "meal_risk": 68.9,
              "recovery_risk": 52.6,
              "transition_risk": 74.8,
              "next_day_risk": 52.3,
              "time_above_140_pct": 2.8,
              "daily_glucose_cv": 0.199
            },
            {
              "day": "2021-04-05",
              "mean_glucose": 101.1,
              "meal_risk": 80.4,
              "recovery_risk": 60.6,
              "transition_risk": 87.6,
              "next_day_risk": 52.6,
              "time_above_140_pct": 5.3,
              "daily_glucose_cv": 0.198
            },
            {
              "day": "2021-04-06",
              "mean_glucose": 104.2,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 90.7,
              "next_day_risk": 48.5,
              "time_above_140_pct": 8.9,
              "daily_glucose_cv": 0.227
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 68.8,
              "mean_recovery_risk": 51.7,
              "mean_peak_glucose": 143.9,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 8,
              "mean_meal_risk": 61.2,
              "mean_recovery_risk": 49.2,
              "mean_peak_glucose": 120.4,
              "mean_carbs": 69.5
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 70.2,
              "mean_recovery_risk": 51.2,
              "mean_peak_glucose": 146.9,
              "mean_carbs": 76.2
            },
            {
              "meal_slot": "snack",
              "n_meals": 7,
              "mean_meal_risk": 61.5,
              "mean_recovery_risk": 47.6,
              "mean_peak_glucose": 126.0,
              "mean_carbs": 42.3
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2021-04-05 11:49:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 167.0,
              "meal_risk": 80.4,
              "recovery_risk": 60.6
            },
            {
              "meal_start": "2021-04-04 17:00:00",
              "meal_type": "dinner",
              "meal_carbs": 4.0,
              "peak_glucose": 149.0,
              "meal_risk": 75.5,
              "recovery_risk": 56.7
            },
            {
              "meal_start": "2021-04-04 12:51:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 144.0,
              "meal_risk": 72.9,
              "recovery_risk": 55.5
            },
            {
              "meal_start": "2021-04-04 10:19:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 125.0,
              "meal_risk": 58.2,
              "recovery_risk": 45.5
            },
            {
              "meal_start": "2021-04-03 17:00:00",
              "meal_type": "dinner",
              "meal_carbs": 112.0,
              "peak_glucose": 155.0,
              "meal_risk": 73.9,
              "recovery_risk": 46.2
            },
            {
              "meal_start": "2021-04-03 14:00:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 99.1,
              "meal_risk": 47.2,
              "recovery_risk": 51.8
            },
            {
              "meal_start": "2021-04-03 10:00:00",
              "meal_type": "Breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 179.0,
              "meal_risk": 85.0,
              "recovery_risk": 59.1
            },
            {
              "meal_start": "2021-04-02 16:18:00",
              "meal_type": "dinner",
              "meal_carbs": 137.0,
              "peak_glucose": 138.0,
              "meal_risk": 65.6,
              "recovery_risk": 52.4
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 68.3,
              "estimated_recovery_risk": 53.3,
              "estimated_next_day_instability_risk": 52.0,
              "summary": "For breakfast, target about 24.0-66.0 g carbs, 22.0-66.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 60.6,
              "estimated_recovery_risk": 50.0,
              "estimated_next_day_instability_risk": 52.1,
              "summary": "For lunch, target about 31.0-62.0 g carbs, 26.0-60.0 g protein, 17.5-37.2 g fat, and 9.0-15.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.3,
              "estimated_recovery_risk": 51.1,
              "estimated_next_day_instability_risk": 51.9,
              "summary": "For dinner, target about 61.8-139.8 g carbs, 19.5-44.8 g protein, 9.0-27.0 g fat, and 6.0-10.2 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 59.3,
              "estimated_recovery_risk": 47.4,
              "estimated_next_day_instability_risk": 51.9,
              "summary": "For snack, target about 60.0-73.0 g carbs, 10.5-11.0 g protein, 1.0-2.0 g fat, and 3.0-6.0 g fiber."
            }
          ]
        },
        "8": {
          "overview": {
            "subject": "8",
            "group": "prediabetes",
            "a1c": 5.8,
            "bmi": 39.9,
            "mean_glucose": 93.8,
            "days_covered": 10.2,
            "n_meals": 30,
            "meal_response_risk_mean": 59.4,
            "recovery_risk_mean": 47.0,
            "next_day_risk_mean": 50.5,
            "drift_score_mean": 54.3,
            "transition_risk_max": 92.6,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-01-30",
              "mean_glucose": 85.4,
              "meal_risk": 57.0,
              "recovery_risk": 46.3,
              "transition_risk": 49.5,
              "next_day_risk": 50.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.182
            },
            {
              "day": "2023-01-31",
              "mean_glucose": 92.9,
              "meal_risk": 73.0,
              "recovery_risk": 53.5,
              "transition_risk": 89.7,
              "next_day_risk": 51.7,
              "time_above_140_pct": 5.1,
              "daily_glucose_cv": 0.28
            },
            {
              "day": "2023-02-01",
              "mean_glucose": 95.8,
              "meal_risk": 52.0,
              "recovery_risk": 34.3,
              "transition_risk": 60.9,
              "next_day_risk": 49.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.173
            },
            {
              "day": "2023-02-02",
              "mean_glucose": 94.6,
              "meal_risk": 72.7,
              "recovery_risk": 55.8,
              "transition_risk": 92.6,
              "next_day_risk": 50.5,
              "time_above_140_pct": 9.7,
              "daily_glucose_cv": 0.284
            },
            {
              "day": "2023-02-03",
              "mean_glucose": 95.9,
              "meal_risk": 48.6,
              "recovery_risk": 48.5,
              "transition_risk": 56.5,
              "next_day_risk": 50.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.167
            },
            {
              "day": "2023-02-04",
              "mean_glucose": 95.0,
              "meal_risk": 50.1,
              "recovery_risk": 47.3,
              "transition_risk": 46.0,
              "next_day_risk": 50.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.129
            },
            {
              "day": "2023-02-05",
              "mean_glucose": 98.7,
              "meal_risk": 62.9,
              "recovery_risk": 43.9,
              "transition_risk": 84.5,
              "next_day_risk": 50.9,
              "time_above_140_pct": 6.4,
              "daily_glucose_cv": 0.207
            },
            {
              "day": "2023-02-06",
              "mean_glucose": 91.8,
              "meal_risk": 50.7,
              "recovery_risk": 37.4,
              "transition_risk": 58.6,
              "next_day_risk": 50.5,
              "time_above_140_pct": 1.2,
              "daily_glucose_cv": 0.145
            },
            {
              "day": "2023-02-07",
              "mean_glucose": 95.0,
              "meal_risk": 58.6,
              "recovery_risk": 53.9,
              "transition_risk": 66.1,
              "next_day_risk": 50.0,
              "time_above_140_pct": 3.7,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2023-02-08",
              "mean_glucose": 92.0,
              "meal_risk": 65.9,
              "recovery_risk": 47.7,
              "transition_risk": 69.9,
              "next_day_risk": 50.9,
              "time_above_140_pct": 2.1,
              "daily_glucose_cv": 0.192
            },
            {
              "day": "2023-02-09",
              "mean_glucose": 89.9,
              "meal_risk": 63.1,
              "recovery_risk": 49.7,
              "transition_risk": 60.1,
              "next_day_risk": 49.8,
              "time_above_140_pct": 1.5,
              "daily_glucose_cv": 0.169
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 63.9,
              "mean_recovery_risk": 52.7,
              "mean_peak_glucose": 146.2,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 55.8,
              "mean_recovery_risk": 39.4,
              "mean_peak_glucose": 117.3,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 58.4,
              "mean_recovery_risk": 48.8,
              "mean_peak_glucose": 121.5,
              "mean_carbs": 79.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-02-09 08:12:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 143.0,
              "meal_risk": 63.1,
              "recovery_risk": 49.7
            },
            {
              "meal_start": "2023-02-08 18:12:00",
              "meal_type": "dinner",
              "meal_carbs": 117.0,
              "peak_glucose": 119.0,
              "meal_risk": 61.0,
              "recovery_risk": 47.9
            },
            {
              "meal_start": "2023-02-08 12:14:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 145.0,
              "meal_risk": 75.7,
              "recovery_risk": 54.9
            },
            {
              "meal_start": "2023-02-08 08:01:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 139.0,
              "meal_risk": 61.0,
              "recovery_risk": 40.4
            },
            {
              "meal_start": "2023-02-07 17:53:00",
              "meal_type": "dinner",
              "meal_carbs": 78.0,
              "peak_glucose": 106.0,
              "meal_risk": 52.4,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2023-02-07 12:30:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 108.0,
              "meal_risk": 58.8,
              "recovery_risk": 50.5
            },
            {
              "meal_start": "2023-02-07 08:07:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 145.0,
              "meal_risk": 64.5,
              "recovery_risk": 59.0
            },
            {
              "meal_start": "2023-02-06 18:46:00",
              "meal_type": "dinner",
              "meal_carbs": 42.0,
              "peak_glucose": 114.0,
              "meal_risk": 53.5,
              "recovery_risk": 49.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 65.0,
              "estimated_recovery_risk": 54.0,
              "estimated_next_day_instability_risk": 51.3,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.1,
              "estimated_recovery_risk": 43.4,
              "estimated_next_day_instability_risk": 51.4,
              "summary": "For lunch, target about 18.2-49.0 g carbs, 29.5-68.5 g protein, 14.8-17.4 g fat, and 4.8-11.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 58.7,
              "estimated_recovery_risk": 49.5,
              "estimated_next_day_instability_risk": 51.3,
              "summary": "For dinner, target about 41.2-56.2 g carbs, 11.5-58.0 g protein, 11.0-87.2 g fat, and 0.0-9.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 56.3,
              "estimated_recovery_risk": 47.2,
              "estimated_next_day_instability_risk": 52.6,
              "summary": "For snack, target about 16.2-41.8 g carbs, 1.0-11.0 g protein, 1.0-14.8 g fat, and 0.0-3.0 g fiber."
            }
          ]
        },
        "18": {
          "overview": {
            "subject": "18",
            "group": "healthy",
            "a1c": 5.4,
            "bmi": 38.1,
            "mean_glucose": 100.8,
            "days_covered": 19.2,
            "n_meals": 36,
            "meal_response_risk_mean": 57.1,
            "recovery_risk_mean": 56.5,
            "next_day_risk_mean": 50.5,
            "drift_score_mean": 38.2,
            "transition_risk_max": 88.3,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-01-28",
              "mean_glucose": 85.2,
              "meal_risk": 49.3,
              "recovery_risk": 51.7,
              "transition_risk": 47.6,
              "next_day_risk": 51.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2024-02-07",
              "mean_glucose": 97.5,
              "meal_risk": 66.5,
              "recovery_risk": 59.3,
              "transition_risk": 72.4,
              "next_day_risk": 52.3,
              "time_above_140_pct": 1.8,
              "daily_glucose_cv": 0.229
            },
            {
              "day": "2024-02-08",
              "mean_glucose": 98.6,
              "meal_risk": 68.0,
              "recovery_risk": 59.0,
              "transition_risk": 83.3,
              "next_day_risk": 50.8,
              "time_above_140_pct": 5.8,
              "daily_glucose_cv": 0.258
            },
            {
              "day": "2024-02-09",
              "mean_glucose": 109.5,
              "meal_risk": 68.6,
              "recovery_risk": 65.4,
              "transition_risk": 88.3,
              "next_day_risk": 49.2,
              "time_above_140_pct": 9.8,
              "daily_glucose_cv": 0.198
            },
            {
              "day": "2024-02-10",
              "mean_glucose": 102.4,
              "meal_risk": 60.0,
              "recovery_risk": 69.1,
              "transition_risk": 83.2,
              "next_day_risk": 50.1,
              "time_above_140_pct": 8.1,
              "daily_glucose_cv": 0.175
            },
            {
              "day": "2024-02-11",
              "mean_glucose": 102.2,
              "meal_risk": 66.2,
              "recovery_risk": 58.1,
              "transition_risk": 75.1,
              "next_day_risk": 49.5,
              "time_above_140_pct": 5.3,
              "daily_glucose_cv": 0.202
            },
            {
              "day": "2024-02-12",
              "mean_glucose": 105.4,
              "meal_risk": 49.4,
              "recovery_risk": 52.9,
              "transition_risk": 42.5,
              "next_day_risk": 50.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.09
            },
            {
              "day": "2024-02-13",
              "mean_glucose": 102.3,
              "meal_risk": 33.8,
              "recovery_risk": 49.8,
              "transition_risk": 41.0,
              "next_day_risk": 51.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.07
            },
            {
              "day": "2024-02-14",
              "mean_glucose": 98.2,
              "meal_risk": 47.4,
              "recovery_risk": 40.4,
              "transition_risk": 45.7,
              "next_day_risk": 50.7,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.122
            },
            {
              "day": "2024-02-15",
              "mean_glucose": 100.2,
              "meal_risk": 52.7,
              "recovery_risk": 52.5,
              "transition_risk": 43.6,
              "next_day_risk": 50.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.1
            },
            {
              "day": "2024-02-16",
              "mean_glucose": 100.6,
              "meal_risk": 65.8,
              "recovery_risk": 58.5,
              "transition_risk": 51.4,
              "next_day_risk": 49.4,
              "time_above_140_pct": 0.8,
              "daily_glucose_cv": 0.16
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 63.5,
              "mean_recovery_risk": 58.3,
              "mean_peak_glucose": 138.2,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 53.2,
              "mean_recovery_risk": 55.4,
              "mean_peak_glucose": 118.9,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 11,
              "mean_meal_risk": 56.9,
              "mean_recovery_risk": 55.9,
              "mean_peak_glucose": 133.2,
              "mean_carbs": 82.5
            },
            {
              "meal_slot": "snack",
              "n_meals": 5,
              "mean_meal_risk": 52.9,
              "mean_recovery_risk": 56.5,
              "mean_peak_glucose": 135.0,
              "mean_carbs": 50.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-02-16 08:03:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 141.0,
              "meal_risk": 65.8,
              "recovery_risk": 58.5
            },
            {
              "meal_start": "2024-02-15 18:09:00",
              "meal_type": "Dinner",
              "meal_carbs": 80.0,
              "peak_glucose": 126.0,
              "meal_risk": 54.4,
              "recovery_risk": 55.6
            },
            {
              "meal_start": "2024-02-15 13:03:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 123.0,
              "meal_risk": 58.2,
              "recovery_risk": 58.0
            },
            {
              "meal_start": "2024-02-15 08:36:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 119.0,
              "meal_risk": 45.3,
              "recovery_risk": 43.8
            },
            {
              "meal_start": "2024-02-14 19:02:00",
              "meal_type": "Dinner",
              "meal_carbs": 74.0,
              "peak_glucose": 108.0,
              "meal_risk": 43.1,
              "recovery_risk": 39.4
            },
            {
              "meal_start": "2024-02-14 13:32:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 139.0,
              "meal_risk": 46.2,
              "recovery_risk": 41.9
            },
            {
              "meal_start": "2024-02-14 07:26:00",
              "meal_type": "Breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 136.0,
              "meal_risk": 52.9,
              "recovery_risk": 39.9
            },
            {
              "meal_start": "2024-02-13 22:19:00",
              "meal_type": "Snack",
              "meal_carbs": 59.0,
              "peak_glucose": 111.0,
              "meal_risk": 36.4,
              "recovery_risk": 53.8
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 64.8,
              "estimated_recovery_risk": 57.7,
              "estimated_next_day_instability_risk": 51.3,
              "summary": "For breakfast, target about 55.5-66.0 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 55.3,
              "estimated_recovery_risk": 54.0,
              "estimated_next_day_instability_risk": 51.5,
              "summary": "For lunch, target about 34.8-77.2 g carbs, 29.5-79.0 g protein, 16.5-27.5 g fat, and 9.5-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.7,
              "estimated_recovery_risk": 54.4,
              "estimated_next_day_instability_risk": 51.2,
              "summary": "For dinner, target about 74.0-113.0 g carbs, 29.0-51.0 g protein, 19.0-49.0 g fat, and 8.0-15.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 83.0,
              "estimated_meal_response_risk": 54.6,
              "estimated_recovery_risk": 51.9,
              "estimated_next_day_instability_risk": 51.6,
              "summary": "For snack, target about 31.2-49.8 g carbs, 14.0-42.0 g protein, 4.0-12.0 g fat, and 1.8-3.2 g fiber."
            }
          ]
        },
        "4": {
          "overview": {
            "subject": "4",
            "group": "healthy",
            "a1c": 5.5,
            "bmi": 42.4,
            "mean_glucose": 91.1,
            "days_covered": 9.9,
            "n_meals": 51,
            "meal_response_risk_mean": 53.7,
            "recovery_risk_mean": 51.0,
            "next_day_risk_mean": 49.6,
            "drift_score_mean": 49.6,
            "transition_risk_max": 87.9,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-09-11",
              "mean_glucose": 91.6,
              "meal_risk": 59.6,
              "recovery_risk": 56.2,
              "transition_risk": 47.8,
              "next_day_risk": 49.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.16
            },
            {
              "day": "2023-09-12",
              "mean_glucose": 91.9,
              "meal_risk": 58.8,
              "recovery_risk": 49.0,
              "transition_risk": 69.5,
              "next_day_risk": 48.2,
              "time_above_140_pct": 3.8,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2023-09-13",
              "mean_glucose": 93.7,
              "meal_risk": 56.8,
              "recovery_risk": 54.3,
              "transition_risk": 55.9,
              "next_day_risk": 50.3,
              "time_above_140_pct": 0.9,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2023-09-14",
              "mean_glucose": 98.2,
              "meal_risk": 67.2,
              "recovery_risk": 63.6,
              "transition_risk": 87.9,
              "next_day_risk": 46.5,
              "time_above_140_pct": 8.6,
              "daily_glucose_cv": 0.226
            },
            {
              "day": "2023-09-15",
              "mean_glucose": 87.3,
              "meal_risk": 43.2,
              "recovery_risk": 43.6,
              "transition_risk": 46.6,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.145
            },
            {
              "day": "2023-09-16",
              "mean_glucose": 86.3,
              "meal_risk": 49.5,
              "recovery_risk": 48.9,
              "transition_risk": 46.1,
              "next_day_risk": 50.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.137
            },
            {
              "day": "2023-09-17",
              "mean_glucose": 89.5,
              "meal_risk": 60.5,
              "recovery_risk": 53.5,
              "transition_risk": 74.7,
              "next_day_risk": 48.8,
              "time_above_140_pct": 4.0,
              "daily_glucose_cv": 0.23
            },
            {
              "day": "2023-09-18",
              "mean_glucose": 88.7,
              "meal_risk": 44.9,
              "recovery_risk": 42.7,
              "transition_risk": 48.9,
              "next_day_risk": 50.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.173
            },
            {
              "day": "2023-09-19",
              "mean_glucose": 90.5,
              "meal_risk": 50.3,
              "recovery_risk": 54.5,
              "transition_risk": 48.3,
              "next_day_risk": 50.2,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.165
            },
            {
              "day": "2023-09-20",
              "mean_glucose": 94.4,
              "meal_risk": 52.4,
              "recovery_risk": 48.7,
              "transition_risk": 53.6,
              "next_day_risk": 50.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.139
            },
            {
              "day": "2023-09-21",
              "mean_glucose": 88.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 41.6,
              "next_day_risk": 49.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.078
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 65.7,
              "mean_recovery_risk": 57.6,
              "mean_peak_glucose": 140.9,
              "mean_carbs": 57.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 56.0,
              "mean_recovery_risk": 59.9,
              "mean_peak_glucose": 112.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 17,
              "mean_meal_risk": 48.7,
              "mean_recovery_risk": 47.6,
              "mean_peak_glucose": 111.7,
              "mean_carbs": 75.8
            },
            {
              "meal_slot": "snack",
              "n_meals": 15,
              "mean_meal_risk": 50.6,
              "mean_recovery_risk": 44.9,
              "mean_peak_glucose": 114.6,
              "mean_carbs": 37.9
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-09-20 20:30:00",
              "meal_type": "Dinner",
              "meal_carbs": 25.0,
              "peak_glucose": 116.0,
              "meal_risk": 51.8,
              "recovery_risk": 56.2
            },
            {
              "meal_start": "2023-09-20 18:01:00",
              "meal_type": "Dinner",
              "meal_carbs": 100.0,
              "peak_glucose": 103.3,
              "meal_risk": 44.9,
              "recovery_risk": 50.3
            },
            {
              "meal_start": "2023-09-20 16:39:00",
              "meal_type": "Snacks",
              "meal_carbs": 27.0,
              "peak_glucose": 98.0,
              "meal_risk": 41.7,
              "recovery_risk": 40.3
            },
            {
              "meal_start": "2023-09-20 13:18:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 137.0,
              "meal_risk": 72.7,
              "recovery_risk": 58.3
            },
            {
              "meal_start": "2023-09-20 09:30:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 113.0,
              "meal_risk": 50.7,
              "recovery_risk": 38.5
            },
            {
              "meal_start": "2023-09-19 21:59:00",
              "meal_type": "Dinner",
              "meal_carbs": 34.0,
              "peak_glucose": 124.0,
              "meal_risk": 51.3,
              "recovery_risk": 46.3
            },
            {
              "meal_start": "2023-09-19 20:31:00",
              "meal_type": "Snacks",
              "meal_carbs": 35.0,
              "peak_glucose": 124.0,
              "meal_risk": 39.5,
              "recovery_risk": 52.3
            },
            {
              "meal_start": "2023-09-19 20:00:00",
              "meal_type": "Dinner",
              "meal_carbs": 14.0,
              "peak_glucose": 124.0,
              "meal_risk": 48.2,
              "recovery_risk": 55.6
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.3,
              "estimated_recovery_risk": 57.2,
              "estimated_next_day_instability_risk": 50.8,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.2,
              "estimated_recovery_risk": 57.0,
              "estimated_next_day_instability_risk": 50.8,
              "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 51.1,
              "estimated_recovery_risk": 48.4,
              "estimated_next_day_instability_risk": 50.6,
              "summary": "For dinner, target about 32.0-111.5 g carbs, 28.5-52.5 g protein, 11.5-30.5 g fat, and 4.0-6.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 52.0,
              "estimated_recovery_risk": 45.5,
              "estimated_next_day_instability_risk": 50.2,
              "summary": "For snack, target about 29.0-40.8 g carbs, 0.8-11.8 g protein, 2.0-11.0 g fat, and 0.0-2.2 g fiber."
            }
          ]
        },
        "16": {
          "overview": {
            "subject": "16",
            "group": "prediabetes",
            "a1c": 5.8,
            "bmi": 45.9,
            "mean_glucose": 84.8,
            "days_covered": 11.3,
            "n_meals": 28,
            "meal_response_risk_mean": 49.1,
            "recovery_risk_mean": 42.1,
            "next_day_risk_mean": 48.2,
            "drift_score_mean": 51.4,
            "transition_risk_max": 70.1,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-07-14",
              "mean_glucose": 77.8,
              "meal_risk": 32.6,
              "recovery_risk": 48.9,
              "transition_risk": 45.6,
              "next_day_risk": 50.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.132
            },
            {
              "day": "2023-07-15",
              "mean_glucose": 77.7,
              "meal_risk": 46.3,
              "recovery_risk": 45.8,
              "transition_risk": 47.4,
              "next_day_risk": 48.8,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2023-07-16",
              "mean_glucose": 75.2,
              "meal_risk": 37.1,
              "recovery_risk": 32.2,
              "transition_risk": 49.4,
              "next_day_risk": 49.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.176
            },
            {
              "day": "2023-07-17",
              "mean_glucose": 80.6,
              "meal_risk": 60.6,
              "recovery_risk": 42.6,
              "transition_risk": 70.1,
              "next_day_risk": 49.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.228
            },
            {
              "day": "2023-07-18",
              "mean_glucose": 87.3,
              "meal_risk": 41.6,
              "recovery_risk": 42.5,
              "transition_risk": 54.4,
              "next_day_risk": 48.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.13
            },
            {
              "day": "2023-07-19",
              "mean_glucose": 88.1,
              "meal_risk": 54.6,
              "recovery_risk": 38.1,
              "transition_risk": 67.8,
              "next_day_risk": 49.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.191
            },
            {
              "day": "2023-07-20",
              "mean_glucose": 88.7,
              "meal_risk": 57.3,
              "recovery_risk": 39.4,
              "transition_risk": 61.1,
              "next_day_risk": 44.8,
              "time_above_140_pct": 0.5,
              "daily_glucose_cv": 0.207
            },
            {
              "day": "2023-07-21",
              "mean_glucose": 87.9,
              "meal_risk": 49.9,
              "recovery_risk": 47.4,
              "transition_risk": 46.7,
              "next_day_risk": 48.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.13
            },
            {
              "day": "2023-07-22",
              "mean_glucose": 84.9,
              "meal_risk": 50.0,
              "recovery_risk": 42.7,
              "transition_risk": 46.3,
              "next_day_risk": 48.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.139
            },
            {
              "day": "2023-07-23",
              "mean_glucose": 88.8,
              "meal_risk": 50.0,
              "recovery_risk": 39.0,
              "transition_risk": 49.1,
              "next_day_risk": 47.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.17
            },
            {
              "day": "2023-07-24",
              "mean_glucose": 88.1,
              "meal_risk": 50.0,
              "recovery_risk": 49.8,
              "transition_risk": 44.6,
              "next_day_risk": 48.3,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.106
            },
            {
              "day": "2023-07-25",
              "mean_glucose": 91.6,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 45.4,
              "next_day_risk": 46.9,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.125
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 50.9,
              "mean_recovery_risk": 41.2,
              "mean_peak_glucose": 117.1,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 5,
              "mean_meal_risk": 49.7,
              "mean_recovery_risk": 47.3,
              "mean_peak_glucose": 104.6,
              "mean_carbs": 54.4
            },
            {
              "meal_slot": "dinner",
              "n_meals": 6,
              "mean_meal_risk": 48.2,
              "mean_recovery_risk": 37.5,
              "mean_peak_glucose": 113.5,
              "mean_carbs": 53.2
            },
            {
              "meal_slot": "snack",
              "n_meals": 7,
              "mean_meal_risk": 47.0,
              "mean_recovery_risk": 43.5,
              "mean_peak_glucose": 99.2,
              "mean_carbs": 49.3
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-07-24 07:44:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 118.0,
              "meal_risk": 50.0,
              "recovery_risk": 49.8
            },
            {
              "meal_start": "2023-07-23 20:00:00",
              "meal_type": "dinner",
              "meal_carbs": 45.0,
              "peak_glucose": 117.6,
              "meal_risk": 37.8,
              "recovery_risk": 28.9
            },
            {
              "meal_start": "2023-07-23 12:08:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 127.0,
              "meal_risk": 65.5,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2023-07-23 07:38:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 109.0,
              "meal_risk": 46.8,
              "recovery_risk": 35.7
            },
            {
              "meal_start": "2023-07-22 20:00:00",
              "meal_type": "dinner",
              "meal_carbs": 110.0,
              "peak_glucose": 107.0,
              "meal_risk": 45.1,
              "recovery_risk": 28.6
            },
            {
              "meal_start": "2023-07-22 13:19:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 96.0,
              "meal_risk": 50.5,
              "recovery_risk": 52.2
            },
            {
              "meal_start": "2023-07-22 09:45:00",
              "meal_type": "Breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 122.0,
              "meal_risk": 54.5,
              "recovery_risk": 47.2
            },
            {
              "meal_start": "2023-07-21 20:00:00",
              "meal_type": "dinner",
              "meal_carbs": 17.0,
              "peak_glucose": 98.0,
              "meal_risk": 43.6,
              "recovery_risk": 52.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 56.4,
              "estimated_recovery_risk": 46.3,
              "estimated_next_day_instability_risk": 49.7,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 83.0,
              "estimated_meal_response_risk": 54.6,
              "estimated_recovery_risk": 49.2,
              "estimated_next_day_instability_risk": 50.2,
              "summary": "For lunch, target about 24.2-34.8 g carbs, 43.0-65.0 g protein, 15.5-16.5 g fat, and 7.0-11.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 53.2,
              "estimated_recovery_risk": 43.6,
              "estimated_next_day_instability_risk": 50.0,
              "summary": "For dinner, target about 31.0-76.0 g carbs, 34.5-49.0 g protein, 27.5-268.0 g fat, and 1.0-7.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 50.9,
              "estimated_recovery_risk": 45.0,
              "estimated_next_day_instability_risk": 50.1,
              "summary": "For snack, target about 28.5-55.5 g carbs, 5.5-7.0 g protein, 12.5-22.0 g fat, and 0.0-3.0 g fiber."
            }
          ]
        }
      },
      "top_alerts": [
        {
          "subject": "13",
          "day": "2024-02-04",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.209,
          "time_above_140_pct": 59.6,
          "excursion_frequency": 1.0,
          "next_day_risk": 62.8
        },
        {
          "subject": "13",
          "day": "2024-02-05",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.16,
          "time_above_140_pct": 58.0,
          "excursion_frequency": 0.0,
          "next_day_risk": 59.3
        },
        {
          "subject": "20",
          "day": "2024-03-19",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.183,
          "time_above_140_pct": 50.3,
          "excursion_frequency": 1.0,
          "next_day_risk": 66.0
        },
        {
          "subject": "20",
          "day": "2024-03-20",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.232,
          "time_above_140_pct": 49.0,
          "excursion_frequency": 1.0,
          "next_day_risk": 64.6
        },
        {
          "subject": "20",
          "day": "2024-03-22",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.221,
          "time_above_140_pct": 54.5,
          "excursion_frequency": 1.0,
          "next_day_risk": 65.4
        },
        {
          "subject": "33",
          "day": "2022-04-18",
          "transition_risk": 99.9,
          "daily_glucose_cv": 0.271,
          "time_above_140_pct": 35.6,
          "excursion_frequency": 0.5,
          "next_day_risk": 61.5
        },
        {
          "subject": "33",
          "day": "2022-04-24",
          "transition_risk": 99.9,
          "daily_glucose_cv": 0.366,
          "time_above_140_pct": 31.0,
          "excursion_frequency": 1.0,
          "next_day_risk": 62.3
        },
        {
          "subject": "20",
          "day": "2024-03-23",
          "transition_risk": 99.8,
          "daily_glucose_cv": 0.22,
          "time_above_140_pct": 32.2,
          "excursion_frequency": 0.25,
          "next_day_risk": 60.0
        },
        {
          "subject": "20",
          "day": "2024-03-24",
          "transition_risk": 99.8,
          "daily_glucose_cv": 0.153,
          "time_above_140_pct": 36.9,
          "excursion_frequency": 0.25,
          "next_day_risk": 61.5
        },
        {
          "subject": "20",
          "day": "2024-03-25",
          "transition_risk": 99.8,
          "daily_glucose_cv": 0.253,
          "time_above_140_pct": 29.0,
          "excursion_frequency": 0.75,
          "next_day_risk": 60.5
        }
      ],
      "recommendations": [
        {
          "subject": "43",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 24,
          "estimated_meal_response_risk": 57.5,
          "estimated_recovery_risk": 48.0,
          "estimated_next_day_instability_risk": 51.5,
          "carbs_range": "16.5-53.5 g",
          "protein_range": "2.0-5.0 g",
          "fat_range": "2.5-13.8 g",
          "fiber_range": "1.0-2.8 g",
          "summary": "For dinner, target about 16.5-53.5 g carbs, 2.0-5.0 g protein, 2.5-13.8 g fat, and 1.0-2.8 g fiber."
        },
        {
          "subject": "4",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 17,
          "estimated_meal_response_risk": 51.1,
          "estimated_recovery_risk": 48.4,
          "estimated_next_day_instability_risk": 50.6,
          "carbs_range": "32.0-111.5 g",
          "protein_range": "28.5-52.5 g",
          "fat_range": "11.5-30.5 g",
          "fiber_range": "4.0-6.5 g",
          "summary": "For dinner, target about 32.0-111.5 g carbs, 28.5-52.5 g protein, 11.5-30.5 g fat, and 4.0-6.5 g fiber."
        },
        {
          "subject": "4",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 15,
          "estimated_meal_response_risk": 52.0,
          "estimated_recovery_risk": 45.5,
          "estimated_next_day_instability_risk": 50.2,
          "carbs_range": "29.0-40.8 g",
          "protein_range": "0.8-11.8 g",
          "fat_range": "2.0-11.0 g",
          "fiber_range": "0.0-2.2 g",
          "summary": "For snack, target about 29.0-40.8 g carbs, 0.8-11.8 g protein, 2.0-11.0 g fat, and 0.0-2.2 g fiber."
        },
        {
          "subject": "9",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 13,
          "estimated_meal_response_risk": 62.7,
          "estimated_recovery_risk": 53.7,
          "estimated_next_day_instability_risk": 52.0,
          "carbs_range": "5.0-25.0 g",
          "protein_range": "1.0-1.0 g",
          "fat_range": "0.0-1.0 g",
          "fiber_range": "2.0-3.0 g",
          "summary": "For snack, target about 5.0-25.0 g carbs, 1.0-1.0 g protein, 0.0-1.0 g fat, and 2.0-3.0 g fiber."
        },
        {
          "subject": "10",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 13,
          "estimated_meal_response_risk": 54.0,
          "estimated_recovery_risk": 42.1,
          "estimated_next_day_instability_risk": 52.1,
          "carbs_range": "2.0-24.0 g",
          "protein_range": "1.0-10.0 g",
          "fat_range": "3.0-8.0 g",
          "fiber_range": "0.0-3.0 g",
          "summary": "For snack, target about 2.0-24.0 g carbs, 1.0-10.0 g protein, 3.0-8.0 g fat, and 0.0-3.0 g fiber."
        },
        {
          "subject": "44",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 12,
          "estimated_meal_response_risk": 65.8,
          "estimated_recovery_risk": 56.4,
          "estimated_next_day_instability_risk": 54.7,
          "carbs_range": "13.0-33.0 g",
          "protein_range": "3.0-6.0 g",
          "fat_range": "3.0-7.0 g",
          "fiber_range": "0.0-1.0 g",
          "summary": "For dinner, target about 13.0-33.0 g carbs, 3.0-6.0 g protein, 3.0-7.0 g fat, and 0.0-1.0 g fiber."
        },
        {
          "subject": "18",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 11,
          "estimated_meal_response_risk": 57.7,
          "estimated_recovery_risk": 54.4,
          "estimated_next_day_instability_risk": 51.2,
          "carbs_range": "74.0-113.0 g",
          "protein_range": "29.0-51.0 g",
          "fat_range": "19.0-49.0 g",
          "fiber_range": "8.0-15.0 g",
          "summary": "For dinner, target about 74.0-113.0 g carbs, 29.0-51.0 g protein, 19.0-49.0 g fat, and 8.0-15.0 g fiber."
        },
        {
          "subject": "4",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 57.2,
          "estimated_recovery_risk": 57.0,
          "estimated_next_day_instability_risk": 50.8,
          "carbs_range": "18.2-40.8 g",
          "protein_range": "29.0-68.5 g",
          "fat_range": "14.8-17.8 g",
          "fiber_range": "4.8-13.0 g",
          "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
        },
        {
          "subject": "8",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 65.0,
          "estimated_recovery_risk": 54.0,
          "estimated_next_day_instability_risk": 51.3,
          "carbs_range": "24.0-67.8 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-18.4 g",
          "fiber_range": "0.0-1.8 g",
          "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
        },
        {
          "subject": "8",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 57.1,
          "estimated_recovery_risk": 43.4,
          "estimated_next_day_instability_risk": 51.4,
          "carbs_range": "18.2-49.0 g",
          "protein_range": "29.5-68.5 g",
          "fat_range": "14.8-17.4 g",
          "fiber_range": "4.8-11.5 g",
          "summary": "For lunch, target about 18.2-49.0 g carbs, 29.5-68.5 g protein, 14.8-17.4 g fat, and 4.8-11.5 g fiber."
        },
        {
          "subject": "8",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 58.7,
          "estimated_recovery_risk": 49.5,
          "estimated_next_day_instability_risk": 51.3,
          "carbs_range": "41.2-56.2 g",
          "protein_range": "11.5-58.0 g",
          "fat_range": "11.0-87.2 g",
          "fiber_range": "0.0-9.8 g",
          "summary": "For dinner, target about 41.2-56.2 g carbs, 11.5-58.0 g protein, 11.0-87.2 g fat, and 0.0-9.8 g fiber."
        },
        {
          "subject": "9",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 56.5,
          "estimated_recovery_risk": 50.1,
          "estimated_next_day_instability_risk": 52.3,
          "carbs_range": "42.2-84.0 g",
          "protein_range": "62.0-85.0 g",
          "fat_range": "19.2-46.6 g",
          "fiber_range": "10.8-14.2 g",
          "summary": "For lunch, target about 42.2-84.0 g carbs, 62.0-85.0 g protein, 19.2-46.6 g fat, and 10.8-14.2 g fiber."
        },
        {
          "subject": "10",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 65.1,
          "estimated_recovery_risk": 52.4,
          "estimated_next_day_instability_risk": 52.1,
          "carbs_range": "24.0-73.0 g",
          "protein_range": "22.0-33.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-7.0 g",
          "summary": "For breakfast, target about 24.0-73.0 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
        },
        {
          "subject": "10",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 63.8,
          "estimated_recovery_risk": 53.8,
          "estimated_next_day_instability_risk": 52.4,
          "carbs_range": "34.8-93.2 g",
          "protein_range": "41.0-78.0 g",
          "fat_range": "16.5-26.0 g",
          "fiber_range": "4.0-7.0 g",
          "summary": "For lunch, target about 34.8-93.2 g carbs, 41.0-78.0 g protein, 16.5-26.0 g fat, and 4.0-7.0 g fiber."
        },
        {
          "subject": "11",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 69.8,
          "estimated_recovery_risk": 55.2,
          "estimated_next_day_instability_risk": 52.8,
          "carbs_range": "24.0-67.8 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-18.4 g",
          "fiber_range": "0.0-1.8 g",
          "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
        },
        {
          "subject": "11",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 61.2,
          "estimated_recovery_risk": 49.8,
          "estimated_next_day_instability_risk": 52.8,
          "carbs_range": "18.2-49.0 g",
          "protein_range": "29.5-68.5 g",
          "fat_range": "14.8-17.4 g",
          "fiber_range": "4.8-11.5 g",
          "summary": "For lunch, target about 18.2-49.0 g carbs, 29.5-68.5 g protein, 14.8-17.4 g fat, and 4.8-11.5 g fiber."
        },
        {
          "subject": "13",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 69.9,
          "estimated_recovery_risk": 57.1,
          "estimated_next_day_instability_risk": 54.7,
          "carbs_range": "55.5-67.8 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-1.8 g",
          "summary": "For breakfast, target about 55.5-67.8 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
        },
        {
          "subject": "13",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 67.5,
          "estimated_recovery_risk": 52.4,
          "estimated_next_day_instability_risk": 54.2,
          "carbs_range": "18.2-40.8 g",
          "protein_range": "29.0-68.5 g",
          "fat_range": "14.8-17.8 g",
          "fiber_range": "4.8-13.0 g",
          "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
        }
      ],
      "healthy_reference_delta": [
        {
          "key": "meal_response",
          "label": "Meal Response Risk Score",
          "cohort_value": 60.8,
          "healthy_value": 50.66,
          "delta_from_healthy": 10.14
        },
        {
          "key": "recovery",
          "label": "Recovery Risk Score",
          "cohort_value": 51.66,
          "healthy_value": 45.23,
          "delta_from_healthy": 6.43
        },
        {
          "key": "next_day",
          "label": "Next-Day Instability Risk Score",
          "cohort_value": 53.15,
          "healthy_value": 50.08,
          "delta_from_healthy": 3.07
        },
        {
          "key": "transition",
          "label": "State Transition Risk",
          "cohort_value": 75.43,
          "healthy_value": 59.98,
          "delta_from_healthy": 15.45
        }
      ]
    },
    {
      "key": "t2d",
      "label": "T2D",
      "summary": {
        "subjects": 14,
        "meals": 424,
        "days": 165,
        "mean_bmi": 31.76,
        "mean_a1c": 7.24,
        "mean_fasting_glucose": 152.6,
        "mean_glucose": 137.6
      },
      "framework": {
        "meal_response": {
          "label": "Meal Response Risk Score",
          "mean_score": 74.83,
          "event_rate_pct": 61.6
        },
        "recovery": {
          "label": "Recovery Risk Score",
          "mean_score": 59.39,
          "event_rate_pct": 78.8
        },
        "next_day": {
          "label": "Next-Day Instability Risk Score",
          "mean_score": 62.57,
          "event_rate_pct": 54.3
        },
        "transition": {
          "label": "State Transition Risk",
          "mean_score": 94.38,
          "alerts": 0
        }
      },
      "narrative": [
        "Meal Response Risk Score: event = peak glucose >= 180 mg/dL or delta glucose >= 54 mg/dL; mean Meal Response Risk Score = 74.83; event rate = 61.6%",
        "Recovery Risk Score: event = no recovery to baseline within 2h; mean Recovery Risk Score = 59.39; event rate = 78.8%",
        "Next-Day Instability Risk Score: event = next-day hyperglycaemia burden with TAR > 25%; mean Next-Day Instability Risk = 62.57; event rate = 54.3%",
        "Glycaemic Drift Score: event = CV increase >= 10% from baseline or sustained elevation >= 3 days; mean Glycaemic Drift Score = 53.25; event rate = 24.2%"
      ],
      "validations": {
        "meal_response": {
          "target": "postprandial_excursion_event",
          "n": 424,
          "auc": 0.985,
          "correlation": 0.837,
          "f1_at_60": 0.895,
          "precision_at_60": 0.814,
          "sensitivity_at_60": 0.992,
          "accuracy_at_60": 0.856
        },
        "recovery": {
          "target": "prolonged_hyperglycaemia_event",
          "n": 424,
          "auc": 0.877,
          "correlation": 0.652,
          "f1_at_60": 0.799,
          "precision_at_60": 0.939,
          "sensitivity_at_60": 0.695,
          "accuracy_at_60": 0.724
        },
        "next_day": {
          "target": "next_day_instability_event",
          "n": 151,
          "auc": 0.965,
          "correlation": 0.801,
          "f1_at_60": 0.907,
          "precision_at_60": 0.924,
          "sensitivity_at_60": 0.89,
          "accuracy_at_60": 0.901
        }
      },
      "subjects": [
        {
          "subject": "35",
          "group": "t2d",
          "a1c": 8.5,
          "bmi": 28.7,
          "mean_glucose": 196.6,
          "days_covered": 10.0,
          "n_meals": 24,
          "meal_response_risk_mean": 85.9,
          "recovery_risk_mean": 70.2,
          "next_day_risk_mean": 76.3,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "12",
          "group": "t2d",
          "a1c": 7.1,
          "bmi": 30.3,
          "mean_glucose": 164.8,
          "days_covered": 10.2,
          "n_meals": 30,
          "meal_response_risk_mean": 87.0,
          "recovery_risk_mean": 70.7,
          "next_day_risk_mean": 71.4,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "46",
          "group": "t2d",
          "a1c": 7.4,
          "bmi": 28.2,
          "mean_glucose": 172.4,
          "days_covered": 10.2,
          "n_meals": 27,
          "meal_response_risk_mean": 85.4,
          "recovery_risk_mean": 69.3,
          "next_day_risk_mean": 71.4,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 18.2
        },
        {
          "subject": "30",
          "group": "t2d",
          "a1c": 7.6,
          "bmi": 34.0,
          "mean_glucose": 155.5,
          "days_covered": 10.7,
          "n_meals": 25,
          "meal_response_risk_mean": 76.3,
          "recovery_risk_mean": 45.8,
          "next_day_risk_mean": 67.8,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 41.7
        },
        {
          "subject": "47",
          "group": "t2d",
          "a1c": 6.9,
          "bmi": 31.4,
          "mean_glucose": 155.2,
          "days_covered": 10.9,
          "n_meals": 29,
          "meal_response_risk_mean": 81.7,
          "recovery_risk_mean": 68.6,
          "next_day_risk_mean": 67.4,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "49",
          "group": "t2d",
          "a1c": 7.2,
          "bmi": 36.1,
          "mean_glucose": 140.9,
          "days_covered": 10.6,
          "n_meals": 26,
          "meal_response_risk_mean": 85.6,
          "recovery_risk_mean": 72.7,
          "next_day_risk_mean": 67.0,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 9.1
        },
        {
          "subject": "39",
          "group": "t2d",
          "a1c": 8.3,
          "bmi": 26.9,
          "mean_glucose": 139.2,
          "days_covered": 11.9,
          "n_meals": 30,
          "meal_response_risk_mean": 80.8,
          "recovery_risk_mean": 62.7,
          "next_day_risk_mean": 63.2,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 7.7
        },
        {
          "subject": "42",
          "group": "t2d",
          "a1c": 7.1,
          "bmi": 43.3,
          "mean_glucose": 133.0,
          "days_covered": 10.1,
          "n_meals": 21,
          "meal_response_risk_mean": 70.0,
          "recovery_risk_mean": 59.0,
          "next_day_risk_mean": 59.1,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "36",
          "group": "t2d",
          "a1c": 6.9,
          "bmi": 25.0,
          "mean_glucose": 110.1,
          "days_covered": 11.9,
          "n_meals": 28,
          "meal_response_risk_mean": 73.1,
          "recovery_risk_mean": 52.5,
          "next_day_risk_mean": 58.4,
          "transition_risk_max": 100.0,
          "unstable_day_rate_pct": 7.7
        },
        {
          "subject": "3",
          "group": "t2d",
          "a1c": 6.5,
          "bmi": 26.9,
          "mean_glucose": 107.6,
          "days_covered": 10.1,
          "n_meals": 35,
          "meal_response_risk_mean": 74.2,
          "recovery_risk_mean": 58.4,
          "next_day_risk_mean": 56.8,
          "transition_risk_max": 99.7,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "38",
          "group": "t2d",
          "a1c": 7.2,
          "bmi": 34.5,
          "mean_glucose": 115.4,
          "days_covered": 10.1,
          "n_meals": 37,
          "meal_response_risk_mean": 65.7,
          "recovery_risk_mean": 55.9,
          "next_day_risk_mean": 56.4,
          "transition_risk_max": 99.7,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "5",
          "group": "t2d",
          "a1c": 6.6,
          "bmi": 31.0,
          "mean_glucose": 111.5,
          "days_covered": 10.0,
          "n_meals": 42,
          "meal_response_risk_mean": 67.3,
          "recovery_risk_mean": 51.3,
          "next_day_risk_mean": 55.3,
          "transition_risk_max": 99.5,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "14",
          "group": "t2d",
          "a1c": 7.1,
          "bmi": 28.5,
          "mean_glucose": 109.7,
          "days_covered": 12.0,
          "n_meals": 37,
          "meal_response_risk_mean": 65.8,
          "recovery_risk_mean": 52.1,
          "next_day_risk_mean": 54.1,
          "transition_risk_max": 99.2,
          "unstable_day_rate_pct": 0.0
        },
        {
          "subject": "28",
          "group": "t2d",
          "a1c": 7.0,
          "bmi": 40.0,
          "mean_glucose": 114.8,
          "days_covered": 13.0,
          "n_meals": 33,
          "meal_response_risk_mean": 61.1,
          "recovery_risk_mean": 51.6,
          "next_day_risk_mean": 52.2,
          "transition_risk_max": 96.8,
          "unstable_day_rate_pct": 0.0
        }
      ],
      "subject_details": {
        "35": {
          "overview": {
            "subject": "35",
            "group": "t2d",
            "a1c": 8.5,
            "bmi": 28.7,
            "mean_glucose": 196.6,
            "days_covered": 10.0,
            "n_meals": 24,
            "meal_response_risk_mean": 85.9,
            "recovery_risk_mean": 70.2,
            "next_day_risk_mean": 76.3,
            "drift_score_mean": 46.8,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2024-12-12",
              "mean_glucose": 181.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 74.6,
              "time_above_140_pct": 91.8,
              "daily_glucose_cv": 0.161
            },
            {
              "day": "2024-12-13",
              "mean_glucose": 190.9,
              "meal_risk": 86.5,
              "recovery_risk": 76.3,
              "transition_risk": 100.0,
              "next_day_risk": 76.7,
              "time_above_140_pct": 91.9,
              "daily_glucose_cv": 0.277
            },
            {
              "day": "2024-12-14",
              "mean_glucose": 167.9,
              "meal_risk": 80.3,
              "recovery_risk": 56.1,
              "transition_risk": 100.0,
              "next_day_risk": 73.6,
              "time_above_140_pct": 75.0,
              "daily_glucose_cv": 0.274
            },
            {
              "day": "2024-12-15",
              "mean_glucose": 172.0,
              "meal_risk": 79.0,
              "recovery_risk": 56.9,
              "transition_risk": 100.0,
              "next_day_risk": 73.0,
              "time_above_140_pct": 70.1,
              "daily_glucose_cv": 0.333
            },
            {
              "day": "2024-12-16",
              "mean_glucose": 188.2,
              "meal_risk": 84.9,
              "recovery_risk": 76.6,
              "transition_risk": 100.0,
              "next_day_risk": 77.6,
              "time_above_140_pct": 98.5,
              "daily_glucose_cv": 0.228
            },
            {
              "day": "2024-12-17",
              "mean_glucose": 200.0,
              "meal_risk": 86.6,
              "recovery_risk": 58.3,
              "transition_risk": 100.0,
              "next_day_risk": 77.5,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.152
            },
            {
              "day": "2024-12-18",
              "mean_glucose": 208.3,
              "meal_risk": 86.5,
              "recovery_risk": 74.0,
              "transition_risk": 100.0,
              "next_day_risk": 77.7,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.21
            },
            {
              "day": "2024-12-19",
              "mean_glucose": 194.4,
              "meal_risk": 89.6,
              "recovery_risk": 82.5,
              "transition_risk": 100.0,
              "next_day_risk": 77.6,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2024-12-20",
              "mean_glucose": 203.8,
              "meal_risk": 89.3,
              "recovery_risk": 77.7,
              "transition_risk": 100.0,
              "next_day_risk": 77.6,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2024-12-21",
              "mean_glucose": 247.1,
              "meal_risk": 99.1,
              "recovery_risk": 83.3,
              "transition_risk": 100.0,
              "next_day_risk": 77.4,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2024-12-22",
              "mean_glucose": 212.8,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 75.8,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.148
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 8,
              "mean_meal_risk": 97.6,
              "mean_recovery_risk": 83.0,
              "mean_peak_glucose": 316.2,
              "mean_carbs": 56.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 8,
              "mean_meal_risk": 80.7,
              "mean_recovery_risk": 59.7,
              "mean_peak_glucose": 224.7,
              "mean_carbs": 59.1
            },
            {
              "meal_slot": "dinner",
              "n_meals": 8,
              "mean_meal_risk": 79.2,
              "mean_recovery_risk": 67.9,
              "mean_peak_glucose": 225.3,
              "mean_carbs": 13.2
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2024-12-21 06:53:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 346.0,
              "meal_risk": 99.1,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2024-12-20 18:58:00",
              "meal_type": "dinner",
              "meal_carbs": 26.0,
              "peak_glucose": 244.0,
              "meal_risk": 76.5,
              "recovery_risk": 72.6
            },
            {
              "meal_start": "2024-12-20 12:45:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 264.0,
              "meal_risk": 93.2,
              "recovery_risk": 77.2
            },
            {
              "meal_start": "2024-12-20 06:39:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 309.0,
              "meal_risk": 98.1,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2024-12-19 18:42:00",
              "meal_type": "dinner",
              "meal_carbs": 54.0,
              "peak_glucose": 226.0,
              "meal_risk": 84.7,
              "recovery_risk": 82.4
            },
            {
              "meal_start": "2024-12-19 12:09:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 224.0,
              "meal_risk": 85.5,
              "recovery_risk": 81.9
            },
            {
              "meal_start": "2024-12-19 06:25:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 323.0,
              "meal_risk": 98.7,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2024-12-18 20:09:00",
              "meal_type": "dinner",
              "meal_carbs": 23.0,
              "peak_glucose": 238.0,
              "meal_risk": 79.0,
              "recovery_risk": 65.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 94.1,
              "estimated_recovery_risk": 78.4,
              "estimated_next_day_instability_risk": 71.1,
              "summary": "For breakfast, target about 45.0-69.5 g carbs, 44.0-66.0 g protein, 10.5-26.2 g fat, and 0.0-3.5 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 75.8,
              "estimated_recovery_risk": 55.9,
              "estimated_next_day_instability_risk": 71.2,
              "summary": "For lunch, target about 17.5-56.5 g carbs, 22.0-49.0 g protein, 13.5-14.5 g fat, and 4.5-5.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 76.9,
              "estimated_recovery_risk": 65.5,
              "estimated_next_day_instability_risk": 71.2,
              "summary": "For dinner, target about 0.0-1.5 g carbs, 0.0-24.5 g protein, 0.0-5.0 g fat, and 0.0-1.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 63.0,
              "estimated_recovery_risk": 50.2,
              "estimated_next_day_instability_risk": 57.2,
              "summary": "For snack, target about 9.0-30.0 g carbs, 1.0-5.0 g protein, 0.0-5.0 g fat, and 1.0-5.0 g fiber."
            }
          ]
        },
        "12": {
          "overview": {
            "subject": "12",
            "group": "t2d",
            "a1c": 7.1,
            "bmi": 30.3,
            "mean_glucose": 164.8,
            "days_covered": 10.2,
            "n_meals": 30,
            "meal_response_risk_mean": 87.0,
            "recovery_risk_mean": 70.7,
            "next_day_risk_mean": 71.4,
            "drift_score_mean": 59.4,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-02-26",
              "mean_glucose": 139.5,
              "meal_risk": 85.1,
              "recovery_risk": 76.5,
              "transition_risk": 100.0,
              "next_day_risk": 69.4,
              "time_above_140_pct": 47.9,
              "daily_glucose_cv": 0.314
            },
            {
              "day": "2023-02-27",
              "mean_glucose": 165.7,
              "meal_risk": 89.8,
              "recovery_risk": 78.8,
              "transition_risk": 100.0,
              "next_day_risk": 72.1,
              "time_above_140_pct": 69.9,
              "daily_glucose_cv": 0.269
            },
            {
              "day": "2023-02-28",
              "mean_glucose": 154.5,
              "meal_risk": 78.8,
              "recovery_risk": 65.7,
              "transition_risk": 100.0,
              "next_day_risk": 71.1,
              "time_above_140_pct": 65.9,
              "daily_glucose_cv": 0.251
            },
            {
              "day": "2023-03-01",
              "mean_glucose": 192.4,
              "meal_risk": 88.9,
              "recovery_risk": 65.6,
              "transition_risk": 100.0,
              "next_day_risk": 71.4,
              "time_above_140_pct": 73.3,
              "daily_glucose_cv": 0.357
            },
            {
              "day": "2023-03-02",
              "mean_glucose": 167.5,
              "meal_risk": 78.8,
              "recovery_risk": 62.2,
              "transition_risk": 100.0,
              "next_day_risk": 71.3,
              "time_above_140_pct": 70.1,
              "daily_glucose_cv": 0.241
            },
            {
              "day": "2023-03-03",
              "mean_glucose": 188.2,
              "meal_risk": 91.6,
              "recovery_risk": 79.4,
              "transition_risk": 100.0,
              "next_day_risk": 74.5,
              "time_above_140_pct": 89.0,
              "daily_glucose_cv": 0.236
            },
            {
              "day": "2023-03-04",
              "mean_glucose": 158.2,
              "meal_risk": 98.5,
              "recovery_risk": 78.7,
              "transition_risk": 100.0,
              "next_day_risk": 71.3,
              "time_above_140_pct": 66.7,
              "daily_glucose_cv": 0.355
            },
            {
              "day": "2023-03-05",
              "mean_glucose": 157.5,
              "meal_risk": 86.5,
              "recovery_risk": 74.1,
              "transition_risk": 100.0,
              "next_day_risk": 69.3,
              "time_above_140_pct": 49.5,
              "daily_glucose_cv": 0.344
            },
            {
              "day": "2023-03-06",
              "mean_glucose": 160.2,
              "meal_risk": 77.2,
              "recovery_risk": 55.4,
              "transition_risk": 100.0,
              "next_day_risk": 70.6,
              "time_above_140_pct": 68.6,
              "daily_glucose_cv": 0.263
            },
            {
              "day": "2023-03-07",
              "mean_glucose": 152.2,
              "meal_risk": 91.2,
              "recovery_risk": 71.5,
              "transition_risk": 100.0,
              "next_day_risk": 70.7,
              "time_above_140_pct": 62.2,
              "daily_glucose_cv": 0.232
            },
            {
              "day": "2023-03-08",
              "mean_glucose": 170.3,
              "meal_risk": 96.2,
              "recovery_risk": 69.3,
              "transition_risk": 100.0,
              "next_day_risk": 74.2,
              "time_above_140_pct": 89.7,
              "daily_glucose_cv": 0.185
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 95.4,
              "mean_recovery_risk": 73.6,
              "mean_peak_glucose": 290.6,
              "mean_carbs": 62.9
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 81.1,
              "mean_recovery_risk": 68.8,
              "mean_peak_glucose": 200.1,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 84.0,
              "mean_recovery_risk": 71.5,
              "mean_peak_glucose": 201.1,
              "mean_carbs": 17.6
            },
            {
              "meal_slot": "snack",
              "n_meals": 2,
              "mean_meal_risk": 91.8,
              "mean_recovery_risk": 63.8,
              "mean_peak_glucose": 275.5,
              "mean_carbs": 45.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-03-08 09:33:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 278.0,
              "meal_risk": 96.2,
              "recovery_risk": 69.3
            },
            {
              "meal_start": "2023-03-07 21:00:00",
              "meal_type": "dinner",
              "meal_carbs": 11.0,
              "peak_glucose": 197.0,
              "meal_risk": 84.3,
              "recovery_risk": 64.1
            },
            {
              "meal_start": "2023-03-07 14:42:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 272.0,
              "meal_risk": 98.0,
              "recovery_risk": 78.9
            },
            {
              "meal_start": "2023-03-06 14:49:00",
              "meal_type": "lunch",
              "meal_carbs": 93.0,
              "peak_glucose": 132.0,
              "meal_risk": 64.4,
              "recovery_risk": 51.7
            },
            {
              "meal_start": "2023-03-06 10:59:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 248.0,
              "meal_risk": 90.0,
              "recovery_risk": 59.1
            },
            {
              "meal_start": "2023-03-05 20:28:00",
              "meal_type": "dinner",
              "meal_carbs": 1.0,
              "peak_glucose": 203.0,
              "meal_risk": 90.8,
              "recovery_risk": 76.5
            },
            {
              "meal_start": "2023-03-05 14:25:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 148.0,
              "meal_risk": 73.0,
              "recovery_risk": 65.2
            },
            {
              "meal_start": "2023-03-05 09:58:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 260.0,
              "meal_risk": 95.6,
              "recovery_risk": 80.6
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 92.9,
              "estimated_recovery_risk": 72.7,
              "estimated_next_day_instability_risk": 68.5,
              "summary": "For breakfast, target about 55.5-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 76.6,
              "estimated_recovery_risk": 62.4,
              "estimated_next_day_instability_risk": 68.4,
              "summary": "For lunch, target about 18.2-53.2 g carbs, 57.5-78.0 g protein, 14.8-23.8 g fat, and 4.0-7.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 80.1,
              "estimated_recovery_risk": 68.0,
              "estimated_next_day_instability_risk": 68.2,
              "summary": "For dinner, target about 8.2-19.8 g carbs, 3.0-11.2 g protein, 0.0-7.8 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 33.0,
              "estimated_meal_response_risk": 71.2,
              "estimated_recovery_risk": 54.1,
              "estimated_next_day_instability_risk": 61.2,
              "summary": "For snack, target about 31.5-58.5 g carbs, 7.8-21.2 g protein, 3.0-9.0 g fat, and 7.0-13.0 g fiber."
            }
          ]
        },
        "46": {
          "overview": {
            "subject": "46",
            "group": "t2d",
            "a1c": 7.4,
            "bmi": 28.2,
            "mean_glucose": 172.4,
            "days_covered": 10.2,
            "n_meals": 27,
            "meal_response_risk_mean": 85.4,
            "recovery_risk_mean": 69.3,
            "next_day_risk_mean": 71.4,
            "drift_score_mean": 55.0,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 18.2,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2025-05-01",
              "mean_glucose": 160.9,
              "meal_risk": 56.1,
              "recovery_risk": 40.2,
              "transition_risk": 100.0,
              "next_day_risk": 70.4,
              "time_above_140_pct": 71.8,
              "daily_glucose_cv": 0.198
            },
            {
              "day": "2025-05-02",
              "mean_glucose": 156.2,
              "meal_risk": 87.5,
              "recovery_risk": 69.9,
              "transition_risk": 100.0,
              "next_day_risk": 70.6,
              "time_above_140_pct": 57.3,
              "daily_glucose_cv": 0.283
            },
            {
              "day": "2025-05-03",
              "mean_glucose": 162.2,
              "meal_risk": 84.7,
              "recovery_risk": 61.7,
              "transition_risk": 100.0,
              "next_day_risk": 70.6,
              "time_above_140_pct": 54.9,
              "daily_glucose_cv": 0.361
            },
            {
              "day": "2025-05-04",
              "mean_glucose": 165.5,
              "meal_risk": 89.3,
              "recovery_risk": 70.8,
              "transition_risk": 100.0,
              "next_day_risk": 71.4,
              "time_above_140_pct": 65.4,
              "daily_glucose_cv": 0.237
            },
            {
              "day": "2025-05-05",
              "mean_glucose": 177.5,
              "meal_risk": 95.2,
              "recovery_risk": 74.8,
              "transition_risk": 100.0,
              "next_day_risk": 70.0,
              "time_above_140_pct": 54.2,
              "daily_glucose_cv": 0.382
            },
            {
              "day": "2025-05-06",
              "mean_glucose": 199.5,
              "meal_risk": 90.3,
              "recovery_risk": 80.1,
              "transition_risk": 100.0,
              "next_day_risk": 73.2,
              "time_above_140_pct": 76.8,
              "daily_glucose_cv": 0.271
            },
            {
              "day": "2025-05-07",
              "mean_glucose": 226.6,
              "meal_risk": 89.1,
              "recovery_risk": 77.2,
              "transition_risk": 100.0,
              "next_day_risk": 76.2,
              "time_above_140_pct": 100.0,
              "daily_glucose_cv": 0.208
            },
            {
              "day": "2025-05-08",
              "mean_glucose": 170.0,
              "meal_risk": 76.7,
              "recovery_risk": 52.1,
              "transition_risk": 100.0,
              "next_day_risk": 72.3,
              "time_above_140_pct": 75.2,
              "daily_glucose_cv": 0.261
            },
            {
              "day": "2025-05-09",
              "mean_glucose": 160.2,
              "meal_risk": 83.8,
              "recovery_risk": 66.9,
              "transition_risk": 100.0,
              "next_day_risk": 72.3,
              "time_above_140_pct": 77.4,
              "daily_glucose_cv": 0.237
            },
            {
              "day": "2025-05-10",
              "mean_glucose": 145.4,
              "meal_risk": 74.3,
              "recovery_risk": 74.8,
              "transition_risk": 100.0,
              "next_day_risk": 69.8,
              "time_above_140_pct": 63.5,
              "daily_glucose_cv": 0.15
            },
            {
              "day": "2025-05-11",
              "mean_glucose": 163.8,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 68.6,
              "time_above_140_pct": 58.8,
              "daily_glucose_cv": 0.316
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 8,
              "mean_meal_risk": 95.1,
              "mean_recovery_risk": 72.6,
              "mean_peak_glucose": 261.7,
              "mean_carbs": 61.6
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 74.9,
              "mean_recovery_risk": 57.6,
              "mean_peak_glucose": 185.0,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 88.4,
              "mean_recovery_risk": 79.3,
              "mean_peak_glucose": 251.7,
              "mean_carbs": 39.3
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2025-05-10 14:28:00",
              "meal_type": "dinner",
              "meal_carbs": 47.0,
              "peak_glucose": 181.0,
              "meal_risk": 76.9,
              "recovery_risk": 82.9
            },
            {
              "meal_start": "2025-05-10 11:46:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 150.0,
              "meal_risk": 71.7,
              "recovery_risk": 66.7
            },
            {
              "meal_start": "2025-05-09 15:04:00",
              "meal_type": "dinner",
              "meal_carbs": 17.0,
              "peak_glucose": 209.0,
              "meal_risk": 88.1,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2025-05-09 12:23:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 159.4,
              "meal_risk": 66.1,
              "recovery_risk": 47.6
            },
            {
              "meal_start": "2025-05-09 07:59:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 286.0,
              "meal_risk": 97.2,
              "recovery_risk": 70.0
            },
            {
              "meal_start": "2025-05-08 16:10:00",
              "meal_type": "dinner",
              "meal_carbs": 35.0,
              "peak_glucose": 210.0,
              "meal_risk": 88.8,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2025-05-08 11:43:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 128.4,
              "meal_risk": 46.9,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2025-05-08 07:59:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 272.0,
              "meal_risk": 94.3,
              "recovery_risk": 71.0
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 92.5,
              "estimated_recovery_risk": 72.0,
              "estimated_next_day_instability_risk": 68.4,
              "summary": "For breakfast, target about 45.0-66.0 g carbs, 44.0-66.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 72.5,
              "estimated_recovery_risk": 55.0,
              "estimated_next_day_instability_risk": 68.7,
              "summary": "For lunch, target about 42.2-84.2 g carbs, 38.0-79.0 g protein, 19.2-28.6 g fat, and 10.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 83.0,
              "estimated_recovery_risk": 73.0,
              "estimated_next_day_instability_risk": 69.0,
              "summary": "For dinner, target about 22.0-44.8 g carbs, 3.5-39.2 g protein, 1.5-18.2 g fat, and 0.0-1.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 63.0,
              "estimated_recovery_risk": 50.2,
              "estimated_next_day_instability_risk": 57.2,
              "summary": "For snack, target about 9.0-30.0 g carbs, 1.0-5.0 g protein, 0.0-5.0 g fat, and 1.0-5.0 g fiber."
            }
          ]
        },
        "30": {
          "overview": {
            "subject": "30",
            "group": "t2d",
            "a1c": 7.6,
            "bmi": 34.0,
            "mean_glucose": 155.5,
            "days_covered": 10.7,
            "n_meals": 25,
            "meal_response_risk_mean": 76.3,
            "recovery_risk_mean": 45.8,
            "next_day_risk_mean": 67.8,
            "drift_score_mean": 56.0,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 41.7,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2021-01-23",
              "mean_glucose": 135.1,
              "meal_risk": 43.9,
              "recovery_risk": 18.2,
              "transition_risk": 99.9,
              "next_day_risk": 67.6,
              "time_above_140_pct": 37.1,
              "daily_glucose_cv": 0.304
            },
            {
              "day": "2021-01-24",
              "mean_glucose": 164.1,
              "meal_risk": 59.3,
              "recovery_risk": 30.9,
              "transition_risk": 100.0,
              "next_day_risk": 71.4,
              "time_above_140_pct": 62.2,
              "daily_glucose_cv": 0.379
            },
            {
              "day": "2021-01-25",
              "mean_glucose": 159.1,
              "meal_risk": 84.8,
              "recovery_risk": 48.1,
              "transition_risk": 100.0,
              "next_day_risk": 70.4,
              "time_above_140_pct": 51.9,
              "daily_glucose_cv": 0.4
            },
            {
              "day": "2021-01-26",
              "mean_glucose": 159.2,
              "meal_risk": 73.2,
              "recovery_risk": 46.7,
              "transition_risk": 100.0,
              "next_day_risk": 68.9,
              "time_above_140_pct": 46.2,
              "daily_glucose_cv": 0.399
            },
            {
              "day": "2021-01-27",
              "mean_glucose": 164.1,
              "meal_risk": 89.0,
              "recovery_risk": 38.6,
              "transition_risk": 100.0,
              "next_day_risk": 70.2,
              "time_above_140_pct": 49.6,
              "daily_glucose_cv": 0.47
            },
            {
              "day": "2021-01-28",
              "mean_glucose": 143.1,
              "meal_risk": 77.3,
              "recovery_risk": 52.0,
              "transition_risk": 100.0,
              "next_day_risk": 66.5,
              "time_above_140_pct": 40.9,
              "daily_glucose_cv": 0.262
            },
            {
              "day": "2021-01-29",
              "mean_glucose": 141.8,
              "meal_risk": 76.5,
              "recovery_risk": 63.5,
              "transition_risk": 99.9,
              "next_day_risk": 65.7,
              "time_above_140_pct": 34.6,
              "daily_glucose_cv": 0.269
            },
            {
              "day": "2021-01-30",
              "mean_glucose": 159.4,
              "meal_risk": 79.7,
              "recovery_risk": 55.8,
              "transition_risk": 100.0,
              "next_day_risk": 70.8,
              "time_above_140_pct": 57.6,
              "daily_glucose_cv": 0.304
            },
            {
              "day": "2021-01-31",
              "mean_glucose": 163.7,
              "meal_risk": 79.7,
              "recovery_risk": 38.2,
              "transition_risk": 100.0,
              "next_day_risk": 69.1,
              "time_above_140_pct": 39.0,
              "daily_glucose_cv": 0.472
            },
            {
              "day": "2021-02-01",
              "mean_glucose": 149.5,
              "meal_risk": 89.6,
              "recovery_risk": 50.1,
              "transition_risk": 100.0,
              "next_day_risk": 68.6,
              "time_above_140_pct": 45.1,
              "daily_glucose_cv": 0.357
            },
            {
              "day": "2021-02-02",
              "mean_glucose": 169.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 69.3,
              "time_above_140_pct": 61.6,
              "daily_glucose_cv": 0.348
            },
            {
              "day": "2021-02-03",
              "mean_glucose": 113.8,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 55.8,
              "next_day_risk": 55.6,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.096
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 7,
              "mean_meal_risk": 97.5,
              "mean_recovery_risk": 75.5,
              "mean_peak_glucose": 298.4,
              "mean_carbs": 54.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 64.5,
              "mean_recovery_risk": 18.2,
              "mean_peak_glucose": 202.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 8,
              "mean_meal_risk": 72.5,
              "mean_recovery_risk": 54.2,
              "mean_peak_glucose": 194.3,
              "mean_carbs": 40.2
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2021-02-01 20:05:00",
              "meal_type": "dinner",
              "meal_carbs": 37.0,
              "peak_glucose": 286.0,
              "meal_risk": 98.3,
              "recovery_risk": 70.0
            },
            {
              "meal_start": "2021-02-01 12:42:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 242.0,
              "meal_risk": 73.3,
              "recovery_risk": 8.3
            },
            {
              "meal_start": "2021-02-01 09:34:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 272.0,
              "meal_risk": 97.4,
              "recovery_risk": 72.1
            },
            {
              "meal_start": "2021-01-31 12:13:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 220.9,
              "meal_risk": 59.8,
              "recovery_risk": 2.6
            },
            {
              "meal_start": "2021-01-31 08:16:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 356.0,
              "meal_risk": 99.7,
              "recovery_risk": 73.8
            },
            {
              "meal_start": "2021-01-30 12:30:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 190.0,
              "meal_risk": 62.4,
              "recovery_risk": 35.0
            },
            {
              "meal_start": "2021-01-30 08:30:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 281.0,
              "meal_risk": 97.0,
              "recovery_risk": 76.5
            },
            {
              "meal_start": "2021-01-29 16:46:00",
              "meal_type": "dinner",
              "meal_carbs": 80.0,
              "peak_glucose": 186.0,
              "meal_risk": 80.9,
              "recovery_risk": 71.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 93.7,
              "estimated_recovery_risk": 73.6,
              "estimated_next_day_instability_risk": 66.1,
              "summary": "For breakfast, target about 45.0-66.0 g carbs, 22.0-44.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 65.6,
              "estimated_recovery_risk": 28.7,
              "estimated_next_day_instability_risk": 66.9,
              "summary": "For lunch, target about 67.8-92.2 g carbs, 19.2-37.5 g protein, 19.6-42.5 g fat, and 8.5-11.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 72.7,
              "estimated_recovery_risk": 57.1,
              "estimated_next_day_instability_risk": 66.4,
              "summary": "For dinner, target about 10.5-28.5 g carbs, 8.0-17.0 g protein, 9.5-27.0 g fat, and 5.5-11.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 63.0,
              "estimated_recovery_risk": 50.2,
              "estimated_next_day_instability_risk": 57.2,
              "summary": "For snack, target about 9.0-30.0 g carbs, 1.0-5.0 g protein, 0.0-5.0 g fat, and 1.0-5.0 g fiber."
            }
          ]
        },
        "47": {
          "overview": {
            "subject": "47",
            "group": "t2d",
            "a1c": 6.9,
            "bmi": 31.4,
            "mean_glucose": 155.2,
            "days_covered": 10.9,
            "n_meals": 29,
            "meal_response_risk_mean": 81.7,
            "recovery_risk_mean": 68.6,
            "next_day_risk_mean": 67.4,
            "drift_score_mean": 44.3,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2025-10-30",
              "mean_glucose": 135.1,
              "meal_risk": 68.8,
              "recovery_risk": 55.7,
              "transition_risk": 99.9,
              "next_day_risk": 64.3,
              "time_above_140_pct": 38.6,
              "daily_glucose_cv": 0.215
            },
            {
              "day": "2025-10-31",
              "mean_glucose": 144.0,
              "meal_risk": 80.6,
              "recovery_risk": 70.9,
              "transition_risk": 100.0,
              "next_day_risk": 64.8,
              "time_above_140_pct": 39.4,
              "daily_glucose_cv": 0.311
            },
            {
              "day": "2025-11-01",
              "mean_glucose": 149.9,
              "meal_risk": 82.0,
              "recovery_risk": 56.3,
              "transition_risk": 100.0,
              "next_day_risk": 64.9,
              "time_above_140_pct": 42.2,
              "daily_glucose_cv": 0.321
            },
            {
              "day": "2025-11-02",
              "mean_glucose": 161.0,
              "meal_risk": 85.3,
              "recovery_risk": 73.4,
              "transition_risk": 100.0,
              "next_day_risk": 68.4,
              "time_above_140_pct": 57.8,
              "daily_glucose_cv": 0.259
            },
            {
              "day": "2025-11-03",
              "mean_glucose": 160.7,
              "meal_risk": 81.3,
              "recovery_risk": 76.0,
              "transition_risk": 100.0,
              "next_day_risk": 69.3,
              "time_above_140_pct": 62.1,
              "daily_glucose_cv": 0.25
            },
            {
              "day": "2025-11-04",
              "mean_glucose": 160.2,
              "meal_risk": 86.2,
              "recovery_risk": 78.4,
              "transition_risk": 100.0,
              "next_day_risk": 70.9,
              "time_above_140_pct": 75.3,
              "daily_glucose_cv": 0.19
            },
            {
              "day": "2025-11-05",
              "mean_glucose": 174.6,
              "meal_risk": 86.1,
              "recovery_risk": 58.3,
              "transition_risk": 100.0,
              "next_day_risk": 71.2,
              "time_above_140_pct": 78.6,
              "daily_glucose_cv": 0.232
            },
            {
              "day": "2025-11-06",
              "mean_glucose": 148.3,
              "meal_risk": 82.5,
              "recovery_risk": 72.8,
              "transition_risk": 100.0,
              "next_day_risk": 67.9,
              "time_above_140_pct": 55.1,
              "daily_glucose_cv": 0.174
            },
            {
              "day": "2025-11-07",
              "mean_glucose": 161.4,
              "meal_risk": 81.5,
              "recovery_risk": 79.7,
              "transition_risk": 100.0,
              "next_day_risk": 69.0,
              "time_above_140_pct": 59.9,
              "daily_glucose_cv": 0.231
            },
            {
              "day": "2025-11-08",
              "mean_glucose": 160.3,
              "meal_risk": 78.5,
              "recovery_risk": 59.9,
              "transition_risk": 100.0,
              "next_day_risk": 71.1,
              "time_above_140_pct": 75.3,
              "daily_glucose_cv": 0.154
            },
            {
              "day": "2025-11-09",
              "mean_glucose": 150.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 66.4,
              "time_above_140_pct": 60.5,
              "daily_glucose_cv": 0.242
            },
            {
              "day": "2025-11-10",
              "mean_glucose": 131.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 99.0,
              "next_day_risk": 59.9,
              "time_above_140_pct": 27.2,
              "daily_glucose_cv": 0.077
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 92.9,
              "mean_recovery_risk": 78.6,
              "mean_peak_glucose": 261.4,
              "mean_carbs": 57.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 70.7,
              "mean_recovery_risk": 54.7,
              "mean_peak_glucose": 189.8,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 82.6,
              "mean_recovery_risk": 73.4,
              "mean_peak_glucose": 200.7,
              "mean_carbs": 43.6
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2025-11-08 16:23:00",
              "meal_type": "dinner",
              "meal_carbs": 43.0,
              "peak_glucose": 206.6,
              "meal_risk": 84.8,
              "recovery_risk": 81.5
            },
            {
              "meal_start": "2025-11-08 11:28:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 203.0,
              "meal_risk": 78.9,
              "recovery_risk": 56.9
            },
            {
              "meal_start": "2025-11-08 09:59:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 210.0,
              "meal_risk": 71.8,
              "recovery_risk": 41.5
            },
            {
              "meal_start": "2025-11-07 15:50:00",
              "meal_type": "dinner",
              "meal_carbs": 61.0,
              "peak_glucose": 185.0,
              "meal_risk": 77.0,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2025-11-07 11:07:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 194.0,
              "meal_risk": 73.2,
              "recovery_risk": 72.7
            },
            {
              "meal_start": "2025-11-07 07:54:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 252.0,
              "meal_risk": 94.1,
              "recovery_risk": 83.3
            },
            {
              "meal_start": "2025-11-06 16:06:00",
              "meal_type": "dinner",
              "meal_carbs": 95.0,
              "peak_glucose": 188.0,
              "meal_risk": 84.9,
              "recovery_risk": 71.4
            },
            {
              "meal_start": "2025-11-06 11:47:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 183.0,
              "meal_risk": 71.2,
              "recovery_risk": 63.7
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 91.3,
              "estimated_recovery_risk": 75.9,
              "estimated_next_day_instability_risk": 66.5,
              "summary": "For breakfast, target about 24.0-66.0 g carbs, 22.0-33.0 g protein, 10.5-18.4 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 69.7,
              "estimated_recovery_risk": 53.0,
              "estimated_next_day_instability_risk": 66.4,
              "summary": "For lunch, target about 18.2-80.0 g carbs, 20.8-40.5 g protein, 14.8-24.4 g fat, and 4.8-10.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 79.5,
              "estimated_recovery_risk": 69.5,
              "estimated_next_day_instability_risk": 66.4,
              "summary": "For dinner, target about 26.8-45.2 g carbs, 21.2-31.5 g protein, 19.5-28.0 g fat, and 1.8-2.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 63.0,
              "estimated_recovery_risk": 50.2,
              "estimated_next_day_instability_risk": 57.2,
              "summary": "For snack, target about 9.0-30.0 g carbs, 1.0-5.0 g protein, 0.0-5.0 g fat, and 1.0-5.0 g fiber."
            }
          ]
        },
        "49": {
          "overview": {
            "subject": "49",
            "group": "t2d",
            "a1c": 7.2,
            "bmi": 36.1,
            "mean_glucose": 140.9,
            "days_covered": 10.6,
            "n_meals": 26,
            "meal_response_risk_mean": 85.6,
            "recovery_risk_mean": 72.7,
            "next_day_risk_mean": 67.0,
            "drift_score_mean": 56.9,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 9.1,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2025-05-11",
              "mean_glucose": 145.4,
              "meal_risk": 80.3,
              "recovery_risk": 76.8,
              "transition_risk": 100.0,
              "next_day_risk": 68.1,
              "time_above_140_pct": 47.9,
              "daily_glucose_cv": 0.217
            },
            {
              "day": "2025-05-12",
              "mean_glucose": 158.4,
              "meal_risk": 88.2,
              "recovery_risk": 80.5,
              "transition_risk": 100.0,
              "next_day_risk": 68.9,
              "time_above_140_pct": 55.6,
              "daily_glucose_cv": 0.381
            },
            {
              "day": "2025-05-13",
              "mean_glucose": 139.6,
              "meal_risk": 93.5,
              "recovery_risk": 80.6,
              "transition_risk": 100.0,
              "next_day_risk": 66.1,
              "time_above_140_pct": 38.5,
              "daily_glucose_cv": 0.308
            },
            {
              "day": "2025-05-14",
              "mean_glucose": 155.9,
              "meal_risk": 96.8,
              "recovery_risk": 81.4,
              "transition_risk": 100.0,
              "next_day_risk": 67.8,
              "time_above_140_pct": 53.0,
              "daily_glucose_cv": 0.295
            },
            {
              "day": "2025-05-15",
              "mean_glucose": 135.3,
              "meal_risk": 72.6,
              "recovery_risk": 65.4,
              "transition_risk": 99.9,
              "next_day_risk": 65.4,
              "time_above_140_pct": 35.1,
              "daily_glucose_cv": 0.259
            },
            {
              "day": "2025-05-16",
              "mean_glucose": 127.9,
              "meal_risk": 84.1,
              "recovery_risk": 70.4,
              "transition_risk": 99.9,
              "next_day_risk": 66.3,
              "time_above_140_pct": 36.7,
              "daily_glucose_cv": 0.239
            },
            {
              "day": "2025-05-17",
              "mean_glucose": 140.4,
              "meal_risk": 88.6,
              "recovery_risk": 72.4,
              "transition_risk": 100.0,
              "next_day_risk": 68.8,
              "time_above_140_pct": 55.1,
              "daily_glucose_cv": 0.286
            },
            {
              "day": "2025-05-18",
              "mean_glucose": 129.5,
              "meal_risk": 77.3,
              "recovery_risk": 66.1,
              "transition_risk": 99.8,
              "next_day_risk": 64.2,
              "time_above_140_pct": 27.6,
              "daily_glucose_cv": 0.315
            },
            {
              "day": "2025-05-19",
              "mean_glucose": 127.6,
              "meal_risk": 88.7,
              "recovery_risk": 75.9,
              "transition_risk": 99.9,
              "next_day_risk": 65.5,
              "time_above_140_pct": 29.9,
              "daily_glucose_cv": 0.395
            },
            {
              "day": "2025-05-20",
              "mean_glucose": 138.9,
              "meal_risk": 93.7,
              "recovery_risk": 76.2,
              "transition_risk": 100.0,
              "next_day_risk": 67.3,
              "time_above_140_pct": 47.0,
              "daily_glucose_cv": 0.326
            },
            {
              "day": "2025-05-21",
              "mean_glucose": 152.4,
              "meal_risk": 77.8,
              "recovery_risk": 45.8,
              "transition_risk": 100.0,
              "next_day_risk": 69.1,
              "time_above_140_pct": 55.6,
              "daily_glucose_cv": 0.347
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 92.3,
              "mean_recovery_risk": 74.3,
              "mean_peak_glucose": 259.8,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 81.4,
              "mean_recovery_risk": 69.9,
              "mean_peak_glucose": 179.5,
              "mean_carbs": 63.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 7,
              "mean_meal_risk": 81.4,
              "mean_recovery_risk": 74.1,
              "mean_peak_glucose": 189.4,
              "mean_carbs": 58.9
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2025-05-21 08:02:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 223.0,
              "meal_risk": 77.8,
              "recovery_risk": 45.8
            },
            {
              "meal_start": "2025-05-20 12:53:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 232.0,
              "meal_risk": 96.3,
              "recovery_risk": 77.7
            },
            {
              "meal_start": "2025-05-20 07:06:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 229.0,
              "meal_risk": 91.2,
              "recovery_risk": 74.6
            },
            {
              "meal_start": "2025-05-19 20:21:00",
              "meal_type": "dinner",
              "meal_carbs": 38.0,
              "peak_glucose": 192.0,
              "meal_risk": 90.4,
              "recovery_risk": 79.8
            },
            {
              "meal_start": "2025-05-19 13:37:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 149.0,
              "meal_risk": 77.2,
              "recovery_risk": 65.6
            },
            {
              "meal_start": "2025-05-19 07:06:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 295.0,
              "meal_risk": 98.4,
              "recovery_risk": 82.2
            },
            {
              "meal_start": "2025-05-18 19:42:00",
              "meal_type": "dinner",
              "meal_carbs": 69.0,
              "peak_glucose": 190.0,
              "meal_risk": 67.9,
              "recovery_risk": 63.5
            },
            {
              "meal_start": "2025-05-18 13:01:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 156.0,
              "meal_risk": 67.2,
              "recovery_risk": 60.5
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 91.0,
              "estimated_recovery_risk": 73.2,
              "estimated_next_day_instability_risk": 65.5,
              "summary": "For breakfast, target about 24.0-73.0 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 76.5,
              "estimated_recovery_risk": 62.7,
              "estimated_next_day_instability_risk": 65.3,
              "summary": "For lunch, target about 34.8-55.2 g carbs, 19.2-43.0 g protein, 16.5-25.5 g fat, and 8.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 77.9,
              "estimated_recovery_risk": 68.9,
              "estimated_next_day_instability_risk": 65.1,
              "summary": "For dinner, target about 27.5-55.5 g carbs, 8.0-22.0 g protein, 11.0-32.0 g fat, and 6.5-15.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 63.0,
              "estimated_recovery_risk": 50.2,
              "estimated_next_day_instability_risk": 57.2,
              "summary": "For snack, target about 9.0-30.0 g carbs, 1.0-5.0 g protein, 0.0-5.0 g fat, and 1.0-5.0 g fiber."
            }
          ]
        },
        "39": {
          "overview": {
            "subject": "39",
            "group": "t2d",
            "a1c": 8.3,
            "bmi": 26.9,
            "mean_glucose": 139.2,
            "days_covered": 11.9,
            "n_meals": 30,
            "meal_response_risk_mean": 80.8,
            "recovery_risk_mean": 62.7,
            "next_day_risk_mean": 63.2,
            "drift_score_mean": 51.6,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 7.7,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2025-02-07",
              "mean_glucose": 141.9,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 99.9,
              "next_day_risk": 62.2,
              "time_above_140_pct": 44.7,
              "daily_glucose_cv": 0.149
            },
            {
              "day": "2025-02-08",
              "mean_glucose": 137.2,
              "meal_risk": 88.5,
              "recovery_risk": 71.9,
              "transition_risk": 99.9,
              "next_day_risk": 64.4,
              "time_above_140_pct": 30.6,
              "daily_glucose_cv": 0.355
            },
            {
              "day": "2025-02-09",
              "mean_glucose": 134.7,
              "meal_risk": 76.0,
              "recovery_risk": 54.0,
              "transition_risk": 99.7,
              "next_day_risk": 62.4,
              "time_above_140_pct": 26.5,
              "daily_glucose_cv": 0.355
            },
            {
              "day": "2025-02-10",
              "mean_glucose": 151.2,
              "meal_risk": 80.2,
              "recovery_risk": 69.3,
              "transition_risk": 100.0,
              "next_day_risk": 65.5,
              "time_above_140_pct": 43.2,
              "daily_glucose_cv": 0.326
            },
            {
              "day": "2025-02-11",
              "mean_glucose": 143.5,
              "meal_risk": 82.5,
              "recovery_risk": 53.0,
              "transition_risk": 100.0,
              "next_day_risk": 66.4,
              "time_above_140_pct": 48.4,
              "daily_glucose_cv": 0.267
            },
            {
              "day": "2025-02-12",
              "mean_glucose": 140.9,
              "meal_risk": 70.7,
              "recovery_risk": 66.9,
              "transition_risk": 100.0,
              "next_day_risk": 64.2,
              "time_above_140_pct": 46.9,
              "daily_glucose_cv": 0.161
            },
            {
              "day": "2025-02-13",
              "mean_glucose": 139.9,
              "meal_risk": 77.6,
              "recovery_risk": 67.7,
              "transition_risk": 99.9,
              "next_day_risk": 62.7,
              "time_above_140_pct": 33.5,
              "daily_glucose_cv": 0.336
            },
            {
              "day": "2025-02-14",
              "mean_glucose": 120.5,
              "meal_risk": 68.0,
              "recovery_risk": 45.1,
              "transition_risk": 98.9,
              "next_day_risk": 62.1,
              "time_above_140_pct": 19.2,
              "daily_glucose_cv": 0.446
            },
            {
              "day": "2025-02-15",
              "mean_glucose": 152.2,
              "meal_risk": 88.2,
              "recovery_risk": 55.9,
              "transition_risk": 100.0,
              "next_day_risk": 66.5,
              "time_above_140_pct": 43.1,
              "daily_glucose_cv": 0.424
            },
            {
              "day": "2025-02-16",
              "mean_glucose": 134.2,
              "meal_risk": 86.3,
              "recovery_risk": 74.0,
              "transition_risk": 99.9,
              "next_day_risk": 63.9,
              "time_above_140_pct": 34.3,
              "daily_glucose_cv": 0.231
            },
            {
              "day": "2025-02-17",
              "mean_glucose": 146.9,
              "meal_risk": 96.8,
              "recovery_risk": 77.5,
              "transition_risk": 100.0,
              "next_day_risk": 65.4,
              "time_above_140_pct": 43.1,
              "daily_glucose_cv": 0.32
            },
            {
              "day": "2025-02-18",
              "mean_glucose": 136.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 100.0,
              "next_day_risk": 62.6,
              "time_above_140_pct": 41.9,
              "daily_glucose_cv": 0.237
            },
            {
              "day": "2025-02-19",
              "mean_glucose": 117.4,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 50.9,
              "next_day_risk": 54.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.091
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 96.3,
              "mean_recovery_risk": 81.4,
              "mean_peak_glucose": 270.9,
              "mean_carbs": 62.9
            },
            {
              "meal_slot": "lunch",
              "n_meals": 9,
              "mean_meal_risk": 69.7,
              "mean_recovery_risk": 39.4,
              "mean_peak_glucose": 188.5,
              "mean_carbs": 63.0
            },
            {
              "meal_slot": "dinner",
              "n_meals": 6,
              "mean_meal_risk": 81.8,
              "mean_recovery_risk": 67.4,
              "mean_peak_glucose": 185.4,
              "mean_carbs": 32.2
            },
            {
              "meal_slot": "snack",
              "n_meals": 6,
              "mean_meal_risk": 73.4,
              "mean_recovery_risk": 64.7,
              "mean_peak_glucose": 169.5,
              "mean_carbs": 35.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2025-02-17 09:17:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 258.0,
              "meal_risk": 96.8,
              "recovery_risk": 77.5
            },
            {
              "meal_start": "2025-02-16 17:52:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 174.0,
              "meal_risk": 81.3,
              "recovery_risk": 63.7
            },
            {
              "meal_start": "2025-02-16 12:05:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 207.0,
              "meal_risk": 91.5,
              "recovery_risk": 79.1
            },
            {
              "meal_start": "2025-02-16 07:13:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 212.0,
              "meal_risk": 86.2,
              "recovery_risk": 79.3
            },
            {
              "meal_start": "2025-02-15 18:22:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 247.0,
              "meal_risk": 96.9,
              "recovery_risk": 79.4
            },
            {
              "meal_start": "2025-02-15 11:25:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 222.8,
              "meal_risk": 68.3,
              "recovery_risk": 6.2
            },
            {
              "meal_start": "2025-02-15 08:28:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 321.0,
              "meal_risk": 99.3,
              "recovery_risk": 82.2
            },
            {
              "meal_start": "2025-02-14 15:29:00",
              "meal_type": "dinner",
              "meal_carbs": 70.0,
              "peak_glucose": 121.0,
              "meal_risk": 57.0,
              "recovery_risk": 51.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 93.5,
              "estimated_recovery_risk": 77.7,
              "estimated_next_day_instability_risk": 63.7,
              "summary": "For breakfast, target about 55.5-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 69.0,
              "estimated_recovery_risk": 43.1,
              "estimated_next_day_instability_risk": 63.7,
              "summary": "For lunch, target about 18.2-49.0 g carbs, 29.5-68.5 g protein, 14.8-17.4 g fat, and 4.8-11.5 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 77.8,
              "estimated_recovery_risk": 64.8,
              "estimated_next_day_instability_risk": 63.5,
              "summary": "For dinner, target about 35.0-71.5 g carbs, 13.5-34.0 g protein, 2.5-6.0 g fat, and 4.5-9.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 68.7,
              "estimated_recovery_risk": 58.1,
              "estimated_next_day_instability_risk": 61.1,
              "summary": "For snack, target about 33.5-55.0 g carbs, 1.0-3.5 g protein, 0.0-1.5 g fat, and 7.0-10.5 g fiber."
            }
          ]
        },
        "42": {
          "overview": {
            "subject": "42",
            "group": "t2d",
            "a1c": 7.1,
            "bmi": 43.3,
            "mean_glucose": 133.0,
            "days_covered": 10.1,
            "n_meals": 21,
            "meal_response_risk_mean": 70.0,
            "recovery_risk_mean": 59.0,
            "next_day_risk_mean": 59.1,
            "drift_score_mean": 43.3,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2025-07-25",
              "mean_glucose": 136.2,
              "meal_risk": 79.3,
              "recovery_risk": 73.3,
              "transition_risk": 100.0,
              "next_day_risk": 63.3,
              "time_above_140_pct": 47.5,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2025-07-26",
              "mean_glucose": 131.3,
              "meal_risk": 76.9,
              "recovery_risk": 64.7,
              "transition_risk": 99.7,
              "next_day_risk": 57.8,
              "time_above_140_pct": 28.7,
              "daily_glucose_cv": 0.195
            },
            {
              "day": "2025-07-27",
              "mean_glucose": 132.4,
              "meal_risk": 61.6,
              "recovery_risk": 36.5,
              "transition_risk": 99.2,
              "next_day_risk": 58.8,
              "time_above_140_pct": 27.4,
              "daily_glucose_cv": 0.164
            },
            {
              "day": "2025-07-28",
              "mean_glucose": 127.6,
              "meal_risk": 86.3,
              "recovery_risk": 70.0,
              "transition_risk": 98.8,
              "next_day_risk": 58.4,
              "time_above_140_pct": 18.5,
              "daily_glucose_cv": 0.198
            },
            {
              "day": "2025-07-29",
              "mean_glucose": 148.6,
              "meal_risk": 82.3,
              "recovery_risk": 81.5,
              "transition_risk": 100.0,
              "next_day_risk": 64.5,
              "time_above_140_pct": 53.3,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2025-07-30",
              "mean_glucose": 132.8,
              "meal_risk": 70.6,
              "recovery_risk": 60.9,
              "transition_risk": 99.1,
              "next_day_risk": 57.5,
              "time_above_140_pct": 24.7,
              "daily_glucose_cv": 0.108
            },
            {
              "day": "2025-07-31",
              "mean_glucose": 134.8,
              "meal_risk": 53.5,
              "recovery_risk": 35.9,
              "transition_risk": 99.3,
              "next_day_risk": 58.1,
              "time_above_140_pct": 29.0,
              "daily_glucose_cv": 0.168
            },
            {
              "day": "2025-08-01",
              "mean_glucose": 131.1,
              "meal_risk": 59.7,
              "recovery_risk": 56.7,
              "transition_risk": 99.5,
              "next_day_risk": 58.7,
              "time_above_140_pct": 31.2,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2025-08-02",
              "mean_glucose": 130.1,
              "meal_risk": 67.8,
              "recovery_risk": 61.8,
              "transition_risk": 99.6,
              "next_day_risk": 58.8,
              "time_above_140_pct": 32.7,
              "daily_glucose_cv": 0.131
            },
            {
              "day": "2025-08-03",
              "mean_glucose": 129.9,
              "meal_risk": 62.8,
              "recovery_risk": 52.4,
              "transition_risk": 98.6,
              "next_day_risk": 57.4,
              "time_above_140_pct": 25.3,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2025-08-04",
              "mean_glucose": 126.9,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 96.0,
              "next_day_risk": 56.8,
              "time_above_140_pct": 19.3,
              "daily_glucose_cv": 0.138
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 72.1,
              "mean_recovery_risk": 57.8,
              "mean_peak_glucose": 175.8,
              "mean_carbs": 57.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 8,
              "mean_meal_risk": 65.4,
              "mean_recovery_risk": 54.9,
              "mean_peak_glucose": 157.8,
              "mean_carbs": 57.5
            },
            {
              "meal_slot": "dinner",
              "n_meals": 2,
              "mean_meal_risk": 74.3,
              "mean_recovery_risk": 65.6,
              "mean_peak_glucose": 188.5,
              "mean_carbs": 38.0
            },
            {
              "meal_slot": "snack",
              "n_meals": 2,
              "mean_meal_risk": 74.7,
              "mean_recovery_risk": 74.4,
              "mean_peak_glucose": 176.5,
              "mean_carbs": 13.5
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2025-08-03 10:28:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 138.0,
              "meal_risk": 62.8,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2025-08-02 12:52:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 151.6,
              "meal_risk": 63.0,
              "recovery_risk": 45.4
            },
            {
              "meal_start": "2025-08-02 08:15:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 167.0,
              "meal_risk": 72.6,
              "recovery_risk": 78.3
            },
            {
              "meal_start": "2025-08-01 15:09:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 150.0,
              "meal_risk": 55.1,
              "recovery_risk": 56.1
            },
            {
              "meal_start": "2025-08-01 07:50:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 161.0,
              "meal_risk": 64.3,
              "recovery_risk": 57.3
            },
            {
              "meal_start": "2025-07-31 16:37:00",
              "meal_type": "lunch",
              "meal_carbs": 76.0,
              "peak_glucose": 127.8,
              "meal_risk": 44.4,
              "recovery_risk": 15.1
            },
            {
              "meal_start": "2025-07-31 08:40:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 171.0,
              "meal_risk": 62.6,
              "recovery_risk": 56.7
            },
            {
              "meal_start": "2025-07-30 16:25:00",
              "meal_type": "lunch",
              "meal_carbs": 93.0,
              "peak_glucose": 168.0,
              "meal_risk": 74.5,
              "recovery_risk": 67.3
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 77.9,
              "estimated_recovery_risk": 62.5,
              "estimated_next_day_instability_risk": 60.2,
              "summary": "For breakfast, target about 55.5-66.0 g carbs, 22.0-66.0 g protein, 10.5-10.5 g fat, and 0.0-0.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.3,
              "estimated_recovery_risk": 52.9,
              "estimated_next_day_instability_risk": 60.9,
              "summary": "For lunch, target about 28.0-58.0 g carbs, 44.0-71.0 g protein, 15.5-17.8 g fat, and 7.5-12.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 33.0,
              "estimated_meal_response_risk": 73.5,
              "estimated_recovery_risk": 62.8,
              "estimated_next_day_instability_risk": 62.3,
              "summary": "For dinner, target about 19.0-57.0 g carbs, 3.0-9.0 g protein, 3.0-9.0 g fat, and 0.2-0.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 33.0,
              "estimated_meal_response_risk": 66.3,
              "estimated_recovery_risk": 57.1,
              "estimated_next_day_instability_risk": 58.2,
              "summary": "For snack, target about 6.8-20.2 g carbs, 0.2-0.8 g protein, 0.0-0.0 g fat, and 0.0-0.0 g fiber."
            }
          ]
        },
        "36": {
          "overview": {
            "subject": "36",
            "group": "t2d",
            "a1c": 6.9,
            "bmi": 25.0,
            "mean_glucose": 110.1,
            "days_covered": 11.9,
            "n_meals": 28,
            "meal_response_risk_mean": 73.1,
            "recovery_risk_mean": 52.5,
            "next_day_risk_mean": 58.4,
            "drift_score_mean": 63.6,
            "transition_risk_max": 100.0,
            "unstable_day_rate_pct": 7.7,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-03-29",
              "mean_glucose": 84.5,
              "meal_risk": 47.2,
              "recovery_risk": 27.2,
              "transition_risk": 73.9,
              "next_day_risk": 56.3,
              "time_above_140_pct": 4.0,
              "daily_glucose_cv": 0.302
            },
            {
              "day": "2022-03-30",
              "mean_glucose": 104.2,
              "meal_risk": 85.3,
              "recovery_risk": 73.2,
              "transition_risk": 99.9,
              "next_day_risk": 62.3,
              "time_above_140_pct": 28.7,
              "daily_glucose_cv": 0.413
            },
            {
              "day": "2022-03-31",
              "mean_glucose": 113.4,
              "meal_risk": 70.9,
              "recovery_risk": 48.4,
              "transition_risk": 98.6,
              "next_day_risk": 58.6,
              "time_above_140_pct": 17.6,
              "daily_glucose_cv": 0.312
            },
            {
              "day": "2022-04-01",
              "mean_glucose": 131.8,
              "meal_risk": 83.7,
              "recovery_risk": 64.3,
              "transition_risk": 100.0,
              "next_day_risk": 61.5,
              "time_above_140_pct": 41.1,
              "daily_glucose_cv": 0.403
            },
            {
              "day": "2022-04-02",
              "mean_glucose": 124.2,
              "meal_risk": 78.3,
              "recovery_risk": 50.7,
              "transition_risk": 99.8,
              "next_day_risk": 59.7,
              "time_above_140_pct": 30.5,
              "daily_glucose_cv": 0.327
            },
            {
              "day": "2022-04-03",
              "mean_glucose": 125.7,
              "meal_risk": 77.8,
              "recovery_risk": 62.5,
              "transition_risk": 99.3,
              "next_day_risk": 58.5,
              "time_above_140_pct": 24.0,
              "daily_glucose_cv": 0.28
            },
            {
              "day": "2022-04-04",
              "mean_glucose": 114.9,
              "meal_risk": 73.1,
              "recovery_risk": 41.8,
              "transition_risk": 98.5,
              "next_day_risk": 58.6,
              "time_above_140_pct": 15.7,
              "daily_glucose_cv": 0.461
            },
            {
              "day": "2022-04-05",
              "mean_glucose": 103.6,
              "meal_risk": 67.3,
              "recovery_risk": 44.6,
              "transition_risk": 96.8,
              "next_day_risk": 57.6,
              "time_above_140_pct": 14.7,
              "daily_glucose_cv": 0.339
            },
            {
              "day": "2022-04-06",
              "mean_glucose": 107.4,
              "meal_risk": 68.4,
              "recovery_risk": 58.0,
              "transition_risk": 94.9,
              "next_day_risk": 57.1,
              "time_above_140_pct": 13.2,
              "daily_glucose_cv": 0.314
            },
            {
              "day": "2022-04-07",
              "mean_glucose": 96.8,
              "meal_risk": 59.1,
              "recovery_risk": 27.7,
              "transition_risk": 96.9,
              "next_day_risk": 58.9,
              "time_above_140_pct": 14.2,
              "daily_glucose_cv": 0.349
            },
            {
              "day": "2022-04-08",
              "mean_glucose": 97.1,
              "meal_risk": 93.0,
              "recovery_risk": 71.0,
              "transition_risk": 99.4,
              "next_day_risk": 60.6,
              "time_above_140_pct": 18.1,
              "daily_glucose_cv": 0.444
            },
            {
              "day": "2022-04-09",
              "mean_glucose": 111.3,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 99.5,
              "next_day_risk": 57.7,
              "time_above_140_pct": 24.4,
              "daily_glucose_cv": 0.328
            },
            {
              "day": "2022-04-10",
              "mean_glucose": 94.6,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 50.7,
              "next_day_risk": 52.4,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.107
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 92.9,
              "mean_recovery_risk": 78.2,
              "mean_peak_glucose": 225.2,
              "mean_carbs": 62.9
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 62.4,
              "mean_recovery_risk": 34.2,
              "mean_peak_glucose": 156.4,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 65.2,
              "mean_recovery_risk": 47.1,
              "mean_peak_glucose": 141.8,
              "mean_carbs": 119.7
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-04-08 08:00:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 199.0,
              "meal_risk": 93.0,
              "recovery_risk": 71.0
            },
            {
              "meal_start": "2022-04-07 17:32:00",
              "meal_type": "dinner",
              "meal_carbs": 4.0,
              "peak_glucose": 122.3,
              "meal_risk": 43.3,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2022-04-07 12:36:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 143.0,
              "meal_risk": 75.0,
              "recovery_risk": 53.5
            },
            {
              "meal_start": "2022-04-06 16:53:00",
              "meal_type": "dinner",
              "meal_carbs": 62.0,
              "peak_glucose": 125.0,
              "meal_risk": 61.6,
              "recovery_risk": 51.3
            },
            {
              "meal_start": "2022-04-06 11:57:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 133.0,
              "meal_risk": 51.4,
              "recovery_risk": 40.6
            },
            {
              "meal_start": "2022-04-06 08:01:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 212.0,
              "meal_risk": 92.3,
              "recovery_risk": 82.3
            },
            {
              "meal_start": "2022-04-05 17:05:00",
              "meal_type": "dinner",
              "meal_carbs": 1.0,
              "peak_glucose": 111.0,
              "meal_risk": 58.0,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2022-04-05 11:59:00",
              "meal_type": "lunch",
              "meal_carbs": 40.0,
              "peak_glucose": 147.3,
              "meal_risk": 50.3,
              "recovery_risk": 2.1
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 91.3,
              "estimated_recovery_risk": 75.6,
              "estimated_next_day_instability_risk": 60.5,
              "summary": "For breakfast, target about 55.5-67.8 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 64.2,
              "estimated_recovery_risk": 39.4,
              "estimated_next_day_instability_risk": 60.2,
              "summary": "For lunch, target about 34.0-77.2 g carbs, 55.0-79.0 g protein, 16.2-27.5 g fat, and 9.2-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 68.0,
              "estimated_recovery_risk": 52.3,
              "estimated_next_day_instability_risk": 60.3,
              "summary": "For dinner, target about 0.8-23.5 g carbs, 9.0-33.2 g protein, 6.0-17.2 g fat, and 0.0-4.2 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 0.0,
              "estimated_meal_response_risk": 63.0,
              "estimated_recovery_risk": 50.2,
              "estimated_next_day_instability_risk": 57.2,
              "summary": "For snack, target about 9.0-30.0 g carbs, 1.0-5.0 g protein, 0.0-5.0 g fat, and 1.0-5.0 g fiber."
            }
          ]
        },
        "3": {
          "overview": {
            "subject": "3",
            "group": "t2d",
            "a1c": 6.5,
            "bmi": 26.9,
            "mean_glucose": 107.6,
            "days_covered": 10.1,
            "n_meals": 35,
            "meal_response_risk_mean": 74.2,
            "recovery_risk_mean": 58.4,
            "next_day_risk_mean": 56.8,
            "drift_score_mean": 50.6,
            "transition_risk_max": 99.7,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-03-11",
              "mean_glucose": 99.1,
              "meal_risk": 78.2,
              "recovery_risk": 60.7,
              "transition_risk": 96.9,
              "next_day_risk": 57.0,
              "time_above_140_pct": 14.7,
              "daily_glucose_cv": 0.361
            },
            {
              "day": "2020-03-12",
              "mean_glucose": 107.8,
              "meal_risk": 87.2,
              "recovery_risk": 65.5,
              "transition_risk": 98.6,
              "next_day_risk": 58.0,
              "time_above_140_pct": 15.8,
              "daily_glucose_cv": 0.336
            },
            {
              "day": "2020-03-13",
              "mean_glucose": 108.4,
              "meal_risk": 68.1,
              "recovery_risk": 55.7,
              "transition_risk": 96.1,
              "next_day_risk": 56.5,
              "time_above_140_pct": 13.3,
              "daily_glucose_cv": 0.244
            },
            {
              "day": "2020-03-14",
              "mean_glucose": 117.8,
              "meal_risk": 93.1,
              "recovery_risk": 73.3,
              "transition_risk": 99.7,
              "next_day_risk": 58.0,
              "time_above_140_pct": 24.4,
              "daily_glucose_cv": 0.352
            },
            {
              "day": "2020-03-15",
              "mean_glucose": 103.1,
              "meal_risk": 61.4,
              "recovery_risk": 51.5,
              "transition_risk": 88.6,
              "next_day_risk": 55.6,
              "time_above_140_pct": 6.7,
              "daily_glucose_cv": 0.205
            },
            {
              "day": "2020-03-16",
              "mean_glucose": 104.8,
              "meal_risk": 63.4,
              "recovery_risk": 56.3,
              "transition_risk": 89.6,
              "next_day_risk": 56.5,
              "time_above_140_pct": 9.0,
              "daily_glucose_cv": 0.221
            },
            {
              "day": "2020-03-17",
              "mean_glucose": 113.5,
              "meal_risk": 89.1,
              "recovery_risk": 68.1,
              "transition_risk": 99.0,
              "next_day_risk": 57.7,
              "time_above_140_pct": 18.3,
              "daily_glucose_cv": 0.296
            },
            {
              "day": "2020-03-18",
              "mean_glucose": 106.2,
              "meal_risk": 65.6,
              "recovery_risk": 49.5,
              "transition_risk": 87.8,
              "next_day_risk": 55.8,
              "time_above_140_pct": 6.7,
              "daily_glucose_cv": 0.185
            },
            {
              "day": "2020-03-19",
              "mean_glucose": 107.1,
              "meal_risk": 73.3,
              "recovery_risk": 60.0,
              "transition_risk": 91.9,
              "next_day_risk": 56.1,
              "time_above_140_pct": 9.7,
              "daily_glucose_cv": 0.283
            },
            {
              "day": "2020-03-20",
              "mean_glucose": 108.2,
              "meal_risk": 69.1,
              "recovery_risk": 49.9,
              "transition_risk": 92.4,
              "next_day_risk": 56.2,
              "time_above_140_pct": 11.2,
              "daily_glucose_cv": 0.233
            },
            {
              "day": "2020-03-21",
              "mean_glucose": 100.6,
              "meal_risk": 89.2,
              "recovery_risk": 62.0,
              "transition_risk": 94.8,
              "next_day_risk": 57.1,
              "time_above_140_pct": 8.9,
              "daily_glucose_cv": 0.272
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 90.4,
              "mean_recovery_risk": 62.1,
              "mean_peak_glucose": 218.5,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 67.1,
              "mean_recovery_risk": 56.2,
              "mean_peak_glucose": 148.2,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 9,
              "mean_meal_risk": 69.4,
              "mean_recovery_risk": 60.4,
              "mean_peak_glucose": 153.6,
              "mean_carbs": 53.6
            },
            {
              "meal_slot": "snack",
              "n_meals": 6,
              "mean_meal_risk": 66.3,
              "mean_recovery_risk": 52.9,
              "mean_peak_glucose": 148.5,
              "mean_carbs": 16.2
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-03-21 07:56:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 204.0,
              "meal_risk": 89.2,
              "recovery_risk": 62.0
            },
            {
              "meal_start": "2020-03-20 19:46:00",
              "meal_type": "Dinner",
              "meal_carbs": 52.0,
              "peak_glucose": 121.0,
              "meal_risk": 55.5,
              "recovery_risk": 49.9
            },
            {
              "meal_start": "2020-03-20 17:52:00",
              "meal_type": "Snacks",
              "meal_carbs": 25.0,
              "peak_glucose": 125.0,
              "meal_risk": 54.3,
              "recovery_risk": 34.8
            },
            {
              "meal_start": "2020-03-20 12:45:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 207.0,
              "meal_risk": 90.1,
              "recovery_risk": 72.4
            },
            {
              "meal_start": "2020-03-20 08:13:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 182.0,
              "meal_risk": 76.4,
              "recovery_risk": 42.6
            },
            {
              "meal_start": "2020-03-19 19:46:00",
              "meal_type": "Dinner",
              "meal_carbs": 48.0,
              "peak_glucose": 153.0,
              "meal_risk": 62.1,
              "recovery_risk": 60.5
            },
            {
              "meal_start": "2020-03-19 18:20:00",
              "meal_type": "Snacks",
              "meal_carbs": 9.0,
              "peak_glucose": 153.0,
              "meal_risk": 74.7,
              "recovery_risk": 59.8
            },
            {
              "meal_start": "2020-03-19 14:07:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 120.0,
              "meal_risk": 59.9,
              "recovery_risk": 50.0
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 89.7,
              "estimated_recovery_risk": 65.0,
              "estimated_next_day_instability_risk": 58.7,
              "summary": "For breakfast, target about 55.5-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 67.3,
              "estimated_recovery_risk": 54.0,
              "estimated_next_day_instability_risk": 58.7,
              "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 70.7,
              "estimated_recovery_risk": 60.9,
              "estimated_next_day_instability_risk": 58.9,
              "summary": "For dinner, target about 26.8-53.2 g carbs, 25.2-29.5 g protein, 1.8-40.0 g fat, and 7.5-9.2 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 64.8,
              "estimated_recovery_risk": 51.7,
              "estimated_next_day_instability_risk": 56.7,
              "summary": "For snack, target about 6.5-17.0 g carbs, 0.0-0.5 g protein, 0.0-0.5 g fat, and 2.0-3.0 g fiber."
            }
          ]
        },
        "38": {
          "overview": {
            "subject": "38",
            "group": "t2d",
            "a1c": 7.2,
            "bmi": 34.5,
            "mean_glucose": 115.4,
            "days_covered": 10.1,
            "n_meals": 37,
            "meal_response_risk_mean": 65.7,
            "recovery_risk_mean": 55.9,
            "next_day_risk_mean": 56.4,
            "drift_score_mean": 53.9,
            "transition_risk_max": 99.7,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2022-01-25",
              "mean_glucose": 100.7,
              "meal_risk": 44.5,
              "recovery_risk": 50.9,
              "transition_risk": 85.5,
              "next_day_risk": 56.2,
              "time_above_140_pct": 9.4,
              "daily_glucose_cv": 0.243
            },
            {
              "day": "2022-01-26",
              "mean_glucose": 116.3,
              "meal_risk": 74.4,
              "recovery_risk": 61.0,
              "transition_risk": 98.7,
              "next_day_risk": 57.6,
              "time_above_140_pct": 17.8,
              "daily_glucose_cv": 0.289
            },
            {
              "day": "2022-01-27",
              "mean_glucose": 116.3,
              "meal_risk": 62.8,
              "recovery_risk": 58.5,
              "transition_risk": 93.1,
              "next_day_risk": 55.6,
              "time_above_140_pct": 11.7,
              "daily_glucose_cv": 0.211
            },
            {
              "day": "2022-01-28",
              "mean_glucose": 129.5,
              "meal_risk": 72.3,
              "recovery_risk": 51.7,
              "transition_risk": 99.7,
              "next_day_risk": 57.5,
              "time_above_140_pct": 26.7,
              "daily_glucose_cv": 0.345
            },
            {
              "day": "2022-01-29",
              "mean_glucose": 113.8,
              "meal_risk": 57.8,
              "recovery_risk": 58.4,
              "transition_risk": 94.6,
              "next_day_risk": 56.5,
              "time_above_140_pct": 13.8,
              "daily_glucose_cv": 0.181
            },
            {
              "day": "2022-01-30",
              "mean_glucose": 118.4,
              "meal_risk": 69.6,
              "recovery_risk": 60.4,
              "transition_risk": 98.9,
              "next_day_risk": 57.4,
              "time_above_140_pct": 22.8,
              "daily_glucose_cv": 0.196
            },
            {
              "day": "2022-01-31",
              "mean_glucose": 118.7,
              "meal_risk": 70.0,
              "recovery_risk": 62.8,
              "transition_risk": 98.1,
              "next_day_risk": 56.2,
              "time_above_140_pct": 19.8,
              "daily_glucose_cv": 0.247
            },
            {
              "day": "2022-02-01",
              "mean_glucose": 114.2,
              "meal_risk": 63.1,
              "recovery_risk": 40.0,
              "transition_risk": 83.7,
              "next_day_risk": 54.9,
              "time_above_140_pct": 7.4,
              "daily_glucose_cv": 0.217
            },
            {
              "day": "2022-02-02",
              "mean_glucose": 108.6,
              "meal_risk": 61.6,
              "recovery_risk": 54.4,
              "transition_risk": 80.1,
              "next_day_risk": 55.2,
              "time_above_140_pct": 7.0,
              "daily_glucose_cv": 0.179
            },
            {
              "day": "2022-02-03",
              "mean_glucose": 111.4,
              "meal_risk": 64.2,
              "recovery_risk": 54.9,
              "transition_risk": 84.5,
              "next_day_risk": 55.2,
              "time_above_140_pct": 8.9,
              "daily_glucose_cv": 0.179
            },
            {
              "day": "2022-02-04",
              "mean_glucose": 116.7,
              "meal_risk": 91.3,
              "recovery_risk": 76.9,
              "transition_risk": 99.6,
              "next_day_risk": 58.4,
              "time_above_140_pct": 21.5,
              "daily_glucose_cv": 0.327
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 85.3,
              "mean_recovery_risk": 70.8,
              "mean_peak_glucose": 203.3,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 54.6,
              "mean_recovery_risk": 53.7,
              "mean_peak_glucose": 127.1,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 7,
              "mean_meal_risk": 58.2,
              "mean_recovery_risk": 44.8,
              "mean_peak_glucose": 133.0,
              "mean_carbs": 25.6
            },
            {
              "meal_slot": "snack",
              "n_meals": 10,
              "mean_meal_risk": 62.5,
              "mean_recovery_risk": 50.9,
              "mean_peak_glucose": 140.6,
              "mean_carbs": 20.0
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2022-02-04 06:02:00",
              "meal_type": "breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 213.0,
              "meal_risk": 91.3,
              "recovery_risk": 76.9
            },
            {
              "meal_start": "2022-02-03 16:39:00",
              "meal_type": "dinner",
              "meal_carbs": 55.0,
              "peak_glucose": 159.0,
              "meal_risk": 70.8,
              "recovery_risk": 58.5
            },
            {
              "meal_start": "2022-02-03 13:41:00",
              "meal_type": "dinner",
              "meal_carbs": 0.0,
              "peak_glucose": 126.0,
              "meal_risk": 46.2,
              "recovery_risk": 46.1
            },
            {
              "meal_start": "2022-02-03 11:03:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 117.0,
              "meal_risk": 56.5,
              "recovery_risk": 51.4
            },
            {
              "meal_start": "2022-02-03 07:17:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 190.0,
              "meal_risk": 83.3,
              "recovery_risk": 63.4
            },
            {
              "meal_start": "2022-02-02 16:04:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 131.2,
              "meal_risk": 64.9,
              "recovery_risk": 52.4
            },
            {
              "meal_start": "2022-02-02 15:14:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 129.2,
              "meal_risk": 63.6,
              "recovery_risk": 51.6
            },
            {
              "meal_start": "2022-02-02 11:34:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 101.0,
              "meal_risk": 41.8,
              "recovery_risk": 51.2
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 86.3,
              "estimated_recovery_risk": 70.9,
              "estimated_next_day_instability_risk": 58.5,
              "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 59.0,
              "estimated_recovery_risk": 52.4,
              "estimated_next_day_instability_risk": 58.4,
              "summary": "For lunch, target about 34.8-52.5 g carbs, 29.0-79.0 g protein, 16.5-28.6 g fat, and 11.0-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 64.4,
              "estimated_recovery_risk": 51.8,
              "estimated_next_day_instability_risk": 58.8,
              "summary": "For dinner, target about 0.0-27.0 g carbs, 0.0-8.0 g protein, 0.0-5.5 g fat, and 0.0-8.0 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 62.7,
              "estimated_recovery_risk": 50.6,
              "estimated_next_day_instability_risk": 56.6,
              "summary": "For snack, target about 0.0-9.0 g carbs, 0.0-1.0 g protein, 0.0-0.0 g fat, and 0.0-5.0 g fiber."
            }
          ]
        },
        "5": {
          "overview": {
            "subject": "5",
            "group": "t2d",
            "a1c": 6.6,
            "bmi": 31.0,
            "mean_glucose": 111.5,
            "days_covered": 10.0,
            "n_meals": 42,
            "meal_response_risk_mean": 67.3,
            "recovery_risk_mean": 51.3,
            "next_day_risk_mean": 55.3,
            "drift_score_mean": 65.4,
            "transition_risk_max": 99.5,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2020-08-17",
              "mean_glucose": 94.8,
              "meal_risk": 49.7,
              "recovery_risk": 44.2,
              "transition_risk": 70.3,
              "next_day_risk": 54.0,
              "time_above_140_pct": 4.8,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2020-08-18",
              "mean_glucose": 102.1,
              "meal_risk": 67.2,
              "recovery_risk": 56.3,
              "transition_risk": 96.4,
              "next_day_risk": 56.3,
              "time_above_140_pct": 11.7,
              "daily_glucose_cv": 0.345
            },
            {
              "day": "2020-08-19",
              "mean_glucose": 109.2,
              "meal_risk": 66.3,
              "recovery_risk": 46.9,
              "transition_risk": 93.4,
              "next_day_risk": 54.1,
              "time_above_140_pct": 12.7,
              "daily_glucose_cv": 0.203
            },
            {
              "day": "2020-08-20",
              "mean_glucose": 118.7,
              "meal_risk": 72.2,
              "recovery_risk": 36.2,
              "transition_risk": 99.5,
              "next_day_risk": 56.1,
              "time_above_140_pct": 24.7,
              "daily_glucose_cv": 0.337
            },
            {
              "day": "2020-08-21",
              "mean_glucose": 105.3,
              "meal_risk": 55.3,
              "recovery_risk": 42.7,
              "transition_risk": 73.5,
              "next_day_risk": 53.4,
              "time_above_140_pct": 3.5,
              "daily_glucose_cv": 0.137
            },
            {
              "day": "2020-08-22",
              "mean_glucose": 117.2,
              "meal_risk": 67.3,
              "recovery_risk": 56.4,
              "transition_risk": 97.1,
              "next_day_risk": 55.3,
              "time_above_140_pct": 16.6,
              "daily_glucose_cv": 0.189
            },
            {
              "day": "2020-08-23",
              "mean_glucose": 121.8,
              "meal_risk": 83.4,
              "recovery_risk": 62.6,
              "transition_risk": 98.8,
              "next_day_risk": 56.6,
              "time_above_140_pct": 18.1,
              "daily_glucose_cv": 0.251
            },
            {
              "day": "2020-08-24",
              "mean_glucose": 105.9,
              "meal_risk": 61.2,
              "recovery_risk": 51.6,
              "transition_risk": 87.7,
              "next_day_risk": 53.9,
              "time_above_140_pct": 6.6,
              "daily_glucose_cv": 0.225
            },
            {
              "day": "2020-08-25",
              "mean_glucose": 117.6,
              "meal_risk": 72.7,
              "recovery_risk": 59.4,
              "transition_risk": 98.6,
              "next_day_risk": 56.2,
              "time_above_140_pct": 17.7,
              "daily_glucose_cv": 0.301
            },
            {
              "day": "2020-08-26",
              "mean_glucose": 112.7,
              "meal_risk": 73.8,
              "recovery_risk": 47.6,
              "transition_risk": 96.1,
              "next_day_risk": 55.6,
              "time_above_140_pct": 14.3,
              "daily_glucose_cv": 0.249
            },
            {
              "day": "2020-08-27",
              "mean_glucose": 115.3,
              "meal_risk": 94.7,
              "recovery_risk": 72.5,
              "transition_risk": 98.6,
              "next_day_risk": 56.3,
              "time_above_140_pct": 15.5,
              "daily_glucose_cv": 0.353
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 89.9,
              "mean_recovery_risk": 69.6,
              "mean_peak_glucose": 210.2,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 64.3,
              "mean_recovery_risk": 45.0,
              "mean_peak_glucose": 142.9,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 63.2,
              "mean_recovery_risk": 49.9,
              "mean_peak_glucose": 142.6,
              "mean_carbs": 36.3
            },
            {
              "meal_slot": "snack",
              "n_meals": 12,
              "mean_meal_risk": 54.5,
              "mean_recovery_risk": 42.4,
              "mean_peak_glucose": 137.7,
              "mean_carbs": 22.8
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2020-08-27 09:06:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 229.0,
              "meal_risk": 94.7,
              "recovery_risk": 72.5
            },
            {
              "meal_start": "2020-08-26 19:18:00",
              "meal_type": "snack",
              "meal_carbs": 15.0,
              "peak_glucose": 118.9,
              "meal_risk": 43.3,
              "recovery_risk": 1.9
            },
            {
              "meal_start": "2020-08-26 14:48:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 182.0,
              "meal_risk": 85.3,
              "recovery_risk": 70.0
            },
            {
              "meal_start": "2020-08-26 08:19:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 213.0,
              "meal_risk": 92.9,
              "recovery_risk": 71.0
            },
            {
              "meal_start": "2020-08-25 21:11:00",
              "meal_type": "dinner",
              "meal_carbs": 18.0,
              "peak_glucose": 197.0,
              "meal_risk": 88.9,
              "recovery_risk": 74.3
            },
            {
              "meal_start": "2020-08-25 20:22:00",
              "meal_type": "dinner",
              "meal_carbs": 47.0,
              "peak_glucose": 195.6,
              "meal_risk": 88.4,
              "recovery_risk": 65.0
            },
            {
              "meal_start": "2020-08-25 19:29:00",
              "meal_type": "snack",
              "meal_carbs": 6.0,
              "peak_glucose": 155.0,
              "meal_risk": 69.2,
              "recovery_risk": 50.6
            },
            {
              "meal_start": "2020-08-25 17:26:00",
              "meal_type": "snack",
              "meal_carbs": 15.0,
              "peak_glucose": 110.0,
              "meal_risk": 40.0,
              "recovery_risk": 44.3
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 89.4,
              "estimated_recovery_risk": 70.1,
              "estimated_next_day_instability_risk": 57.8,
              "summary": "For breakfast, target about 55.5-67.8 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 65.4,
              "estimated_recovery_risk": 46.6,
              "estimated_next_day_instability_risk": 57.7,
              "summary": "For lunch, target about 37.0-83.8 g carbs, 19.2-46.0 g protein, 18.8-45.1 g fat, and 8.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.5,
              "estimated_recovery_risk": 53.8,
              "estimated_next_day_instability_risk": 57.6,
              "summary": "For dinner, target about 26.8-51.2 g carbs, 18.2-34.2 g protein, 5.8-18.2 g fat, and 4.5-6.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.0,
              "estimated_recovery_risk": 44.7,
              "estimated_next_day_instability_risk": 55.7,
              "summary": "For snack, target about 15.0-25.0 g carbs, 2.0-4.0 g protein, 0.0-13.0 g fat, and 2.0-5.0 g fiber."
            }
          ]
        },
        "14": {
          "overview": {
            "subject": "14",
            "group": "t2d",
            "a1c": 7.1,
            "bmi": 28.5,
            "mean_glucose": 109.7,
            "days_covered": 12.0,
            "n_meals": 37,
            "meal_response_risk_mean": 65.8,
            "recovery_risk_mean": 52.1,
            "next_day_risk_mean": 54.1,
            "drift_score_mean": 45.7,
            "transition_risk_max": 99.2,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-05-09",
              "mean_glucose": 112.8,
              "meal_risk": 57.0,
              "recovery_risk": 51.6,
              "transition_risk": 83.1,
              "next_day_risk": 53.2,
              "time_above_140_pct": 9.6,
              "daily_glucose_cv": 0.176
            },
            {
              "day": "2023-05-10",
              "mean_glucose": 114.7,
              "meal_risk": 63.2,
              "recovery_risk": 53.7,
              "transition_risk": 93.3,
              "next_day_risk": 54.4,
              "time_above_140_pct": 11.7,
              "daily_glucose_cv": 0.265
            },
            {
              "day": "2023-05-11",
              "mean_glucose": 107.5,
              "meal_risk": 65.9,
              "recovery_risk": 59.9,
              "transition_risk": 95.7,
              "next_day_risk": 56.2,
              "time_above_140_pct": 12.6,
              "daily_glucose_cv": 0.236
            },
            {
              "day": "2023-05-12",
              "mean_glucose": 117.9,
              "meal_risk": 78.7,
              "recovery_risk": 65.9,
              "transition_risk": 99.2,
              "next_day_risk": 56.6,
              "time_above_140_pct": 22.1,
              "daily_glucose_cv": 0.293
            },
            {
              "day": "2023-05-13",
              "mean_glucose": 114.5,
              "meal_risk": 57.2,
              "recovery_risk": 29.9,
              "transition_risk": 84.7,
              "next_day_risk": 53.5,
              "time_above_140_pct": 6.8,
              "daily_glucose_cv": 0.147
            },
            {
              "day": "2023-05-14",
              "mean_glucose": 110.0,
              "meal_risk": 59.2,
              "recovery_risk": 47.5,
              "transition_risk": 75.8,
              "next_day_risk": 53.9,
              "time_above_140_pct": 5.8,
              "daily_glucose_cv": 0.129
            },
            {
              "day": "2023-05-15",
              "mean_glucose": 116.6,
              "meal_risk": 76.7,
              "recovery_risk": 63.4,
              "transition_risk": 97.9,
              "next_day_risk": 55.2,
              "time_above_140_pct": 17.6,
              "daily_glucose_cv": 0.255
            },
            {
              "day": "2023-05-16",
              "mean_glucose": 108.1,
              "meal_risk": 63.3,
              "recovery_risk": 51.5,
              "transition_risk": 84.6,
              "next_day_risk": 53.9,
              "time_above_140_pct": 6.9,
              "daily_glucose_cv": 0.219
            },
            {
              "day": "2023-05-17",
              "mean_glucose": 100.9,
              "meal_risk": 64.1,
              "recovery_risk": 49.0,
              "transition_risk": 91.8,
              "next_day_risk": 55.5,
              "time_above_140_pct": 9.7,
              "daily_glucose_cv": 0.245
            },
            {
              "day": "2023-05-18",
              "mean_glucose": 104.4,
              "meal_risk": 66.0,
              "recovery_risk": 47.6,
              "transition_risk": 89.8,
              "next_day_risk": 55.1,
              "time_above_140_pct": 9.6,
              "daily_glucose_cv": 0.233
            },
            {
              "day": "2023-05-19",
              "mean_glucose": 111.4,
              "meal_risk": 68.4,
              "recovery_risk": 56.9,
              "transition_risk": 88.0,
              "next_day_risk": 52.5,
              "time_above_140_pct": 9.9,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2023-05-20",
              "mean_glucose": 100.5,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 50.4,
              "next_day_risk": 52.0,
              "time_above_140_pct": 0.6,
              "daily_glucose_cv": 0.131
            },
            {
              "day": "2023-05-21",
              "mean_glucose": 106.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 41.1,
              "next_day_risk": 51.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.057
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 10,
              "mean_meal_risk": 74.6,
              "mean_recovery_risk": 59.9,
              "mean_peak_glucose": 182.8,
              "mean_carbs": 59.0
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 62.8,
              "mean_recovery_risk": 51.6,
              "mean_peak_glucose": 134.6,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 65.4,
              "mean_recovery_risk": 55.8,
              "mean_peak_glucose": 144.5,
              "mean_carbs": 61.3
            },
            {
              "meal_slot": "snack",
              "n_meals": 7,
              "mean_meal_risk": 58.0,
              "mean_recovery_risk": 36.1,
              "mean_peak_glucose": 139.0,
              "mean_carbs": 16.6
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-05-19 08:17:00",
              "meal_type": "Breakfast",
              "meal_carbs": 73.0,
              "peak_glucose": 160.0,
              "meal_risk": 68.4,
              "recovery_risk": 56.9
            },
            {
              "meal_start": "2023-05-18 21:47:00",
              "meal_type": "snack",
              "meal_carbs": 0.0,
              "peak_glucose": 139.0,
              "meal_risk": 51.8,
              "recovery_risk": 21.0
            },
            {
              "meal_start": "2023-05-18 18:53:00",
              "meal_type": "dinner",
              "meal_carbs": 97.0,
              "peak_glucose": 139.0,
              "meal_risk": 65.8,
              "recovery_risk": 51.5
            },
            {
              "meal_start": "2023-05-18 12:25:00",
              "meal_type": "Lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 154.0,
              "meal_risk": 80.6,
              "recovery_risk": 69.8
            },
            {
              "meal_start": "2023-05-18 08:15:00",
              "meal_type": "Breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 169.0,
              "meal_risk": 65.7,
              "recovery_risk": 48.0
            },
            {
              "meal_start": "2023-05-17 22:49:00",
              "meal_type": "snack",
              "meal_carbs": 7.0,
              "peak_glucose": 97.0,
              "meal_risk": 40.4,
              "recovery_risk": 29.1
            },
            {
              "meal_start": "2023-05-17 19:46:00",
              "meal_type": "dinner",
              "meal_carbs": 65.0,
              "peak_glucose": 180.0,
              "meal_risk": 85.9,
              "recovery_risk": 65.4
            },
            {
              "meal_start": "2023-05-17 12:19:00",
              "meal_type": "Lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 118.0,
              "meal_risk": 48.5,
              "recovery_risk": 34.7
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 79.2,
              "estimated_recovery_risk": 63.6,
              "estimated_next_day_instability_risk": 57.3,
              "summary": "For breakfast, target about 24.0-73.0 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 64.4,
              "estimated_recovery_risk": 51.0,
              "estimated_next_day_instability_risk": 57.4,
              "summary": "For lunch, target about 18.2-55.2 g carbs, 19.2-40.5 g protein, 14.8-25.5 g fat, and 4.8-10.8 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 68.0,
              "estimated_recovery_risk": 57.8,
              "estimated_next_day_instability_risk": 57.4,
              "summary": "For dinner, target about 39.2-47.0 g carbs, 13.0-16.5 g protein, 20.0-27.8 g fat, and 6.8-11.5 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 100.0,
              "estimated_meal_response_risk": 60.1,
              "estimated_recovery_risk": 42.0,
              "estimated_next_day_instability_risk": 55.9,
              "summary": "For snack, target about 3.5-18.5 g carbs, 0.0-3.0 g protein, 0.0-9.0 g fat, and 1.0-3.5 g fiber."
            }
          ]
        },
        "28": {
          "overview": {
            "subject": "28",
            "group": "t2d",
            "a1c": 7.0,
            "bmi": 40.0,
            "mean_glucose": 114.8,
            "days_covered": 13.0,
            "n_meals": 33,
            "meal_response_risk_mean": 61.1,
            "recovery_risk_mean": 51.6,
            "next_day_risk_mean": 52.2,
            "drift_score_mean": 53.3,
            "transition_risk_max": 96.8,
            "unstable_day_rate_pct": 0.0,
            "instability_alert_count": 0
          },
          "daily_trace": [
            {
              "day": "2023-11-28",
              "mean_glucose": 88.5,
              "meal_risk": 44.4,
              "recovery_risk": 45.8,
              "transition_risk": 44.3,
              "next_day_risk": 53.0,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.114
            },
            {
              "day": "2023-11-29",
              "mean_glucose": 114.8,
              "meal_risk": 51.4,
              "recovery_risk": 53.6,
              "transition_risk": 91.0,
              "next_day_risk": 52.6,
              "time_above_140_pct": 13.0,
              "daily_glucose_cv": 0.183
            },
            {
              "day": "2023-11-30",
              "mean_glucose": 112.4,
              "meal_risk": 57.2,
              "recovery_risk": 39.8,
              "transition_risk": 74.3,
              "next_day_risk": 51.8,
              "time_above_140_pct": 6.7,
              "daily_glucose_cv": 0.141
            },
            {
              "day": "2023-12-01",
              "mean_glucose": 116.5,
              "meal_risk": 69.5,
              "recovery_risk": 64.6,
              "transition_risk": 96.7,
              "next_day_risk": 53.0,
              "time_above_140_pct": 16.5,
              "daily_glucose_cv": 0.188
            },
            {
              "day": "2023-12-02",
              "mean_glucose": 118.0,
              "meal_risk": 56.3,
              "recovery_risk": 42.4,
              "transition_risk": 72.1,
              "next_day_risk": 51.7,
              "time_above_140_pct": 4.9,
              "daily_glucose_cv": 0.125
            },
            {
              "day": "2023-12-03",
              "mean_glucose": 108.8,
              "meal_risk": 68.6,
              "recovery_risk": 54.6,
              "transition_risk": 78.1,
              "next_day_risk": 52.5,
              "time_above_140_pct": 5.3,
              "daily_glucose_cv": 0.148
            },
            {
              "day": "2023-12-04",
              "mean_glucose": 116.4,
              "meal_risk": 72.8,
              "recovery_risk": 63.6,
              "transition_risk": 93.4,
              "next_day_risk": 52.5,
              "time_above_140_pct": 13.5,
              "daily_glucose_cv": 0.192
            },
            {
              "day": "2023-12-05",
              "mean_glucose": 111.3,
              "meal_risk": 62.9,
              "recovery_risk": 46.4,
              "transition_risk": 72.5,
              "next_day_risk": 52.3,
              "time_above_140_pct": 4.4,
              "daily_glucose_cv": 0.151
            },
            {
              "day": "2023-12-06",
              "mean_glucose": 113.9,
              "meal_risk": 56.6,
              "recovery_risk": 46.9,
              "transition_risk": 90.9,
              "next_day_risk": 52.0,
              "time_above_140_pct": 12.2,
              "daily_glucose_cv": 0.192
            },
            {
              "day": "2023-12-07",
              "mean_glucose": 114.7,
              "meal_risk": 75.4,
              "recovery_risk": 62.2,
              "transition_risk": 96.1,
              "next_day_risk": 52.4,
              "time_above_140_pct": 15.6,
              "daily_glucose_cv": 0.201
            },
            {
              "day": "2023-12-08",
              "mean_glucose": 122.0,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 96.5,
              "next_day_risk": 52.1,
              "time_above_140_pct": 18.7,
              "daily_glucose_cv": 0.157
            },
            {
              "day": "2023-12-09",
              "mean_glucose": 116.6,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 87.5,
              "next_day_risk": 51.7,
              "time_above_140_pct": 11.7,
              "daily_glucose_cv": 0.158
            },
            {
              "day": "2023-12-10",
              "mean_glucose": 130.1,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 96.8,
              "next_day_risk": 51.9,
              "time_above_140_pct": 20.0,
              "daily_glucose_cv": 0.167
            },
            {
              "day": "2023-12-11",
              "mean_glucose": 112.4,
              "meal_risk": null,
              "recovery_risk": null,
              "transition_risk": 43.9,
              "next_day_risk": 51.5,
              "time_above_140_pct": 0.0,
              "daily_glucose_cv": 0.048
            }
          ],
          "meal_slot_summary": [
            {
              "meal_slot": "breakfast",
              "n_meals": 9,
              "mean_meal_risk": 69.8,
              "mean_recovery_risk": 61.4,
              "mean_peak_glucose": 164.6,
              "mean_carbs": 57.4
            },
            {
              "meal_slot": "lunch",
              "n_meals": 10,
              "mean_meal_risk": 52.7,
              "mean_recovery_risk": 36.6,
              "mean_peak_glucose": 121.0,
              "mean_carbs": 64.8
            },
            {
              "meal_slot": "dinner",
              "n_meals": 10,
              "mean_meal_risk": 63.2,
              "mean_recovery_risk": 57.4,
              "mean_peak_glucose": 145.7,
              "mean_carbs": 47.7
            },
            {
              "meal_slot": "snack",
              "n_meals": 4,
              "mean_meal_risk": 57.2,
              "mean_recovery_risk": 52.3,
              "mean_peak_glucose": 124.0,
              "mean_carbs": 35.5
            }
          ],
          "recent_meals": [
            {
              "meal_start": "2023-12-07 20:45:00",
              "meal_type": "dinner",
              "meal_carbs": 74.0,
              "peak_glucose": 169.0,
              "meal_risk": 75.4,
              "recovery_risk": 67.5
            },
            {
              "meal_start": "2023-12-07 12:33:00",
              "meal_type": "lunch",
              "meal_carbs": 94.0,
              "peak_glucose": 169.0,
              "meal_risk": 83.7,
              "recovery_risk": 69.4
            },
            {
              "meal_start": "2023-12-07 09:33:00",
              "meal_type": "breakfast",
              "meal_carbs": 24.0,
              "peak_glucose": 163.0,
              "meal_risk": 67.0,
              "recovery_risk": 49.7
            },
            {
              "meal_start": "2023-12-06 20:10:00",
              "meal_type": "dinner",
              "meal_carbs": 117.0,
              "peak_glucose": 147.0,
              "meal_risk": 53.3,
              "recovery_risk": 49.5
            },
            {
              "meal_start": "2023-12-06 12:39:00",
              "meal_type": "lunch",
              "meal_carbs": 43.0,
              "peak_glucose": 98.0,
              "meal_risk": 39.5,
              "recovery_risk": 12.9
            },
            {
              "meal_start": "2023-12-06 08:59:00",
              "meal_type": "breakfast",
              "meal_carbs": 66.0,
              "peak_glucose": 172.0,
              "meal_risk": 76.9,
              "recovery_risk": 78.4
            },
            {
              "meal_start": "2023-12-05 20:39:00",
              "meal_type": "dinner",
              "meal_carbs": 8.0,
              "peak_glucose": 131.0,
              "meal_risk": 61.2,
              "recovery_risk": 51.6
            },
            {
              "meal_start": "2023-12-05 16:16:00",
              "meal_type": "snack",
              "meal_carbs": 39.0,
              "peak_glucose": 125.0,
              "meal_risk": 64.6,
              "recovery_risk": 52.4
            }
          ],
          "recommendations": [
            {
              "meal_slot": "breakfast",
              "confidence": 100.0,
              "estimated_meal_response_risk": 76.4,
              "estimated_recovery_risk": 64.8,
              "estimated_next_day_instability_risk": 56.0,
              "summary": "For breakfast, target about 55.5-67.8 g carbs, 22.0-66.0 g protein, 10.5-18.4 g fat, and 0.0-1.8 g fiber."
            },
            {
              "meal_slot": "lunch",
              "confidence": 100.0,
              "estimated_meal_response_risk": 57.7,
              "estimated_recovery_risk": 41.0,
              "estimated_next_day_instability_risk": 55.8,
              "summary": "For lunch, target about 18.2-52.5 g carbs, 29.0-71.5 g protein, 14.8-28.6 g fat, and 4.8-14.2 g fiber."
            },
            {
              "meal_slot": "dinner",
              "confidence": 100.0,
              "estimated_meal_response_risk": 66.5,
              "estimated_recovery_risk": 58.9,
              "estimated_next_day_instability_risk": 55.9,
              "summary": "For dinner, target about 6.0-60.8 g carbs, 23.8-46.5 g protein, 9.0-17.0 g fat, and 1.5-7.8 g fiber."
            },
            {
              "meal_slot": "snack",
              "confidence": 67.0,
              "estimated_meal_response_risk": 60.4,
              "estimated_recovery_risk": 51.2,
              "estimated_next_day_instability_risk": 55.1,
              "summary": "For snack, target about 24.0-26.0 g carbs, 2.8-6.2 g protein, 0.0-0.0 g fat, and 1.8-3.2 g fiber."
            }
          ]
        }
      },
      "top_alerts": [
        {
          "subject": "12",
          "day": "2023-02-26",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.314,
          "time_above_140_pct": 47.9,
          "excursion_frequency": 1.0,
          "next_day_risk": 69.4
        },
        {
          "subject": "12",
          "day": "2023-02-27",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.269,
          "time_above_140_pct": 69.9,
          "excursion_frequency": 1.0,
          "next_day_risk": 72.1
        },
        {
          "subject": "12",
          "day": "2023-02-28",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.251,
          "time_above_140_pct": 65.9,
          "excursion_frequency": 0.75,
          "next_day_risk": 71.1
        },
        {
          "subject": "12",
          "day": "2023-03-01",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.357,
          "time_above_140_pct": 73.3,
          "excursion_frequency": 0.75,
          "next_day_risk": 71.4
        },
        {
          "subject": "12",
          "day": "2023-03-02",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.241,
          "time_above_140_pct": 70.1,
          "excursion_frequency": 0.67,
          "next_day_risk": 71.3
        },
        {
          "subject": "12",
          "day": "2023-03-03",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.236,
          "time_above_140_pct": 89.0,
          "excursion_frequency": 1.0,
          "next_day_risk": 74.5
        },
        {
          "subject": "12",
          "day": "2023-03-04",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.355,
          "time_above_140_pct": 66.7,
          "excursion_frequency": 1.0,
          "next_day_risk": 71.3
        },
        {
          "subject": "12",
          "day": "2023-03-05",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.344,
          "time_above_140_pct": 49.5,
          "excursion_frequency": 1.0,
          "next_day_risk": 69.3
        },
        {
          "subject": "12",
          "day": "2023-03-06",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.263,
          "time_above_140_pct": 68.6,
          "excursion_frequency": 0.5,
          "next_day_risk": 70.6
        },
        {
          "subject": "12",
          "day": "2023-03-07",
          "transition_risk": 100.0,
          "daily_glucose_cv": 0.232,
          "time_above_140_pct": 62.2,
          "excursion_frequency": 1.0,
          "next_day_risk": 70.7
        }
      ],
      "recommendations": [
        {
          "subject": "5",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 12,
          "estimated_meal_response_risk": 57.0,
          "estimated_recovery_risk": 44.7,
          "estimated_next_day_instability_risk": 55.7,
          "carbs_range": "15.0-25.0 g",
          "protein_range": "2.0-4.0 g",
          "fat_range": "0.0-13.0 g",
          "fiber_range": "2.0-5.0 g",
          "summary": "For snack, target about 15.0-25.0 g carbs, 2.0-4.0 g protein, 0.0-13.0 g fat, and 2.0-5.0 g fiber."
        },
        {
          "subject": "3",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 89.7,
          "estimated_recovery_risk": 65.0,
          "estimated_next_day_instability_risk": 58.7,
          "carbs_range": "55.5-73.0 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-7.0 g",
          "summary": "For breakfast, target about 55.5-73.0 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
        },
        {
          "subject": "3",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 67.3,
          "estimated_recovery_risk": 54.0,
          "estimated_next_day_instability_risk": 58.7,
          "carbs_range": "18.2-40.8 g",
          "protein_range": "29.0-68.5 g",
          "fat_range": "14.8-17.8 g",
          "fiber_range": "4.8-13.0 g",
          "summary": "For lunch, target about 18.2-40.8 g carbs, 29.0-68.5 g protein, 14.8-17.8 g fat, and 4.8-13.0 g fiber."
        },
        {
          "subject": "5",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 89.4,
          "estimated_recovery_risk": 70.1,
          "estimated_next_day_instability_risk": 57.8,
          "carbs_range": "55.5-67.8 g",
          "protein_range": "22.0-66.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-1.8 g",
          "summary": "For breakfast, target about 55.5-67.8 g carbs, 22.0-66.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
        },
        {
          "subject": "5",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 65.4,
          "estimated_recovery_risk": 46.6,
          "estimated_next_day_instability_risk": 57.7,
          "carbs_range": "37.0-83.8 g",
          "protein_range": "19.2-46.0 g",
          "fat_range": "18.8-45.1 g",
          "fiber_range": "8.8-14.2 g",
          "summary": "For lunch, target about 37.0-83.8 g carbs, 19.2-46.0 g protein, 18.8-45.1 g fat, and 8.8-14.2 g fiber."
        },
        {
          "subject": "5",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 66.5,
          "estimated_recovery_risk": 53.8,
          "estimated_next_day_instability_risk": 57.6,
          "carbs_range": "26.8-51.2 g",
          "protein_range": "18.2-34.2 g",
          "fat_range": "5.8-18.2 g",
          "fiber_range": "4.5-6.8 g",
          "summary": "For dinner, target about 26.8-51.2 g carbs, 18.2-34.2 g protein, 5.8-18.2 g fat, and 4.5-6.8 g fiber."
        },
        {
          "subject": "12",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 76.6,
          "estimated_recovery_risk": 62.4,
          "estimated_next_day_instability_risk": 68.4,
          "carbs_range": "18.2-53.2 g",
          "protein_range": "57.5-78.0 g",
          "fat_range": "14.8-23.8 g",
          "fiber_range": "4.0-7.0 g",
          "summary": "For lunch, target about 18.2-53.2 g carbs, 57.5-78.0 g protein, 14.8-23.8 g fat, and 4.0-7.0 g fiber."
        },
        {
          "subject": "14",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 79.2,
          "estimated_recovery_risk": 63.6,
          "estimated_next_day_instability_risk": 57.3,
          "carbs_range": "24.0-73.0 g",
          "protein_range": "22.0-33.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-7.0 g",
          "summary": "For breakfast, target about 24.0-73.0 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-7.0 g fiber."
        },
        {
          "subject": "14",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 64.4,
          "estimated_recovery_risk": 51.0,
          "estimated_next_day_instability_risk": 57.4,
          "carbs_range": "18.2-55.2 g",
          "protein_range": "19.2-40.5 g",
          "fat_range": "14.8-25.5 g",
          "fiber_range": "4.8-10.8 g",
          "summary": "For lunch, target about 18.2-55.2 g carbs, 19.2-40.5 g protein, 14.8-25.5 g fat, and 4.8-10.8 g fiber."
        },
        {
          "subject": "14",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 68.0,
          "estimated_recovery_risk": 57.8,
          "estimated_next_day_instability_risk": 57.4,
          "carbs_range": "39.2-47.0 g",
          "protein_range": "13.0-16.5 g",
          "fat_range": "20.0-27.8 g",
          "fiber_range": "6.8-11.5 g",
          "summary": "For dinner, target about 39.2-47.0 g carbs, 13.0-16.5 g protein, 20.0-27.8 g fat, and 6.8-11.5 g fiber."
        },
        {
          "subject": "28",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 57.7,
          "estimated_recovery_risk": 41.0,
          "estimated_next_day_instability_risk": 55.8,
          "carbs_range": "18.2-52.5 g",
          "protein_range": "29.0-71.5 g",
          "fat_range": "14.8-28.6 g",
          "fiber_range": "4.8-14.2 g",
          "summary": "For lunch, target about 18.2-52.5 g carbs, 29.0-71.5 g protein, 14.8-28.6 g fat, and 4.8-14.2 g fiber."
        },
        {
          "subject": "28",
          "meal_slot": "dinner",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 66.5,
          "estimated_recovery_risk": 58.9,
          "estimated_next_day_instability_risk": 55.9,
          "carbs_range": "6.0-60.8 g",
          "protein_range": "23.8-46.5 g",
          "fat_range": "9.0-17.0 g",
          "fiber_range": "1.5-7.8 g",
          "summary": "For dinner, target about 6.0-60.8 g carbs, 23.8-46.5 g protein, 9.0-17.0 g fat, and 1.5-7.8 g fiber."
        },
        {
          "subject": "30",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 65.6,
          "estimated_recovery_risk": 28.7,
          "estimated_next_day_instability_risk": 66.9,
          "carbs_range": "67.8-92.2 g",
          "protein_range": "19.2-37.5 g",
          "fat_range": "19.6-42.5 g",
          "fiber_range": "8.5-11.5 g",
          "summary": "For lunch, target about 67.8-92.2 g carbs, 19.2-37.5 g protein, 19.6-42.5 g fat, and 8.5-11.5 g fiber."
        },
        {
          "subject": "36",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 64.2,
          "estimated_recovery_risk": 39.4,
          "estimated_next_day_instability_risk": 60.2,
          "carbs_range": "34.0-77.2 g",
          "protein_range": "55.0-79.0 g",
          "fat_range": "16.2-27.5 g",
          "fiber_range": "9.2-14.2 g",
          "summary": "For lunch, target about 34.0-77.2 g carbs, 55.0-79.0 g protein, 16.2-27.5 g fat, and 9.2-14.2 g fiber."
        },
        {
          "subject": "38",
          "meal_slot": "breakfast",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 86.3,
          "estimated_recovery_risk": 70.9,
          "estimated_next_day_instability_risk": 58.5,
          "carbs_range": "24.0-67.8 g",
          "protein_range": "22.0-33.0 g",
          "fat_range": "10.5-42.0 g",
          "fiber_range": "0.0-1.8 g",
          "summary": "For breakfast, target about 24.0-67.8 g carbs, 22.0-33.0 g protein, 10.5-42.0 g fat, and 0.0-1.8 g fiber."
        },
        {
          "subject": "38",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 59.0,
          "estimated_recovery_risk": 52.4,
          "estimated_next_day_instability_risk": 58.4,
          "carbs_range": "34.8-52.5 g",
          "protein_range": "29.0-79.0 g",
          "fat_range": "16.5-28.6 g",
          "fiber_range": "11.0-14.2 g",
          "summary": "For lunch, target about 34.8-52.5 g carbs, 29.0-79.0 g protein, 16.5-28.6 g fat, and 11.0-14.2 g fiber."
        },
        {
          "subject": "38",
          "meal_slot": "snack",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 62.7,
          "estimated_recovery_risk": 50.6,
          "estimated_next_day_instability_risk": 56.6,
          "carbs_range": "0.0-9.0 g",
          "protein_range": "0.0-1.0 g",
          "fat_range": "0.0-0.0 g",
          "fiber_range": "0.0-5.0 g",
          "summary": "For snack, target about 0.0-9.0 g carbs, 0.0-1.0 g protein, 0.0-0.0 g fat, and 0.0-5.0 g fiber."
        },
        {
          "subject": "46",
          "meal_slot": "lunch",
          "confidence": 100.0,
          "support_n_meals": 10,
          "estimated_meal_response_risk": 72.5,
          "estimated_recovery_risk": 55.0,
          "estimated_next_day_instability_risk": 68.7,
          "carbs_range": "42.2-84.2 g",
          "protein_range": "38.0-79.0 g",
          "fat_range": "19.2-28.6 g",
          "fiber_range": "10.8-14.2 g",
          "summary": "For lunch, target about 42.2-84.2 g carbs, 38.0-79.0 g protein, 19.2-28.6 g fat, and 10.8-14.2 g fiber."
        }
      ],
      "healthy_reference_delta": [
        {
          "key": "meal_response",
          "label": "Meal Response Risk Score",
          "cohort_value": 74.83,
          "healthy_value": 50.66,
          "delta_from_healthy": 24.17
        },
        {
          "key": "recovery",
          "label": "Recovery Risk Score",
          "cohort_value": 59.39,
          "healthy_value": 45.23,
          "delta_from_healthy": 14.16
        },
        {
          "key": "next_day",
          "label": "Next-Day Instability Risk Score",
          "cohort_value": 62.57,
          "healthy_value": 50.08,
          "delta_from_healthy": 12.49
        },
        {
          "key": "transition",
          "label": "State Transition Risk",
          "cohort_value": 94.38,
          "healthy_value": 59.98,
          "delta_from_healthy": 34.4
        }
      ]
    }
  ]
};
