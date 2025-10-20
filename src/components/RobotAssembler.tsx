import React, { useEffect, useState } from 'react';
import { skills } from '../data/profile';

interface RobotAssemblerProps {
  activeSkills: typeof skills;
}

export default function RobotAssembler({ activeSkills }: RobotAssemblerProps) {
  const [assemblyProgress, setAssemblyProgress] = useState(0);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssemblyProgress(prev => {
        if (prev >= 100) {
          setCurrentSkill(prevSkill => (prevSkill + 1) % activeSkills.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeSkills.length]);

  const skill = activeSkills[currentSkill];
  const technicalSkills = activeSkills.filter(s => s.category === 'technical');
  const softSkills = activeSkills.filter(s => s.category === 'soft');

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Assembler Robot */}
      <div className="relative">
        <svg 
          width="200" 
          height="200" 
          viewBox="0 0 400 400" 
          className="drop-shadow-xl"
        >
          <defs>
            <linearGradient id="assemblerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="newRobotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id="assemblerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Assembly Line Base */}
          <rect 
            x="50" 
            y="300" 
            width="300" 
            height="20" 
            rx="10" 
            fill="#374151" 
            opacity="0.8"
          />

          {/* Conveyor Belt Pattern */}
          <rect x="60" y="305" width="10" height="10" fill="#4b5563" opacity="0.6">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0;270,0;0,0" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </rect>
          <rect x="90" y="305" width="10" height="10" fill="#4b5563" opacity="0.6">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0;240,0;0,0" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </rect>

          {/* Main Assembler Robot Body */}
          <rect 
            x="150" 
            y="180" 
            width="100" 
            height="120" 
            rx="15" 
            fill="url(#assemblerGradient)" 
            filter="url(#assemblerGlow)"
          >
            <animateTransform 
              attributeName="transform" 
              type="scale" 
              values="1;1.02;1" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </rect>

          {/* Head */}
          <rect 
            x="170" 
            y="120" 
            width="60" 
            height="60" 
            rx="10" 
            fill="url(#assemblerGradient)" 
            filter="url(#assemblerGlow)"
          />

          {/* Eyes - showing concentration */}
          <circle cx="185" cy="145" r="6" fill="#00f5ff">
            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="215" cy="145" r="6" fill="#00f5ff">
            <animate attributeName="opacity" values="1;0.5;1" dur="2.1s" repeatCount="indefinite" />
          </circle>

          {/* Digital Display on chest showing current skill */}
          <rect x="160" y="200" width="80" height="30" rx="5" fill="#1f2937" stroke="#00f5ff" strokeWidth="1" />
          <text x="200" y="220" fontSize="10" fill="#00f5ff" textAnchor="middle" className="font-mono">
            {skill?.name.slice(0, 12)}...
          </text>

          {/* Progress bar on display */}
          <rect x="165" y="225" width="70" height="3" rx="1.5" fill="#374151" />
          <rect 
            x="165" 
            y="225" 
            width={`${(assemblyProgress / 100) * 70}`} 
            height="3" 
            rx="1.5" 
            fill="#00f5ff"
          />

          {/* Robotic Arms - animated to show assembly */}
          <g>
            {/* Left Arm */}
            <rect 
              x="120" 
              y="190" 
              width="30" 
              height="15" 
              rx="7" 
              fill="url(#assemblerGradient)" 
              opacity="0.9"
            >
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                values="0 135 197.5;-15 135 197.5;0 135 197.5;10 135 197.5;0 135 197.5" 
                dur="4s" 
                repeatCount="indefinite"
              />
            </rect>
            
            {/* Right Arm */}
            <rect 
              x="250" 
              y="190" 
              width="30" 
              height="15" 
              rx="7" 
              fill="url(#assemblerGradient)" 
              opacity="0.9"
            >
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                values="0 265 197.5;15 265 197.5;0 265 197.5;-10 265 197.5;0 265 197.5" 
                dur="4s" 
                repeatCount="indefinite"
              />
            </rect>
          </g>

          {/* Tools at end of arms */}
          <circle cx="115" cy="197" r="5" fill="#fbbf24">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 135 197.5;-15 135 197.5;0 135 197.5;10 135 197.5;0 135 197.5" 
              dur="4s" 
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="285" cy="197" r="5" fill="#ef4444">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              values="0 265 197.5;15 265 197.5;0 265 197.5;-10 265 197.5;0 265 197.5" 
              dur="4s" 
              repeatCount="indefinite"
            />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* New Robot Being Built */}
          <g transform="translate(280, 220)" opacity={assemblyProgress / 100}>
            {/* Body appears first */}
            {assemblyProgress > 20 && (
              <rect 
                x="0" 
                y="30" 
                width="40" 
                height="50" 
                rx="8" 
                fill="url(#newRobotGradient)" 
                opacity={Math.min(1, (assemblyProgress - 20) / 30)}
              />
            )}
            
            {/* Head appears */}
            {assemblyProgress > 50 && (
              <rect 
                x="5" 
                y="0" 
                width="30" 
                height="30" 
                rx="6" 
                fill="url(#newRobotGradient)" 
                opacity={Math.min(1, (assemblyProgress - 50) / 30)}
              />
            )}
            
            {/* Eyes appear */}
            {assemblyProgress > 70 && (
              <>
                <circle cx="15" cy="15" r="3" fill="#00f5ff" opacity={Math.min(1, (assemblyProgress - 70) / 20)} />
                <circle cx="25" cy="15" r="3" fill="#00f5ff" opacity={Math.min(1, (assemblyProgress - 70) / 20)} />
              </>
            )}
            
            {/* Arms appear last */}
            {assemblyProgress > 85 && (
              <>
                <rect x="-8" y="40" width="15" height="8" rx="4" fill="url(#newRobotGradient)" opacity={Math.min(1, (assemblyProgress - 85) / 15)} />
                <rect x="33" y="40" width="15" height="8" rx="4" fill="url(#newRobotGradient)" opacity={Math.min(1, (assemblyProgress - 85) / 15)} />
              </>
            )}
          </g>

          {/* Skill Parameters Floating Around */}
          {technicalSkills.slice(0, 3).map((skill, index) => (
            <g key={`tech-${index}`}>
              <circle 
                cx={80 + index * 50} 
                cy={50} 
                r="3" 
                fill="#00f5ff" 
                opacity="0.7"
              >
                <animateTransform 
                  attributeName="transform" 
                  type="translate" 
                  values="0,0;10,-10;0,0" 
                  dur={`${3 + index * 0.5}s`} 
                  repeatCount="indefinite"
                />
              </circle>
              <text 
                x={80 + index * 50} 
                y={45} 
                fontSize="8" 
                fill="#00f5ff" 
                textAnchor="middle" 
                opacity="0.8"
              >
                {skill.name.split('/')[0]}
              </text>
            </g>
          ))}

          {/* Soft Skills floating on the other side */}
          {softSkills.slice(0, 3).map((skill, index) => (
            <g key={`soft-${index}`}>
              <circle 
                cx={250 + index * 40} 
                cy={70} 
                r="2.5" 
                fill="#a855f7" 
                opacity="0.7"
              >
                <animateTransform 
                  attributeName="transform" 
                  type="translate" 
                  values="0,0;-8,-12;0,0" 
                  dur={`${3.5 + index * 0.7}s`} 
                  repeatCount="indefinite"
                />
              </circle>
              <text 
                x={250 + index * 40} 
                y={65} 
                fontSize="7" 
                fill="#a855f7" 
                textAnchor="middle" 
                opacity="0.8"
              >
                {skill.name.split(' ')[0]}
              </text>
            </g>
          ))}

          {/* Assembly Sparks */}
          <circle cx="285" cy="220" r="2" fill="#fbbf24" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="0.5s" repeatCount="indefinite" />
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0;5,-5;0,0;-3,2;0,0" 
              dur="2s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="290" cy="225" r="1.5" fill="#ef4444" opacity="0.9">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="0.3s" repeatCount="indefinite" />
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0;-2,-8;0,0;4,-3;0,0" 
              dur="1.5s" 
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Assembly Status Display */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-slate-800 rounded-lg p-3 border border-slate-600">
            <div className="text-sm text-cyan-400 mb-1">Assembling Skills...</div>
            <div className="text-xs text-slate-300 mb-2">
              Current: {skill?.name} ({skill?.level}%)
            </div>
            <div className="w-40 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${assemblyProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}