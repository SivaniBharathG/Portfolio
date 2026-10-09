import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BookOpen, BrainCircuit,
  Check, ChevronDown, Code2, ExternalLink, FileDown, Github, GraduationCap,
  HeartPulse, Mail, Menu, Monitor, Network, Radio, Send, Sparkles, Trophy,
  X, Zap
} from 'lucide-react'
import { achievements, certifications, memberships, profile, projects, skillGroups, type Project } from './data'

const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Certifications', 'certifications'], ['Achievements', 'achievements'], ['Education', 'education'],
  ['Resume', 'resume'], ['Contact', 'contact']
]

function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'blood') return <div className="visual visual-blood" aria-label="Decorative blood-unit monitoring preview">
    <div className="visual-top"><span className="live-dot"/> UNIT MONITOR <span className="visual-chip">TWIN / 01</span></div>
    <div className="blood-layout"><div className="bag"><div className="bag-cap"/><div className="bag-liquid"/></div><div className="metric-stack"><div><small>TEMP. ESTIMATE</small><strong>4.2<span>°C</span></strong><i className="mini-line"/></div><div><small>THERMAL EXPOSURE</small><strong>LOW</strong><i className="mini-line short"/></div><div><small>STATUS</small><strong className="cyan-text">MONITORING</strong></div></div></div>
    <div className="visual-bottom"><span>ESP32 · DS18B20 · MPU6050</span><span className="pulse-line">⌁ ⌁ ⌁ ⌁ ⌁ ⌁</span></div>
  </div>
  if (type === 'news') return <div className="visual visual-news"><div className="dash-head"><span className="tiny-logo">N</span><span>THE EXECUTIVE SIGNAL</span><span className="status-pill">AGENTS READY</span></div><div className="signal-title">Your signal.<br/><em>Less noise.</em></div><div className="news-row"><span className="news-icon"><Network size={15}/></span><span><b>Discover Agent</b><small>Finding relevant signals</small></span><i>✓</i></div><div className="news-row"><span className="news-icon purple"><BrainCircuit size={15}/></span><span><b>Research Agent</b><small>Gathering context</small></span><i>✓</i></div><div className="news-row"><span className="news-icon blue"><Check size={15}/></span><span><b>Verification Loop</b><small>Reviewing the summary</small></span><i className="working">···</i></div></div>
  if (type === 'tutor') return <div className="visual visual-tutor"><div className="tutor-side"><div className="tutor-logo"><Sparkles size={17}/></div><span className="side-line active"/><span className="side-line"/><span className="side-line"/></div><div className="tutor-main"><div className="tutor-heading">Your learning space <span>●</span></div><div className="pdf-chip"><BookOpen size={18}/><span><b>study-notes.pdf</b><small>Learning material · PDF</small></span><Check size={14}/></div><div className="chat-bubble">Can you help me understand this concept?</div><div className="chat-answer"><Sparkles size={14}/><span>Let's explore it together, one step at a time.</span></div><div className="chat-input">Ask a question... <ArrowUpRight size={14}/></div></div></div>
  return <div className="visual visual-planner"><div className="planner-heading"><span><BookOpen size={15}/> WEEKLY STUDY PLAN</span><span className="status-pill">PERSONALIZED</span></div><div className="planner-date">Your next steps <small>• 4 focus sessions</small></div><div className="planner-task"><span className="task-check">✓</span><span><b>Python practice</b><small>Logic & problem solving</small></span><span className="task-time">45 min</span></div><div className="planner-task"><span className="task-check purple-check">2</span><span><b>SQL fundamentals</b><small>Queries & joins</small></span><span className="task-time">30 min</span></div><div className="planner-task"><span className="task-check blue-check">3</span><span><b>Review & quiz</b><small>Active recall</small></span><span className="task-time">20 min</span></div><div className="planner-progress"><span/></div></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [selected, setSelected] = useState<Project | null>(null)
  const [toast, setToast] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-30% 0px -60% 0px' })
    navItems.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [selected])
  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setToast('Email copied to clipboard') }
    catch { setToast(profile.email) }
    window.setTimeout(() => setToast(''), 2500)
  }

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="navbar">
      <a className="brand" href="#home" onClick={e => {e.preventDefault(); goTo('home')}} aria-label="Sivani Bharath home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SIVANI BHARATH<small>AI & DATA SCIENCE</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={e => {e.preventDefault();goTo(id)}}>{label}</a>)}
      </nav>
      <a className="nav-cta" href={`mailto:${profile.email}`}>Let's connect <ArrowUpRight size={14}/></a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> OPEN TO LEARNING & OPPORTUNITIES</div>
          <h1>{profile.headline.split('Intelligent')[0]}<span>Intelligent</span><br/>Systems for <span className="gradient-text">Real-World</span><br/>Problems<span className="period">.</span></h1>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => goTo('projects')}>Explore my projects <ArrowDownRight size={17}/></button><a className="button button-secondary" href="/assets/resume.pdf" download="Sivani-Bharath-Resume.pdf"><FileDown size={17}/> Download resume</a></div>
          <div className="hero-socials"><span>FIND ME ON</span><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ExternalLink size={15}/> LinkedIn</a>{profile.github ? <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a> : <span className="muted-social"><Github size={15}/> GitHub · add URL</span>}<button onClick={copyEmail}><Mail size={15}/> Email</button></div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-outer"/><div className="orbit orbit-inner"/>
          <div className="hero-core"><div className="core-grid"/><div className="core-initials">S<span>B</span></div><div className="core-caption">INTELLIGENCE<br/>IN MOTION</div></div>
          <div className="float-card float-ai"><span className="float-icon violet"><BrainCircuit size={17}/></span><span><b>Generative AI</b><small>LLMs · RAG</small></span><span className="float-pulse"/></div>
          <div className="float-card float-iot"><span className="float-icon cyan"><Radio size={17}/></span><span><b>Digital Twins</b><small>IoT · Healthcare</small></span></div>
          <div className="float-card float-ml"><span className="float-icon blue"><Code2 size={17}/></span><span><b>Machine Learning</b><small>Build · Learn · Iterate</small></span></div>
          <div className="orbit-node node-one"/><div className="orbit-node node-two"/><div className="orbit-node node-three"/>
          <div className="art-caption"><span className="caption-line"/> EXPLORING THE FRONTIER OF AI</div>
        </div>
        <div className="hero-bottom"><span><span className="scroll-dot"/> SCROLL TO EXPLORE</span><span>01 / 09</span></div>
      </section>

      <section className="section-wrap section-block" id="about">
        <SectionHeading index="01" label="A LITTLE ABOUT ME" title={<>Curiosity into <span className="gradient-text">creation.</span></>} description="I like turning ideas into practical, thoughtful technology."/>
        <div className="about-grid">
          <div className="about-copy"><p>{profile.about}</p><p>My focus is on learning by building: understanding the problem, exploring the right tools, and being honest about what a prototype can—and cannot—do.</p><div className="interest-tags"><span>Generative AI & LLMs</span><span>Agentic workflows</span><span>Healthcare AI</span><span>Computer vision</span><span>AI for education</span><span>IoT monitoring</span></div></div>
          <div className="profile-card"><div className="profile-card-top"><div className="avatar-monogram">SB<span>✳</span></div><div><h3>{profile.name}</h3><p>AI & Data Science Student</p></div><span className="profile-available"><i/> STUDENT</span></div><div className="profile-divider"/><div className="profile-detail"><span>EDUCATION</span><b>{profile.college}</b></div><div className="profile-detail-row"><div className="profile-detail"><span>CGPA</span><b>{profile.cgpa}</b></div><div className="profile-detail"><span>STATUS</span><b className="cyan-text">Pursuing B.Tech</b></div></div><div className="profile-card-footer"><GraduationCap size={16}/><span>Building foundations. Exploring possibilities.</span></div></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <SectionHeading index="02" label="MY TOOLKIT" title={<>Tools for <span className="gradient-text">building.</span></>} description="A growing set of technologies I use and explore across software, AI and connected systems."/>
        <div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-card" key={group.title}><div className={`skill-icon skill-icon-${i}`}><span>{group.icon}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        <p className="skills-note"><Sparkles size={14}/> Java is listed as a learning/development skill. Skills are not represented by arbitrary percentage ratings.</p>
      </section>

      <section className="section-wrap section-block" id="projects">
        <SectionHeading index="03" label="SELECTED WORK" title={<>Ideas made <span className="gradient-text">tangible.</span></>} description="Projects at the intersection of intelligent software, healthcare, education and automation."/>
        <div className="projects-grid">{projects.map((project, i) => <article className={`project-card ${i === 0 ? 'featured-project' : ''}`} key={project.id}>
          <div className="project-visual-wrap"><ProjectVisual type={project.visual}/><span className="project-number">0{i+1}</span></div>
          <div className="project-content"><div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div><h3>{project.shortTitle}</h3><p>{project.description}</p><div className="tech-tags">{project.tech.slice(0, 5).map(t => <span key={t}>{t}</span>)}{project.tech.length > 5 && <span>+{project.tech.length - 5}</span>}</div>
            <div className="project-actions"><button className="text-button" onClick={() => setSelected(project)}>View details <ArrowUpRight size={15}/></button>{project.github && <a className="text-button" href={project.github} target="_blank" rel="noreferrer">Source code <Github size={14}/></a>}{project.demo && <a className="text-button" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a>}</div>
          </div></article>)}</div>
        <div className="project-footnote"><span className="footnote-mark">i</span><p>Some entries describe ongoing or evolving project concepts. Feature descriptions should be kept in sync with each project's current implementation. Source/demo links appear when genuine URLs are added to <code>src/data.ts</code>.</p></div>
      </section>

      <section className="section-wrap section-block" id="certifications">
        <SectionHeading index="04" label="CONTINUOUS LEARNING" title={<>Learning that <span className="gradient-text">compounds.</span></>} description="Coursework and learning milestones. Add certificate links, dates and credential IDs when available."/>
        <div className="cert-list">{certifications.map((cert, i) => <article className="cert-row" key={cert.title}><div className="cert-index">{String(i+1).padStart(2,'0')}</div><div className="cert-icon"><BookOpen size={18}/></div><div className="cert-info"><h3>{cert.title}</h3><p>{cert.provider} <span>·</span> Course / learning record</p></div><div className="cert-fields"><span>{cert.date || 'Date not added'}</span>{cert.url ? <a href={cert.url} target="_blank" rel="noreferrer" aria-label={`Open ${cert.title} certificate`}><ExternalLink size={16}/></a> : <span className="cert-placeholder">Add link</span>}</div></article>)}</div>
        <div className="discipline-star"><div className="star-emblem"><Award size={22}/></div><div><span className="eyebrow-mini">ACADEMIC RECOGNITION</span><h3>NPTEL Discipline Star</h3><p>Listed separately as recognition. Add supporting details when ready.</p></div><span className="recognition-label">RECOGNITION</span></div>
      </section>

      <section className="section-wrap section-block" id="achievements">
        <SectionHeading index="05" label="MILESTONES" title={<>A few moments worth <span className="gradient-text">celebrating.</span></>} description="Teamwork, curiosity and learning beyond the classroom."/>
        <div className="awards-grid">{achievements.map((a, i) => <article className="award-card" key={a.title}><div className="award-top"><span className="award-icon">{a.icon === 'trophy' ? <Trophy size={21}/> : a.icon === 'star' ? <Sparkles size={21}/> : <Award size={21}/>}</span><span className="award-year">{a.year || 'Academic'}</span></div><h3>{a.title}</h3><p>{a.org}</p><div className="award-prize">{a.prize}</div><div className="award-bottom"><span>ACHIEVEMENT</span><ArrowUpRight size={15}/></div></article>)}</div>
        <div className="membership-row"><span className="membership-label">MEMBERSHIPS & ACTIVITIES</span>{memberships.map(m => <span className="membership-chip" key={m}>{m}</span>)}</div>
      </section>

      <section className="section-wrap section-block" id="education">
        <SectionHeading index="06" label="ACADEMIC BACKGROUND" title={<>The foundation <span className="gradient-text">so far.</span></>} description="An academic path shaped by technology, experimentation and steady learning."/>
        <div className="education-timeline"><div className="timeline-line"/><article className="education-item current"><span className="timeline-node"><GraduationCap size={17}/></span><div className="education-year">UNDERGRADUATE · PURSUING</div><div className="education-card"><div className="education-card-heading"><div><h3>B.Tech — Artificial Intelligence and Data Science</h3><p>National Engineering College, Kovilpatti</p></div><span className="current-badge">CURRENT</span></div><div className="education-stats"><div><span>CGPA</span><b>{profile.cgpa}</b><small>Up to 5th semester</small></div><div><span>FOCUS</span><b>AI + Software</b><small>Projects & foundations</small></div></div></div></article>
          <article className="education-item"><span className="timeline-node"><BookOpen size={16}/></span><div className="education-year">HIGHER SECONDARY</div><div className="education-card compact"><h3>Higher Secondary Certificate (HSC)</h3><p>Ramco Vidyalaya, R.R. Nagar</p><div className="education-score"><span>Final score</span><b>{profile.hsc}</b></div></div></article>
          <article className="education-item"><span className="timeline-node"><BookOpen size={16}/></span><div className="education-year">SECONDARY SCHOOL</div><div className="education-card compact"><h3>Secondary School Leaving Certificate (SSLC)</h3><p>Ramco Vidyalaya, R.R. Nagar</p><div className="education-score"><span>Final score</span><b>{profile.sslc}</b></div></div></article>
        </div>
      </section>

      <section className="resume-section section-wrap" id="resume"><div className="resume-glow"/><div className="resume-icon"><FileDown size={26}/></div><div className="resume-copy"><span className="eyebrow">THE ONE-PAGE OVERVIEW</span><h2>Explore my <span className="gradient-text">resume.</span></h2><p>A concise overview of my education, technical skills, projects and achievements—ready for a closer look.</p><div className="resume-points"><span><Check size={14}/> Education & coursework</span><span><Check size={14}/> Selected projects</span><span><Check size={14}/> Skills & recognition</span></div></div><div className="resume-action"><a className="button button-primary" href="/assets/resume.pdf" download="Sivani-Bharath-Resume.pdf">Download resume PDF <FileDown size={17}/></a><a className="resume-preview-link" href="/assets/resume.pdf" target="_blank" rel="noreferrer">Preview PDF <ArrowUpRight size={14}/></a></div><div className="resume-watermark">CV</div></section>

      <section className="section-wrap section-block contact-section" id="contact">
        <SectionHeading index="07" label="GET IN TOUCH" title={<>Let's build something <span className="gradient-text">meaningful.</span></>} description="Interested in AI, software development, or solving a thoughtful real-world problem? I'd be happy to connect."/>
        <div className="contact-grid"><div className="contact-intro"><h3>Have an idea or opportunity?</h3><p>I'm keen to learn from people building useful technology and to explore opportunities where I can grow, contribute and keep learning.</p><a className="button button-primary" href={`mailto:${profile.email}?subject=Let's%20connect`}>Say hello <ArrowUpRight size={16}/></a><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16}/> LinkedIn <ArrowUpRight size={13}/></a>{profile.github ? <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a> : <span className="social-placeholder"><Github size={16}/> Add GitHub URL in src/data.ts</span>}</div></div>
          <div className="contact-details"><button className="contact-detail" onClick={copyEmail}><span className="contact-detail-icon"><Mail size={18}/></span><span><small>EMAIL</small><b>{profile.email}</b></span><ArrowUpRight size={16}/></button><a className="contact-detail" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-detail-icon"><ExternalLink size={18}/></span><span><small>LINKEDIN</small><b>linkedin.com/in/sivanibharathg</b></span><ArrowUpRight size={16}/></a><div className="contact-detail non-link"><span className="contact-detail-icon"><Monitor size={18}/></span><span><small>BASED IN</small><b>Sattur, Virudhunagar, Tamil Nadu</b></span></div><div className="contact-note"><Zap size={15}/><span>Let's build intelligent solutions that make a meaningful impact.</span></div></div>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home" onClick={e => {e.preventDefault();goTo('home')}}><span className="brand-mark">S<span>.</span></span><span className="brand-name">SIVANI BHARATH<small>AI & DATA SCIENCE</small></span></a><p>Building intelligent systems for real-world impact.</p><div className="footer-links">{navItems.slice(0,5).map(([label,id]) => <a key={id} href={`#${id}`} onClick={e => {e.preventDefault();goTo(id)}}>{label}</a>)}</div><span className="copyright">© {new Date().getFullYear()} G Sivani Bharath. Built with curiosity.</span></footer>

    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={e => {if (e.target === e.currentTarget) setSelected(null)}}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details"><X size={20}/></button><div className="modal-visual"><ProjectVisual type={selected.visual}/></div><span className="eyebrow">{selected.category}</span><h2 id="modal-title">{selected.title}</h2><p className="modal-description">{selected.description}</p><div className="modal-section"><h3>Problem</h3><p>{selected.problem}</p></div><div className="modal-section"><h3>Solution</h3><p>{selected.solution}</p></div><div className="modal-section"><h3>Contribution</h3><p>{selected.contribution}</p></div><div className="modal-section"><h3>Key features</h3><ul>{selected.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div><div className="modal-section"><h3>Technology</h3><div className="tech-tags modal-tech">{selected.tech.map(t => <span key={t}>{t}</span>)}</div></div><div className="modal-actions">{selected.github && <a className="button button-primary" href={selected.github} target="_blank" rel="noreferrer">View source code <Github size={16}/></a>}{selected.demo && <a className="button button-secondary" href={selected.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={16}/></a>}{!selected.github && !selected.demo && <p className="modal-link-note">Source code and demo links will appear here after genuine URLs are added in <code>src/data.ts</code>.</p>}</div></section></div>}
    {toast && <div className="toast" role="status"><Check size={15}/>{toast}</div>}
  </div>
}

function SectionHeading({ index, label, title, description }: { index: string; label: string; title: React.ReactNode; description: string }) {
  return <div className="section-heading"><div className="section-heading-main"><span className="section-label"><span>{index}</span>{label}</span><h2>{title}</h2></div><p>{description}</p></div>
}

export default App
