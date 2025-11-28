# 🚀 Netlify Deployment Guide

## Overview
This guide walks you through deploying the Aishvarya Farewell website to Netlify.

---

## Prerequisites
- GitHub account with the project repository
- Netlify account (free at https://netlify.com)
- Project should be pushed to GitHub

---

## Step 1: Push Project to GitHub

If not already done:

```bash
# Navigate to project
cd /Users/gautham/gauthamsexpt/aishvarya_farewell

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Aishvarya farewell website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/aishvarya-farewell.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Connect to Netlify

### Option A: Netlify Web Interface (Easiest)

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. Click **"New site from Git"**
3. Choose **GitHub** as provider
4. Authorize Netlify to access your GitHub account
5. Select your **aishvarya-farewell** repository
6. Click **Deploy site**

Netlify will automatically:
- Detect it's a Next.js project
- Use the correct build command: `npm run build`
- Deploy to production

### Option B: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Navigate to project
cd /Users/gautham/gauthamsexpt/aishvarya_farewell

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## Step 3: Configure Netlify Settings (Auto-Done)

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- All redirects set up

---

## Step 4: Monitor Deployment

After deployment:

1. **Netlify Dashboard** shows:
   - Build status
   - Deploy history
   - Live URL (e.g., `https://aishvarya-farewell.netlify.app`)
   - Performance metrics

2. **Check Logs** if there are issues:
   - Go to **Deploys** → **Deployment logs**

---

## Post-Deployment

### Update DNS (Optional)
If you have a custom domain:
1. Buy domain from Namecheap, GoDaddy, etc.
2. In Netlify: **Domain settings** → Add domain
3. Update DNS records as instructed

### Set Environment Variables (If Needed)
1. **Netlify Dashboard** → **Site settings** → **Build & deploy** → **Environment**
2. Add any environment variables needed

### Enable HTTPS (Auto)
Netlify automatically enables HTTPS with Let's Encrypt.

---

## Continuous Deployment

After deployment:
- Every push to `main` branch triggers automatic rebuild
- Preview deployments for pull requests
- Automatic rollback if build fails

---

## Custom Domain Setup

If you have a custom domain:

1. **Buy Domain** from registrar
2. **In Netlify**:
   - Go to **Domain settings**
   - Add your custom domain
   - Update nameservers to Netlify's

3. **Alternatively**:
   - Use CNAME record pointing to Netlify domain

---

## Troubleshooting

### Build Fails
- Check **Deploy logs** in Netlify dashboard
- Common issues:
  - Missing environment variables
  - Incorrect build command
  - Missing dependencies

### Photos Not Loading
- Verify `public/` folder has photos
- Check file paths in `app/page.tsx`

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check nameserver settings

---

## Performance Optimization

Netlify already provides:
- ✅ Global CDN
- ✅ Automatic image optimization
- ✅ Gzip compression
- ✅ Cache busting
- ✅ DDoS protection

---

## Environment Variables (Optional)

If needed, create `.env.local`:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Deployment Checklist

- ✅ Project built successfully (`npm run build`)
- ✅ All files committed to Git
- ✅ Pushed to GitHub
- ✅ Connected Netlify to GitHub repo
- ✅ `netlify.toml` configured
- ✅ Build completes without errors
- ✅ Website accessible at Netlify URL

---

## Useful Links

- **Netlify Dashboard**: https://app.netlify.com
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

## Commands Reference

```bash
# Local development
npm run dev

# Build locally
npm run build

# Start production build
npm start

# Deploy with CLI
netlify deploy --prod

# View logs
netlify logs
```

---

## Support

If issues occur:
1. Check Netlify dashboard → **Deploys** → **Deployment logs**
2. Review error messages
3. Check GitHub repository is up to date
4. Verify `netlify.toml` configuration

---

**Your site will be live at:**
```
https://[your-site-name].netlify.app
```

🎉 Congratulations on your deployment!
