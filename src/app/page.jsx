"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* DARK CINEMATIC VIDEO BACKGROUND */}
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
   

    

      {/* HERO SECTION - Dark Luxury Style */}
      <section className="relative flex items-center justify-center min-h-screen px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-7xl drop-shadow-2xl"
          >
            NAVODYA DILRUWAN
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-3xl font-bold md:text-5xl text-cyan-400 drop-shadow-lg"
          >
            Full-Stack Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-3xl mx-auto mt-10 text-xl font-light leading-relaxed md:text-1xl text-white/70"
          >
            Building powerful, elegant, and performant digital experiences with modern web technologies.
          </motion.p>

          {/* CTA 2 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-8 mt-10 sm:flex-row"
          >
            <Link
              href="/projects"
              className="px-12 py-6 text-xl font-bold text-white transition-all duration-500 border-2 shadow-2xl group bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl hover:bg-white/20 hover:border-cyan-500/60 hover:text-cyan-300"
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
              href="/contact"
              className="px-22 py-6 text-xl font-bold transition-all duration-500 border-2 shadow-2xl bg-cyan-500/20 backdrop-blur-xl border-cyan-500/50 rounded-2xl text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-400 shadow-cyan-500/40"
            >
              Let’s Talk
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-center gap-12 mt-20"
          >
            <a
              href="https://github.com/navodyadilruwan"
              target="_blank"
              className="transition-all duration-300 text-white/70 hover:text-cyan-400"
            >
              <Github size={42} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/navodya-dilruwan"
              target="_blank"
              className="transition-all duration-300 text-white/70 hover:text-cyan-400"
            >
              <Linkedin size={42} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}