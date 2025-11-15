"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

// const projects = [
//   {
//     title: "Wildlife Tracker App",
//     desc: "Real-time GPS & camera trap monitoring system for Asiatic lions in Gir Forest",
//     tech: "Next.js, Node.js, MongoDB, Mapbox GL, IoT",
//     live: "https://wildlife-tracker.example.com",
//     github: "https://github.com/yourname/wildlife-tracker",
//     tags: ["Full Stack", "IoT", "Conservation Tech"],
//   },
//   {
//     title: "Eco-Learning Platform",
//     desc: "Interactive 3D education portal teaching about endangered species & ecosystems",
//     tech: "React, Three.js, Firebase, Tailwind, GSAP",
//     live: "https://ecolearn.example.com",
//     github: "https://github.com/yourname/eco-learning",
//     tags: ["Frontend", "3D", "Education"],
//   },
//   {
//     title: "Conservation Dashboard",
//     desc: "Data visualization dashboard for WWF field researchers tracking lion populations",
//     tech: "D3.js, Python FastAPI, PostgreSQL, Vercel",
//     live: "https://conservation-dash.example.com",
//     github: "https://github.com/yourname/conservation-dashboard",
//     tags: ["Data Viz", "Backend", "NGO Tool"],
//   },
//   {
//     title: "LionCall – AI Sound Classifier",
//     desc: "ML model that identifies individual Asiatic lions by their roar using deep audio analysis",
//     tech: "Python, TensorFlow, React Native, AWS",
//     live: "#",
//     github: "https://github.com/yourname/lioncall",
//     tags: ["Machine Learning", "Audio AI", "Research"],
//   },
// ];
 const projects = [
    {
      id: 1,
      name: "BLOONSOO",
      title: "Hotel Management System",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop",
      description: "Full-stack hotel management system with room booking, payment handling, policies, and staff management.",
      technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      features: ["Room Booking", "Payment Processing", "Staff Management", "Policy Management", "Real-time Updates", "Customer Support"],
      live: "https://bloonsoo.example.com",
      github: "https://github.com/yourname/bloonsoo",
      tags: ["Full Stack", "Hotel Tech", "Management System"],
    },
    {
      id: 2,
      name: "My Universe",
      title: "University Registration Platform",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=300&fit=crop",
      description: "Platform for university search and admission registration with role-based access control.",
      technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      features: ["University Search", "Admission Registration", "Role-based Access", "Course Management", "Application Tracking", "Admin Dashboard"],
      live: "https://myuniverse.example.com",
      github: "https://github.com/yourname/my-universe",
      tags: ["Full Stack", "Education Tech", "Platform"],
    },
    {
      id: 3,
      name: "Kid Link",
      title: "Childcare Management System",
      image: "https://images.unsplash.com/photo-1577896049022-7db6f1a3e0ef?w=500&h=300&fit=crop",
      description: "Full-stack childcare management system with enrollment, staff scheduling, and activity tracking.",
      technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      features: ["Enrollment Management", "Staff Scheduling", "Parent Communication", "Activity Tracking", "Daily Reports", "Photo Gallery"],
      live: "https://kidlink.example.com",
      github: "https://github.com/yourname/kid-link",
      tags: ["Full Stack", "Childcare", "Management"],
    },
    {
      id: 4,
      name: "E-Jobs",
      title: "Job Search & Recruitment Platform",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      description: "Job search platform with advanced search & filter functionalities.",
      technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      features: ["Advanced Search", "Employer Dashboard", "Candidate Profiles", "Application Tracking", "Job Alerts", "Resume Upload"],
      live: "https://ejobs.example.com",
      github: "https://github.com/yourname/e-jobs",
      tags: ["Full Stack", "Job Portal", "Recruitment"],
    },
    {
      id: 5,
      name: "Taxi App",
      title: "Ride Booking & Vehicle Registration",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop",
      description: "Full-stack taxi booking system with real-time ride management.",
      technologies: ["Next.js", "Drizzle ORM", "PostgreSQL"],
      features: ["Ride Booking", "Vehicle Registration", "Real-time Management", "Payment Tracking", "GPS Tracking", "Rating System"],
      live: "https://taxiapp.example.com",
      github: "https://github.com/yourname/taxi-app",
      tags: ["Full Stack", "Mobility", "Real-time"],
    },
    {
      id: 6,
      name: "CBL Natural Foods",
      title: "CBL Company Website UI updates",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&h=300&fit=crop",
      description: "Frontend development add social media side box and certificate page.",
      technologies: ["React.js", "CSS"],
      features: ["Ride Booking", "Vehicle Registration", "Real-time Management", "Payment Tracking", "GPS Tracking", "Rating System"],
      live: "https://taxiapp.example.com",
      github: "https://github.com/yourname/taxi-app",
      tags: ["Full Stack", "Mobility", "Real-time"],
    },
  ];
export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20">
      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center"
      >
         <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-7xl drop-shadow-2xl">
              Projects
            </h1>
        <p className="max-w-2xl mx-auto mt-6 text-xl text-white/60">
          Building technology that protects the last wild Asiatic lions and inspires the next generation
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-7xl">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative overflow-hidden transition-all duration-500 border group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 group-hover:opacity-100" />

            <div className="relative p-8 md:p-10">
              {/* Title */}
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                {project.name}
               
              </h3>
              <h4 className="text-3xl font-bold tracking-tight md:text-2xl">
               
                {project.title && ` ${project.title}`}
              </h4>
              <h3 className="text-xl font-thin tracking-tight md:text-xl">
                {project.description}
         
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border rounded-full bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <p className="mt-4 text-sm font-medium text-cyan-400">
                {project.tech}
              </p>

              {/* Links */}
              <div className="flex gap-6 mt-8">
                {project.live !== "#" ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 transition-colors text-white/80 hover:text-cyan-400"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 text-white/40">
                    <ExternalLink size={20} />
                    <span>Coming Soon</span>
                  </span>
                )}

                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 transition-colors text-white/80 hover:text-cyan-400"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footer Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <p className="text-2xl text-white/60">
          Want to collaborate on conservation tech?
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 mt-6 transition-all duration-300 border rounded-full bg-cyan-500/20 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30"
        >
          Let’s Talk
        </Link>
      </motion.div>
    </section>
  );
}