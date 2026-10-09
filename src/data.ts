export type Project = {
  id: string; title: string; shortTitle: string; category: string; description: string;
  problem: string; solution: string; contribution: string; features: string[];
  tech: string[]; github?: string; demo?: string; visual: 'blood' | 'news' | 'tutor' | 'planner';
  status: string;
}

export const profile = {
  name: 'G Sivani Bharath',
  role: 'B.Tech Artificial Intelligence & Data Science Student',
  college: 'National Engineering College, Kovilpatti',
  cgpa: '7.77 / 10.0',
  hsc: '72.4%',
  sslc: '88.4%',
  email: 'sivanibharathgm@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sivanibharathg',
  github: '', // Add your real GitHub profile URL here.
  headline: 'Building Intelligent Systems for Real-World Problems',
  subtitle: 'AI & Data Science Student  ·  Generative AI  ·  Agentic AI  ·  Healthcare AI',
  intro: 'I am an Artificial Intelligence and Data Science student passionate about building intelligent systems that combine AI, software engineering, and real-world problem solving. My interests include generative AI, multi-agent systems, computer vision, and healthcare-focused digital twin applications.',
  about: 'I enjoy exploring how intelligent software can solve practical problems—from monitoring sensitive healthcare environments to making learning more interactive. I am continuing to strengthen my foundations in programming, machine learning, and full-stack development while building projects that connect ideas with working prototypes.'
}

export const skillGroups = [
  { title: 'Programming', icon: '⌘', skills: ['Python', 'C', 'Java · learning'] },
  { title: 'AI & Machine Learning', icon: '✳', skills: ['Machine Learning', 'Scikit-learn', 'NLP', 'LLMs', 'RAG', 'Multi-Agent AI', 'Computer Vision', 'OpenCV'] },
  { title: 'Data & Databases', icon: '▤', skills: ['SQL', 'MySQL', 'Data Processing', 'Analytics'] },
  { title: 'Development', icon: '⌘', skills: ['Flask', 'FastAPI', 'React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'REST APIs'] },
  { title: 'IoT & Emerging Tech', icon: '⌁', skills: ['Digital Twins', 'IoT', 'ESP32', 'Sensor Data', 'Hardware–Software Integration'] },
  { title: 'Tools', icon: '⚙', skills: ['Git', 'GitHub', 'VS Code', 'Streamlit'] },
]

export const projects: Project[] = [
  {
    id: 'hemotwin', title: 'HemoTwin — Multi-Physics Digital Surrogate for Hematic Kinetic Stability Forecasting',
    shortTitle: 'HemoTwin', category: 'Healthcare AI · Digital Twin · IoT',
    description: 'A proposed cyber-physical blood-unit monitoring and stability-forecasting system that combines sensor telemetry with computational modelling.',
    problem: 'Blood units experience changing environmental conditions during storage and transportation. Monitoring temperature and movement can help surface potential handling risks, but a sensor reading alone does not establish blood quality.',
    solution: 'HemoTwin combines an external sensor clip, ESP32-based data acquisition, thermal estimation and kinetic modelling to visualize exposure patterns and estimate stability trends for each tracked unit.',
    contribution: 'Contributed to sensor-data processing and computational analysis, and worked with the team on hardware integration and the monitoring dashboard.',
    features: ['ESP32 sensor integration with DS18B20 temperature sensing and MPU6050 motion data', 'Non-invasive external blood-bag monitoring concept', 'Surface-to-core temperature estimation and cumulative thermal exposure analysis', 'Arrhenius-based kinetic stability modelling and estimated remaining safe time visualization', 'Motion-related alerts, LED/buzzer thresholds and QR-based traceability concept'],
    tech: ['ESP32', 'Python', 'Flask', 'IoT', 'DS18B20', 'MPU6050', 'Digital Twin', 'Predictive Modelling'],
    visual: 'blood', status: 'Ongoing'
  },
  {
    id: 'newspulse', title: 'NewsPulse — The Executive Signal', shortTitle: 'NewsPulse',
    category: 'Agentic AI · Generative AI · Agentic RAG',
    description: 'An agentic information-intelligence concept designed to retrieve, verify and summarize news according to user roles and interests.',
    problem: 'Professionals can be overwhelmed by a large volume of news and need concise, relevant briefings that are easier to scan.',
    solution: 'A role-aware workflow organizes news discovery and summarization into stages, with a verification loop intended to improve the usefulness and reliability of briefings.',
    contribution: 'Project concept and implementation details can be updated as the build evolves. Keep this description aligned with the features present in your current repository.',
    features: ['Role-based information personalization', 'News discovery and retrieval', 'Multi-stage workflow for search, fetching, writing and verification', 'RAG-supported summarization concept', 'Briefing history and feedback workflow'],
    tech: ['Python', 'Flask', 'React', 'TypeScript', 'LLMs', 'Groq', 'Llama 3.3', 'RAG'],
    visual: 'news', status: 'Project'
  },
  {
    id: 'socratic', title: 'Socratic Bot — AI-Powered Learning Assistant', shortTitle: 'Socratic Bot',
    category: 'Generative AI · EdTech · Conversational AI',
    description: 'An AI-powered learning assistant concept that supports interactive study using educational material and conversational interaction.',
    problem: 'Students often need a more interactive way to revisit learning materials, ask questions and track their study sessions.',
    solution: 'A conversational learning interface can connect uploaded PDFs and study context to document-based questions, with implementation-specific capabilities enabled as the project develops.',
    contribution: 'Built around the idea of document-grounded learning. Update the feature list to match what is implemented in the current version.',
    features: ['Conversational learning interface', 'PDF learning-material upload concept', 'Chat history and conversation management', 'Document-based question answering where implemented', 'Student-friendly study experience'],
    tech: ['Python', 'FastAPI', 'Gemini API', 'PDF Processing', 'Generative AI', 'Streamlit'],
    visual: 'tutor', status: 'Project'
  },
  {
    id: 'study-planner', title: 'Study Planner AI Agent — Personalized Multi-Agent Study Planning', shortTitle: 'Study Planner AI',
    category: 'Agentic AI · Productivity · Education',
    description: 'A Python-based study-planning project concept that organizes preparation around exam dates, available hours, subjects and topics.',
    problem: 'Turning a syllabus and a deadline into manageable daily study sessions can be difficult without a clear plan.',
    solution: 'A multi-agent workflow is designed to break planning into research, summarization, quiz generation and scheduling tasks.',
    contribution: 'Project concept and implementation details can be edited to accurately reflect the current build.',
    features: ['Exam-date and topic-based planning', 'Personalized schedules from available study hours', 'Researcher agent for learning resources', 'Summarizer and quiz-maker agent concepts', 'Scheduler and feedback loop concept'],
    tech: ['Python', 'FastAPI', 'Streamlit', 'Pydantic', 'Multi-Agent Systems', 'AI Planning'],
    visual: 'planner', status: 'Project'
  }
]

export const certifications = [
  'The Joy of Computing using Python',
  'Technical English for Engineers',
  'Responsible & Safe AI Systems',
  'Introduction to Internet of Things',
  'Introduction to Industry 4.0 and Industrial Internet of Things',
  'E-Business',
  'Business Intelligence & Analytics',
  'Cloud Computing',
  'Climate Risk, Adaptation and Sustainable Development'
].map((title, index) => ({
  title,
  provider: index === 8 ? 'Provider details editable' : 'NPTEL',
  credentialId: '',
  date: '',
  url: ''
}))

export const achievements = [
  { title: 'Second Prize — Hacfinity Hackathon', org: 'Ramco Institute of Technology', prize: '₹10,000', year: '2024', icon: 'trophy' },
  { title: "First Prize — NEC SYNAPX’26", org: 'National Engineering College', prize: '₹2,500', year: '2026', icon: 'award' },
  { title: 'NPTEL Discipline Star', org: 'Academic Recognition', prize: 'Recognition', year: '', icon: 'star' },
]

export const memberships = ['NCC · Active Cadet', 'NDLI Club · Member', 'ISTE · Member']
