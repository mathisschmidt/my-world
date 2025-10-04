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
  name: 'Your Name',
  title: 'Software Engineer',
  bio: 'Passionate software engineer with expertise in building modern web applications. I love creating elegant solutions to complex problems and sharing knowledge with the community.',
  email: 'your.email@example.com',
  links: {
    github: 'https://github.com/yourusername',
    gitlab: 'https://gitlab.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};

export const education: Education[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'University Name',
    period: '2018 - 2020',
    description: 'Specialized in Software Engineering and Artificial Intelligence',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    period: '2015 - 2018',
  },
];

export const experience: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Led development of microservices architecture',
      'Mentored junior developers',
      'Improved application performance by 40%',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: [
      'Built full-stack web applications using React and Node.js',
      'Implemented CI/CD pipelines',
      'Collaborated with cross-functional teams',
    ],
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 95, category: 'technical' },
  { name: 'React', level: 90, category: 'technical' },
  { name: 'Node.js', level: 85, category: 'technical' },
  { name: 'Python', level: 80, category: 'technical' },
  { name: 'Docker/Kubernetes', level: 75, category: 'technical' },
  { name: 'AWS/Cloud', level: 70, category: 'technical' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Team Leadership', level: 85, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Adaptability', level: 88, category: 'soft' },
];
