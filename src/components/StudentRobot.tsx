import React from 'react';

export default function StudentRobot() {
  return (
    <div className="flex justify-center mb-8">
      <svg 
        width="100" 
        height="120" 
        viewBox="0 0 200 240" 
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="studentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="studentGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Graduation Cap */}
        <ellipse 
          cx="100" 
          cy="45" 
          rx="40" 
          ry="8" 
          fill="#1f2937" 
          filter="url(#studentGlow)"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 100 45;2 100 45;0 100 45;-2 100 45;0 100 45" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </ellipse>
        
        {/* Cap top */}
        <rect x="90" y="35" width="20" height="15" rx="3" fill="#1f2937" />
        
        {/* Tassel */}
        <line x1="120" y1="40" x2="135" y2="30" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="135" cy="28" r="3" fill="#fbbf24">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;3,-2;0,0;-2,1;0,0" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </circle>

        {/* Head */}
        <circle 
          cx="100" 
          cy="70" 
          r="25" 
          fill="url(#studentGradient)" 
          filter="url(#studentGlow)"
        />

        {/* Glasses */}
        <circle cx="90" cy="65" r="8" fill="none" stroke="#e5e7eb" strokeWidth="2" />
        <circle cx="110" cy="65" r="8" fill="none" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="98" y1="65" x2="102" y2="65" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="82" y1="62" x2="78" y2="60" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="118" y1="62" x2="122" y2="60" stroke="#e5e7eb" strokeWidth="2" />

        {/* Eyes behind glasses */}
        <circle cx="90" cy="65" r="4" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="65" r="4" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.3;1" dur="5.2s" repeatCount="indefinite" />
        </circle>

        {/* Mouth - thinking expression */}
        <path 
          d="M 95 78 Q 100 75 105 78" 
          stroke="#00f5ff" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />

        {/* Body */}
        <rect 
          x="75" 
          y="95" 
          width="50" 
          height="60" 
          rx="8" 
          fill="url(#studentGradient)" 
          filter="url(#studentGlow)"
        >
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1;1.02;1" 
            dur="6s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* School uniform tie */}
        <rect x="95" y="105" width="10" height="30" rx="1" fill="#dc2626" />
        <rect x="97" y="108" width="6" height="3" rx="1" fill="#fbbf24" />
        <rect x="97" y="115" width="6" height="3" rx="1" fill="#fbbf24" />
        <rect x="97" y="122" width="6" height="3" rx="1" fill="#fbbf24" />

        {/* Arms */}
        <rect 
          x="60" 
          y="105" 
          width="15" 
          height="35" 
          rx="7" 
          fill="url(#studentGradient)" 
          opacity="0.9"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 67.5 122.5;10 67.5 122.5;0 67.5 122.5;-5 67.5 122.5;0 67.5 122.5" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </rect>
        <rect 
          x="125" 
          y="105" 
          width="15" 
          height="35" 
          rx="7" 
          fill="url(#studentGradient)" 
          opacity="0.9"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 132.5 122.5;-10 132.5 122.5;0 132.5 122.5;5 132.5 122.5;0 132.5 122.5" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Book in hand */}
        <rect 
          x="45" 
          y="120" 
          width="12" 
          height="8" 
          rx="1" 
          fill="#fbbf24" 
          opacity="0.9"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 51 124;10 51 124;0 51 124;-5 51 124;0 51 124" 
            dur="4s" 
            repeatCount="indefinite"
          />
        </rect>

        {/* Legs */}
        <rect x="85" y="155" width="12" height="30" rx="6" fill="url(#studentGradient)" opacity="0.9" />
        <rect x="103" y="155" width="12" height="30" rx="6" fill="url(#studentGradient)" opacity="0.9" />

        {/* Shoes */}
        <ellipse cx="91" cy="190" rx="8" ry="4" fill="#1f2937" />
        <ellipse cx="109" cy="190" rx="8" ry="4" fill="#1f2937" />

        {/* Antenna */}
        <line x1="100" y1="45" x2="100" y2="35" stroke="#00f5ff" strokeWidth="2" />
        <circle cx="100" cy="33" r="2" fill="#00f5ff">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Thought bubbles - studying effect */}
        <circle cx="130" cy="50" r="2" fill="#8b5cf6" opacity="0.6">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;10,-15;0,0" 
            dur="3s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="35" r="3" fill="#8b5cf6" opacity="0.7">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;5,-10;0,0" 
            dur="3.5s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="20" r="4" fill="#8b5cf6" opacity="0.8">
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            values="0,0;0,-8;0,0" 
            dur="4s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Mathematical symbols in thought bubble */}
        <text x="145" y="25" fontSize="8" fill="#00f5ff" opacity="0.8">∑</text>
        <text x="138" y="38" fontSize="6" fill="#00f5ff" opacity="0.7">π</text>
        <text x="132" y="52" fontSize="5" fill="#00f5ff" opacity="0.6">∞</text>
      </svg>
    </div>
  );
}