export interface Profile {
  name: string;
  title: string;
  bio: string;
  links: {
    github?: string;
    gitlab?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
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
  bio: 'Just a curious guy who loves to code and solve problems. Let\'s talk about tech, if you make me discovering a new things i am paying the hot chocolate!',
  links: {
    github: 'https://github.com/mathisschmidt',
    linkedin: 'https://www.linkedin.com/in/mathis-schmidt-72694a165/',
    email: 'mailto:mathisschmidt2@gmail.com'
  },
};

export const education: Education[] = [
    {
        degree: 'Engineer Training in Multimedia, Computer Science and Network',
        institution: 'ENSSAT',
        period: '2020 - 2023',
        description: 'Engineering degree focusing on multimedia, computer science and network technologies. With the last year of the degree being a specialization in Artificial Intelligence and Data Science',
    },
    {
        degree: 'Technological University Degree in Network and Telecommunication',
        institution: 'University of Lannion',
        period: '2018 - 2020',
        description: 'Foundation in network infrastructure and telecommunications.',
    },
];

export const experience: Experience[] = [
    // TODO: add ST experience
    {
        title: 'Software Developer Apprentice',
        company: 'Orange (Lannion, France)',
        period: '2020 - 2023',
        description: [
            'Working in team in charge of the improvement and maintenance of the Orange diagnostic application (used by technicians to perform diagnostics on customer\'s internet lines)',
            'Create internal tools for the test team to facilitate the testing of the application',
            'Update API point of the application',
            'Do the formation of new apprentices and interns',
        ],
    },
    {
        title: 'Developer Internship',
        company: 'Swill (Jaipur, India)',
        period: '2021 (2 months)',
        description: [
            'Create a mobile application for a ERP application',
        ],
    },
    {
        title: 'Service Technician Apprentice',
        company: 'Orange (Lannion, France)',
        period: '2019 - 2020 (1 school year)',
        description: [
            'Service technician apprentice for private and corporate customers',
            'Maintenance of internet lines (XDSL, fiber)',
        ],
    },
];

export const skills: Skill[] = [
    { name: 'Java/Java EE/Spring', level: 85, category: 'technical' },
    { name: 'TypeScript/JavaScript', level: 88, category: 'technical' },
    { name: 'CI/CD', level: 60, category: 'technical' },
    { name: 'Node.js', level: 80, category: 'technical' },
    { name: 'React.js', level: 80, category: 'technical' },
    { name: 'Angular', level: 60, category: 'technical' },
    { name: 'Adonis.js', level: 60, category: 'technical' },
    { name: 'Next.js', level: 40, category: 'technical' },
    { name: 'React Native', level: 60, category: 'technical' },
    { name: 'Python', level: 80, category: 'technical' },
    { name: 'C/C#', level: 40, category: 'technical' },
    { name: 'Database Management', level: 90, category: 'technical' },

    { name: 'Team Spirit', level: 80, category: 'soft' },
    { name: 'Management', level: 75, category: 'soft' },
    { name: 'Curiosity', level: 100, category: 'soft' },
    { name: 'Self-taught', level: 90, category: 'soft' },
    { name: 'Mentor', level: 50, category: 'soft' },
    { name: 'Project management', level: 80, category: 'soft' },
];
