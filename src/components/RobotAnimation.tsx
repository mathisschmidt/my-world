import React, { useEffect, useState } from 'react';

export default function RobotAnimation() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed top-20 left-10 w-40 h-40 opacity-15 hover:opacity-30 transition-all duration-500 pointer-events-none z-0"
      style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="resumeRobotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="resumeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Robot Body */}
        <rect x="60" y="70" width="80" height="70" rx="12" fill="url(#resumeRobotGradient)" filter="url(#resumeGlow)">
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1;1.02;1" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Robot Head */}
        <rect x="70" y="35" width="60" height="45" rx="8" fill="url(#resumeRobotGradient)" filter="url(#resumeGlow)">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 100 57.5;2 100 57.5;0 100 57.5;-2 100 57.5;0 100 57.5" 
            dur="6s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Eyes */}
        <circle cx="85" cy="55" r="6" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="55" r="6" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.2;1" dur="3.2s" repeatCount="indefinite" />
        </circle>

        {/* Mouth */}
        <rect x="90" y="68" width="20" height="4" rx="2" fill="#00f5ff">
          <animate attributeName="width" values="20;25;20" dur="4s" repeatCount="indefinite" />
        </rect>

        {/* Arms */}
        <rect x="40" y="85" width="20" height="12" rx="6" fill="url(#resumeRobotGradient)" opacity="0.9">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 50 91;10 50 91;0 50 91;-10 50 91;0 50 91" 
            dur="5s" 
            repeatCount="indefinite"
          />
        </rect>
        <rect x="140" y="85" width="20" height="12" rx="6" fill="url(#resumeRobotGradient)" opacity="0.9">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 150 91;-10 150 91;0 150 91;10 150 91;0 150 91" 
            dur="5s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Legs */}
        <rect x="80" y="140" width="12" height="25" rx="6" fill="url(#resumeRobotGradient)" opacity="0.8" />
        <rect x="108" y="140" width="12" height="25" rx="6" fill="url(#resumeRobotGradient)" opacity="0.8" />

        {/* Antenna */}
        <line x1="100" y1="35" x2="100" y2="25" stroke="url(#resumeRobotGradient)" strokeWidth="3" />
        <circle cx="100" cy="22" r="4" fill="#00f5ff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Chest Panel */}
        <rect x="85" y="85" width="30" height="20" rx="4" fill="rgba(0, 245, 255, 0.2)" stroke="#00f5ff" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </rect>

        {/* Data particles */}
        <circle cx="50" cy="60" r="2" fill="#00f5ff" opacity="0.7">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;15,-20;0,0" 
            dur="5s" 
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="150" cy="110" r="1.5" fill="#8b5cf6" opacity="0.8">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;-12,-15;0,0" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="30" cy="120" r="1" fill="#06b6d4" opacity="0.6">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;20,-25;0,0" 
            dur="6s" 
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
