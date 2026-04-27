"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "BLOONSOO",
    title: "Hotel Management",
    image: "/bloonsoo.png",
    description: "Full-stack hotel management ecosystem featuring real-time room booking, policy automation, and staff workflow optimization.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    live: "https://bloonsoo.example.com",
    github: "https://github.com/yourname/bloonsoo",
    category: "company",
  },
  {
    id: 2,
    name: "My Universe",
    title: "University management",
    image: "/myunivers.png",
    description: "Comprehensive university admission portal with role-based access control, course cataloging, and application tracking.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    live: "https://myuniverse.example.com",
    github: "https://github.com/yourname/my-universe",
    category: "company",
  },
  {
    id: 3,
    name: "Kid Link",
    title: "Childcare SaaS",
    image: "/kidlink.png",
    description: "Digital management solution for childcare centers offering attendance tracking, parent communication, and activity logging.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    live: "https://kidlink.example.com",
    github: "https://github.com/yourname/kid-link",
    category: "company",
  },
  {
    id: 4,
    name: "E-Jobs",
    title: "Job management system",
    image: "/ejob.png",
    description: "Advanced job search platform connecting talent with opportunities through intelligent filtering and candidate profiling.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    live: "https://ejobs.example.com",
    github: "https://github.com/yourname/e-jobs",
    category: "company",
  },
  {
    id: 5,
    name: "Taxi App",
    title: "Mobility Solution",
    image: "/taxi.jpg",
    description: "Real-time ride-hailing application with live GPS tracking, driver dispatching, and secure payment integration.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    live: "https://taxiapp.example.com",
    github: "https://github.com/yourname/taxi-app",
    category: "company",
  },
  {
    id: 6,
    name: "CBL Natural Foods",
    title: "Corporate Frontend",
    image: "/cbl.png",
    description: "Modern corporate website overhaul with interactive product showcases, certification galleries, and social integration.",
    technologies: ["React.js", "tailwindcss"],
    live: "https://cbl.example.com",
    github: "#",
    category: "company",
  },

  {
    id: 7,
    name: "Ayurveda by manjula",
    title: "Manjula Ayurveda full system manage system",
    image: "/manjula.png",
    description: "Ayurveda by Manjula is the first project of my startup, where I led the development and built the complete backend using Next.js API routes and PostgreSQL, along with key frontend features using React.js.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL", "TailwindCSS"],
    live: "https://manjula.cloud",
    github: "#",
    category: "personal",
  },
  {
    id: 8,
    name: "OMANI ASSALAARACHCHI PORTFOLIO",
    title: "Portfolio website",
    image: "/omani.png",
    description: "This is a modern and fully responsive personal portfolio website built using Next.js and Tailwind CSS, and deployed on Vercel. The website is designed to showcase my skills, projects, and experience as a developer in a clean and visually appealing way. It features smooth navigation, optimized performance, and a user-friendly interface to provide the best browsing experience across all devices.",
    technologies: ["Next.js","TailwindCSS"],
    live: "https://omani.vercel.app/",
    github: "#",
    category: "personal",
  },
  {
    id: 9,
    name: "PIUM RAJAPAKSE PORTFOLIO",
    title: "Portfolio website",
    image: "/pium.png",
    description: "This is a modern and fully responsive personal portfolio website built using Next.js and Tailwind CSS, and deployed on Vercel. The website is designed to showcase my skills, projects, and experience as a developer in a clean and visually appealing way. It features smooth navigation, optimized performance, and a user-friendly interface to provide the best browsing experience across all devices.",
    technologies: ["Next.js","TailwindCSS"],
    live: "https://piumrajapakse.vercel.app/",
    github: "#",
    category: "personal",
  },
];

const categories = [
  { id: "all", label: "All Works" },
  { id: "personal", label: "My Projects" },
  { id: "company", label: "Company Projects" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((proj) =>
    filter === "all" ? true : proj.category === filter
  );

  return (
    <section id="projects" className="min-h-screen px-6 py-24 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Works</span>
          </h2>
          <p className="text-xl text-white/65 max-w-2xl">
            A curated showcase of modern web applications and product experiences built with full-stack technologies.
          </p>
        </motion.div>

        {/* Filter UI */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative px-7 py-3 rounded-full text-sm font-semibold tracking-[0.22em] uppercase transition-all duration-300 border border-white/10 overflow-hidden ${filter === cat.id
                ? "text-white bg-cyan-400/15 border-cyan-400/40"
                : "text-white/50 hover:text-white hover:border-white/20"
                }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {filter === cat.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-cyan-400/15 rounded-full"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col hover:border-cyan-500/30 hover:bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-64 lg:h-72 overflow-hidden bg-black/50">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent opacity-90" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative -mt-12">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-[0.3em] bg-cyan-900/15 px-3 py-1 rounded-full border border-cyan-400/10">
                      {project.title}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-white/65 leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-white/40">#{tech}</span>
                      ))}
                    </div>

                    <div className="flex gap-4 items-center">
                      {project.live !== "#" ? (
                        <Link href={project.live} target="_blank" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors">
                          <ExternalLink size={18} />
                          <span className="text-sm font-semibold">Live</span>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
