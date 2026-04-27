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
    <main id="top" className="relative min-h-screen text-white selection:bg-cyan-500/30 selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#040405]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
          <Link href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80 hover:text-cyan-300 transition-colors">
            NAVODYA
          </Link>
          <div className="hidden md:flex items-center gap-10 text-sm text-white/60">
            <Link href="#projects" className="hover:text-cyan-300 transition-colors">Projects</Link>
            <Link href="#academic" className="hover:text-cyan-300 transition-colors">Academic</Link>
            <Link href="#education" className="hover:text-cyan-300 transition-colors">Education</Link>
            <Link href="#contact" className="hover:text-cyan-300 transition-colors">Contact</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/navodyadilruwan" target="_blank" rel="noreferrer" className="text-white/70 hover:text-cyan-300 transition-colors">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/navodya-dilruwan" target="_blank" rel="noreferrer" className="text-white/70 hover:text-cyan-300 transition-colors">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex items-center justify-center min-h-screen px-6 pt-28 pb-24 overflow-hidden">
        <div className="absolute -left-16 top-16 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-1/2 bottom-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

        <div className="grid items-center max-w-7xl mx-auto gap-16 lg:grid-cols-2">

          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="relative z-10 text-center lg:text-left">
            

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl drop-shadow-2xl leading-tight"
            >
              NAVODYA <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-slate-100 to-purple-400">DILRUWAN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-2xl font-bold md:text-4xl text-cyan-400 drop-shadow-lg"
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 text-lg font-light leading-relaxed md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0"
            >
              Building powerful, elegant, and performant digital experiences with modern web technologies.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col items-center gap-6 mt-10 sm:flex-row lg:justify-start justify-center"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-950 transition-all duration-300 rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 shadow-[0_20px_60px_rgba(56,189,248,0.22)] border border-transparent hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-cyan-200 transition-all duration-300 rounded-2xl border border-cyan-500/50 bg-slate-900/70 backdrop-blur-xl hover:border-cyan-400/70 hover:bg-slate-800/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Let’s Talk
              </Link>
            </motion.div>

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

        <div className="absolute inset-x-0 bottom-10 flex justify-center text-sm uppercase tracking-[0.35em] text-white/50">
          Scroll to explore
        </div>
      </section>


      <Education />
      <AcademicPage />
      <Projects />
      <ContactPage />

      <footer className="border-t border-white/10 bg-[#050506] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-white/60">Navodya Dilruwan</p>
            <p className="text-sm text-white/40">Full-stack developer crafting modern web experiences.</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-4">
              <a href="#projects" className="text-white/60 hover:text-cyan-300 transition-colors">Projects</a>
              <a href="#contact" className="text-white/60 hover:text-cyan-300 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/navodyadilruwan" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-cyan-300 transition-all">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com/in/navodya-dilruwan" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-cyan-300 transition-all">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}