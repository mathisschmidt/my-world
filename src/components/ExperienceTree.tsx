import React from 'react';
import { experience } from '../data/profile';

export default function ExperienceTree() {
  return (
      <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-px"></div>

          <div className="space-y-12">
              {experience.map((exp, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                      <div
                          key={index}
                          className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                      >
                          {/* Timeline dot - hidden on mobile */}
                          <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-slate-900 transform -translate-x-2 z-10"></div>

                          {/* Card */}
                          <div
                              className={`relative bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-600 w-full md:w-[calc(50%-2rem)] hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 transform hover:scale-105 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                          >
                              {/* Period Badge */}
                              <div className={`absolute -top-3 left-4 md:${isLeft ? 'left-4' : 'right-4'} px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full shadow-lg`}>
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
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
  );
}