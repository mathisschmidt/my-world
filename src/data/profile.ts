export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  links: {
    github?: string;
    gitlab?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

export const profile: Profile = {
  name: 'Mathis Schmidt',
  title: 'Software Engineer',
  bio: 'In resume, you have problem, I have the solution. Let\'s build something amazing together!',
  email: 'matthieu.schmidt@example.com',
  links: {
    github: 'https://github.com/mathisschmidt',
    linkedin: 'https://www.linkedin.com/in/mathis-schmidt-72694a165/',
  },
};

export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Engineering',
    institution: 'Technical University of Excellence',
    period: '2018 - 2020',
    description: 'Specialized in Software Architecture, Distributed Systems, and Machine Learning',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2015 - 2018',
    description: 'Foundation in algorithms, data structures, and software engineering principles',
  },
];

export const experience: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovation Corp',
    period: '2022 - Present',
    description: [
      'Lead development of microservices architecture serving 10M+ users',
      'Mentor junior developers and conduct code reviews',
      'Improved application performance by 60% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 80%',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: '2020 - 2022',
    description: [
      'Built responsive web applications using React, TypeScript, and Node.js',
      'Designed and implemented RESTful APIs and GraphQL endpoints',
      'Collaborated with cross-functional teams in Agile environment',
      'Reduced bug reports by 40% through comprehensive testing strategies',
    ],
  },
  {
    title: 'Software Developer',
    company: 'StartupTech',
    period: '2018 - 2020',
    description: [
      'Developed full-stack web applications from concept to deployment',
      'Integrated third-party APIs and payment processing systems',
      'Optimized database queries improving response times by 50%',
      'Participated in technical architecture decisions',
    ],
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 95, category: 'technical' },
  { name: 'React/Next.js', level: 92, category: 'technical' },
  { name: 'Node.js/Express', level: 88, category: 'technical' },
  { name: 'Python/Django', level: 85, category: 'technical' },
  { name: 'PostgreSQL/MongoDB', level: 82, category: 'technical' },
  { name: 'AWS/Docker/Kubernetes', level: 78, category: 'technical' },
  { name: 'GraphQL/REST APIs', level: 90, category: 'technical' },
  { name: 'Git/CI/CD', level: 87, category: 'technical' },
  { name: 'Problem Solving', level: 96, category: 'soft' },
  { name: 'Team Leadership', level: 88, category: 'soft' },
  { name: 'Communication', level: 92, category: 'soft' },
  { name: 'Project Management', level: 85, category: 'soft' },
  { name: 'Mentoring', level: 89, category: 'soft' },
  { name: 'Adaptability', level: 91, category: 'soft' },
];
