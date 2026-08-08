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
  category: 'technical' | 'soft';
}

export interface SkillGroup {
  title: string;
  category: 'technical' | 'soft';
  items: string[];
}

export const profile: Profile = {
  name: 'Mathis Schmidt',
  title: 'Lead Software Engineer',
  bio: 'Engineer at the intersection of software and hardware. Comfortable building from scratch and diving into low-level systems. Growing toward robotics and embedded software, one project at a time.',
  links: {
    github: 'https://github.com/mathisschmidt',
    linkedin: 'https://www.linkedin.com/in/mathis-schmidt-72694a165/',
    email: 'mailto:mathisschmidt2@gmail.com'
  },
};

export const education: Education[] = [
    {
        degree: 'Engineer\'s Degree — Multimedia, Computer Science and Network',
        institution: 'ENSSAT — Lannion (22), France',
        period: '2020 to 2023',
    },
    {
        degree: 'Technological University Degree — Network and Telecommunication',
        institution: 'IUT Lannion — Lannion (22), France',
        period: '2018 to 2020',
    },
];

export const experience: Experience[] = [
    {
        title: 'Lead Software Engineer',
        company: 'STMicroelectronics, India — VIE Contract, R&D',
        period: 'Sept 2024 to Present',
        description: [
            'Develop software and tools to test and qualify microchips (especially memory) for hardware engineers/phd. Technical referent, mentor for interns, and contact point for other teams adopting our tools.',
            'genericMBIST generator — Built a Python code-generation tool producing complete MBIST hardware designs (Memory Built-In Self-Test). Combined templates maintained by hardware engineers, a memory-parameter database, and a complex rules engine to automate the generation of full hardware architectures. Now used as a reference by other teams building their own generators.',
            'cellML — Co-designed (with a PhD researcher) a Python tool that uses ML prediction and simulation to generate CTM views (per-cell defect-detectability maps). Owned the full architecture; the researcher owned the ML side. Reduced full-technology CTM generation from months to hours.',
            'Flow manager library — Authored a Python library to parallelize function execution with dependency graphs, task groups, and smart re-run avoidance. Used across team projects, including flows of 1000+ tasks running over multiple days. Shipped with a generic, customizable GUI so consumers don\'t have to build their own.',
            'Pytest non-regression plugin — Co-developed (with a partner team) a pytest plugin to declare environment, expected results, comparison cleaning rules, and full test suites in a uniform way. Critical for hardware tools that produce large volumes of output files.',
            'CI/CD pipelines — With an intern, built the team\'s complete Jenkins infrastructure (with pre-prod & prod server): automated unit tests, coverage, non-regression, deployment to internal servers, and application delivery.',
            'Technical leadership — Managed 2 interns end-to-end. Technical referent for hardware-focused teams learning software by necessity — supporting them on scripts as well as full architectural planning for larger projects.',
        ],
    },
    {
        title: 'Support Technician — 2024 Olympic Games',
        company: 'France',
        period: 'July / August 2024',
        description: [
            'Installed and dismantled the full IT setup for the cross-country bike trial event. Supported the manager in coordinating and organising the on-site team.',
        ],
    },
    {
        title: 'Freelance & Entrepreneurship',
        company: 'France / India',
        period: 'Sept 2023 to June 2024',
        description: [
            'Explored entrepreneurship with mentorship from industry professionals while freelancing as a software developer.',
            'Workspace manager (desktop app) — Built an Electron + AdonisJS desktop application to centralise project links (files, apps, web resources) and share them across a team. All-web-stack architecture for maintainability.',
            'Hydroponics project (design) — Designed an eco-friendly hydroponics system intended for corporate gardens.',
            'Entrepreneurship training — Completed a government-backed founder programme covering startup marketing and go-to-market planning.',
        ],
    },
    {
        title: 'Developer Internship',
        company: 'Swill, Jaipur, India',
        period: '2 months',
        description: [
            'Built a React Native mobile app to support inventory management inside an existing ERP. The app consumed the ERP\'s API so users could add, remove, and verify products and quantities directly from the warehouse floor.',
        ],
    },
    {
        title: 'Software Developer Apprentice',
        company: 'Orange, Lannion (22), France',
        period: '2020 to 2023',
        description: [
            'Joined the team owning Orange\'s main diagnostic application — used by field technicians to run tests on XDSL / fiber / modems and every component of an internet line. 3-year apprenticeship combining engineering school and full team membership.',
            'Non-regression test framework (Java + Cucumber) — Designed and built the new automated NRT solution for the QA team. Core constraint: QA engineers were not developers, so test scenarios had to be writable in natural language. Built a Java library of reusable test steps, exposed via Cucumber, so testers wrote scenarios without touching Java. Also supported the DevOps team in plugging it into Jenkins pipelines.',
            'Diagnostic ecosystem re-architecture — Represented the software team in a company-wide restructuring of the diagnostic architecture (multiple partner systems handling physical tests, user info, etc.). Worked alongside architects and software engineers across the ecosystem on the new global design, and led the migration of our application onto the new architecture.',
            '6-month intern project (lead) — Wrote the product specification, planned milestones and tasks, then acted as technical referent and project manager throughout the internship.',
        ],
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming',
        category: 'technical',
        items: [
            'Python', 'Java', 'C', 'C++',
            'TypeScript', 'JavaScript',
            'React.js', 'Next.js', 'Angular', 'React Native',
            'Node.js', 'NestJS', 'AdonisJS', 'Electron',
        ],
    },
    {
        title: 'DevOps & Tools',
        category: 'technical',
        items: [
            'Jenkins (CI/CD pipelines)',
            'Docker', 'Git', 'GitLab', 'GitHub',
            'Linux', 'Self-hosted infrastructure',
            'Claude Code', 'Copilot',
        ],
    },
    {
        title: 'Database & Data',
        category: 'technical',
        items: [
            'MySQL', 'YAML-based DB design',
            'Rules engines', 'Templating systems',
        ],
    },
    {
        title: 'Domains',
        category: 'technical',
        items: [
            'Hardware/Software integration',
            'Memory testing (MBIST)',
            'Test automation', 'Non-regression',
            'Machine Learning',
        ],
    },
    {
        title: 'Leadership',
        category: 'soft',
        items: [
            'Technical leadership',
            'Mentoring interns',
            'Project management',
            'Cross-team collaboration',
            'Building from scratch',
            'Continuous learning',
        ],
    },
];

export const skills: Skill[] = skillGroups.flatMap(group =>
    group.items.map(name => ({ name, category: group.category })),
);
