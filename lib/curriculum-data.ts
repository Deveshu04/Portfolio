export interface Course {
  code: string;
  name: string;
  credits: number;
  level: 'Foundation' | 'Diploma' | 'Degree';
  category: 'Mathematics' | 'Statistics' | 'Computer Science' | 'English' | 'Management' | 'Skill Enhancement';
  prerequisites?: string[];
  corequisites?: string[];
  completed: boolean;
  semester?: number;
  description?: string;
}

export const iitCurriculum: Course[] = [
  // Foundation Level - Term 1
  {
    code: 'BSMA1001',
    name: 'Mathematics for Data Science I',
    credits: 4,
    level: 'Foundation',
    category: 'Mathematics',
    completed: true,
    semester: 1,
    description: 'Fundamental mathematical concepts including linear algebra, calculus, and discrete mathematics essential for data science applications.',
  },
  {
    code: 'BSMA1002',
    name: 'Statistics for Data Science I',
    credits: 4,
    level: 'Foundation',
    category: 'Statistics',
    completed: true,
    semester: 1,
    description: 'Introduction to statistical concepts, probability theory, and descriptive statistics for data analysis.',
  },
  {
    code: 'BSCS1001',
    name: 'Computational Thinking',
    credits: 4,
    level: 'Foundation',
    category: 'Computer Science',
    completed: true,
    semester: 1,
    description: 'Problem-solving techniques, algorithmic thinking, and introduction to programming concepts.',
  },
  {
    code: 'BSHS1001',
    name: 'English I',
    credits: 4,
    level: 'Foundation',
    category: 'English',
    completed: true,
    semester: 1,
    description: 'Academic writing, communication skills, and language proficiency for technical documentation.',
  },
  
  // Foundation Level - Term 2
  {
    code: 'BSMA1003',
    name: 'Mathematics for Data Science II',
    credits: 4,
    level: 'Foundation',
    category: 'Mathematics',
    prerequisites: ['BSMA1001'],
    completed: true,
    semester: 2,
    description: 'Advanced mathematical concepts including multivariable calculus, optimization, and matrix operations.',
  },
  {
    code: 'BSMA1004',
    name: 'Statistics for Data Science II',
    credits: 4,
    level: 'Foundation',
    category: 'Statistics',
    prerequisites: ['BSMA1002', 'BSMA1001'],
    corequisites: ['BSMA1003'],
    completed: true,
    semester: 2,
    description: 'Inferential statistics, hypothesis testing, regression analysis, and statistical modeling.',
  },
  {
    code: 'BSCS1002',
    name: 'Programming in Python',
    credits: 4,
    level: 'Foundation',
    category: 'Computer Science',
    prerequisites: ['BSCS1001'],
    completed: true,
    semester: 2,
    description: 'Python programming fundamentals, data structures, and basic algorithms implementation.',
  },
  {
    code: 'BSHS1002',
    name: 'English II',
    credits: 4,
    level: 'Foundation',
    category: 'English',
    prerequisites: ['BSHS1001'],
    completed: true,
    semester: 2,
    description: 'Advanced communication skills, technical presentation, and professional writing.',
  },

  // Diploma Level - Programming Track
  {
    code: 'BSCS2001',
    name: 'Database Management Systems',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    completed: true,
    semester: 3,
    description: 'Relational database design, SQL, normalization, and database administration concepts.',
  },
  {
    code: 'BSCS2002',
    name: 'Programming, Data Structures and Algorithms using Python',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    completed: true,
    semester: 3,
    description: 'Advanced data structures, algorithm design and analysis, and optimization techniques.',
  },
  {
    code: 'BSCS2003',
    name: 'Modern Application Development I',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    corequisites: ['BSCS2001'],
    completed: true,
    semester: 3,
    description: 'Web application development fundamentals, HTML, CSS, JavaScript, and frontend frameworks.',
  },
  {
    code: 'BSCS2003P',
    name: 'Modern Application Development I - Project',
    credits: 2,
    level: 'Diploma',
    category: 'Computer Science',
    corequisites: ['BSCS2003'],
    completed: true,
    semester: 3,
    description: 'Hands-on project implementing a complete web application using modern development practices.',
  },
  {
    code: 'BSCS2005',
    name: 'Programming Concepts using Java',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    completed: true,
    semester: 4,
    description: 'Object-oriented programming concepts, Java language features, and enterprise application development.',
  },
  {
    code: 'BSCS2006',
    name: 'Modern Application Development II',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    prerequisites: ['BSCS2003'],
    completed: true,
    semester: 4,
    description: 'Advanced web development, backend services, APIs, and full-stack application architecture.',
  },
  {
    code: 'BSCS2006P',
    name: 'Modern Application Development II - Project',
    credits: 2,
    level: 'Diploma',
    category: 'Computer Science',
    prerequisites: ['BSCS2003P'],
    corequisites: ['BSCS2006'],
    completed: true,
    semester: 4,
    description: 'Comprehensive full-stack web application project with database integration and deployment.',
  },
  {
    code: 'BSSE2001',
    name: 'System Commands',
    credits: 3,
    level: 'Diploma',
    category: 'Skill Enhancement',
    completed: true,
    semester: 4,
    description: 'Command-line interfaces, shell scripting, system administration, and automation tools.',
  },

  // Diploma Level - Data Science Track
  {
    code: 'BSCS2004',
    name: 'Machine Learning Foundations',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    completed: true,
    semester: 3,
    description: 'Introduction to machine learning algorithms, supervised and unsupervised learning techniques.',
  },
  {
    code: 'BSMS2001',
    name: 'Business Data Management',
    credits: 4,
    level: 'Diploma',
    category: 'Management',
    completed: true,
    semester: 3,
    description: 'Business intelligence, data warehousing, ETL processes, and enterprise data management.',
  },
  {
    code: 'BSMS2001P',
    name: 'Business Data Management - Project',
    credits: 2,
    level: 'Diploma',
    category: 'Management',
    corequisites: ['BSMS2001'],
    completed: true,
    semester: 3,
    description: 'Real-world business data analysis project with stakeholder collaboration and reporting.',
  },
  {
    code: 'BSCS2007',
    name: 'Machine Learning Techniques',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    corequisites: ['BSCS2004'],
    completed: true,
    semester: 4,
    description: 'Advanced machine learning algorithms, ensemble methods, and model evaluation techniques.',
  },
  {
    code: 'BSCS2008',
    name: 'Machine Learning Practice',
    credits: 4,
    level: 'Diploma',
    category: 'Computer Science',
    prerequisites: ['BSCS2004', 'BSCS2007'],
    completed: true,
    semester: 4,
    description: 'Practical implementation of ML models, feature engineering, and production deployment.',
  },
  {
    code: 'BSCS2008P',
    name: 'Machine Learning Practice - Project',
    credits: 2,
    level: 'Diploma',
    category: 'Computer Science',
    corequisites: ['BSCS2008'],
    completed: true,
    semester: 4,
    description: 'End-to-end machine learning project from data collection to model deployment.',
  },
  {
    code: 'BSMS2002',
    name: 'Business Analytics',
    credits: 4,
    level: 'Diploma',
    category: 'Management',
    prerequisites: ['BSMS2001'],
    completed: true,
    semester: 4,
    description: 'Statistical analysis for business decisions, predictive analytics, and performance metrics.',
  },
  {
    code: 'BSSE2002',
    name: 'Tools in Data Science',
    credits: 3,
    level: 'Diploma',
    category: 'Skill Enhancement',
    corequisites: ['BSCS2004'],
    completed: true,
    semester: 4,
    description: 'Data science tools and frameworks including R, Jupyter, visualization libraries, and cloud platforms.',
  },

  // NPTEL Courses - 3rd Year
  {
    code: 'NPTEL-CC',
    name: 'Cloud Computing and Distributed Systems',
    credits: 3,
    level: 'Diploma',
    category: 'Computer Science',
    completed: true,
    semester: 5,
    description: 'Comprehensive study of cloud computing architectures, distributed systems, and scalable computing solutions.',
  },
  {
    code: 'NPTEL-DM',
    name: 'Data Mining',
    credits: 3,
    level: 'Diploma',
    category: 'Computer Science',
    completed: true,
    semester: 5,
    description: 'Advanced techniques in data mining, pattern recognition, and knowledge discovery from large datasets.',
  },
  {
    code: 'NPTEL-QIM',
    name: 'Quantitative Investment Management',
    credits: 3,
    level: 'Diploma',
    category: 'Management',
    completed: true,
    semester: 5,
    description: 'Mathematical models and quantitative techniques for portfolio management and investment strategies.',
  },
  {
    code: 'NPTEL-ATP',
    name: 'Advanced Algorithmic Trading and Portfolio Management',
    credits: 3,
    level: 'Diploma',
    category: 'Management',
    completed: true,
    semester: 5,
    description: 'Advanced algorithmic trading strategies, risk management, and automated portfolio optimization techniques.',
  },

  // Degree Level - Future Courses (Not Yet Completed)
  {
    code: 'BSCS3001',
    name: 'Software Engineering',
    credits: 4,
    level: 'Degree',
    category: 'Computer Science',
    completed: false,
    description: 'Software development lifecycle, design patterns, testing methodologies, and project management.',
  },
  {
    code: 'BSCS3002',
    name: 'Software Testing',
    credits: 4,
    level: 'Degree',
    category: 'Computer Science',
    completed: false,
    description: 'Testing strategies, automated testing, quality assurance, and software reliability.',
  },
  {
    code: 'BSCS3003',
    name: 'AI: Search Methods for Problem Solving',
    credits: 4,
    level: 'Degree',
    category: 'Computer Science',
    completed: false,
    description: 'Artificial intelligence algorithms, search strategies, and problem-solving techniques.',
  },
  {
    code: 'BSCS3004',
    name: 'Deep Learning',
    credits: 4,
    level: 'Degree',
    category: 'Computer Science',
    completed: false,
    description: 'Neural networks, deep learning architectures, and advanced AI applications.',
  },
];

// Helper functions
export const getCoursesByLevel = (level: Course['level']): Course[] => {
  return iitCurriculum.filter(course => course.level === level);
};

export const getCompletedCourses = (): Course[] => {
  return iitCurriculum.filter(course => course.completed);
};

export const getTotalCredits = (courses: Course[]): number => {
  return courses.reduce((total, course) => total + course.credits, 0);
};

export const getCompletionStats = () => {
  const totalCourses = iitCurriculum.length;
  const completedCourses = getCompletedCourses().length;
  const totalCredits = getTotalCredits(iitCurriculum);
  const completedCredits = getTotalCredits(getCompletedCourses());
  
  return {
    totalCourses,
    completedCourses,
    totalCredits,
    completedCredits,
    completionPercentage: Math.round((completedCourses / totalCourses) * 100),
    creditsPercentage: Math.round((completedCredits / totalCredits) * 100),
  };
};