# Deployment to Vercel

## Quick Deploy (Recommended)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to dashboard folder**:
   ```bash
   cd /Users/wangshijie/Documents/1_sci/1_nus_4/dashboard
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? `cgm-dashboard` (or your preference)
   - Directory? `./`
   - Override settings? `N`

4. **Get your URL** - Vercel will provide a URL like: `https://your-project.vercel.app`

## Deploy to Production

```bash
vercel --prod
```

## GitHub Integration (Optional)

For automatic deployments on push:

1. Push your `dashboard/` folder to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: `.`

## Notes

- The dashboard data is embedded in `data/dashboard-data.js`
- To update dashboard data after deployment, run:
  ```bash
  python3 generate_dashboard_data.py
  ```
  Then redeploy with `vercel --prod`
