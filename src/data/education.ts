export type CourseworkThemeTitle =
  | 'AI/ML and Data Science'
  | 'Systems and Data Engineering'
  | 'Statistics / Optimization'
  | 'Engineering Foundations';

export type CourseworkTheme = {
  title: CourseworkThemeTitle;
  courses: string[];
};

export type EducationEntry = {
  institution: string;
  institutionLabel: string;
  credential: string;
  program: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  courseworkByTheme: CourseworkTheme[];
  gpa?: string;
  honors?: string[];
  notes?: string[];
};

export type AcademicHighlight = {
  label: string;
  value: string;
  description: string;
};

export const academicHighlights: AcademicHighlight[] = [
  {
    label: 'UCSD GPA',
    value: '3.941/4.0',
    description: 'Transcript-backed cumulative GPA in the M.S. Data Science program.',
  },
  {
    label: 'BITS CGPA',
    value: '9.20/10',
    description: 'Final cumulative grade point average in the B.E. Mechanical program.',
  },
  {
    label: 'Honors',
    value: 'Distinction',
    description: 'Recorded on the BITS Pilani Hyderabad academic transcript upon degree completion.',
  },
  {
    label: 'UCSD Milestone',
    value: 'Advanced to candidacy',
    description: 'Advanced to candidacy on October 17, 2025 in the graduate Data Science program.',
  },
  {
    label: 'Applied Training',
    value: 'Practice School I & II',
    description: 'BITS degree included Practice School I and Practice School II as hands-on academic training.',
  },
];

export const educationEntries: EducationEntry[] = [
  {
    institution: 'University of California, San Diego',
    institutionLabel: 'UC San Diego',
    credential: 'Master of Science',
    program: 'Data Science',
    location: 'San Diego, CA',
    dates: '2024 – 2026',
    summary:
      'Graduate data science training that adds modern machine learning, scalable systems, optimization, and statistical depth to production-oriented AI and data engineering work.',
    highlights: [
      'Cumulative GPA of 3.941/4.0 in the M.S. Data Science program.',
      'Advanced to candidacy on October 17, 2025.',
      'Coursework spans machine learning, scalable data systems, statistical models, optimization, recommender systems, efficient AI, and data science programming.',
    ],
    courseworkByTheme: [
      {
        title: 'AI/ML and Data Science',
        courses: [
          'Machine Learning',
          'Data Mining & Analytics',
          'Recommender Systems & Web Mining',
          'Efficient AI for Data Science',
          'Mathematics of Deep Learning',
          'Geometry of Data',
          'Fraud Analytics',
        ],
      },
      {
        title: 'Systems and Data Engineering',
        courses: [
          'Scalable Data Systems',
          'Data Management for Data Science',
          'Data Science Programming',
          'Algorithms for Data Science',
          'Mobile & Ubiquitous Computing',
        ],
      },
      {
        title: 'Statistics / Optimization',
        courses: [
          'Statistical Models',
          'Probabilistic Reasoning & Learning',
          'Probability & Statistics for Data Science',
          'Introduction to Optimization',
          'Data Science, Ethics & Society',
        ],
      },
      {
        title: 'Engineering Foundations',
        courses: [],
      },
    ],
    gpa: '3.941/4.0',
    notes: ['Advanced to candidacy on October 17, 2025.'],
  },
  {
    institution: 'Birla Institute of Technology & Science, Pilani, Hyderabad Campus',
    institutionLabel: 'BITS Pilani Hyderabad',
    credential: 'B.E.',
    program: 'Mechanical Engineering (with Practice School)',
    location: 'Hyderabad, India',
    dates: '2019 – 2023',
    summary:
      'Engineering training grounded in mathematical rigor, systems thinking, and hands-on applied learning through Practice School, with strong preparation for analytics, optimization, and technical product work.',
    highlights: [
      'Graduated with a CGPA of 9.20/10 and Distinction.',
      'Completed Practice School I and Practice School II as part of the degree program.',
      'Coursework combined machine learning and data science foundations with probability, optimization, CAD, manufacturing, and core engineering systems.',
    ],
    courseworkByTheme: [
      {
        title: 'AI/ML and Data Science',
        courses: ['Machine Learning', 'Foundations of Data Science'],
      },
      {
        title: 'Systems and Data Engineering',
        courses: [],
      },
      {
        title: 'Statistics / Optimization',
        courses: [
          'Probability & Statistics',
          'Engineering Optimization',
          'Mathematics I',
          'Mathematics II',
          'Mathematics III',
        ],
      },
      {
        title: 'Engineering Foundations',
        courses: [
          'Engineering Graphics',
          'Thermodynamics',
          'Computer-Aided Design',
          'Manufacturing Processes',
          'Advanced Manufacturing Processes',
          'Manufacturing Management',
          'Design of Machine Elements',
          'Mechanics of Solids',
          'Fluid Mechanics',
          'Heat Transfer',
          'Mechanisms and Machines',
          'Vibrations and Control',
          'Workshop Practice',
          'Computer Programming',
        ],
      },
    ],
    gpa: '9.20/10',
    honors: ['Distinction'],
    notes: ['Practice School I and Practice School II completed.'],
  },
];

export const courseworkThemeDescriptions: Record<CourseworkThemeTitle, string> = {
  'AI/ML and Data Science':
    'Machine learning, data mining, recommender systems, deep learning math, fraud analytics, and data science foundations.',
  'Systems and Data Engineering':
    'Scalable systems, data management, programming, algorithms, and applied systems work that support production-grade AI and analytics.',
  'Statistics / Optimization':
    'Probability, statistical modeling, and optimization coursework that supports evaluation, experimentation, and quantitative decision-making.',
  'Engineering Foundations':
    'Core engineering, design, manufacturing, and hands-on technical training that strengthen systems intuition and implementation discipline.',
};

export const whyEducationMatters = [
  {
    title: 'UCSD adds modern AI and data systems depth',
    description:
      'The graduate program directly supports AI engineering and data engineering work through machine learning, scalable data systems, optimization, recommender systems, and rigorous statistics.',
    supportingPoints: ['Machine learning', 'Scalable data systems', 'Optimization', 'Recommender systems'],
  },
  {
    title: 'BITS adds engineering rigor and applied systems thinking',
    description:
      'The B.E. foundation contributes mathematical discipline, design and manufacturing systems exposure, and hands-on Practice School training that translates well to production data and AI roles.',
    supportingPoints: ['Probability and optimization', 'CAD and manufacturing systems', 'Practice School I & II'],
  },
];
