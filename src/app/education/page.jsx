"use client";

import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";


const education = [
  {
    title: "BSc (Hons) Information Technology",
    org: "SLIIT – Sri Lanka Institute of Information Technology",
    year: "2024 – Present",
    grade: "Ongoing (First Class Expected)",
    cert: "/certs/sliit.pdf",
  },
  {
    title: "Diploma in Information Technology",
    org: "SLTC Research University",
    year: "2023",
    grade: "Distinction Pass",
    cert: "/certs/sltc.pdf",
  },
  {
    title: "Certificate in Graphic Design & UI/UX",
    org: "OSLO International",
    year: "2022",
    grade: "A+ Excellence",
    cert: "/certs/oslo.pdf",
  },
  {
    title: "Full-Stack Development Internship",
    org: "DONEXT Technologies",
    year: "2024",
    grade: "Outstanding Performance",
    cert: "/certs/donext.pdf",
  },
];

export default function Education() {
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

      {/* Right Side Nav */}
  

      {/* Floating Contact Button */}
    

      {/* EDUCATION CONTENT */}
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
              Education
            </h1>
            <p className="max-w-3xl mx-auto mt-8 text-xl font-light md:text-2xl text-white/60">
              Building a strong foundation in technology, design, and real-world development
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
            {education.map((item, i) => (
              <motion.a
                key={i}
                href={item.cert}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="block group"
              >
                <div className="relative p-8 overflow-hidden transition-all duration-500 border shadow-2xl bg-white/5 backdrop-blur-xl rounded-3xl md:p-10 border-white/10 hover:border-cyan-500/50">
                  {/* Cyan Glow on Hover */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-br from-cyan-500/20 to-transparent group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 border shadow-xl bg-cyan-500/20 border-cyan-500/40 rounded-2xl">
                        <Award className="text-cyan-400" size={36} />
                      </div>
                      <Sparkles className="text-cyan-400 opacity-70" size={28} />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mb-2 text-lg font-semibold md:text-xl text-cyan-400">
                      {item.org}
                    </p>
                    <p className="mb-4 text-white/70">{item.year}</p>
                    <p className="text-lg font-medium text-cyan-300">
                      {item.grade}
                    </p>

                    <div className="flex items-center gap-3 mt-8 font-semibold transition-colors text-white/70 group-hover:text-cyan-400">
                      <Award size={22} />
                      <span>View Certificate →</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-32 text-center"
          >
            <p className="text-2xl italic font-light md:text-3xl text-white/50">
              “The only way to do great work is to love what you do.” — Steve Jobs
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}