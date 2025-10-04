import React from 'react';

export const RobotAnimation: React.FC = () => {
  return (
    <div className="relative w-32 h-32 animate-float">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <rect x="60" y="40" width="80" height="60" rx="10" fill="url(#robotGradient)" />

        <circle cx="85" cy="60" r="8" fill="white" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="60" r="8" fill="white" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
        </circle>

        <path d="M 85 75 Q 100 85 115 75" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />

        <rect x="50" y="30" width="10" height="30" rx="5" fill="url(#robotGradient)" />
        <rect x="140" y="30" width="10" height="30" rx="5" fill="url(#robotGradient)" />

        <circle cx="55" cy="25" r="8" fill="#06b6d4">
          <animate attributeName="cy" values="25;20;25" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="25" r="8" fill="#06b6d4">
          <animate attributeName="cy" values="25;20;25" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>

        <rect x="70" y="100" width="20" height="40" rx="5" fill="url(#robotGradient)" opacity="0.8" />
        <rect x="110" y="100" width="20" height="40" rx="5" fill="url(#robotGradient)" opacity="0.8" />

        <circle cx="80" cy="145" r="6" fill="#06b6d4" />
        <circle cx="120" cy="145" r="6" fill="#06b6d4" />
      </svg>
    </div>
  );
};
