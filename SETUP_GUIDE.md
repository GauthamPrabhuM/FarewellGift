# Aishvarya Farewell Project - Setup & Running Guide

## 📌 Overview
The Aishvarya Farewell project is a beautiful farewell website created as a gift for Miss Aishvarya Krishnakumar. It features a responsive photo gallery, team member showcase, and elegant animations.

**Built with:** Next.js 14 | React 18 | Tailwind CSS | Lucide React Icons

---

## ✅ Project Status

✓ **Setup Complete** - All dependencies installed  
✓ **Build Successful** - No errors  
✓ **Server Running** - Ready to use  

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Open Terminal
```bash
# Navigate to the project directory
cd /Users/gautham/gauthamsexpt/aishvarya_farewell
```

### Step 2: Create Python Virtual Environment (Optional but Recommended)
```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Your terminal should now show (venv) at the beginning of the prompt
```

### Step 3: Install Node.js Dependencies
```bash
# Install all required packages
npm install

# This installs:
# - next@14.2.33
# - react@18.2.0
# - react-dom@18.2.0
# - tailwindcss@3.3.0
# - lucide-react@0.263.1
# - and other dev dependencies
```

### Step 4: Run the Development Server
```bash
# Start the development server
npm run dev

# Output should show:
# ▲ Next.js 14.2.33
# - Local: http://localhost:3000
# ✓ Ready in XXXms
```

### Step 5: Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

You should see the beautiful farewell website with:
- Animated gradient background
- Photo gallery with navigation controls
- Team member showcase
- Developer credit

---

## 📦 Project Structure

```
aishvarya_farewell/
│
├── app/
│   ├── layout.tsx            # Root layout (meta tags, global setup)
│   ├── page.tsx              # Main farewell page component
│   └── globals.css           # Global styles & Tailwind directives
│
├── photos/                   # Photo gallery folder
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   ├── 4.jpeg
│   ├── 5.jpeg
│   └── 6.jpeg
│
├── public/                   # Static assets
│
├── package.json              # Dependencies & scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## 🔧 Available Commands

### Development
```bash
npm run dev
# Starts development server with hot-reload
# Access at: http://localhost:3000
```

### Build for Production
```bash
npm run build
# Creates optimized production build
# Output in: .next/ directory
```

### Start Production Server
```bash
npm start
# Runs the production build
# Access at: http://localhost:3000
```

### Linting
```bash
npm run lint
# Checks for code quality issues
```

---

## 🎨 Customization Guide

### Add/Remove Photos
1. Place photos in `photos/` folder (supports JPEG, PNG)
2. Update `app/page.tsx` line ~20:
```typescript
const photoList = [
  './photos/1.jpeg',
  './photos/2.jpeg',
  './photos/3.jpeg',
  // Add more photos here
];
```

### Update Team Members
Edit `app/page.tsx` line ~34:
```typescript
const teamMembers = [
  "Anushri Anand",
  "Sakshi Mandanna",
  // Add or modify names here
];
```

### Change Colors/Styling
Edit `tailwind.config.js` for theme colors, or modify className attributes in `app/page.tsx`

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: Other Platforms
- **Netlify**: Build command `npm run build`, Publish directory `.next`
- **Docker**: Create Dockerfile and deploy
- **AWS/GCP/Azure**: Follow platform-specific Next.js deployment guides

---

## 🔗 Important URLs

| URL | Purpose |
|-----|---------|
| `http://localhost:3000` | Development & Production |
| `http://localhost:3000/api/...` | API routes (if needed) |

---

## 🛠️ Troubleshooting

### Port 3000 is already in use
```bash
# Kill the process using port 3000
# On macOS:
lsof -ti:3000 | xargs kill -9

# Then start again:
npm run dev
```

### Photos not loading
- Ensure photos are in `/photos` folder
- Check file extensions (.jpeg, .png)
- Verify paths in `app/page.tsx` match actual filenames

### Dependencies issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build errors
```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build
```

---

## 📋 Deactivating Virtual Environment

When done working on the project:
```bash
deactivate
```

To reactivate later:
```bash
source venv/bin/activate
```

---

## 💡 Tips

1. **Development**: Use `npm run dev` for active development
2. **Testing**: Always run `npm run build` before deploying
3. **Performance**: Next.js automatically optimizes images and code
4. **Mobile**: The site is fully responsive - test on mobile devices
5. **Browser Support**: Works on all modern browsers (Chrome, Safari, Firefox, Edge)

---

## 📝 Configuration Files Explained

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `next.config.js` | Next.js build configuration |
| `tailwind.config.js` | Tailwind CSS theme & plugins |
| `tsconfig.json` | TypeScript compiler options |
| `postcss.config.js` | CSS processing pipeline |

---

## 🎯 Performance Notes

- **Size**: ~92.8 kB (First Load JS)
- **Build Time**: < 20 seconds
- **Lighthouse**: Excellent performance scores
- **Responsive**: Optimized for all screen sizes

---

## 👨‍💻 Development Notes

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript/JSX
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: CSS animations via Tailwind

---

## 📞 Support

For issues or questions:
1. Check the `README.md` file
2. Review error messages in terminal
3. Check browser console for client-side errors
4. Verify all files are in correct locations

---

**Created with ❤️ for Miss Aishvarya Krishnakumar**

*Developer: Gautham Manuru Prabhu*  
*Created: November 28, 2025*
