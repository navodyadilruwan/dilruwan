"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "BLOONSOO",
    title: "Hotel Management",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    description: "Full-stack hotel management ecosystem featuring real-time room booking, policy automation, and staff workflow optimization.",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
    live: "https://bloonsoo.example.com",
    github: "https://github.com/yourname/bloonsoo",
  },
  {
    id: 2,
    name: "My Universe",
    title: "EdTech Platform",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    description: "Comprehensive university admission portal with role-based access control, course cataloging, and application tracking.",
    technologies: ["Next.js", "PostgreSQL", "TailwindCSS"],
    live: "https://myuniverse.example.com",
    github: "https://github.com/yourname/my-universe",
  },
  {
    id: 3,
    name: "Kid Link",
    title: "Childcare SaaS",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    description: "Digital management solution for childcare centers offering attendance tracking, parent communication, and activity logging.",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    live: "https://kidlink.example.com",
    github: "https://github.com/yourname/kid-link",
  },
  {
    id: 4,
    name: "E-Jobs",
    title: "Recruitment Portal",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    description: "Advanced job search platform connecting talent with opportunities through intelligent filtering and candidate profiling.",
    technologies: ["React", "Node.js", "MongoDB"],
    live: "https://ejobs.example.com",
    github: "https://github.com/yourname/e-jobs",
  },
  {
    id: 5,
    name: "Taxi App",
    title: "Mobility Solution",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    description: "Real-time ride-hailing application with live GPS tracking, driver dispatching, and secure payment integration.",
    technologies: ["React Native", "Socket.io", "Google Maps API"],
    live: "https://taxiapp.example.com",
    github: "https://github.com/yourname/taxi-app",
  },
  {
    id: 6,
    name: "CBL Natural Foods",
    title: "Corporate Frontend",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80",
    description: "Modern corporate website overhaul with interactive product showcases, certification galleries, and social integration.",
    technologies: ["React.js", "Framer Motion", "SCSS"],
    live: "https://cbl.example.com",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-script tracking-wide text-white mb-6 drop-shadow-lg">
            Selected Works<span className="text-cyan-500 font-sans">.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            A diverse collection of projects demonstrating full-stack expertise and creative problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-cyan-500/30 transition-colors duration-500"
            >
              {/* Image Section */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                <div className="absolute top-6 right-6 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/50 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1 relative -mt-12">
                <div className="mb-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-900/30">
                    {project.title}
                  </span>
                </div>

                <h3 className="text-3xl font-bold italic text-white mb-3 group-hover:text-cyan-100 transition-colors">
                  {project.name}
                </h3>

                <p className="text-white/60 leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-white/40">#{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.live !== "#" ? (
                      <Link href={project.live} target="_blank" className="text-white hover:text-cyan-400 transition-colors">
                        <ExternalLink size={20} />
                      </Link>
                    ) : null}
                    <Link href={project.github} target="_blank" className="text-white hover:text-cyan-400 transition-colors">
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}