(function () {
  const data = window.CGM_DASHBOARD_DATA;
  if (!data) {
    document.body.innerHTML = '<div class="page-shell"><div class="card"><p class="empty-state">Dashboard data is missing. Run <code>python3 generate_dashboard_data.py</code> first.</p></div></div>';
    return;
  }

  const state = {
    selectedCohort: data.cohorts[0]?.key || "healthy",
    subjectFilter: "",
    selectedSubject: null,
  };

  const format = {
    number(value, digits = 1) {
      if (value === null || value === undefined || Number.isNaN(value)) return "NA";
      return Number(value).toFixed(digits);
    },
    integer(value) {
      if (value === null || value === undefined || Number.isNaN(value)) return "NA";
      return String(Math.round(Number(value)));
    },
    percent(value, digits = 1) {
      if (value === null || value === undefined || Number.isNaN(value)) return "NA";
      return `${Number(value).toFixed(digits)}%`;
    },
    riskClass(value) {
      if (value === null || value === undefined || Number.isNaN(value)) return "low";
      if (value >= 70) return "high";
      if (value >= 50) return "mid";
      return "low";
    },
  };

  const el = {
    title: document.getElementById("project-title"),
    subtitle: document.getElementById("project-subtitle"),
    referenceExplainer: document.getElementById("reference-explainer"),
    referencePill: document.getElementById("reference-pill"),
    updated: document.getElementById("last-updated"),
    comparisonGrid: document.getElementById("comparison-grid"),
    cohortTabs: document.getElementById("cohort-tabs"),
    cohortTitle: document.getElementById("cohort-title"),
    cohortBadge: document.getElementById("cohort-badge"),
    cohortSummaryText: document.getElementById("cohort-summary-text"),
    overviewMetrics: document.getElementById("overview-metrics"),
    scoreMapChart: document.getElementById("score-map-chart"),
    deltaChart: document.getElementById("delta-chart"),
    frameworkGrid: document.getElementById("framework-grid"),
    validationGrid: document.getElementById("validation-grid"),
    narrativeList: document.getElementById("narrative-list"),
    subjectSearch: document.getElementById("subject-search"),
    subjectsTableBody: document.getElementById("subjects-table-body"),
    subjectDetailTitle: document.getElementById("subject-detail-title"),
    subjectDetailBadge: document.getElementById("subject-detail-badge"),
    subjectDetailSummary: document.getElementById("subject-detail-summary"),
    subjectDetailMetrics: document.getElementById("subject-detail-metrics"),
    subjectTrendChart: document.getElementById("subject-trend-chart"),
    subjectMealSlots: document.getElementById("subject-meal-slots"),
    subjectRecentMeals: document.getElementById("subject-recent-meals"),
    subjectRecommendations: document.getElementById("subject-recommendations"),
    alertsList: document.getElementById("alerts-list"),
    recommendationsGrid: document.getElementById("recommendations-grid"),
  };

  function getSelectedCohort() {
    return data.cohorts.find((item) => item.key === state.selectedCohort) || data.cohorts[0];
  }

  function renderHeader() {
    el.title.textContent = data.project.title;
    el.subtitle.textContent = data.project.subtitle;
    el.referenceExplainer.textContent = data.project.reference_explainer;
    el.referencePill.textContent = `Reference: ${data.project.reference_scheme}`;
    el.updated.textContent = `Updated ${data.project.last_updated}`;
  }

  function renderComparisonGrid() {
    el.comparisonGrid.innerHTML = data.comparison.map((item) => {
      const domainData = data.comparison_domains;
      const mealRisk = domainData.find(d => d.key === "meal_response")?.[item.key];
      const recoveryRisk = domainData.find(d => d.key === "recovery")?.[item.key];
      const nextDayRisk = domainData.find(d => d.key === "next_day")?.[item.key];
      return `
      <article class="comparison-card">
        <h3>${item.label}</h3>
        <p class="comparison-meta">${item.subjects} subjects · ${item.meals} meals · ${item.days} days</p>
        <div class="mini-bar-stack">
          ${miniBar("Meal Response Risk", mealRisk, 100)}
          ${miniBar("Recovery Risk Score", recoveryRisk, 100)}
          ${miniBar("Next-Day Instability Risk", nextDayRisk, 100)}
        </div>
      </article>
    `;
    }).join("");
  }

  function miniBar(label, value, max) {
    const normalized = value === null || value === undefined ? 0 : Math.max(0, Math.min(100, (value / max) * 100));
    const shown = value === null || value === undefined ? "NA" : `${value.toFixed(1)}`;
    return `
      <div class="mini-bar-row">
        <span>${label}</span>
        <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${normalized}%"></div></div>
        <strong>${shown}</strong>
      </div>
    `;
  }

  function renderTabs() {
    el.cohortTabs.innerHTML = data.cohorts.map((cohort) => `
      <button class="cohort-tab ${cohort.key === state.selectedCohort ? "is-active" : ""}" data-cohort="${cohort.key}">
        ${cohort.label}
      </button>
    `).join("");

    el.cohortTabs.querySelectorAll("[data-cohort]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedCohort = button.dataset.cohort;
        state.selectedSubject = null;
        renderSelectedCohort();
        renderTabs();
      });
    });
  }

  function renderSelectedCohort() {
    const cohort = getSelectedCohort();
    if (!state.selectedSubject || !cohort.subject_details[state.selectedSubject]) {
      state.selectedSubject = cohort.subjects[0]?.subject || null;
    }
    el.cohortTitle.textContent = cohort.label;
    el.cohortBadge.textContent = cohort.key;
    el.cohortSummaryText.textContent =
      `${cohort.summary.subjects} participants with ${cohort.summary.meals} retained meals and ${cohort.summary.days} analyzable days. ` +
      `Mean HbA1c ${format.number(cohort.summary.mean_a1c, 2)}, mean BMI ${format.number(cohort.summary.mean_bmi, 2)}, mean fasting glucose ${format.number(cohort.summary.mean_fasting_glucose, 1)} mg/dL.`;

    const overviewCards = [
      ["Subjects", format.integer(cohort.summary.subjects), "Participants represented in this cohort"],
      ["Retained Meals", format.integer(cohort.summary.meals), "Meal windows that passed the analysis filters"],
      ["Retained Days", format.integer(cohort.summary.days), "Daily glycaemic summaries retained for modeling"],
      ["Mean Glucose", `${format.number(cohort.summary.mean_glucose, 1)} mg/dL`, "Average subject-level mean glucose"],
    ];
    el.overviewMetrics.innerHTML = overviewCards.map(([title, value, meta]) => metricCard(title, value, meta)).join("");

    const frameworkEntries = [
      cohort.framework.meal_response,
      cohort.framework.recovery,
      cohort.framework.next_day,
      cohort.framework.transition,
    ];
    el.frameworkGrid.innerHTML = frameworkEntries.map((entry) => `
      <article class="framework-card">
        <h3>${entry.label}</h3>
        <div class="framework-value">${entry.mean_score !== undefined ? format.number(entry.mean_score, 1) : "NA"}</div>
        ${entry.event_rate_pct !== undefined
          ? `<div class="framework-subline">Event rate ${format.percent(entry.event_rate_pct, 1)}</div>`
          : ""}
        ${entry.alerts !== undefined
          ? `<div class="framework-subline">Alerts ${format.integer(entry.alerts)}</div>`
          : ""}
      </article>
    `).join("");

    const validationEntries = [
      ["Meal Response Risk Score", cohort.validations.meal_response],
      ["Recovery Risk Score", cohort.validations.recovery],
      ["Next-Day Instability Risk", cohort.validations.next_day],
    ];
    el.validationGrid.innerHTML = validationEntries.map(([title, item]) => `
      <article class="validation-card">
        <h3>${title}</h3>
        <div class="validation-value">AUC ${format.number(item.auc, 3)}</div>
        <div class="validation-meta">
          F1@60 ${format.number(item.f1_at_60, 3)}<br>
          Precision@60 ${format.number(item.precision_at_60, 3)}<br>
          Sensitivity@60 ${format.number(item.sensitivity_at_60, 3)}
        </div>
      </article>
    `).join("");

    el.narrativeList.innerHTML = cohort.narrative.map((line) => `<li>${line}</li>`).join("");

    renderScoreMap();
    renderDeltaChart();
    renderSubjects();
    renderSubjectDetail();
    renderAlerts();
    renderRecommendations();
  }

  function renderScoreMap() {
    const selected = getSelectedCohort();
    const maxValue = 100;
    const scoreFormulas = {
      meal_response: "raw = 0.35·z(peak_glucose) + 0.35·z(peak_delta) + 0.30·z(log1p(iAUC<sub>120</sub>))",
      recovery: "raw = 0.40·z(min&gt;7.8) + 0.35·z(log1p(TTR)) + 0.25·z(log1p(dur&gt;baseline))",
      next_day: "raw = ridge(daily_features); β = (X'X + αI)<sup>−1</sup>X'(y − ȳ), α=1.0",
      transition: "raw = 0.30·z(CV) + 0.30·z(TAR&gt;140) + 0.20·z(excursion_freq) + 0.20·z(change_pt)",
    };
    const sigmoidNote = "score = 100 / (1 + exp(−raw))";

    el.scoreMapChart.innerHTML = data.comparison_domains.map((row) => `
      <div class="score-row">
        <div class="score-row-label">${row.label}</div>
        <div class="score-row-bars">
          ${["healthy", "prediabetes", "t2d"].map((key) => {
            const label = data.cohorts.find((item) => item.key === key)?.label || key;
            const value = row[key];
            const isSelected = key === selected.key;
            return `
              <div class="score-bar-block ${isSelected ? "is-selected" : ""}">
                <div class="score-bar-meta">${label}</div>
                <div class="score-bar-track">
                  <div class="score-bar-fill cohort-${key}" style="width:${Math.max(0, Math.min(100, (value || 0) / maxValue * 100))}%"></div>
                </div>
                <div class="score-bar-value">${format.number(value, 1)}</div>
              </div>
            `;
          }).join("")}
        </div>
        ${scoreFormulas[row.key] ? `<div class="score-row-formula">${scoreFormulas[row.key]}<br><span class="sigmoid-note">${sigmoidNote}</span></div>` : ""}
      </div>
    `).join("");
  }

  function renderDeltaChart() {
    const selected = getSelectedCohort();
    const rows = selected.healthy_reference_delta || [];
    if (selected.key === "healthy") {
      el.deltaChart.innerHTML = `
        <div class="empty-state">
          Healthy is the reference cohort, so its score deltas are anchored around zero by design.
        </div>
      `;
      return;
    }
    const maxAbs = Math.max(...rows.map((row) => Math.abs(row.delta_from_healthy || 0)), 1);
    el.deltaChart.innerHTML = rows.map((row) => {
      const delta = row.delta_from_healthy || 0;
      const width = Math.abs(delta) / maxAbs * 100;
      return `
        <div class="delta-row">
          <div class="delta-label">${row.label}</div>
          <div class="delta-centerline">
            <div class="delta-fill ${delta >= 0 ? "positive" : "negative"}" style="width:${width}%; ${delta >= 0 ? "left:50%;" : `left:${50 - width}%;`}"></div>
          </div>
          <div class="delta-value">${delta >= 0 ? "+" : ""}${format.number(delta, 1)}</div>
        </div>
      `;
    }).join("");
  }

  function metricCard(title, value, meta) {
    return `
      <article class="metric-card">
        <h3>${title}</h3>
        <div class="metric-value">${value}</div>
        <div class="metric-meta">${meta}</div>
      </article>
    `;
  }

  function renderSubjects() {
    const cohort = getSelectedCohort();
    const filter = state.subjectFilter.trim().toLowerCase();
    const rows = cohort.subjects
      .filter((item) => !filter || String(item.subject).toLowerCase().includes(filter))
      .slice(0, 18);

    if (!rows.length) {
      el.subjectsTableBody.innerHTML = `<tr><td colspan="7"><div class="empty-state">No subjects match that filter.</div></td></tr>`;
      return;
    }

    el.subjectsTableBody.innerHTML = rows.map((item) => `
      <tr class="${String(item.subject) === String(state.selectedSubject) ? "is-selected-row" : ""}" data-subject-row="${item.subject}">
        <td><strong>${item.subject}</strong></td>
        <td>${format.number(item.a1c, 2)}</td>
        <td>${format.number(item.bmi, 1)}</td>
        <td>${format.number(item.mean_glucose, 1)} mg/dL</td>
        <td><span class="risk-pill ${format.riskClass(item.next_day_risk_mean)}">${format.number(item.next_day_risk_mean, 1)}</span></td>
        <td>${format.number(item.transition_risk_max, 1)}</td>
        <td>${format.integer(item.instability_alert_count)}</td>
      </tr>
    `).join("");

    el.subjectsTableBody.querySelectorAll("[data-subject-row]").forEach((row) => {
      row.addEventListener("click", () => {
        state.selectedSubject = row.dataset.subjectRow;
        renderSubjects();
        renderSubjectDetail();
      });
    });
  }

  function renderSubjectDetail() {
    const cohort = getSelectedCohort();
    const subjectId = String(state.selectedSubject || "");
    const detail = cohort.subject_details?.[subjectId];
    if (!detail) {
      el.subjectDetailTitle.textContent = "Selected Subject";
      el.subjectDetailBadge.textContent = "No subject selected";
      el.subjectDetailSummary.textContent = "Pick a subject from the table to inspect daily risk trajectories and personalized nutrition guidance.";
      el.subjectDetailMetrics.innerHTML = "";
      el.subjectTrendChart.innerHTML = `<div class="empty-state">No subject detail available.</div>`;
      el.subjectMealSlots.innerHTML = `<div class="empty-state">No meal-slot detail available.</div>`;
      el.subjectRecentMeals.innerHTML = `<div class="empty-state">No recent meals available.</div>`;
      el.subjectRecommendations.innerHTML = `<div class="empty-state">No recommendations available.</div>`;
      return;
    }

    const o = detail.overview;
    el.subjectDetailTitle.textContent = `Subject ${subjectId}`;
    el.subjectDetailBadge.textContent = `${cohort.label} · ${o.group}`;
    el.subjectDetailSummary.textContent =
      `HbA1c ${format.number(o.a1c, 2)}, BMI ${format.number(o.bmi, 1)}, mean glucose ${format.number(o.mean_glucose, 1)} mg/dL, ` +
      `${format.number(o.days_covered, 1)} days covered, ${format.integer(o.n_meals)} meals analyzed.`;

    const cards = [
      ["Meal Response Risk Score", format.number(o.meal_response_risk_mean, 1), "Average meal-level risk under healthy reference"],
      ["Recovery Risk Score", format.number(o.recovery_risk_mean, 1), "Average post-meal recovery delay burden"],
      ["Next-Day Instability Risk Score", format.number(o.next_day_risk_mean, 1), "Average next-day instability score"],
      ["State Transition Risk", format.number(o.transition_risk_max, 1), "Peak state-transition risk observed"],
    ];
    el.subjectDetailMetrics.innerHTML = cards.map(([title, value, meta]) => metricCard(title, value, meta)).join("");

    renderSubjectTrend(detail.daily_trace || []);
    renderSubjectMealSlots(detail.meal_slot_summary || []);
    renderSubjectRecentMeals(detail.recent_meals || []);
    renderSubjectRecommendations(detail.recommendations || []);
  }

  function renderSubjectTrend(trace) {
    if (!trace.length) {
      el.subjectTrendChart.innerHTML = `<div class="empty-state">No daily trajectory available.</div>`;
      return;
    }
    const width = 760;
    const height = 240;
    const padX = 16;
    const padY = 18;
    const series = [
      { key: "meal_risk", color: "#d46f4d", label: "Meal Response Risk" },
      { key: "next_day_risk", color: "#8f3f26", label: "Next-Day Instability" },
      { key: "transition_risk", color: "#2c7a78", label: "State Transition" },
    ];
    const maxX = Math.max(trace.length - 1, 1);
    const y = (value) => height - padY - ((value || 0) / 100) * (height - padY * 2);
    const x = (index) => padX + (index / maxX) * (width - padX * 2);
    const paths = series.map((s) => {
      const points = trace
        .map((row, index) => (row[s.key] == null ? null : `${x(index)},${y(row[s.key])}`))
        .filter(Boolean);
      return `<polyline fill="none" stroke="${s.color}" stroke-width="3" points="${points.join(" ")}" />`;
    }).join("");
    const ticks = [0, 25, 50, 75, 100].map((tick) => `
      <line x1="${padX}" y1="${y(tick)}" x2="${width - padX}" y2="${y(tick)}" stroke="rgba(31,39,55,0.08)" />
      <text x="0" y="${y(tick) + 4}" fill="#5f6a76" font-size="11">${tick}</text>
    `).join("");
    const labels = series.map((s) => `<span class="trend-legend-item"><i style="background:${s.color}"></i>${s.label}</span>`).join("");
    el.subjectTrendChart.innerHTML = `
      <div class="trend-legend">${labels}</div>
      <svg viewBox="0 0 ${width} ${height}" class="trend-svg" role="img" aria-label="Subject daily risk trajectory">
        ${ticks}
        ${paths}
      </svg>
      <div class="trend-caption">Daily trajectories are shown on a 0-100 score scale using the healthy reference calibration.</div>
    `;
  }

  function renderSubjectMealSlots(rows) {
    if (!rows.length) {
      el.subjectMealSlots.innerHTML = `<div class="empty-state">No meal-slot summary available.</div>`;
      return;
    }
    el.subjectMealSlots.innerHTML = rows.map((row) => `
      <div class="slot-card">
        <div class="slot-head">
          <strong>${row.meal_slot}</strong>
          <span>${format.integer(row.n_meals)} meals</span>
        </div>
        <div class="slot-meta">
          Meal risk ${format.number(row.mean_meal_risk, 1)} · Recovery risk ${format.number(row.mean_recovery_risk, 1)}<br>
          Peak glucose ${format.number(row.mean_peak_glucose, 1)} mg/dL · Mean carbs ${format.number(row.mean_carbs, 1)} g
        </div>
      </div>
    `).join("");
  }

  function renderSubjectRecentMeals(rows) {
    if (!rows.length) {
      el.subjectRecentMeals.innerHTML = `<div class="empty-state">No recent meals available.</div>`;
      return;
    }
    el.subjectRecentMeals.innerHTML = rows.map((row) => `
      <div class="recent-meal-card">
        <strong>${row.meal_type} · ${row.meal_start}</strong>
        <div class="slot-meta">
          Carbs ${format.number(row.meal_carbs, 1)} g · Peak glucose ${format.number(row.peak_glucose, 1)} mg/dL<br>
          Meal risk ${format.number(row.meal_risk, 1)} · Recovery risk ${format.number(row.recovery_risk, 1)}
        </div>
      </div>
    `).join("");
  }

  function renderSubjectRecommendations(rows) {
    if (!rows.length) {
      el.subjectRecommendations.innerHTML = `<div class="empty-state">No subject-specific recommendations available.</div>`;
      return;
    }
    el.subjectRecommendations.innerHTML = rows.map((row) => `
      <div class="subject-rec-card">
        <div class="slot-head">
          <strong>${row.meal_slot}</strong>
          <span>${format.integer(row.confidence)}/100</span>
        </div>
        <p>${row.summary}</p>
        <div class="slot-meta">
          Meal response risk ${format.number(row.estimated_meal_response_risk, 1)} ·
          Recovery risk ${format.number(row.estimated_recovery_risk, 1)} ·
          Next-Day instability risk ${format.number(row.estimated_next_day_instability_risk, 1)}
        </div>
      </div>
    `).join("");
  }

  function renderAlerts() {
    const cohort = getSelectedCohort();
    if (!cohort.top_alerts.length) {
      el.alertsList.innerHTML = `<div class="empty-state">No alert candidates available.</div>`;
      return;
    }
    el.alertsList.innerHTML = cohort.top_alerts.map((item) => `
      <article class="alert-card">
        <div class="alert-head">
          <h3>Subject ${item.subject}</h3>
          <span class="risk-pill ${format.riskClass(item.transition_risk)}">${format.number(item.transition_risk, 1)}</span>
        </div>
        <div class="alert-meta">
          Day ${item.day}<br>
          CV ${format.number(item.daily_glucose_cv, 3)}<br>
          TAR&gt;140 ${format.percent(item.time_above_140_pct, 1)} · Excursion freq ${format.number(item.excursion_frequency, 2)}
        </div>
      </article>
    `).join("");
  }

  function renderRecommendations() {
    const cohort = getSelectedCohort();
    if (!cohort.recommendations.length) {
      el.recommendationsGrid.innerHTML = `<div class="empty-state">No recommendation rows available for this cohort.</div>`;
      return;
    }
    el.recommendationsGrid.innerHTML = cohort.recommendations.map((item) => `
      <article class="recommendation-card">
        <div class="recommendation-head">
          <h3>Subject ${item.subject} · ${item.meal_slot}</h3>
          <span class="risk-pill ${format.riskClass(item.estimated_next_day_instability_risk)}">${format.integer(item.confidence)}/100</span>
        </div>
        <p>${item.summary}</p>
        <div class="macro-list">
          <div class="macro-pill"><strong>Carbs</strong><br>${item.carbs_range}</div>
          <div class="macro-pill"><strong>Protein</strong><br>${item.protein_range}</div>
          <div class="macro-pill"><strong>Fat</strong><br>${item.fat_range}</div>
          <div class="macro-pill"><strong>Fiber</strong><br>${item.fiber_range}</div>
        </div>
        <p class="recommendation-meta">
          Meal response risk ${format.number(item.estimated_meal_response_risk, 1)} ·
          Recovery risk ${format.number(item.estimated_recovery_risk, 1)} ·
          Next-Day instability risk ${format.number(item.estimated_next_day_instability_risk, 1)}
        </p>
      </article>
    `).join("");
  }

  el.subjectSearch.addEventListener("input", (event) => {
    state.subjectFilter = event.target.value || "";
    renderSubjects();
  });

  renderHeader();
  renderComparisonGrid();
  renderTabs();
  renderSelectedCohort();
})();
