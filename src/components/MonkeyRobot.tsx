import React from 'react';

export default function MonkeyRobot() {
  return (
    <div className="flex justify-center mb-8">
      <svg 
        width="100" 
        height="100" 
        viewBox="0 0 200 200" 
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="monkeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <filter id="monkeyGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Body */}
        <ellipse 
          cx="100" 
          cy="120" 
          rx="35" 
          ry="45" 
          fill="url(#monkeyGradient)" 
          filter="url(#monkeyGlow)"
        >
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1;1.05;1" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Head */}
        <circle 
          cx="100" 
          cy="70" 
          r="30" 
          fill="url(#monkeyGradient)" 
          filter="url(#monkeyGlow)"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 100 70;5 100 70;0 100 70;-5 100 70;0 100 70" 
            dur="6s" 
            repeatCount="indefinite"
          />
        </circle>

        {/* Ears */}
        <ellipse cx="80" cy="55" rx="8" ry="12" fill="url(#monkeyGradient)" opacity="0.9" />
        <ellipse cx="120" cy="55" rx="8" ry="12" fill="url(#monkeyGradient)" opacity="0.9" />

        {/* Eyes */}
        <circle cx="90" cy="65" r="6" fill="#fff" />
        <circle cx="110" cy="65" r="6" fill="#fff" />
        <circle cx="92" cy="65" r="4" fill="#000">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="108" cy="65" r="4" fill="#000">
          <animate attributeName="opacity" values="1;0.3;1" dur="3.2s" repeatCount="indefinite" />
        </circle>

        {/* Nose */}
        <ellipse cx="100" cy="75" rx="3" ry="2" fill="#000" />

        {/* Mouth */}
        <path 
          d="M 90 82 Q 100 88 110 82" 
          stroke="#000" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        >
          <animate attributeName="d" values="M 90 82 Q 100 88 110 82;M 90 82 Q 100 85 110 82;M 90 82 Q 100 88 110 82" dur="4s" repeatCount="indefinite" />
        </path>

        {/* Arms - animated to look like climbing */}
        <ellipse 
          cx="70" 
          cy="110" 
          rx="8" 
          ry="25" 
          fill="url(#monkeyGradient)" 
          opacity="0.9"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 70 110;20 70 110;0 70 110;-15 70 110;0 70 110" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse 
          cx="130" 
          cy="110" 
          rx="8" 
          ry="25" 
          fill="url(#monkeyGradient)" 
          opacity="0.9"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 130 110;-20 130 110;0 130 110;15 130 110;0 130 110" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Legs */}
        <ellipse cx="85" cy="160" rx="8" ry="20" fill="url(#monkeyGradient)" opacity="0.9" />
        <ellipse cx="115" cy="160" rx="8" ry="20" fill="url(#monkeyGradient)" opacity="0.9" />

        {/* Tail - curved and animated */}
        <path 
          d="M 135 140 Q 160 120 170 100 Q 175 90 170 80" 
          stroke="url(#monkeyGradient)" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 135 140;10 135 140;0 135 140;-10 135 140;0 135 140" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </path>

        {/* Robot elements */}
        <rect x="95" y="115" width="10" height="6" rx="2" fill="#00f5ff" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </rect>
        
        {/* Antenna */}
        <line x1="100" y1="40" x2="100" y2="30" stroke="#00f5ff" strokeWidth="2" />
        <circle cx="100" cy="28" r="3" fill="#00f5ff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Climbing effect particles */}
        <circle cx="50" cy="80" r="1.5" fill="#f59e0b" opacity="0.7">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;20,-30;0,0" 
            dur="5s" 
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="150" cy="160" r="1" fill="#ef4444" opacity="0.8">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;-15,-25;0,0" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}