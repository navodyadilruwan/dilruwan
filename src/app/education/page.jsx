"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Building2 } from "lucide-react";

const education = [
  {
    title: "BSc (Hons) Information Technology",
    org: "SLIIT – Sri Lanka Institute of Information Technology",
    year: "2024 – Present",
    grade: "Ongoing (First Class Expected)",
    cert: "/certs/sliit.pdf",
    description: "Specializing in Software Engineering with a focus on distributed systems, AI applications, and advanced web architectures."
  },
  {
    title: "Diploma in Information Technology",
    org: "SLTC Research University",
    year: "2023",
    grade: "Distinction Pass",
    cert: "/certs/sltc.pdf",
    description: "Comprehensive study of data structures, algorithms, database management, and object-oriented programming methodologies."
  },
  {
    title: "Certificate in Graphic Design & UI/UX",
    org: "OSLO International",
    year: "2022",
    grade: "A+ Excellence",
    cert: "/certs/oslo.pdf",
    description: "Mastered visual communication principles, user-centered design thinking, and proficiency in industry-standard design tools."
  },
  {
    title: "Full-Stack Development Internship",
    org: "DONEXT Technologies",
    year: "2024",
    grade: "Outstanding Performance",
    cert: "/certs/donext.pdf",
    description: "Hands-on experience developing scalable web applications using the MERN stack and collaborating in an Agile environment."
  },
];

export default function Education() {
  return (
    <section className="min-h-screen px-6 py-24 relative overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-script tracking-wide text-white mb-6 drop-shadow-lg">
            Education <span className="text-cyan-500 font-sans">.</span>
          </h2>
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
              <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold italic text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-cyan-200/80 mb-4 font-medium text-lg">
                      <Building2 size={18} /> {item.org}
                    </div>

                    <p className="text-white/60 leading-relaxed mb-6">
                      {item.description || item.grade}
                    </p>

                    <div className="inline-block px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20 text-sm">
                      {item.grade}
                    </div>
                  </div>

                  {/* Meta / Sidebar */}
                  <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[180px]">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 text-white/90 text-sm font-medium border border-white/10">
                      <Calendar size={16} className="text-cyan-500" /> {item.year}
                    </span>

                    <a
                      href={item.cert}
                      target="_blank"
                      className="group/btn flex items-center gap-3 text-sm font-bold text-white/50 hover:text-white transition-colors mt-auto"
                    >
                      <span>View Certificate</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-cyan-500 group-hover/btn:text-black transition-all">
                        <Award size={16} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}