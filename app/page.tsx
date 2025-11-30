'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FarewellWebsite() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const confettiRef = useRef<HTMLDivElement>(null);

  // Confetti effect function
  const createConfetti = () => {
    if (!confettiRef.current) return;
    
    const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#FFB6C1', '#DDA0DD', '#F0E68C', '#FF6347'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      const size = Math.random() * 8 + 4;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 0.5;
      
      confetti.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: -10px;
        opacity: 1;
        animation: fall-confetti ${duration}s linear ${delay}s forwards;
        z-index: 50;
      `;
      
      confettiRef.current?.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    // Trigger confetti on load
    setTimeout(() => createConfetti(), 500);
    // Trigger more confetti every 4 seconds
    const confettiInterval = setInterval(() => createConfetti(), 4000);
    
    // Map the actual photos from the public folder
    const photoList = [
      '/1.jpeg',
      '/2.jpeg',
      '/3.jpeg',
      '/4.jpeg',
      '/5.jpeg',
      '/6.jpeg',
      '/7.jpeg',
      '/8.jpeg',
      '/9.jpeg',
      '/10.jpeg',
      '/11.jpeg',
      '/12.jpeg',
      '/13.jpeg',
      '/14.jpeg',
      '/15.jpeg'
    ];
    setPhotos(photoList);
    
    // Auto-rotate photos every 5 seconds
    const photoInterval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photoList.length);
    }, 5000);
    
    return () => {
      clearInterval(confettiInterval);
      clearInterval(photoInterval);
    };
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const teamMembers = [
    "Anushri Anand",
    "Sakshi Mandanna",
    "Aiswarya Anand",
    "Advaith Vijaya Mohan",
    "Shivani Shantagiri",
    "Om Gadh",
    "Pranav Athrangadan",
    "Kapilesh Umakanth",
    "Gautham Manuru Prabhu"
  ];

  if (photos.length === 0) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Confetti container */}
      <div ref={confettiRef} className="confetti-container"></div>
      
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header Section */}
      <div className={`relative z-10 text-center pt-20 pb-12 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-6xl md:text-7xl font-light mb-4 text-slate-800 tracking-tight">
          Farewell
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-3">
          Miss Aishvarya Krishnakumar
        </h2>
        <p className="text-xl md:text-2xl text-indigo-600 font-semibold">
          All the Best on Your New Role, Executive! 🚀
        </p>
      </div>

      {/* Photo Gallery Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="relative h-[450px] md:h-[600px]">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentPhoto ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-contain bg-slate-50"
                />
              </div>
            ))}
            
            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110 backdrop-blur-sm"
              aria-label="Previous photo"
            >
              <ChevronLeft className="text-slate-700" size={28} />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110 backdrop-blur-sm"
              aria-label="Next photo"
            >
              <ChevronRight className="text-slate-700" size={28} />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium">
              {currentPhoto + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 p-5 overflow-x-auto bg-gradient-to-r from-slate-50 to-indigo-50/30 scrollbar-hide">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentPhoto 
                    ? 'border-indigo-500 scale-105 shadow-lg' 
                    : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10 md:p-14 border border-white/20">
          <h3 className="text-3xl md:text-4xl font-light text-slate-800 mb-10 text-center">
            With Best Wishes From
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {teamMembers.map((name, index) => (
              <div
                key={index}
                className="text-center py-4 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-slate-700 font-medium hover:shadow-md transition-all"
              >
                {name}
              </div>
            ))}
          </div>

          {/* Developer Credit */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm mb-2">Developed by</p>
            <p className="text-slate-800 font-medium text-lg mb-4">Gautham Manuru Prabhu</p>
            <p className="text-indigo-600 font-bold text-base">Decent at tech :P</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall-confetti {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
