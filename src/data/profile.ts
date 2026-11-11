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
  title: 'R&D Software Engineer',
  bio: 'Software engineer building tools for semiconductor R&D: parallel flows on HPC farms, DFT/BIST test tools and ML tools co-designed with PhD researchers. Comfortable building from scratch and diving into low-level systems.',
  links: {
    github: 'https://github.com/mathisschmidt',
    linkedin: 'https://www.linkedin.com/in/mathis-schmidt-72694a165/',
    email: 'mailto:mathisschmidt2@gmail.com'
  },
};

export const education: Education[] = [
    {
        degree: 'Engineer\'s Degree (Master\'s level) — Computer Science, Multimedia and Networks',
        institution: 'ENSSAT — Lannion (22), France',
        period: '2020 to 2023',
    },
    {
        degree: 'Technological University Degree (DUT) — Networks and Telecommunications',
        institution: 'IUT Lannion — Lannion (22), France',
        period: '2018 to 2020',
    },
];

export const experience: Experience[] = [
    {
        title: 'R&D Software Engineer — DFT/BIST Test Tools',
        company: 'STMicroelectronics (via Celad) — Grenoble team, remote',
        period: 'Oct 2026 to Present',
        description: [
            '11-month mission: full rework of the in-house BIST (Built-In Self-Test) analyzer for memory BIST (MBIST) results from real silicon.',
            'C++ to Python migration — Rewriting the legacy tool and its custom libraries as a tested Python package.',
            'Farm parallelization — Redesigning the analysis flow to run in parallel on the LSF compute farm to cut runtime.',
            'Algorithm optimization — Optimizing the BIST analysis algorithms for large volumes of silicon test data.',
        ],
    },
    {
        title: 'Lead Software Engineer — R&D Tools (DFT/MBIST)',
        company: 'STMicroelectronics, India — VIE Contract, R&D',
        period: 'Sept 2024 to Aug 2026',
        description: [
            'Built in-house software and tools for R&D hardware engineers and PhD researchers to test and qualify chips (mostly memory). Technical referent, mentor for interns, and contact point for other teams adopting our tools.',
            'Flow manager — Authored a Python workflow orchestration library running task graphs (DAG) in parallel with Dask, locally or on the LSF compute farm, with task groups and smart re-run avoidance. Runs flows of 1000+ tasks over several days, ships with a generic, customizable NiceGUI interface, and was adopted by 2 teams.',
            'cellML — Co-designed with a PhD researcher a tool combining ML (scikit-learn) and SPICE defect simulation to generate cell-aware test models (CTM, per-cell defect-detectability maps). Owned the full architecture while the researcher owned the ML side. Cut full-technology CTM generation from months to hours.',
            'genericMBIST generator — Built a Python code generator (Mako templates, memory-parameter database, rules engine) producing complete MBIST RTL designs (Memory Built-In Self-Test). Used by the division to integrate BIST in customer solutions, and as a reference by other teams building their own generators.',
            'Pytest non-regression plugin — Co-developed with a partner team a pytest plugin for golden-reference testing: declare environment, expected results, comparison cleaning rules and full test suites in a uniform way. Critical for hardware tools that produce large volumes of output files.',
            'CI/CD pipelines — With an intern, built the team\'s complete Jenkins infrastructure (with pre-prod & prod server): automated unit tests, coverage, non-regression, deployment to internal servers, and application delivery.',
            'Technical leadership — Managed 2 interns end-to-end. Technical referent for hardware-focused teams learning software by necessity, supporting them on scripts as well as full architectural planning for larger projects.',
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
        title: 'Freelance Software Developer & Entrepreneurship',
        company: 'France / India',
        period: 'Sept 2023 to June 2024',
        description: [
            'Freelanced as a software developer alongside an entrepreneurship programme with mentorship from industry professionals.',
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
            'Joined the team owning Orange\'s main diagnostic application, used by field technicians to test internet lines (xDSL, fiber, modems) and every component along them. 3-year apprenticeship alongside engineering school as a full team member.',
            'BDD test automation framework (Java, Cucumber/Gherkin) — Designed and built the new automated non-regression solution for the QA team. Core constraint: QA engineers were not developers, so test scenarios had to be writable in plain language. Built a Java library of reusable test steps, exposed via Cucumber, so testers wrote scenarios without touching Java. Also supported the DevOps team in plugging it into Jenkins pipelines.',
            'Diagnostic ecosystem re-architecture — Represented the software team in a company-wide redesign of the diagnostic architecture (multiple partner systems handling physical tests, user info, etc.). Worked alongside architects and engineers across the ecosystem on the new global design, and led the migration of our application onto it.',
            'Intern project lead — Wrote the specification, planned milestones and tasks, then managed a 6-month intern project as technical referent.',
        ],
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming',
        category: 'technical',
        items: [
            'Python', 'Dask', 'pytest', 'scikit-learn', 'Mako', 'NiceGUI',
            'C', 'C++', 'Java',
            'TypeScript', 'JavaScript',
            'React', 'Next.js', 'Angular', 'React Native',
            'Node.js', 'NestJS', 'AdonisJS', 'Electron',
        ],
    },
    {
        title: 'Workflows & HPC',
        category: 'technical',
        items: [
            'DAG workflow orchestration',
            'Parallel computing',
            'LSF compute farm',
        ],
    },
    {
        title: 'Semiconductor Test',
        category: 'technical',
        items: [
            'DFT',
            'BIST / MBIST',
            'Cell-aware test (CAT)',
            'Silicon test data analysis',
            'Hardware/Software integration',
        ],
    },
    {
        title: 'Engineering',
        category: 'technical',
        items: [
            'Test automation', 'Non-regression',
            'Code generation', 'Rules engines', 'Templating systems',
            'Machine Learning',
            'C++ to Python migration',
        ],
    },
    {
        title: 'DevOps & Tools',
        category: 'technical',
        items: [
            'Jenkins (CI/CD pipelines)',
            'Docker', 'Git', 'GitLab', 'GitHub',
            'Linux', 'Self-hosted infrastructure',
            'MySQL',
            'Claude Code', 'Copilot',
        ],
    },
    {
        title: 'Languages',
        category: 'technical',
        items: [
            'French (native)',
            'English (fluent)',
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
            'Working with PhD researchers',
            'Building from scratch',
            'Continuous learning',
        ],
    },
];

export const skills: Skill[] = skillGroups.flatMap(group =>
    group.items.map(name => ({ name, category: group.category })),
);
