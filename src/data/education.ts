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
};

export const educationEntries: EducationEntry[] = [
  {
    institution: 'University of California, San Diego',
    institutionLabel: 'UC San Diego',
    credential: 'Master of Science',
    program: 'Data Science',
    location: 'San Diego, CA',
    dates: '2024 – 2026',
    summary:
      'M.S. in Data Science focused on machine learning, scalable systems, statistical modeling, optimization, and modern AI workflows.',
    highlights: [
      'GPA: 3.941/4.0.',
      'Advanced coursework across machine learning, scalable data systems, fraud analytics, recommender systems, and efficient AI.',
      'Strong foundation in probabilistic reasoning, statistical models, and optimization for applied modeling and evaluation work.',
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
          'Data Mgt for Data Science',
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
  },
  {
    institution: 'BITS Pilani, Hyderabad Campus',
    institutionLabel: 'BITS Pilani',
    credential: 'B.E.',
    program: 'Mechanical Engineering · Minor in Finance · Practice School',
    location: 'Hyderabad, India',
    dates: '2019 – 2023',
    summary:
      'Engineering degree shaped by mathematical rigor, systems thinking, finance coursework, and applied training through Practice School.',
    highlights: [
      'CGPA: 9.20/10.',
      'Graduated with Distinction.',
      'Coursework combined machine learning and data science foundations with probability, optimization, finance, and core engineering systems.',
    ],
    courseworkByTheme: [
      {
        title: 'AI/ML and Data Science',
        courses: ['Machine Learning', 'Foundations of Data Science', 'Business Analysis & Valuation'],
      },
      {
        title: 'Systems and Data Engineering',
        courses: ['Computer Programming', 'Laboratory Project'],
      },
      {
        title: 'Statistics / Optimization',
        courses: [
          'Probability & Statistics',
          'Engineering Optimization',
          'Derivatives & Risk Management',
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
          'Practice School I',
          'Practice School II',
        ],
      },
    ],
    gpa: '9.20/10',
    honors: ['Distinction'],
  },
];

export const courseworkThemeDescriptions: Record<CourseworkThemeTitle, string> = {
  'AI/ML and Data Science':
    'Machine learning, data mining, recommender systems, deep learning math, fraud analytics, and data science foundations.',
  'Systems and Data Engineering':
    'Scalable systems, data management, programming, algorithms, and applied systems work that support production-grade AI and analytics.',
  'Statistics / Optimization':
    'Probability, statistical modeling, optimization, and quantitative finance coursework that support evaluation, experimentation, and decision-making.',
  'Engineering Foundations':
    'Core engineering, design, manufacturing, and hands-on technical training that strengthen systems intuition and implementation discipline.',
};
