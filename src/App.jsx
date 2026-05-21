import { useState } from 'react';
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      {/* NAV */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/95 border-b border-cyan-400/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded text-slate-950 font-bold flex items-center justify-center text-sm">FB</div>
            <span className="font-bold text-cyan-400">Fer Becerril</span>
          </button>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-cyan-400/20 bg-slate-950/95">
            <div className="flex flex-col px-4 py-4 gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="text-left text-gray-300 hover:text-cyan-400 transition py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Junior DevOps &amp; Cloud Engineer</h1>
          <p className="text-xl text-gray-300 mb-8">Building scalable infrastructure with passion</p>

          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {[{ n: '35', l: 'Days Learning' }, { n: '3', l: 'Projects' }, { n: '1', l: 'Cert' }].map((s, i) => (
              <div key={i} className="p-4 rounded-lg border border-cyan-400/30 bg-slate-900/50">
                <div className="text-3xl font-bold text-cyan-400">{s.n}</div>
                <div className="text-sm text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-lime-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition"
            >
              Contact Me
            </button>
          </div>

          <button
            onClick={() => scrollTo('about')}
            className="animate-bounce mx-auto block"
            aria-label="Scroll to About"
          >
            <ChevronDown className="text-cyan-400 mx-auto" size={32} />
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-slate-900/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6 text-center">I'm a junior DevOps engineer on a mission to master cloud infrastructure and automation. After 3 years in retail operations, I discovered my passion for building systems that scale.</p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto text-center">My approach: <span className="text-cyan-400 font-semibold">Understand deeply, build pragmatically, automate fearlessly.</span></p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Cloud & Infrastructure', skills: ['AWS (EC2, VPC, RDS, S3)', 'Terraform & IaC', 'Kubernetes', 'Docker'] },
              { title: 'DevOps & Automation', skills: ['GitHub Actions', 'CI/CD Pipelines', 'Monitoring', 'Security'] },
              { title: 'Development', skills: ['Python & Pytest', 'Git & GitHub', 'SQL Basics', 'REST APIs'] }
            ].map((cat, i) => (
              <div key={i} className="p-6 rounded-xl border border-cyan-400/30 bg-slate-900/50">
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

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-slate-900/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="space-y-8">
            {[
              { title: '3-Tier AWS Architecture', desc: 'Production-grade multi-tier architecture with load balancing and auto-scaling', metric: '1000+', label: 'Concurrent Users', href: 'https://github.com/Ferdev49' },
              { title: 'Microservices with Kubernetes', desc: 'Orchestrated microservices deployment with self-healing and rolling updates', metric: '8+', label: 'Services', href: 'https://github.com/Ferdev49' },
              { title: 'CI/CD Pipeline', desc: 'Complete automated pipeline from code push to production deployment', metric: '69s', label: 'Pipeline Time', href: 'https://github.com/Ferdev49' }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-xl border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400/60 transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400">{p.title}</h3>
                  <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`}>
                    <ExternalLink className="text-gray-500 hover:text-cyan-400" size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-6">{p.desc}</p>
                <div className="flex justify-between items-end">
                  <a href={p.href} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-lime-400 font-semibold">View on GitHub</a>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-lime-400">{p.metric}</div>
                    <div className="text-sm text-gray-400">{p.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">Open to opportunities and collaborations</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Email', val: 'fercho00.fb@gmail.com', href: 'mailto:fercho00.fb@gmail.com' },
              { label: 'LinkedIn', val: 'fbecerrildev', href: 'https://www.linkedin.com/in/fbecerrildev' },
              { label: 'GitHub', val: 'Ferdev49', href: 'https://github.com/Ferdev49' }
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={c.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="p-6 rounded-xl border border-cyan-400/30 bg-slate-900/50 hover:border-cyan-400/60 transition block"
              >
                <h3 className="font-bold text-white mb-2">{c.label}</h3>
                <p className="text-gray-400 text-sm">{c.val}</p>
              </a>
            ))}
          </div>
          <a href="mailto:fercho00.fb@gmail.com" className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition">Send me an Email</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-cyan-400/20">
        <p>(c) 2026 Fer Becerril. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
