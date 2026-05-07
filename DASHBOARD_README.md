# CGM Dashboard

This folder contains a lightweight frontend for the meal-aware metabolic foresight outputs across `healthy`, `prediabetes`, and `t2d`.

## Refresh the dashboard data

```bash
python3 generate_dashboard_data.py
```

This compiles the cohort CSV outputs into:

- `data/dashboard-data.json`
- `data/dashboard-data.js`

## Open the dashboard

You can open `index.html` directly, or serve it locally:

```bash
python3 serve_dashboard.py --port 8123
```

Then visit `http://127.0.0.1:8123`.
