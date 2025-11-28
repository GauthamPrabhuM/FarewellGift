#!/bin/bash

# =============================================================
# 🚀 AISHVARYA FAREWELL - NETLIFY DEPLOYMENT SCRIPT
# =============================================================
# This script helps you deploy to Netlify easily
# Run: bash netlify-deploy.sh
# =============================================================

echo ""
echo "╔═══════════════════════════════════════════════════════╗"
echo "║  🎉 AISHVARYA FAREWELL - NETLIFY DEPLOYMENT          ║"
echo "║  All the Best on Your New Executive Role!            ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""

# Get current directory
PROJECT_DIR="/Users/gautham/gauthamsexpt/aishvarya_farewell"
cd "$PROJECT_DIR"

echo "📁 Project Directory: $PROJECT_DIR"
echo ""

# Step 1: Check if node_modules exists
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "   Installing packages..."
    npm install
    echo "   ✅ Dependencies installed"
else
    echo "   ✅ Dependencies already installed"
fi
echo ""

# Step 2: Build the project
echo "🏗️  Building the project..."
npm run build
BUILD_STATUS=$?

if [ $BUILD_STATUS -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi
echo "   ✅ Build successful"
echo ""

# Step 3: Check if git is initialized
echo "📝 Checking Git repository..."
if [ ! -d ".git" ]; then
    echo "   Initializing Git repository..."
    git init
    git add .
    git commit -m "Aishvarya farewell website - ready for Netlify"
    echo "   ✅ Git initialized with initial commit"
else
    echo "   ✅ Git repository exists"
    # Check if there are uncommitted changes
    if [ -n "$(git status --porcelain)" ]; then
        echo "   📌 Found uncommitted changes. Committing..."
        git add .
        git commit -m "Update: Latest changes"
        echo "   ✅ Changes committed"
    fi
fi
echo ""

# Step 4: Check Netlify CLI
echo "🔧 Checking Netlify CLI..."
if ! command -v netlify &> /dev/null; then
    echo "   Installing Netlify CLI..."
    npm install -g netlify-cli
    echo "   ✅ Netlify CLI installed"
else
    echo "   ✅ Netlify CLI found"
fi
echo ""

# Step 5: Deploy
echo "🚀 Starting deployment..."
echo "   This will open a browser for authentication if needed"
echo ""
netlify deploy --prod

echo ""
echo "╔═══════════════════════════════════════════════════════╗"
echo "║  ✅ DEPLOYMENT COMPLETE!                             ║"
echo "║  Your site is now live on Netlify!                  ║"
echo "║  Check the URL above for your live website           ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo ""
