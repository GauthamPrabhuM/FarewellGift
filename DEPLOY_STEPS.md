# 🌐 DEPLOY TO NETLIFY - STEP BY STEP GUIDE

## 📋 Complete Deployment Walkthrough

---

## ✅ PRE-DEPLOYMENT CHECKLIST

Before deploying, verify:
- ✓ Local build works: `npm run build`
- ✓ Dev server works: `npm run dev`
- ✓ All changes are committed to git
- ✓ netlify.toml file exists
- ✓ No build errors in console

---

## 🚀 DEPLOYMENT METHOD 1: Web UI (Easiest - Recommended)

### Step 1: Create GitHub Repository

```bash
# Navigate to project
cd /Users/gautham/gauthamsexpt/aishvarya_farewell

# Initialize git if not done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Aishvarya Farewell - Ready for deployment"

# Create new repository on GitHub
# Go to https://github.com/new
# Repository name: aishvarya-farewell
# Description: Farewell gift for Miss Aishvarya Krishnakumar
# Choose Public or Private
# Click "Create repository"

# Add remote (REPLACE YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/aishvarya-farewell.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**After running these commands, your code will be on GitHub.**

---

### Step 2: Connect GitHub to Netlify

1. **Open Netlify Dashboard**
   - Go to: https://app.netlify.com
   - Sign up/Login with GitHub

2. **Create New Site**
   - Click: **"New site from Git"** button

3. **Select GitHub**
   - Click: **GitHub** (authorize if prompted)
   - Login to GitHub if needed

4. **Select Repository**
   - Find: **aishvarya-farewell**
   - Click to select

5. **Configure Build Settings**
   - **Branch to deploy**: main
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - (These should auto-detect)

6. **Deploy**
   - Click: **"Deploy site"**

### ✅ Done! Your site is live in 1-2 minutes

---

## 🚀 DEPLOYMENT METHOD 2: Using Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser to authorize. Click "Authorize" and return to terminal.

### Step 3: Deploy

```bash
cd /Users/gautham/gauthamsexpt/aishvarya_farewell
netlify deploy --prod
```

### ✅ Done! Site is live immediately

---

## 🚀 DEPLOYMENT METHOD 3: Using Deployment Script

### Simple One-Command Deploy

```bash
# Make script executable
chmod +x /Users/gautham/gauthamsexpt/aishvarya_farewell/netlify-deploy.sh

# Run the script
bash /Users/gautham/gauthamsexpt/aishvarya_farewell/netlify-deploy.sh
```

The script handles:
- ✓ Dependency installation
- ✓ Build creation
- ✓ Git initialization
- ✓ Netlify CLI installation
- ✓ Deployment

### ✅ Done! Everything automated

---

## 📊 What Happens During Deployment

1. **Netlify receives your code**
2. **Installs dependencies**: `npm install`
3. **Builds the project**: `npm run build`
4. **Generates static files** in `.next/`
5. **Deploys to CDN** across the globe
6. **Enables HTTPS** with Let's Encrypt
7. **Provides live URL** like `https://aishvarya-farewell.netlify.app`

---

## 🔗 After Deployment - Your Live URLs

### Default Netlify URL
```
https://[your-site-name].netlify.app
```

Example: `https://aishvarya-farewell-2025.netlify.app`

### Custom Domain (Optional)
```
https://yourdomain.com
```

---

## 🎯 Continuous Deployment

After deployment:
- **Any push to `main` branch** → automatic rebuild and deploy
- **Pull requests** → preview deployments
- **Automatic rollback** if build fails
- **Free SSL certificate** automatically renewed

### Update Your Website Later

```bash
# Make changes to code
# ...

# Commit and push
git add .
git commit -m "Update website"
git push origin main

# Netlify automatically rebuilds and deploys! ✨
```

---

## ✅ VERIFY DEPLOYMENT

After deployment is complete:

1. **Check Netlify Dashboard**
   - Go to: https://app.netlify.com
   - Site status should be: **Published** ✓
   - See your live URL

2. **Test the Website**
   - Open the provided URL
   - Verify all photos load
   - Check confetti animation
   - Test photo navigation
   - Ensure team members show

3. **Check Performance**
   - Netlify shows: Performance metrics
   - Lighthouse scores
   - Build details

---

## 🔧 If Build Fails

### Check Deployment Logs

1. Netlify Dashboard → **Site settings** → **Deploys**
2. Click on failed deploy
3. View **Deployment log**
4. Look for error messages

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Missing dependencies | Run `npm install` locally, commit package-lock.json |
| Build command error | Verify `netlify.toml` has correct build command |
| Photos not found | Ensure photos are in `public/` folder, not `photos/` |
| Port already in use | Kill process: `lsof -ti:3000 \| xargs kill -9` |

### Fix and Redeploy

```bash
# Fix the issue locally
# Test with: npm run build

# Commit and push
git add .
git commit -m "Fix: [describe fix]"
git push origin main

# Netlify automatically redeploys
```

---

## 🌐 CUSTOM DOMAIN SETUP (Optional)

### If you have a custom domain:

1. **Buy domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Any registrar

2. **Add to Netlify**
   - Netlify Dashboard → **Domain settings**
   - Click **Add custom domain**
   - Enter your domain
   - Follow DNS setup instructions

3. **Update DNS**
   - Go to domain registrar
   - Update nameservers to Netlify's nameservers
   - Wait 24-48 hours for propagation

---

## 🔒 HTTPS & SECURITY

Netlify automatically:
- ✅ Enables HTTPS
- ✅ Issues free SSL certificate
- ✅ Auto-renews certificate
- ✅ Redirects HTTP → HTTPS

Your site is secure by default!

---

## 📈 MONITORING & ANALYTICS

In Netlify Dashboard:

- **Deploys**: See all past deployments
- **Deploy logs**: View build details
- **Analytics**: See visitor stats
- **Performance**: Lighthouse scores
- **Functions**: Serverless functions (if used)

---

## 🔑 IMPORTANT LINKS

| Action | Link |
|--------|------|
| Dashboard | https://app.netlify.com |
| Your Site | https://[site-name].netlify.app |
| Domain Settings | In dashboard → Domain settings |
| Build Settings | In dashboard → Site settings → Build & deploy |
| Environment Variables | In dashboard → Site settings → Build & deploy → Environment |

---

## 💡 NETLIFY FEATURES

Free tier includes:
- ✅ 300 build minutes/month
- ✅ Global CDN
- ✅ Continuous deployment
- ✅ HTTPS/SSL
- ✅ Custom domains
- ✅ Redirects & rewrites
- ✅ 100GB/month bandwidth
- ✅ Great performance

---

## 📞 TROUBLESHOOTING COMMANDS

```bash
# Check git status
git status

# See commit history
git log --oneline

# View branches
git branch -a

# Check Netlify connection
netlify status

# View site info
netlify sites:list

# Check build logs
netlify logs --tail

# Open dashboard
netlify open:admin
```

---

## 🎯 DEPLOYMENT SUMMARY

### Quick Path (5 minutes)
```bash
# 1. Ensure build works
npm run build

# 2. Push to GitHub
git add .
git commit -m "Ready for Netlify"
git push origin main

# 3. Go to netlify.com
# Click "New site from Git"
# Select your repo
# Deploy!
```

### Via CLI (3 minutes)
```bash
netlify login
netlify deploy --prod
```

### Via Script (2 minutes)
```bash
bash netlify-deploy.sh
```

---

## ✨ FINAL CHECKLIST

- ✅ Project builds successfully
- ✅ All files committed to git
- ✅ Pushed to GitHub (if using web UI)
- ✅ Connected to Netlify
- ✅ Build settings correct
- ✅ Deployment succeeded
- ✅ Website accessible
- ✅ Photos loading
- ✅ Confetti working
- ✅ Team members showing

---

## 🎉 DEPLOYMENT COMPLETE!

Your website is live and ready to be shared with everyone!

### Share Your Site

```
✨ Check out the farewell website!
🔗 https://your-site-name.netlify.app

All the best on your new role, Executive! 🚀
```

---

## 📚 NEXT STEPS

1. **Share the URL** with team members
2. **Monitor analytics** in Netlify dashboard
3. **Make updates** by pushing to GitHub
4. **Add custom domain** if desired
5. **Celebrate!** 🎊

---

**Congratulations! Your website is live! 🚀**

For help: Check Netlify docs at https://docs.netlify.com

---

*Developed with ❤️ by Gautham Manuru Prabhu*  
*Decent at tech :P*
