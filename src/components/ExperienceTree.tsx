import React from 'react';
import { experience } from '../data/profile';
import MonkeyRobot from './MonkeyRobot';

export default function ExperienceTree() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Monkey Robot at the top */}
      <div className="flex justify-center mb-8">
        <MonkeyRobot />
      </div>

      {/* Tree Trunk */}
      <div className="relative flex justify-center">
        <div className="w-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full min-h-[600px] relative">
          {/* Tree rings texture */}
          <div className="absolute inset-0 flex flex-col justify-evenly">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="h-1 bg-amber-700 rounded-full mx-1 opacity-50"
              />
            ))}
          </div>
        </div>

        {/* Experience Nodes on the Tree */}
        <div className="absolute inset-0">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const topPosition = 100 + index * 150;
            
            return (
              <div
                key={index}
                className="absolute transform -translate-y-1/2"
                style={{
                  top: `${topPosition}px`,
                  left: isLeft ? '50%' : '50%',
                  transform: isLeft ? 'translateX(-100%) translateY(-50%)' : 'translateX(0%) translateY(-50%)',
                  marginLeft: isLeft ? '-60px' : '60px'
                }}
              >
                {/* Branch */}
                <div 
                  className={`absolute w-16 h-1 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full ${
                    isLeft ? 'right-0' : 'left-0'
                  }`}
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: isLeft ? '-2px' : 'auto',
                    left: isLeft ? 'auto' : '-2px'
                  }}
                />

                {/* Experience Card */}
                <div 
                  className={`relative bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-600 max-w-sm
                    hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 transform hover:scale-105
                    ${isLeft ? 'ml-16' : 'mr-16'}`}
                >
                  {/* Leaf decoration */}
                  <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" className="text-green-500">
                      <path 
                        fill="currentColor" 
                        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.11 3.89 21 5 21H11V19H5V3H13V9H21Z"
                      />
                    </svg>
                  </div>

                  {/* Period Badge */}
                  <div className={`absolute -top-3 ${isLeft ? 'left-4' : 'right-4'} 
                    px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full shadow-lg`}>
                    {exp.period}
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-400 font-medium text-sm mb-3">{exp.company}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-slate-300 text-sm flex items-start">
                          <span className="text-green-400 mr-2 mt-1.5 w-1.5 h-1.5 bg-current rounded-full flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connecting line to trunk */}
                  <div 
                    className={`absolute w-1 h-8 bg-amber-700 ${
                      isLeft ? 'right-0 mr-16' : 'left-0 ml-16'
                    }`}
                    style={{
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tree Crown/Leaves */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <svg width="120" height="100" viewBox="0 0 120 100" className="drop-shadow-lg">
            <defs>
              <linearGradient id="leavesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>
            
            {/* Main crown */}
            <ellipse cx="60" cy="50" rx="50" ry="40" fill="url(#leavesGradient)" opacity="0.9">
              <animateTransform 
                attributeName="transform" 
                type="scale" 
                values="1;1.05;1" 
                dur="6s" 
                repeatCount="indefinite"
              />
            </ellipse>
            
            {/* Additional leaf clusters */}
            <ellipse cx="30" cy="40" rx="25" ry="20" fill="url(#leavesGradient)" opacity="0.8">
              <animateTransform 
                attributeName="transform" 
                type="scale" 
                values="1;1.03;1" 
                dur="5s" 
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="90" cy="45" rx="20" ry="18" fill="url(#leavesGradient)" opacity="0.8">
              <animateTransform 
                attributeName="transform" 
                type="scale" 
                values="1;1.04;1" 
                dur="7s" 
                repeatCount="indefinite"
              />
            </ellipse>
            
            {/* Floating leaves */}
            <ellipse cx="20" cy="70" rx="8" ry="6" fill="#22c55e" opacity="0.7">
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                values="0,0;5,-10;0,0" 
                dur="4s" 
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="100" cy="75" rx="6" ry="5" fill="#16a34a" opacity="0.6">
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                values="0,0;-8,-12;0,0" 
                dur="5s" 
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>

        {/* Root system */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
          <svg width="100" height="60" viewBox="0 0 100 60">
            <defs>
              <linearGradient id="rootsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>
            
            <path d="M50,0 Q30,20 20,40 Q15,50 10,60" stroke="url(#rootsGradient)" strokeWidth="3" fill="none" />
            <path d="M50,0 Q70,15 80,35 Q85,45 90,60" stroke="url(#rootsGradient)" strokeWidth="3" fill="none" />
            <path d="M50,0 Q40,25 25,45 Q20,55 15,60" stroke="url(#rootsGradient)" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M50,0 Q60,20 75,40 Q80,50 85,60" stroke="url(#rootsGradient)" strokeWidth="2" fill="none" opacity="0.8" />
          </svg>
        </div>

        {/* Growth rings indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="bg-amber-900/20 rounded-full w-8 h-8 flex items-center justify-center border border-amber-600/30">
            <span className="text-amber-300 text-xs font-bold">{experience.length}</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-6 bg-slate-800/50 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <span className="text-slate-300 text-sm">Current Position</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-300 text-sm">Growth Points</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-1 rounded-full bg-amber-700"></div>
            <span className="text-slate-300 text-sm">Career Path</span>
          </div>
        </div>
      </div>
    </div>
  );
}