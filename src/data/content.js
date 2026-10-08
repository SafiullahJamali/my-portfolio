export const profile = {
  name: 'Safiullah',
  title: 'Full Stack Developer',
  location: 'Karachi, Sindh, Pakistan',
  email: 'safiullahjamali123@gmail.com',
  phone: '+92 307 1841417',
  phoneHref: '+923071841417',
  github: 'https://github.com/SafiullahJamali',
  linkedin: 'https://www.linkedin.com/in/safiullah-devloper/',
  intro:
    'I craft reliable, user-focused web applications with PHP, Laravel, JavaScript, and MySQL. I care about clean architecture, thoughtful UI, and shipping work that software teams can trust.',
  about:
    'I am a BS Computer Science graduate from Quaid-e-Awam University of Engineering, Science and Technology (QUEST), Nawabshah, graduating in 2025 with a CGPA of 3.25/4.0. I am passionate about Full Stack Development and continuously improving my skills in modern web technologies. My career goal is to work in a leading software house where I can contribute to impactful projects while growing as a professional software engineer.',
}

export const skills = [
  {
    category: 'Frontend',
    accent: 'from-cyan-400 to-blue-500',
    items: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap 5', level: 88 },
      { name: 'JavaScript (ES6+)', level: 84 },
      { name: 'Responsive Web Design', level: 91 },
    ],
  },
  {
    category: 'Backend',
    accent: 'from-blue-500 to-violet-500',
    items: [
      { name: 'PHP', level: 86 },
      { name: 'Object-Oriented Programming (OOP)', level: 84 },
      { name: 'AJAX', level: 80 },
      { name: 'Laravel', level: 78 },
    ],
  },
  {
    category: 'Database',
    accent: 'from-violet-500 to-fuchsia-500',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'Database Design', level: 82 },
      { name: 'ERD', level: 80 },
    ],
  },
  {
    category: 'Tools',
    accent: 'from-sky-400 to-indigo-500',
    items: [
      { name: 'Git', level: 84 },
      { name: 'GitHub', level: 86 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    category: 'AI-Assisted Development',
    accent: 'from-cyan-300 to-purple-500',
    items: [
      { name: 'ChatGPT', level: 88 },
      { name: 'AI Coding Assistance', level: 85 },
      { name: 'Prompt Engineering', level: 83 },
      { name: 'Agentic Development Workflow', level: 80 },
    ],
  },
]

export const education = {
  university:
    'Quaid-e-Awam University of Engineering, Science and Technology (QUEST), Nawabshah',
  degree: 'BS Computer Science',
  cgpa: '3.25 / 4.0',
  year: '2025',
}

export const experience = [
  {
    role: 'Backend Developer Intern',
    org: 'Hidaya Institute of Science & Technology / Hidaya Software House',
    duration: 'April 2026 – August 2026',
    responsibilities: [
      'PHP Development',
      'MySQL Database Design',
      'OOP Programming',
      'AJAX Integration',
      'Bootstrap Development',
      'Responsive Design',
      'Git & GitHub Collaboration',
      'AI-Assisted Development Workflows',
    ],
  },
  {
    role: 'Web Developer Intern',
    org: 'High Tech Software House, Nawabshah',
    duration: 'June 2024 – July 2024',
    responsibilities: [
      'Website Development',
      'PHP and MySQL Projects',
      'Frontend and Backend Integration',
      'Bug Fixing and Testing',
    ],
  },
  {
    role: 'Computer Teacher & School In-Charge',
    org: 'Academic Leadership Role',
    duration: 'Teaching & Administration',
    responsibilities: [
      'Teaching Computer Science',
      'MS Office Training',
      'Computer Lab Management',
      'Student Guidance and Administration',
    ],
  },
]

export const projects = [
  {
    title: 'Online Blogging Application',
    status: 'Live',
    live: 'https://onlinebloggingapplication.22web.org/?i=1',
    description:
      'A dynamic blogging platform that allows users to create, manage, and publish blog posts through an interactive and user-friendly interface. The application includes authentication, content management, category organization, and responsive design principles.',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'PHP', 'OOP', 'AJAX', 'MySQL'],
  },
  {
    title: 'Group Chat Application',
    status: 'Live',
    live: 'https://groupchat.byethost4.com/?i=1',
    description:
      'A real-time group communication platform that enables multiple users to interact in shared chat rooms. The system focuses on user-friendly communication, responsive design, and efficient message handling.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'AJAX', 'MySQL'],
  },
  {
    title: 'Learning Management System (LMS)',
    status: 'Under Development',
    live: null,
    description:
      'A scalable Learning Management System being developed using Laravel. The platform includes role-based authentication, course management, student enrollment, live classes, attendance management, and academic progress tracking. The architecture is designed to support future frontend integration with React.js.',
    tech: [
      'Laravel',
      'PHP',
      'MySQL',
      'REST APIs',
      'Authentication',
      'Role Management',
      'Database Design',
    ],
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
