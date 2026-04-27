"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, Building2, X } from "lucide-react";

const education = [
  {
    title: "BSc (Hons) Information Technology",
    org: "SLIIT – Sri Lanka Institute of Information Technology",
    year: "2021",
    cert: "/waiting.jpg",
    description: "Specializing in Information Technology with a focus on distributed systems, AI applications, and advanced web architectures."
  },
  {
    title: "Diploma in Information Technology",
    org: "SITC University",
    year: "2023",
    grade: "A+",
    cert: "/s2.jpeg",
    description: "Comprehensive study of data structures, algorithms, database management, and object-oriented programming methodologies."
  },
  {
    title: "Diploma in Computing(Graphic Designing)",
    org: "OSLO Computer College",
    year: "2022",
    grade: "C+",
    cert: "/s1.jpeg",
    description: "Mastered visual communication principles, user-centered design thinking, and proficiency in industry-standard design tools."
  },
  {
    title: "Full-Stack Development Internship",
    org: "Donext Pvt Ltd",
    year: "2025",
    grade: "Outstanding Performance",
    cert: "/waiting.jpg",
    description: "Experienced in developing high-performance, scalable web applications using Next.js."
  },
];

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="education" className="min-h-screen px-6 py-24 relative overflow-hidden flex flex-col justify-center bg-[#050506]">
        {/* Background Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[120px] -z-10 -translate-y-1/2" />
        <div className="absolute bottom-12 left-0 w-[360px] h-[360px] bg-purple-500/6 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Education</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mb-6">
              Formal training, practical internships, and certification highlights that showcase my growth in software engineering and design.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
          </motion.div>

          {/* Timeline Layout */}
          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

                {/* Card */}
                <div className="group relative p-8 rounded-[2.5rem] bg-[#0c0c0f]/90 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/30">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex flex-col gap-2 text-cyan-200/80 mb-4 font-medium text-base md:text-lg">
                        <span className="inline-flex items-center gap-2">
                          <Building2 size={18} /> {item.org}
                        </span>
                        <span className="text-sm uppercase tracking-[0.3em] text-white/40">{item.grade}</span>
                      </div>

                      <p className="text-white/60 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Meta / Sidebar */}
                    <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[220px]">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-200 text-sm font-semibold border border-cyan-500/10">
                        <Calendar size={16} className="text-cyan-400" /> {item.year}
                      </span>

                      <button
                        onClick={() => setSelectedCert(item.cert)}
                        className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-cyan-500/15 hover:text-white transition-all"
                      >
                        <Award size={16} />
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all"
              >
                <X size={20} />
              </button>

              <div className="p-2">
                {selectedCert.endsWith('.pdf') ? (
                  <iframe
                    src={selectedCert}
                    className="w-full h-[80vh] rounded-lg"
                    title="Certificate PDF"
                  />
                ) : (
                  <img
                    src={selectedCert}
                    alt="Certification"
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}