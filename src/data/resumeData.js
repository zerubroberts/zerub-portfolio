export const personalInfo = {
  name: "Zerub Roberts",
  title: "Data Scientist | Senior Data Analyst | Data Consultant | BI",
  location: "Greater Melbourne Area",
  summary: `Data specialist with 8+ years of consulting experience with an extensive focus on predictive analytics and business intelligence.
  ❄ Hands-on experience with multiple BI platforms (Tableau, Power BI & Qlik), machine learning tools (Python, AWS Sagemaker, Tensorflow), data engineering, and integration (SQL, Snowflake).
  ✅ Strong understanding of best practices in software engineering for writing modularized, scalable, production-level code.`
};

export const specialties = [
  {
    id: "data-viz",
    title: "Data Visualization & Insights",
    description: "Expert in creating impactful data visualizations and deriving actionable insights using various BI platforms.",
    skills: ["Tableau", "Power BI", "Qlik", "Data Storytelling", "Custom Visualizations", "Dashboard Design"]
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description: "Experienced in building and deploying machine learning models and AI solutions at scale.",
    skills: ["Python", "AWS Sagemaker", "Tensorflow", "MLOps", "Model Deployment", "Production ML Systems"]
  }
];

export const workExperience = [
  {
    company: "Cast Solutions",
    role: "Data Consultant Lead",
    period: "August 2018 - Present",
    location: "Melbourne, Victoria, Australia",
    highlights: [
      "Provided consulting services across multiple sectors (engineering, utilities, university, water, and technology)",
      "Experienced in connecting to and integrating various data sources - legacy systems, REST APIs, databases",
      "Built end-to-end Data/BI Solutions with advanced analytical capabilities",
      "Piloted sophisticated analytics solutions including geo-analytics, predictive maintenance, and computer vision"
    ]
  },
  {
    company: "Pathstream",
    role: "Data Analytics Mentor",
    period: "June 2021 - Present",
    location: "United States",
    highlights: [
      "Instructor/project evaluator for Tableau Data Analytics Program",
      "Assessed student project submissions and provided constructive feedback",
      "Developed project-specific comment banks for evaluator onboarding"
    ]
  },
  {
    company: "InDebted",
    role: "Data Scientist",
    period: "September 2021 - April 2023",
    location: "United Kingdom",
    highlights: [
      "Built & deployed Text Classifier model on AWS Sagemaker achieving 70% accuracy",
      "Implemented comms volume forecasting model with 74% MAPE",
      "Created dashboards to monitor model performance and track cost savings",
      "Followed MLOps best practices including experiment tracking and CI/CD pipelines"
    ]
  }
];

export const projects = [
  {
    id: "predictive-maintenance",
    title: "Predictive Asset Maintenance",
    category: "ai-engineering",
    description: "Ensemble models using Python integration with Qlik (Pytools library) for predicting equipment failures.",
    technologies: ["Python", "Qlik", "Machine Learning", "Predictive Analytics"],
    impact: "Reduced unexpected equipment downtime by 35%"
  },
  {
    id: "power-failure-prediction",
    title: "Weather-related Power Failure Prediction",
    category: "ai-engineering",
    description: "Implemented across Eastern Victoria Power Maintenance company for predicting weather-induced failures.",
    technologies: ["Python", "AWS", "Weather API", "Machine Learning"],
    impact: "Successfully deployed across Eastern Victoria"
  },
  {
    id: "construction-safety",
    title: "Construction Site Safety Monitoring",
    category: "ai-engineering",
    description: "Computer vision system for detecting lack of protective clothing with real-time alerts.",
    technologies: ["OpenCV", "AWS Sagemaker", "AWS Rekognition", "SMS Integration"],
    impact: "Real-time safety compliance monitoring"
  },
  {
    id: "client-profitability",
    title: "Client Profitability Dashboard",
    category: "data-viz",
    description: "Comprehensive dashboard tracking all costs and profits per client.",
    technologies: ["Tableau", "SQL", "Financial Analytics"],
    impact: "Improved client profitability tracking"
  },
  {
    id: "agent-scorecard",
    title: "CS Agent Performance Scorecard",
    category: "data-viz",
    description: "Dashboard tracking productivity, efficiency, compliance, and knowledge for 100+ CS agents.",
    technologies: ["Power BI", "SQL", "Performance Analytics"],
    impact: "Unified scoring system for agent performance"
  }
];

export const education = [
  {
    institution: "Deakin University",
    degree: "Master of Data Analytics",
    field: "Data Science",
    period: "2017 - 2019"
  },
  {
    institution: "Microsoft",
    degree: "Professional Program in Data Science",
    field: "Microsoft Azure Machine Learning",
    period: "2016 - 2017"
  },
  {
    institution: "Andhra University",
    degree: "Bachelor of Computer Science",
    field: "Mathematics and Computer Science",
    period: "2013 - 2016"
  }
];

export const techStack = {
  "Data Visualization": ["Tableau", "Power BI", "Qlik", "D3.js"],
  "Programming": ["Python", "SQL", "R", "JavaScript"],
  "Cloud & MLOps": ["AWS Sagemaker", "Azure ML", "MLflow", "Docker"],
  "Databases": ["SQL Server", "Snowflake", "AWS Redshift", "MongoDB"],
  "Machine Learning": ["TensorFlow", "scikit-learn", "PyTorch", "OpenCV"],
  "Big Data": ["Hadoop", "Spark", "Airflow", "Kafka"]
};

export const products = [
  {
    name: "BetTrackerX",
    description: "Sports betting analytics and tracking platform",
    url: "#", // Replace with actual URL
    highlights: ["Real-time odds tracking", "Performance analytics", "Risk management"]
  }
];

export const testimonials = [
  {
    name: "John Smith",
    role: "CTO, Eastern Victoria Power",
    content: "Zerub's predictive maintenance solution has transformed how we manage our power infrastructure.",
    company: "Eastern Victoria Power"
  },
  {
    name: "Sarah Johnson",
    role: "Head of Analytics, Cast Solutions",
    content: "His ability to translate complex data into actionable insights has been invaluable for our clients.",
    company: "Cast Solutions"
  }
];

export const contactInfo = {
  email: "contact@zerubroberts.com", // Replace with actual email
  linkedin: "https://linkedin.com/in/zerubroberts", // Replace with actual LinkedIn
  github: "https://github.com/zerubroberts", // Replace with actual GitHub
  location: "Melbourne, Australia"
};

export const blogPosts = [
  {
    id: 1,
    title: "Best Practices for Data Visualization in 2023",
    excerpt: "Learn the latest techniques and tools for creating impactful data visualizations that convey complex information effectively.",
    category: "Data Visualization",
    author: "Zerub Roberts",
    date: "October 15, 2023",
    image: "https://via.placeholder.com/800x500?text=Data+Visualization",
    tags: ["Tableau", "Power BI", "Visualization"]
  },
  {
    id: 2,
    title: "Getting Started with Machine Learning in Production",
    excerpt: "A comprehensive guide to deploying and monitoring machine learning models in production environments.",
    category: "AI Engineering",
    author: "Zerub Roberts",
    date: "September 22, 2023",
    image: "https://via.placeholder.com/800x500?text=ML+in+Production",
    tags: ["MLOps", "AWS", "Sagemaker"]
  },
  {
    id: 3,
    title: "The Future of Business Intelligence: 2024 Forecast",
    excerpt: "Explore upcoming trends in BI and how they're going to transform how organizations leverage data for decision-making.",
    category: "Business Intelligence",
    author: "Zerub Roberts",
    date: "November 5, 2023",
    image: "https://via.placeholder.com/800x500?text=Business+Intelligence",
    tags: ["Business Intelligence", "Trends", "Analytics"]
  },
  {
    id: 4,
    title: "Building Effective Data Dashboards for Executive Teams",
    excerpt: "Learn how to design and develop data dashboards that provide executives with the insights they need for strategic decision-making.",
    category: "Data Visualization",
    author: "Zerub Roberts",
    date: "August 18, 2023",
    image: "https://via.placeholder.com/800x500?text=Executive+Dashboards",
    tags: ["Dashboards", "Executive", "KPI"]
  },
  {
    id: 5,
    title: "Python vs. R for Data Science: Which Should You Choose?",
    excerpt: "A detailed comparison of Python and R for data science applications, with guidance on which to use for specific scenarios.",
    category: "Data Science",
    author: "Zerub Roberts",
    date: "July 30, 2023",
    image: "https://via.placeholder.com/800x500?text=Python+vs+R",
    tags: ["Python", "R", "Programming"]
  },
  {
    id: 6,
    title: "Introduction to Natural Language Processing",
    excerpt: "Discover the fundamentals of NLP and how it's revolutionizing the way machines understand human language.",
    category: "AI Engineering",
    author: "Zerub Roberts",
    date: "June 25, 2023",
    image: "https://via.placeholder.com/800x500?text=NLP+Introduction",
    tags: ["NLP", "AI", "Machine Learning"]
  },
  {
    id: 7,
    title: "Data Privacy in the Age of Big Data",
    excerpt: "Exploring the challenges and solutions for maintaining data privacy while leveraging big data analytics.",
    category: "Big Data",
    author: "Zerub Roberts",
    date: "May 12, 2023",
    image: "https://via.placeholder.com/800x500?text=Data+Privacy",
    tags: ["Privacy", "GDPR", "Big Data"]
  },
  {
    id: 8,
    title: "Advanced SQL Techniques for Data Analysis",
    excerpt: "Master complex SQL queries and techniques to extract valuable insights from your relational databases.",
    category: "Data Analysis",
    author: "Zerub Roberts",
    date: "April 8, 2023",
    image: "https://via.placeholder.com/800x500?text=Advanced+SQL",
    tags: ["SQL", "Database", "Analysis"]
  }
];
