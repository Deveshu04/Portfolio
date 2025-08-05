export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  category: 'AI/ML' | 'Web Development' | 'Data Science' | 'Blockchain' | 'Enterprise';
}

export const allProjects: Project[] = [
  {
    title: 'ESG Sentiment Analytics on Alternative Data',
    description: 'Engineered a model to quantify ESG risk and opportunity scores for 100+ public companies by analyzing alternative data sources using NLP and computer vision. Increased precision of ESG risk assessment by 15%, enabling faster regulatory response for asset managers. Automated data processing pipeline, reducing manual analysis time by 40%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'NLP', 'Computer Vision', 'TensorFlow', 'Flask'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Real-Time Fraud Detection Using Graph Neural Networks',
    description: 'Developed a fraud detection system utilizing GNNs to monitor over 1 million transactions monthly, deployed as a Flask web app. Elevated fraud identification rate by 20% and minimized false positives by 10% compared to baseline models. Enabled real-time alerts, reducing average fraud response time from 2 hours to 15 minutes.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'PyTorch', 'Flask', 'NetworkX'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Hyperpersonalized Financial Product Recommendation Engine',
    description: 'Devised a recommendation engine using transaction and macroeconomic data for 10,000+ customers. Increased customer engagement by 25% and conversion rates by 18% through targeted recommendations.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2671&auto=format&fit=crop',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Multi-Modal RAG for Enterprise Knowledge Management',
    description: 'Built a retrieval-augmented generation system integrating text, images, and structured data, boosting enterprise Q&A accuracy by 30% for 200+ users. Reduced manual lookup time by 50% and enabled 24/7 access to internal knowledge for 5 business units.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'Hugging Face'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Personalized AI Agent for Automated Research and Reporting',
    description: 'Developed an LLM-powered agent that generated custom reports, cutting research time from 3 hours to 10 minutes for 30+ analysts. Integrated with 4 internal databases and web sources, achieving 95% user satisfaction in pilot deployment.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'Llama', 'LangChain', 'Web Scraping'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Synthetic Data Generator for Privacy-Preserving Analytics',
    description: 'Created a GenAI tool to generate high-fidelity synthetic datasets, supporting regulatory compliance and secure collaboration for 10+ cross-functional groups. Maintained 98% statistical similarity to original datasets, accelerating model development by 35%.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2674&auto=format&fit=crop',
    tags: ['Python', 'Hugging Face', 'GANs'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Generative AI for Automated Code Review and Refactoring',
    description: 'Engineered an LLM-based tool for automated code review, reducing review turnaround time by 40% for 12 developers. Improved code quality, decreasing post-deployment bugs by 25%.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'OpenAI API', 'CI/CD'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Edge AI Platform for Real-Time Traffic Management',
    description: 'Developed an edge computing platform that processes live video and sensor data to optimize traffic flow in smart cities. Reduced congestion by 25% and system latency by 40% across 3 pilot deployments.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop',
    tags: ['Go', 'Python', 'AWS IoT', 'Edge TPU'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Quantum-Inspired Route Optimization Engine',
    description: 'Built a hybrid quantum-classical engine for logistics route optimization, leveraging quantum algorithms for NP-hard problems. Improved delivery efficiency by 18% and reduced computation time by 35% for large datasets.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop',
    tags: ['Rust', 'Python', 'IBM Qiskit'],
    github: '#',
    live: '#',
    category: 'AI/ML',
  },
  {
    title: 'Automated AI Code Review Pipeline',
    description: 'Engineered a CI/CD-integrated tool using LLMs to review pull requests, flag security risks, and suggest code improvements. Decreased code review turnaround by 50% and reduced post-merge bugs by 22%.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2676&auto=format&fit=crop',
    tags: ['Python', 'GitHub Actions', 'OpenAI API'],
    github: '#',
    live: '#',
    category: 'Web Development',
  },
  {
    title: 'Zero Trust Microservices Architecture',
    description: 'Designed and deployed a zero trust architecture for a cloud-native SaaS, implementing mutual TLS and dynamic secrets. Achieved 100% compliance with CIS security benchmarks and improved incident response time by 30%.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2670&auto=format&fit=crop',
    tags: ['Go', 'Kubernetes', 'Istio', 'HashiCorp Vault'],
    github: '#',
    live: '#',
    category: 'Enterprise',
  },
  {
    title: 'Decentralized Supply Chain Audit Platform',
    description: 'Designed and implemented a blockchain audit platform tracking 50,000+ shipments per year, uncovering 12% reduction in supply chain fraud for a pilot client. Integrated 6+ real-time data sources (IoT, logistics APIs) to automate compliance checks, reducing manual review time by 60 hours/month. Built Tableau dashboards for executive users, improving process transparency and speeding audit cycles by 40%.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
    tags: ['Hyperledger', 'Python', 'Tableau'],
    github: '#',
    live: '#',
    category: 'Blockchain',
  },
  {
    title: 'Algorithmic Fairness Audit Toolkit for Lending Portfolios',
    description: 'Developed an analytics suite for 1.2M+ historical loan applications to uncover bias across gender, region, and income variables, resulting in a 28% drop in regulatory complaints. Automated bias metrics and compliance reporting—reducing reporting prep time from 8 to 2 hours. Enabled product teams to optimize loan models, increasing fair approvals by 7% without raising credit risk.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'R', 'Power BI'],
    github: '#',
    live: '#',
    category: 'Data Science',
  },
  {
    title: 'Dynamic Carbon Footprint Simulator for Enterprises',
    description: 'Engineered a simulator for 12+ enterprise clients to model scenarios and forecast carbon reduction, achieving average cost savings of $200K/year per client. Automated ESG data ingestion from 10+ sources, improving carbon reporting precision by 23%. Delivered dashboards that reduced time-to-compliance by 50% and enabled sustainability teams to evaluate ROI on $1M+ green initiatives.',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?q=80&w=2670&auto=format&fit=crop',
    tags: ['Python', 'Tableau', 'Flask'],
    github: '#',
    live: '#',
    category: 'Enterprise',
  },
  {
    title: 'Business Data Management Capstone Project',
    description: 'Executed a comprehensive data management project as part of IIT Madras curriculum, collaborating with a local business to solve real-world data challenges. Gathered, cleaned, and analyzed primary operational data to identify issues in business processes and reporting workflows. Applied ETL, data validation, and visualization techniques using Excel, SQL, and Tableau to deliver actionable insights to stakeholders. Produced a final report with recommendations, leading to improved data transparency and a measurable increase in business process efficiency.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    tags: ['Data Collection', 'Cleaning', 'Analysis', 'Excel', 'SQL', 'Tableau'],
    github: '#',
    live: '#',
    category: 'Data Science',
  },
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return allProjects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 3 for homepage)
export const getFeaturedProjects = (): Project[] => {
  return allProjects.slice(0, 3);
};