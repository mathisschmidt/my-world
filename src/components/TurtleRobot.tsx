import React, { useState } from 'react';

export default function TurtleRobot() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Dispatch custom event to show modal
    const event = new CustomEvent('showAboutModal');
    window.dispatchEvent(event);
  };

  return (
    <div 
      className="relative cursor-pointer transform hover:scale-110 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 200 200" 
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="turtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="turtleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Turtle Shell */}
        <ellipse 
          cx="100" 
          cy="110" 
          rx="60" 
          ry="45" 
          fill="url(#turtleGradient)" 
          filter="url(#turtleGlow)"
          className={isHovered ? 'animate-pulse' : ''}
        />

        {/* Shell Pattern */}
        <ellipse cx="100" cy="110" rx="45" ry="35" fill="none" stroke="#00f5ff" strokeWidth="2" opacity="0.7" />
        <ellipse cx="100" cy="110" rx="30" ry="22" fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
        
        {/* Shell hexagonal pattern */}
        <polygon 
          points="85,95 115,95 125,110 115,125 85,125 75,110" 
          fill="none" 
          stroke="#00f5ff" 
          strokeWidth="1" 
          opacity="0.6"
        />

        {/* Head */}
        <ellipse 
          cx="100" 
          cy="70" 
          rx="25" 
          ry="20" 
          fill="url(#turtleGradient)" 
          filter="url(#turtleGlow)"
        >
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;0,-3;0,0" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Eyes */}
        <circle cx="90" cy="65" r="4" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="65" r="4" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="4.2s" repeatCount="indefinite" />
        </circle>

        {/* Mouth */}
        <path 
          d="M 95 75 Q 100 80 105 75" 
          stroke="#00f5ff" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />

        {/* Legs */}
        <ellipse cx="65" cy="135" rx="12" ry="8" fill="url(#turtleGradient)" opacity="0.8" />
        <ellipse cx="135" cy="135" rx="12" ry="8" fill="url(#turtleGradient)" opacity="0.8" />
        <ellipse cx="75" cy="85" rx="10" ry="6" fill="url(#turtleGradient)" opacity="0.8" />
        <ellipse cx="125" cy="85" rx="10" ry="6" fill="url(#turtleGradient)" opacity="0.8" />

        {/* Antenna */}
        <line x1="100" y1="50" x2="100" y2="40" stroke="#00f5ff" strokeWidth="2" />
        <circle cx="100" cy="38" r="3" fill="#00f5ff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Floating sparkles when hovered */}
        {isHovered && (
          <>
            <circle cx="60" cy="60" r="2" fill="#00f5ff" opacity="0.8">
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                values="0,0;10,-10;0,0" 
                dur="2s" 
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="140" cy="120" r="1.5" fill="#10b981" opacity="0.9">
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                values="0,0;-8,-12;0,0" 
                dur="2.5s" 
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </svg>

      {/* Click hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 opacity-70">
        Click me!
      </div>
    </div>
  );
}