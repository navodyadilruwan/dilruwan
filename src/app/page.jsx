"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import AcademicPage from "./academic/page";
import Education from "./education/page";
import Projects from "./projects/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-cyan-500/30 selection:text-white">
      {/* HERO SECTION - Dark Luxury Style */}
      <section className="relative flex items-center justify-center min-h-screen px-6 py-24 overflow-hidden">
        <div className="grid items-center max-w-7xl mx-auto gap-16 lg:grid-cols-2">

          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="z-10 text-center lg:text-left">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl font-black italic tracking-tighter text-white md:text-7xl lg:text-8xl drop-shadow-2xl"
            >
              NAVODYA <br className="hidden lg:block" /> DILRUWAN
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-2xl font-bold md:text-4xl text-cyan-400 drop-shadow-lg"
            >
              Full-Stack Developer
            </motion.p>

            {/* Script Text Request */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-4xl font-serif font-bold italic text-white md:text-4xl lg:text-5xl drop-shadow-2xl my-4"
            >
              Type something to start
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 text-lg font-light leading-relaxed md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0"
            >
              Building powerful, elegant, and performant digital experiences with modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col items-center gap-6 mt-10 sm:flex-row lg:justify-start justify-center"
            >
              <Link
                href="#projects"
                className="px-10 py-5 text-lg font-bold text-white transition-all duration-500 border-2 shadow-2xl group bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 hover:border-cyan-500/60 hover:text-cyan-300"
              >
                <span className="flex items-center gap-3">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>

              <Link
                href="#contact"
                className="px-10 py-5 text-lg font-bold transition-all duration-500 border-2 shadow-2xl bg-cyan-500/20 backdrop-blur-xl border-cyan-500/50 rounded-2xl text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-400 shadow-cyan-500/40"
              >
                Let’s Talk
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex justify-center gap-8 mt-12 lg:justify-start"
            >
              <a
                href="https://github.com/navodyadilruwan"
                target="_blank"
                className="p-3 transition-all duration-300 border rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 text-white/70 hover:text-cyan-400"
              >
                <Github size={32} strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com/in/navodya-dilruwan"
                target="_blank"
                className="p-3 transition-all duration-300 border rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 text-white/70 hover:text-cyan-400"
              >
                <Linkedin size={32} strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VIDEO DISPLAY */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-black/80 backdrop-blur-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <video
                src="/video3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full opacity-90"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </section>


      <Education />
      <AcademicPage />
      <Projects />
      <ContactPage />
    </main>
  );
}