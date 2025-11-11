"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Mail, Phone, MapPin, Github, Linkedin,
  ExternalLink, ArrowLeft, Send
} from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ subject: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = useRef({});

  // FIXED: Only ONE handleSubmit (real email version)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: form.subject,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully! I'll reply soon");
        setTimeout(() => {
          setIsModalOpen(false);
          setForm({ subject: "", email: "", message: "" });
          setStatus("");
        }, 3000);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Check your connection.");
    }
  };

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openContact = () => {
    setIsModalOpen(true);
    setMenuOpen(false);
  };

  const openProject = (proj) => setSelectedProject(proj);
  const closeProject = () => setSelectedProject(null);

  const companyprojects = [
    { title: "BLOONSOO", desc: "Hotel Management System with room booking, payment handling...", tech: "Next.js | Drizzle ORM | PostgreSQL", features: ["Room Booking", "Payment Gateway", "Staff Panel"], live: "#", github: "#" },
    { title: "My Universe", desc: "University search & admission platform...", tech: "Next.js | Drizzle ORM | PostgreSQL", features: ["Role-based Access", "Search", "Applications"], live: "#", github: "#" },
    { title: "Kid Link", desc: "Children Management System...", tech: "Next.js | Drizzle ORM | PostgreSQL", features: ["Parent Portal", "Scheduling", "Tracking"], live: "#", github: "#" },
    { title: "E-Jobs", desc: "Job Search & Recruitment Platform...", tech: "Next.js | Drizzle ORM | PostgreSQL", features: ["Filters", "Applications", "Dashboard"], live: "#", github: "#" },
    { title: "Taxi App", desc: "Ride booking & vehicle registration...", tech: "Next.js | Drizzle ORM | PostgreSQL", features: ["Real-time", "Booking", "Payments"], live: "#", github: "#" },
    { title: "CBL Natural food ", desc: "CBL pvt Ltd web site frontend changes and UI Desing", tech: "React.js | TailwindCSS | Figma", features: ["Social media side box", "certificate page", "new features"], live: "#", github: "#" },
   
  ];

  const acadamicprojects = [
    { title: "Online Property Sales System", desc: "Real estate platform with user authentication...", tech: "HTML | CSS | MySql", features: ["Auth", "Search", "Admin"], live: "#", github: "#" },
    { title: "Online Music Store", desc: "E-commerce platform for music sales...", tech: "HTML | CSS | MySql", features: ["Cart", "search", "Profiles"], live: "#", github: "#" },
    { title: "Gym Management System", desc: "Mobile app for gym operations...", tech: "java | Kotlin", features: ["easy get schaduls", "Plans", "Payments"], live: "#", github: "#" },
    { title: "Pharmacy Management System", desc: "Full-stack pharmacy system...", tech: "React | Node.js | mongoDB", features: ["Inventory", "Sales", "Reports"], live: "#", github: "#" },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "academic", label: "Academic Projects" },
    { id: "projects", label: "Company Projects" },
    
  ];

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-cyan-900 to-emerald-900" />
        <img src="/back.jpg" alt="bg" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {/* Floating Email Button */}
      <button
        onClick={openContact}
        className="fixed right-6 bottom-8 z-50 group"
        title="Send me an email"
      >
        <div className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-cyan-500/50 hover:border-cyan-400 hover:bg-white/20 transition-all hover:scale-125 shadow-2xl">
          <Mail size={28} className="text-cyan-400 group-hover:animate-pulse" />
        </div>
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/50 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 onClick={() => scrollToSection("home")} className="text-2xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition">
            Navodya Dilruwan
          </h1>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium transition pb-2 relative ${
                  activeSection === item.id ? "text-cyan-400" : "text-white hover:text-cyan-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
            <button onClick={openContact} className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-full text-black font-bold transition">
              Hire Me
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition z-50">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-black/70 backdrop-blur-2xl transform transition-transform duration-500 z-50 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-white">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-2xl font-medium transition ${activeSection === item.id ? "text-cyan-400" : "hover:text-cyan-300"}`}>
              {item.label}
            </button>
          ))}
          <button onClick={openContact} className="px-8 py-4 bg-cyan-500 rounded-full hover:bg-cyan-400 transition text-black font-bold">
            Hire Me
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 min-h-screen text-white px-6 max-w-7xl mx-auto">
        <section id="home" ref={el => sectionRefs.current.home = el} className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 mb-4">Navodya Dilruwan</h1>
          <p className="text-3xl md:text-5xl mb-8 text-cyan-300">Full-Stack Developer</p>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            I build scalable, accessible web applications that blend thoughtful design with robust engineering.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center justify-center gap-3"><MapPin /> Kadawala Junction, Wattugedara</p>
            <p className="flex items-center justify-center gap-3"><Phone /> +94 75 124 7434</p>
            <p className="flex items-center justify-center gap-3"><Mail /> navodhyadilruwan@gmail.com</p>
          </div>
          <div className="flex gap-6 mt-10">
            <a href="https://github.com/navodyadilruwan" target="_blank" className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/navodya-dilruwan/" target="_blank" className="p-4 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"><Linkedin size={28} /></a>
          </div>
        </section>

        <section id="education" ref={el => sectionRefs.current.education = el} className="py-20">
          <h2 className="text-5xl font-bold text-cyan-400 mb-12 text-center">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Undergraduate Student", subtitle: "SLIIT", desc: "BSc (Hons) IT - Software Engineering" },
              { title: "IT Diploma", subtitle: "SLTC", desc: "Completed" },
              { title: "Graphic Design Diploma", subtitle: "OSLO", desc: "Completed" },
              { title: "Software Dev Intern", subtitle: "DONEXT", desc: "Full-stack projects" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-cyan-300">{item.title}</h3>
                <p className="text-cyan-200 mt-2">{item.subtitle}</p>
                <p className="text-sm mt-4 text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section id="academic" ref={el => sectionRefs.current.academic = el} className="py-20">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">Academic Projects</h2>
          <p className="text-xl text-cyan-200 mb-12">Projects from SLIIT studies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acadamicprojects.map((proj, i) => (
              <div key={i} onClick={() => openProject(proj)} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400 cursor-pointer hover:scale-105 transition">
                <div className="h-56 bg-gradient-to-br from-cyan-600 to-teal-800 opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-cyan-300">{proj.title}</h3>
                  <p className="text-sm mt-2 text-gray-200 line-clamp-2">{proj.desc}</p>
                  <p className="text-xs mt-4 text-cyan-400 flex items-center gap-2">{proj.tech} <ExternalLink size={16} /></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" ref={el => sectionRefs.current.projects = el} className="py-20">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">Company Projects</h2>
          <p className="text-xl text-cyan-200 mb-12">Real-world projects built for clients</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyprojects.map((proj, i) => (
              <div key={i} onClick={() => openProject(proj)} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400 cursor-pointer hover:scale-105 transition">
                <div className="h-56 bg-gradient-to-br from-cyan-600 to-teal-800 opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-cyan-300">{proj.title}</h3>
                  <p className="text-sm mt-2 text-gray-200 line-clamp-2">{proj.desc}</p>
                  <p className="text-xs mt-4 text-cyan-400 flex items-center gap-2">{proj.tech} <ExternalLink size={16} /></p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-xl border-t border-cyan-500/30 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Let's Connect</h3>
          <div className="flex justify-center gap-10 mb-8">
            <a href="https://github.com/navodyadilruwan" target="_blank" rel="noopener noreferrer" className="group p-5 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition hover:scale-110">
              <Github size={32} className="text-white group-hover:text-cyan-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/navodya-dilruwan/" target="_blank" rel="noopener noreferrer" className="group p-5 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition hover:scale-110">
              <Linkedin size={32} className="text-white group-hover:text-cyan-400 transition" />
            </a>
            <button onClick={openContact} className="group p-5 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition hover:scale-110">
              <Mail size={32} className="text-white group-hover:text-cyan-400 transition" />
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Navodya Dilruwan.  <span className="text-red-500"></span>Balapitiya, Sri Lanka
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center p-6" onClick={closeProject}>
          <div className="bg-white/10 backdrop-blur-3xl rounded-3xl p-10 max-w-4xl w-full border border-cyan-400/60 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={closeProject} className="absolute top-6 left-6 p-3 bg-white/20 rounded-full hover:bg-white/30"><ArrowLeft size={28} /></button>
            <button onClick={closeProject} className="absolute top-6 right-6 p-3 bg-white/20 rounded-full hover:bg-white/30"><X size={28} /></button>
            <h2 className="text-5xl font-bold text-cyan-300 text-center mb-6">{selectedProject.title}</h2>
            <p className="text-xl text-cyan-200 text-center mb-8">{selectedProject.tech}</p>
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Description</h3><p className="text-gray-200">{selectedProject.desc}</p></div>
              <div><h3 className="text-2xl font-bold text-cyan-400 mb-4">Features</h3>
                <ul className="space-y-3">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <a href={selectedProject.live} target="_blank" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-full font-bold flex items-center gap-3 transition">
                <ExternalLink size={20} /> Live Demo
              </a>
              <a href={selectedProject.github} target="_blank" className="px-8 py-4 bg-white/20 hover:bg-white/30 rounded-full font-bold flex items-center gap-3 backdrop-blur transition border border-cyan-400">
                <Github size={20} /> Source Code
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center p-6">
          <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-3xl p-10 max-w-lg w-full relative border border-cyan-400 shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-cyan-300"><X size={32} /></button>
            <h2 className="text-4xl font-bold text-cyan-300 mb-8 text-center">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name / Subject"
                required
                value={form.subject}
                onChange={e => setForm({...form, subject: e.target.value})}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-cyan-500/50 placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition text-white"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-cyan-500/50 placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition text-white"
              />
              <textarea
                placeholder="Your message..."
                rows={6}
                required
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-cyan-500/50 placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition resize-none text-white"
              />
              <button type="submit" className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 transition font-bold text-black rounded-xl flex items-center justify-center gap-3">
                <Send size={20} /> Send Message
              </button>
              {status && <p className="text-center text-cyan-300 font-semibold text-lg">{status}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}