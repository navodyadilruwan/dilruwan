"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Code2, X } from "lucide-react";

import { useState } from "react";

const academicProjects = [
  {
    title: "Online Property Sales",
    desc: "Real estate platform with role-based access control",
    tech: "HTML • CSS • PHP • MySQL",
    details:
      "A complete real estate management system featuring user authentication (buyer/seller/admin), property listings with image uploads, advanced search filters, and a full admin dashboard for managing users and listings.",
  },
  {
    title: "Online Music Store",
    desc: "E-commerce platform with shopping cart and payment simulation",
    tech: "HTML • CSS • JavaScript • MySQL",
    details:
      "Full-featured digital music store with product catalog, user accounts, shopping cart, wishlist, order history, and simulated payment gateway integration using session-based authentication.",
  },
  {
    title: "Gym Management System",
    desc: "Android application for gym operations and member management",
    tech: "Java • Kotlin • Firebase",
    details:
      "Native Android app for gym owners and members. Features include membership registration, class scheduling, attendance tracking via QR code, real-time notifications, and trainer dashboards.",
  },
  {
    title: "Pharmacy Management System",
    desc: "Complete inventory and sales management for pharmacies",
    tech: "React • Node.js • Express • MongoDB",
    details:
      "Modern full-stack pharmacy system with drug inventory tracking, expiry alerts, prescription management, POS billing, sales analytics, and role-based access (pharmacist/admin).",
  },
];

export default function AcademicPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* DARK CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute object-cover w-full h-full"
          src="/video1.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Right Side Navigation */}
    

      {/* ACADEMIC PROJECTS CONTENT */}
      <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-7xl drop-shadow-2xl">
              Academic Projects
            </h1>
            <p className="max-w-3xl mx-auto mt-8 text-xl font-light md:text-2xl text-white/60">
              Foundation-building projects from my academic journey — where learning meets real-world implementation
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {academicProjects.map((proj, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                onClick={() => setSelectedProject(proj)}
                whileHover={{ y: -16, scale: 1.04 }}
                className="relative overflow-hidden transition-all duration-500 border shadow-2xl cursor-pointer group bg-white/5 backdrop-blur-xl rounded-3xl border-white/10 hover:border-cyan-500/50"
              >
                {/* Cyan Hover Glow */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-br from-cyan-500/20 to-transparent group-hover:opacity-100" />

                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 border shadow-xl bg-cyan-500/20 border-cyan-500/40 rounded-2xl">
                      <Code2 className="text-cyan-400" size={32} />
                    </div>
                    <Sparkles className="text-cyan-400 opacity-70" size={28} />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                    {proj.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-white/70">
                    {proj.desc}
                  </p>
                  <p className="text-sm font-medium tracking-wider text-cyan-400">
                    {proj.tech}
                  </p>

                  <div className="flex items-center gap-3 mt-8 font-semibold transition-colors text-white/70 group-hover:text-cyan-400">
                    <ExternalLink size={20} />
                    <span>View Details →</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl p-10 border shadow-2xl bg-gray-900/95 backdrop-blur-2xl rounded-3xl md:p-16 border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute transition top-6 right-6 text-white/70 hover:text-cyan-400"
            >
              <X size={36} />
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-cyan-500/20 rounded-2xl">
                <Code2 className="text-cyan-400" size={40} />
              </div>
              <h2 className="text-4xl font-black text-white md:text-5xl">
                {selectedProject.title}
              </h2>
            </div>

            <p className="mb-6 text-xl font-semibold md:text-2xl text-cyan-400">
              {selectedProject.tech}
            </p>

            <p className="text-lg leading-relaxed md:text-xl text-white/80">
              {selectedProject.details}
            </p>

            <div className="mt-12 text-center">
              <p className="italic text-white/50">
                Academic Project • Built with passion and curiosity
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}