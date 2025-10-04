import React, { useEffect, useState } from 'react';

export default function FloatingRobot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / window.innerWidth;
      const deltaY = (e.clientY - centerY) / window.innerHeight;
      
      setPosition({
        x: deltaX * 30,
        y: deltaY * 30,
      });
      setRotation(deltaX * 10);
    };

    // Floating animation
    const floatAnimation = () => {
      const time = Date.now() * 0.002;
      setPosition(prev => ({
        x: prev.x + Math.sin(time) * 0.5,
        y: prev.y + Math.cos(time) * 0.8,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    const intervalId = setInterval(floatAnimation, 50);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="absolute top-1/2 right-10 w-32 h-32 opacity-20 hover:opacity-40 transition-all duration-500 pointer-events-none z-0"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Robot Body */}
        <rect x="70" y="80" width="60" height="50" rx="8" fill="url(#robotGradient)" filter="url(#glow)">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1;1.05;1" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Robot Head */}
        <rect x="80" y="50" width="40" height="35" rx="6" fill="url(#robotGradient)" filter="url(#glow)">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 100 67.5;5 100 67.5;0 100 67.5;-5 100 67.5;0 100 67.5" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Eyes */}
        <circle cx="90" cy="65" r="5" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="65" r="5" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
        </circle>

        {/* Mouth */}
        <rect x="95" y="75" width="10" height="3" rx="1" fill="#00f5ff">
          <animate attributeName="width" values="10;15;10" dur="3s" repeatCount="indefinite" />
        </rect>

        {/* Arms */}
        <rect x="55" y="90" width="15" height="8" rx="4" fill="url(#robotGradient)" opacity="0.8">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 62.5 94;15 62.5 94;0 62.5 94;-15 62.5 94;0 62.5 94" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </rect>
        <rect x="130" y="90" width="15" height="8" rx="4" fill="url(#robotGradient)" opacity="0.8">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 137.5 94;-15 137.5 94;0 137.5 94;15 137.5 94;0 137.5 94" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Legs */}
        <rect x="85" y="130" width="8" height="20" rx="4" fill="url(#robotGradient)" opacity="0.8" />
        <rect x="107" y="130" width="8" height="20" rx="4" fill="url(#robotGradient)" opacity="0.8" />

        {/* Antenna */}
        <line x1="100" y1="50" x2="100" y2="40" stroke="url(#robotGradient)" strokeWidth="2" />
        <circle cx="100" cy="38" r="3" fill="#00f5ff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
        </circle>

        {/* Floating particles */}
        <circle cx="60" cy="70" r="2" fill="#00f5ff" opacity="0.6">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;10,-10;0,0" 
            dur="4s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="110" r="1.5" fill="#8b5cf6" opacity="0.8">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;-8,-12;0,0" 
            dur="3.5s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
