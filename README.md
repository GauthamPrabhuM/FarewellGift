# Aishvarya Farewell Website

A beautiful farewell gift website for Miss Aishvarya Krishnakumar featuring a photo gallery and team wishes.

## 📋 Features

- Responsive photo gallery with smooth transitions
- Beautiful gradient background with animated blobs
- Team member showcase
- Mobile-friendly design
- Built with Next.js, React, and Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

#### 1. Navigate to the project directory
```bash
cd /Users/gautham/gauthamsexpt/aishvarya_farewell
```

#### 2. Create and activate a virtual environment (Python venv - optional)
```bash
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows
```

#### 3. Install Node.js dependencies
```bash
npm install
```

#### 4. Run the development server
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
aishvarya_farewell/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main farewell page
│   └── globals.css         # Global styles
├── public/                 # Public assets
├── photos/                 # Photo gallery images
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   ├── 4.jpeg
│   ├── 5.jpeg
│   └── 6.jpeg
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Adding/Modifying Photos
1. Add your photos to the `photos/` directory
2. Update the photo list in `app/page.tsx`:
   ```typescript
   const photoList = [
     './photos/1.jpeg',
     './photos/2.jpeg',
     // Add more photos here
   ];
   ```

### Updating Team Members
Edit the `teamMembers` array in `app/page.tsx`:
```typescript
const teamMembers = [
  "Name 1",
  "Name 2",
  // Add more names here
];
```

### Styling Changes
- Colors: Modify `tailwind.config.js`
- Fonts: Update `app/globals.css`
- Animations: Edit the animation definitions in `tailwind.config.js`

## 📦 Dependencies

- **Next.js**: React framework
- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## 🔧 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linter

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Notes

- All photos should be in JPEG or PNG format
- Recommended photo dimensions: 1200x900px or wider
- The site is fully responsive and works on mobile devices

## 👨‍💻 Developer

Developed by **Gautham Manuru Prabhu**

## 📄 License

This project is a personal gift and is not licensed for commercial use.

---

**Created with ❤️ for Miss Aishvarya Krishnakumar**
# FarewellGift
