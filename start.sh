#!/bin/bash

# Aishvarya Farewell - Quick Start Script
# This script sets up and runs the project

echo "🎉 Aishvarya Farewell Project - Quick Start"
echo "=========================================="
echo ""

# Navigate to project directory
cd /Users/gautham/gauthamsexpt/aishvarya_farewell

echo "📁 Project location: $(pwd)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting development server..."
echo ""
echo "────────────────────────────────────────"
echo "Local:        http://localhost:3000"
echo "────────────────────────────────────────"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
