# CGM Metabolic Foresight Dashboard

CGM Analysis Frontend for meal-aware metabolic foresight outputs across `healthy`, `prediabetes`, and `t2d` cohorts.

## Live

Deployed on Vercel: [cgm-dashboard.vercel.app](https://your-project.vercel.app)

## Development

```bash
# Regenerate dashboard data
python3 generate_dashboard_data.py

# Serve locally
python3 serve_dashboard.py --port 8123
```

Then visit `http://127.0.0.1:8123`.
