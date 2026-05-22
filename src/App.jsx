import { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink, ChevronDown, Github, Linkedin } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [stats, setStats] = useState({ days: 0, projects: 0, certs: 0 });

  // Animated stats counter
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        days: prev.days < 35 ? prev.days + 1 : 35,
        projects: prev.projects < 3 ? prev.projects + 1 : 3,
        certs: prev.certs < 1 ? prev.certs + 1 : 1,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: '3-Tier AWS Architecture',
      desc: 'Production-grade multi-tier architecture with load balancing, auto-scaling, and high availability.',
      fullDesc: 'Designed a robust 3-tier AWS architecture that demonstrates enterprise-level infrastructure design. Implemented multi-AZ deployment for fault tolerance, configured ELB for load balancing, and set up auto-scaling groups to handle variable workloads. The architecture handles 1000+ concurrent users and showcases best practices in security, performance, and cost optimization.',
      techs: ['AWS EC2', 'RDS', 'ELB', 'Auto Scaling', 'CloudFormation'],
      metric: '1000+',
      metricLabel: 'Concurrent Users',
      link: 'https://github.com/Ferdev49/devops-lab/tree/main/projects/project1-3tier-aws',
      features: ['Multi-AZ deployment', 'Auto-scaling groups', 'Load balancer setup', 'Security groups', 'RDS database']
    },
    {
      id: 2,
      title: 'Microservices with Kubernetes',
      desc: 'Orchestrated microservices deployment with self-healing, auto-scaling, and rolling updates.',
      fullDesc: 'Built a complete Kubernetes cluster running 8+ microservices with advanced orchestration patterns. Implemented service mesh for inter-service communication, configured horizontal pod autoscaling, and set up rolling updates for zero-downtime deployments. This project demonstrates deep understanding of container orchestration and distributed systems.',
      techs: ['Kubernetes', 'Docker', 'Service Mesh', 'Networking', 'YAML'],
      metric: '8+',
      metricLabel: 'Replicated Services',
      link: 'https://github.com/Ferdev49/devops-lab/tree/main/projects/project2-microservices-k8s',
      features: ['8+ microservices', 'HPA configured', 'Rolling updates', 'Service mesh', 'Network policies']
    },
    {
      id: 3,
      title: 'CI/CD Pipeline with GitHub Actions',
      desc: 'Complete automated pipeline from code push to production deployment.',
      fullDesc: 'Engineered a sophisticated CI/CD pipeline that automates the entire software delivery process. The pipeline includes build stages, automated testing (18+ test cases), artifact creation, and production deployment to Kubernetes. Achieves 69-second full cycle time with 100% test pass rate, enabling rapid and reliable releases.',
      techs: ['GitHub Actions', 'Docker', 'Kubernetes', 'Testing', 'Automation'],
      metric: '69s',
      metricLabel: 'Pipeline Time',
      link: 'https://github.com/Ferdev49/devops-lab/tree/main/projects/project3-cicd-pipeline',
      features: ['5 workflows', '18+ test cases', '100% pass rate', 'Auto-deployment', 'Artifact registry']
    }
  ];

  const aboutTimeline = [
    {
      year: '2023',
      title: 'Discovered DevOps',
      desc: 'Started learning DevOps after 3 years in retail operations. Realized my passion for building scalable systems.'
    },
    {
      year: '2024',
      title: 'AWS & Docker',
      desc: 'Deep dived into AWS services (EC2, RDS, S3) and containerization with Docker. Got AWS Cloud Practitioner certified.'
    },
    {
      year: '2025',
      title: 'Kubernetes & Terraform',
      desc: 'Mastered Kubernetes orchestration and Infrastructure as Code with Terraform. Built production-ready projects.'
    },
    {
      year: 'Now',
      title: 'CI/CD & Full Stack',
      desc: 'Implementing automated deployments with GitHub Actions. Ready to contribute to DevOps teams.'
    }
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* NAV */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/95 border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded text-slate-950 font-bold flex items-center justify-center text-sm">FB</div>
            <span className="font-bold text-cyan-400">Fer Becerril</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <button key={item} className="text-gray-300 hover:text-cyan-400 transition">{item}</button>
            ))}
          </div>
          <button className="md:hidden text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
            Junior DevOps & Cloud Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Building scalable infrastructure with passion</p>
          
          {/* ANIMATED STATS */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {[
              { n: stats.days, l: 'Days Learning' },
              { n: stats.projects, l: 'Projects' },
              { n: stats.certs, l: 'Cert' }
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-lg border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400 transition transform hover:scale-105">
                <div className="text-3xl font-bold text-cyan-400">{s.n}</div>
                <div className="text-sm text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-lime-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50">View Projects</button>
            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10">Contact Me</button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="text-cyan-400 mx-auto" size={32} />
          </div>
        </div>
      </section>

      {/* ABOUT - EXPANDED */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-gray-400 text-center mb-12">My journey from retail operations to DevOps engineering</p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Story */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I started my career in retail operations, managing inventory systems and customer service for 3+ years. But I realized my true passion was <span className="text-cyan-400 font-semibold">building systems that scale</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                In 2025, I committed to intensive DevOps learning. In just 35 days, I went from zero to building production-ready cloud infrastructure, mastering Docker, Kubernetes, Terraform, and AWS.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My philosophy: <span className="text-lime-400 font-semibold">Understand deeply, build pragmatically, automate fearlessly.</span>
              </p>

              {/* Core Values */}
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-semibold text-cyan-400">Core Values</h3>
                {[
                  '🎯 Continuous learning and improvement',
                  '🔒 Security-first mindset',
                  '⚡ Performance and optimization',
                  '📚 Knowledge sharing'
                ].map((val, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">My Journey</h3>
              {aboutTimeline.map((item, i) => (
                <div key={i} className="relative pl-6 pb-6 border-l-2 border-cyan-400/30 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-cyan-400 rounded-full" />
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/20">
                    <h4 className="text-cyan-400 font-bold">{item.year}</h4>
                    <h5 className="text-white font-semibold mt-2">{item.title}</h5>
                    <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-slate-800/30 p-8 rounded-xl border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '☁️', title: 'Cloud Architecture', desc: 'Design & deploy scalable AWS infrastructure' },
                { icon: '🐳', title: 'Containerization', desc: 'Docker & Kubernetes orchestration' },
                { icon: '🚀', title: 'Automation', desc: 'CI/CD pipelines & Infrastructure as Code' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Cloud & Infrastructure', skills: ['AWS (EC2, VPC, RDS, S3)', 'Terraform & IaC', 'Kubernetes', 'Docker', 'Linux & Bash'] },
              { title: 'DevOps & Automation', skills: ['GitHub Actions', 'CI/CD Pipelines', 'Monitoring & Logging', 'API Management', 'Security Best Practices'] },
              { title: 'Development', skills: ['Python & Pytest', 'Git & GitHub', 'SQL Basics', 'REST APIs', 'System Design'] }
            ].map((cat, i) => (
              <div key={i} className="p-6 rounded-xl border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400 transition">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.skills.map((s, j) => (
                    <div key={j} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS - DYNAMIC */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.id} className="p-8 rounded-xl border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400 transition cursor-pointer" onClick={() => setSelectedProject(p)}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-cyan-400">{p.title}</h3>
                      <ExternalLink className="text-gray-500 hover:text-cyan-400" size={20} />
                    </div>
                    <p className="text-gray-300 mb-6">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.techs.map((t, j) => <span key={j} className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full">{t}</span>)}
                    </div>
                    <button onClick={() => setSelectedProject(p)} className="text-cyan-400 hover:text-lime-400 font-semibold flex items-center gap-2">
                      View Details
                      <ChevronDown size={18} className="rotate-[-90deg]" />
                    </button>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-400/20">
                    <div className="text-3xl font-bold text-lime-400 mb-2">{p.metric}</div>
                    <p className="text-sm text-gray-400">{p.metricLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-900 rounded-xl border border-cyan-400/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-cyan-400">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.fullDesc}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techs.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>

            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-lime-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50">
              <Github size={20} />
              Open on GitHub
            </a>
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">Open to opportunities, collaborations, and technical discussions</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '✉️', label: 'Email', val: 'fercho00.fb@gmail.com', href: 'mailto:fercho00.fb@gmail.com' },
              { icon: '💼', label: 'LinkedIn', val: 'fbecerrildev', href: 'https://linkedin.com/in/fbecerrildev' },
              { icon: '🐙', label: 'GitHub', val: 'Ferdev49', href: 'https://github.com/Ferdev49' }
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="p-6 rounded-xl border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400 hover:bg-slate-900/80 transition">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-white mb-2">{c.label}</h3>
                <p className="text-gray-400 text-sm">{c.val}</p>
              </a>
            ))}
          </div>
          <a href="mailto:fercho00.fb@gmail.com" className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50">
            Send me an Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-cyan-400/20">
        <p>© 2026 Fer Becerril. Built with React & Terraform.</p>
      </footer>
    </div>
  );
}