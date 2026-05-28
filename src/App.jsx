import { useState } from 'react';
import './App.css';

const projects = [
  {
    id: 1,
    title: '3-Tier AWS Architecture',
    desc: 'Production-grade multi-tier architecture with load balancing, auto-scaling, and high availability.',
    fullDesc: 'Designed a robust 3-tier AWS architecture that demonstrates enterprise-level infrastructure design. Implemented multi-AZ deployment for fault tolerance, configured ELB for load balancing, and set up auto-scaling groups to handle variable workloads. Showcases best practices in security, performance, and cost optimization.',
    techs: ['AWS EC2', 'RDS', 'ELB', 'Auto Scaling', 'CloudFormation'],
    features: ['Multi-AZ deployment', 'Auto-scaling groups', 'Load balancer setup', 'Security groups', 'RDS database'],
    link: 'https://github.com/Ferdev49/devops-lab/tree/main/projects/project1-3tier-aws',
  },
  {
    id: 2,
    title: 'Microservices with Kubernetes',
    desc: 'Orchestrated microservices deployment with self-healing, auto-scaling, and rolling updates.',
    fullDesc: 'Built a complete Kubernetes cluster running 8+ microservices with advanced orchestration patterns. Implemented service mesh for inter-service communication, configured horizontal pod autoscaling, and set up rolling updates for zero-downtime deployments.',
    techs: ['Kubernetes', 'Docker', 'Service Mesh', 'Networking', 'YAML'],
    features: ['8+ microservices', 'HPA configured', 'Rolling updates', 'Service mesh', 'Network policies'],
    link: 'https://github.com/Ferdev49/devops-lab/tree/main/projects/project2-microservices-k8s',
  },
  {
    id: 3,
    title: 'CI/CD Pipeline with GitHub Actions',
    desc: 'Complete automated pipeline from code push to production deployment.',
    fullDesc: 'Engineered a CI/CD pipeline that automates the entire software delivery process. Includes build stages, automated testing (18+ test cases), artifact creation, and production deployment to Kubernetes. Achieves 69-second full cycle time with 100% test pass rate.',
    techs: ['GitHub Actions', 'Docker', 'Kubernetes', 'Testing', 'Automation'],
    features: ['5 workflows', '18+ test cases', '100% pass rate', 'Auto-deployment', 'Artifact registry'],
    link: 'https://github.com/Ferdev49/devops-lab/tree/main/projects/project3-cicd-pipeline',
  },
  {
    id: 4,
    title: 'Docker Multi-Container',
    desc: 'Full-stack app con Flask + React + PostgreSQL orquestada con Docker Compose en entorno local y producción.',
    fullDesc: 'Implementé una arquitectura multi-contenedor con Docker Compose integrando un backend Flask, frontend React y base de datos PostgreSQL. Configuré redes internas entre servicios, volúmenes persistentes, variables de entorno seguras y un reverse proxy con Nginx.',
    techs: ['Docker', 'Docker Compose', 'Flask', 'React', 'PostgreSQL', 'Nginx'],
    features: ['3 servicios orquestados', 'Redes Docker internas', 'Volúmenes persistentes', 'Reverse proxy Nginx', 'Variables de entorno seguras'],
    link: 'https://github.com/Ferdev49/proyecto4-docker-compose',
  },
  {
    id: 5,
    title: 'Terraform VPC',
    desc: 'Infraestructura de red AWS completa definida como código con subnets públicas/privadas, NAT Gateway e Internet Gateway.',
    fullDesc: 'Diseñé y desplegué una VPC de producción en AWS usando Terraform como IaC. La arquitectura incluye subnets públicas y privadas en múltiples AZs, NAT Gateway, Internet Gateway, Route Tables y Security Groups. El módulo es reutilizable y parametrizable.',
    techs: ['Terraform', 'AWS VPC', 'AWS Networking', 'IaC', 'Multi-AZ'],
    features: ['VPC con subnets multi-AZ', 'NAT Gateway & IGW', 'Route Tables configuradas', 'Security Groups', 'Código Terraform modular'],
    link: 'https://github.com/Ferdev49/proyecto5-terraform-vpc',
  },
  {
    id: 6,
    title: 'ECS Fargate + ALB',
    desc: 'Contenedores serverless en AWS ECS Fargate con Application Load Balancer y auto-scaling automático.',
    fullDesc: 'Desplegué contenedores en AWS ECS Fargate eliminando la gestión de servidores EC2. La arquitectura incluye un Application Load Balancer, Task Definitions, ECS Services con auto-scaling basado en CPU/memoria, ECR para el registry de imágenes y CloudWatch para logs y métricas.',
    techs: ['AWS ECS', 'Fargate', 'ALB', 'ECR', 'CloudWatch', 'Auto Scaling'],
    features: ['Contenedores serverless', 'Load Balancer configurado', 'Auto-scaling ECS', 'ECR image registry', 'Logs en CloudWatch'],
    link: 'https://github.com/Ferdev49/proyecto6-ecs-fargate-alb',
  },
  {
    id: 7,
    title: 'Serverless Website',
    desc: 'Sitio web estático con hosting en S3, CDN global con CloudFront y funciones Lambda en el edge.',
    fullDesc: 'Construí una arquitectura serverless con S3 como almacenamiento estático, CloudFront como CDN global, certificado SSL/TLS con AWS Certificate Manager y Lambda@Edge para lógica en el edge. La arquitectura escala automáticamente a millones de peticiones.',
    techs: ['AWS S3', 'CloudFront', 'Lambda', 'ACM', 'Route 53', 'Serverless'],
    features: ['Hosting S3 estático', 'CDN CloudFront global', 'SSL/TLS con ACM', 'Lambda@Edge', 'Alta disponibilidad'],
    link: 'https://github.com/Ferdev49/proyecto7-serverless-website',
  },
  {
    id: 8,
    title: 'RDS Aurora MySQL',
    desc: 'Base de datos Aurora MySQL en AWS con Multi-AZ, réplicas de lectura y backups automáticos.',
    fullDesc: 'Implementé un cluster de Amazon Aurora MySQL con configuración Multi-AZ para alta disponibilidad y failover automático. Configuré réplicas de lectura, backups automáticos con retención de 7 días, cifrado en reposo con KMS, y acceso restringido a subnets privadas.',
    techs: ['AWS RDS', 'Aurora MySQL', 'Multi-AZ', 'KMS', 'VPC', 'Terraform'],
    features: ['Aurora MySQL Multi-AZ', 'Réplicas de lectura', 'Backups automáticos', 'Cifrado con KMS', 'Acceso solo desde VPC privada'],
    link: 'https://github.com/Ferdev49/proyecto8-rds-aurora',
  },
  {
    id: 9,
    title: 'Monitoring & Alerts',
    desc: 'Sistema de monitoreo y alertas con CloudWatch, SNS y EventBridge para infraestructura AWS completa.',
    fullDesc: 'Diseñé un sistema de observabilidad completo para infraestructura AWS usando CloudWatch para métricas y logs, SNS para notificaciones multi-canal (email, SMS, Slack), EventBridge para automatización de eventos. Incluye dashboards personalizados y runbooks automatizados.',
    techs: ['CloudWatch', 'SNS', 'EventBridge', 'AWS Lambda', 'Dashboards', 'Alerting'],
    features: ['Dashboards CloudWatch', 'Alarmas multi-métrica', 'Notificaciones SNS', 'Automatización EventBridge', 'Runbooks de incidentes'],
    link: 'https://github.com/Ferdev49/proyecto9-monitoring-alerting',
  },
];

const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function App() {
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(''); // '' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mgoqkqzb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* ── Navigation ── */}
      <nav>
        <div className="logo">
          <div className="logo-bg">FB</div>
          <span>Fer Becerril</span>
        </div>
        <ul>
          {[
            { label: 'Home',     id: 'home' },
            { label: 'About',    id: 'about' },
            { label: 'Skills',   id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Contact',  id: 'contact' },
          ].map(({ label, id }) => (
            <li key={id}>
              <button className="nav-btn" onClick={() => scroll(id)}>{label}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="home">
        <h1>Junior DevOps &<br />Cloud Engineer</h1>
        <p>Building scalable infrastructure with passion</p>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">9</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">AWS</div>
            <div className="stat-label">Certified</div>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => scroll('projects')}>View Projects</button>
          <button className="btn btn-secondary" onClick={() => scroll('contact')}>Contact Me</button>
        </div>
        <div className="scroll-indicator">⌄</div>
      </section>

      {/* ── About ── */}
      <section className="about" id="about">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I started my career in retail operations, managing inventory systems and customer
            service for 3+ years. But I realized my true passion was{' '}
            <span className="highlight">building systems that scale.</span>
          </p>
          <p>
            In 2025, I transitioned into DevOps engineering through structured training in
            networking, cybersecurity, and cloud infrastructure. Over the course of the year I built
            production-ready projects covering Docker, Kubernetes, Terraform, and core AWS services.
          </p>
          <div className="philosophy">
            <p><strong>My philosophy:</strong> Understand deeply, build pragmatically, automate fearlessly.</p>
          </div>
          <div className="core-values">
            <h3>Core Values</h3>
            {[
              { icon: '💡', text: 'Continuous learning and improvement' },
              { icon: '🔒', text: 'Security-first mindset' },
              { icon: '⚡', text: 'Performance and optimization' },
              { icon: '📚', text: 'Knowledge sharing' },
            ].map(({ icon, text }) => (
              <div className="value-item" key={text}>
                <span className="value-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-timeline">
          <h2 style={{ color: '#06b6d4', marginBottom: '2rem' }}>My Journey</h2>
          <div className="timeline">
            {[
              {
                date: 'Q1 · 2025',
                title: 'Networking / Hacking Ético — Cisco',
                desc: 'Networking fundamentals: TCP/IP model, routing, switching and network architecture. Security foundations applied to cloud infrastructure.',
              },
              {
                date: 'Q1 · 2025',
                title: 'Fundamentos de Ciberseguridad — Coursera',
                desc: 'Cybersecurity principles: threat models, encryption, secure protocols and defensive practices in cloud environments.',
              },
              {
                date: 'Q2 · 2025',
                title: 'AWS & Docker',
                desc: 'Deep dived into AWS services (EC2, RDS, S3) and containerization with Docker.',
                cert: '✓ AWS Cloud Practitioner',
              },
              {
                date: 'Q3 · 2025',
                title: 'Kubernetes & Terraform',
                desc: 'Mastered Kubernetes orchestration and Infrastructure as Code with Terraform. Built production-ready projects.',
              },
              {
                date: 'Now',
                title: 'CI/CD & Full Stack',
                desc: 'Implementing automated deployments with GitHub Actions. Building end-to-end DevOps pipelines ready for production teams.',
              },
            ].map(({ date, title, desc, cert }) => (
              <div className="timeline-item" key={title}>
                <div className="timeline-date">{date}</div>
                <div className="timeline-title">{title}</div>
                <div className="timeline-desc">{desc}</div>
                {cert && <span className="timeline-cert">{cert}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section className="what-i-do" id="skills">
        <h2>What I Do</h2>
        <div className="services-grid">
          {[
            { icon: '☁️', title: 'Cloud Architecture',   desc: 'Design & deploy scalable AWS infrastructure' },
            { icon: '🐳', title: 'Containerization',      desc: 'Docker & Kubernetes orchestration' },
            { icon: '⚙️', title: 'Automation',            desc: 'CI/CD pipelines & Infrastructure as Code' },
            { icon: '🔐', title: 'Security & Hardening',  desc: 'Cloud security best practices' },
          ].map(({ icon, title, desc }) => (
            <div className="service-card" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills & Technologies ── */}
      <section className="skills-tech" id="skills-tech">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {[
            {
              heading: 'Cloud & Infrastructure',
              items: ['AWS (EC2, VPC, RDS, S3)', 'Terraform & IaC', 'Kubernetes', 'Docker', 'Linux & Bash'],
            },
            {
              heading: 'DevOps & Automation',
              items: ['GitHub Actions', 'CI/CD Pipelines', 'Monitoring & Logging', 'API Management', 'Security Best Practices'],
            },
            {
              heading: 'Development',
              items: ['Python & Pytest', 'Git & GitHub', 'SQL Basics', 'REST APIs', 'System Design'],
            },
          ].map(({ heading, items }) => (
            <div className="skills-section" key={heading}>
              <h3>{heading}</h3>
              <div className="skills-card">
                {items.map((s) => (
                  <div className="skill-item" key={s}>
                    <span className="skill-dot" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          {projects.map((p) => (
            <div className="project-card" key={p.id} onClick={() => setSelected(p)}>
              <div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="tech-tags">
                  {p.techs.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
                </div>
                <button className="view-details" onClick={(e) => { e.stopPropagation(); setSelected(p); }}>
                  View Details ›
                </button>
              </div>
              <div className="project-badge">
                <div className="deployed-label">
                  <span className="pulse-dot" /> Deployed
                </div>
                <div className="badge-stats">
                  <div className="badge-stat">
                    <div className="badge-stat-number">{p.techs.length}</div>
                    <span className="badge-stat-label">Tech stack</span>
                  </div>
                  <div className="badge-stat">
                    <div className="badge-stat-number">{p.features.length}</div>
                    <span className="badge-stat-label">Features</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <h2>Let's Connect</h2>
          <p className="contact-subtitle">Open to opportunities, collaborations, and technical discussions</p>
          <div className="contact-cards">
            {[
              { icon: '✉️', label: 'Email',    val: 'fercho00.fb@gmail.com',  href: 'mailto:fercho00.fb@gmail.com' },
              { icon: '💼', label: 'LinkedIn', val: 'fbecerrildev',           href: 'https://linkedin.com/in/fbecerrildev' },
              { icon: '🐙', label: 'GitHub',   val: 'Ferdev49',               href: 'https://github.com/Ferdev49' },
            ].map(({ icon, label, val, href }) => (
              <a className="contact-card" key={label} href={href} target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">{icon}</div>
                <div className="contact-label">{label}</div>
                <div className="contact-val">{val}</div>
              </a>
            ))}
          </div>
          <div className="contact-form-box">
            <h3>Send me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text" placeholder="Your name" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email" placeholder="your@email.com" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Your message..." required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              {formStatus === 'success' && <div className="form-status-success">✅ Message sent successfully!</div>}
              {formStatus === 'error'   && <div className="form-status-error">❌ Error sending message. Please try again.</div>}
              <button className="btn-submit" type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <p>© 2026 Fer Becerril. Built with passion for DevOps &amp; Cloud.</p>
      </footer>

      {/* ── Project Modal ── */}
      {selected && (
        <div
          className="modal-overlay active"
          onClick={() => setSelected(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selected.title}</h2>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <p className="modal-desc">{selected.fullDesc}</p>
            <p className="modal-section-title">Key Features</p>
            <ul className="modal-features">
              {selected.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p className="modal-section-title">Tech Stack</p>
            <div className="modal-techs">
              {selected.techs.map((t) => <span className="modal-tech-tag" key={t}>{t}</span>)}
            </div>
            <a className="modal-github-btn" href={selected.link} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              Open on GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
