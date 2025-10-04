import React, { useState } from 'react';
import type { Education, Experience, Skill } from '../data/profile';

interface ResumeSectionProps {
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  bio: string;
}

type Section = 'about' | 'education' | 'experience' | 'skills';

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  education,
  experience,
  skills,
  bio,
}) => {
  const [activeSection, setActiveSection] = useState<Section>('about');

  const technicalSkills = skills.filter(s => s.category === 'technical');
  const softSkills = skills.filter(s => s.category === 'soft');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {(['about', 'education', 'experience', 'skills'] as Section[]).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
              activeSection === section
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8 min-h-[400px] animate-slide-in">
        {activeSection === 'about' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{bio}</p>
          </div>
        )}

        {activeSection === 'education' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-700">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-secondary to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
