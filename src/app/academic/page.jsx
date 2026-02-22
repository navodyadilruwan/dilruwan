"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink, Code2, X, Terminal, Database, Smartphone } from "lucide-react";
import { useState } from "react";

const academicProjects = [
  {
    title: "Online Property Sales",
    desc: "Real estate platform with role-based access control",
    tech: "HTML • CSS • PHP • MySQL",
    icon: <Database />,
    details:
      "A complete real estate management system featuring user authentication (buyer/seller/admin), property listings with image uploads, advanced search filters, and a full admin dashboard for managing users and listings.",
  },
  {
    title: "Online Music Store",
    desc: "E-commerce platform with simulated payments",
    tech: "HTML • CSS • JS • MySQL",
    icon: <Terminal />,
    details:
      "Full-featured digital music store with product catalog, user accounts, shopping cart, wishlist, order history, and simulated payment gateway integration using session-based authentication.",
  },
  {
    title: "Gym Management System",
    desc: "Android application for gym operations",
    tech: "Java • Kotlin • Firebase",
    icon: <Smartphone />,
    details:
      "Native Android app for gym owners and members. Features include membership registration, class scheduling, attendance tracking via QR code, real-time notifications, and trainer dashboards.",
  },
  {
    title: "Pharmacy Management",
    desc: "Complete inventory and sales system",
    tech: "MERN Stack",
    icon: <Sparkles />,
    details:
      "Modern full-stack pharmacy system with drug inventory tracking, expiry alerts, prescription management, POS billing, sales analytics, and role-based access (pharmacist/admin).",
  },
];

export default function AcademicPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen px-6 py-24 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-script tracking-wide text-white mb-6 drop-shadow-lg">
            Academic Labs<span className="text-cyan-500 font-sans">.</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Experimental grounds where deeper concepts meet practical application.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(proj)}
              className={`group relative p-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
                }`}
            >
              <div className="absolute top-6 right-8 text-6xl font-black text-white/5 group-hover:text-cyan-500/10 transition-colors select-none">
                0{i + 1}
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                <div className="p-3 w-fit bg-cyan-900/20 border border-cyan-500/20 rounded-xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {proj.icon}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold italic text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-white/60 mb-6 font-light leading-relaxed">
                    {proj.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{proj.tech}</span>
                    <span className="p-2 rounded-full bg-white/5 text-white/70 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <ExternalLink size={18} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Gradient Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl p-10 bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {/* Modal Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] -z-10" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-400">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold italic text-white mb-1">{selectedProject.title}</h3>
                  <p className="text-cyan-400 font-medium">{selectedProject.tech}</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-white/80">{selectedProject.details}</p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-cyan-500 transition-colors"
                >
                  Close & Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}