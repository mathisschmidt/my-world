import React, { useEffect, useState } from 'react';

export const FloatingRobot: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed bottom-8 right-8 w-24 h-24 opacity-30 hover:opacity-70 transition-opacity pointer-events-none z-10"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="floatingRobotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="40" fill="url(#floatingRobotGradient)" opacity="0.3" />

        <rect x="80" y="80" width="40" height="30" rx="5" fill="url(#floatingRobotGradient)" />

        <circle cx="90" cy="92" r="4" fill="white">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="92" r="4" fill="white">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>

        <line x1="90" y1="102" x2="110" y2="102" stroke="white" strokeWidth="2" strokeLinecap="round" />

        <rect x="75" y="110" width="10" height="20" rx="3" fill="url(#floatingRobotGradient)" opacity="0.8" />
        <rect x="115" y="110" width="10" height="20" rx="3" fill="url(#floatingRobotGradient)" opacity="0.8" />
      </svg>
    </div>
  );
};
