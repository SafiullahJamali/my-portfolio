import { profile } from '../data/content'

export function downloadCV() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Safiullah — Full Stack Developer CV</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; color: #0f172a; max-width: 800px; margin: 40px auto; padding: 0 24px; line-height: 1.5; }
    h1 { margin: 0; font-size: 28px; }
    h2 { border-bottom: 2px solid #2563eb; padding-bottom: 4px; font-size: 16px; text-transform: uppercase; letter-spacing: .08em; color: #1d4ed8; }
    .meta { color: #334155; margin: 8px 0 24px; }
    ul { padding-left: 18px; }
    .role { font-weight: 700; }
  </style>
</head>
<body>
  <h1>Safiullah</h1>
  <p class="meta">Full Stack Developer · Karachi, Sindh, Pakistan<br/>
  ${profile.email} · ${profile.phone}<br/>
  GitHub: ${profile.github}<br/>
  LinkedIn: ${profile.linkedin}</p>

  <h2>Professional Summary</h2>
  <p>${profile.about}</p>

  <h2>Education</h2>
  <p><strong>BS Computer Science</strong> — Quaid-e-Awam University of Engineering, Science and Technology (QUEST), Nawabshah<br/>CGPA 3.25 / 4.0 · Passing Year 2025</p>

  <h2>Experience</h2>
  <p class="role">Backend Developer Intern — Hidaya Institute of Science &amp; Technology / Hidaya Software House</p>
  <p>April 2026 – August 2026</p>
  <ul>
    <li>PHP Development</li><li>MySQL Database Design</li><li>OOP Programming</li>
    <li>AJAX Integration</li><li>Bootstrap Development</li><li>Responsive Design</li>
    <li>Git &amp; GitHub Collaboration</li><li>AI-Assisted Development Workflows</li>
  </ul>
  <p class="role">Web Developer Intern — High Tech Software House, Nawabshah</p>
  <p>June 2024 – July 2024</p>
  <ul>
    <li>Website Development</li><li>PHP and MySQL Projects</li>
    <li>Frontend and Backend Integration</li><li>Bug Fixing and Testing</li>
  </ul>
  <p class="role">Computer Teacher &amp; School In-Charge</p>
  <ul>
    <li>Teaching Computer Science</li><li>MS Office Training</li>
    <li>Computer Lab Management</li><li>Student Guidance and Administration</li>
  </ul>

  <h2>Projects</h2>
  <p class="role">Online Blogging Application</p>
  <p>Live: https://onlinebloggingapplication.22web.org/?i=1</p>
  <p>Dynamic blogging platform with authentication, content management, categories, and responsive design. HTML5, CSS3, Bootstrap 5, JavaScript, PHP, OOP, AJAX, MySQL.</p>
  <p class="role">Group Chat Application</p>
  <p>Live: https://groupchat.byethost4.com/?i=1</p>
  <p>Group communication platform for shared chat rooms with efficient message handling. HTML5, CSS3, JavaScript, PHP, AJAX, MySQL.</p>
  <p class="role">Learning Management System (LMS) — Under Development</p>
  <p>Laravel LMS with role-based authentication, course management, enrollment, live classes, attendance, and progress tracking. Laravel, PHP, MySQL, REST APIs.</p>

  <h2>Skills</h2>
  <p><strong>Frontend:</strong> HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), Responsive Web Design</p>
  <p><strong>Backend:</strong> PHP, OOP, AJAX, Laravel</p>
  <p><strong>Database:</strong> MySQL, Database Design, ERD</p>
  <p><strong>Tools:</strong> Git, GitHub, VS Code</p>
  <p><strong>AI-Assisted Development:</strong> ChatGPT, AI Coding Assistance, Prompt Engineering, Agentic Development Workflow</p>
</body>
</html>`

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Safiullah-Full-Stack-Developer-CV.html'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
