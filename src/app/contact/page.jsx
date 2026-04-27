"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("Message sent! I'll reply soon");
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setStatus("");
        }, 3000);
      } else {
        setStatus("Failed. Try again.");
      }
    } catch (err) {
      setStatus("Network error.");
    }
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-24 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Column: Intro + contact cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 mb-8 border border-white/10 text-sm text-cyan-200 uppercase tracking-[0.25em]">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Say hello
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-slate-100 to-purple-400">amazing</span> together.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-medium">
            I’m available for freelance work, collaborations, and full-time opportunities. Send a quick message and I’ll get back to you within 24 hours.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="mailto:navodyadilruwan220@gmail.com" className="group flex flex-col gap-4 rounded-[2rem] bg-[#111111]/90 border border-white/10 p-6 hover:border-cyan-500/40 hover:bg-white/5 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/15 text-cyan-300 group-hover:bg-cyan-500/25 transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/40 mb-2">Email</p>
                <p className="text-white font-semibold">navodyadilruwan220@gmail.com</p>
              </div>
            </a>

            <div className="group flex flex-col gap-4 rounded-[2rem] bg-[#111111]/90 border border-white/10 p-6 hover:border-purple-500/40 hover:bg-white/5 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-500/15 text-purple-300 transition-colors">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/40 mb-2">Location</p>
                <p className="text-white font-semibold">Ambalangoda, Sri Lanka</p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/navodya-dilruwan-3b8a243b2" target="_blank" className="group flex flex-col gap-4 rounded-[2rem] bg-[#111111]/90 border border-white/10 p-6 hover:border-[#0a66c2]/40 hover:bg-white/5 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0a66c2]/15 text-[#0a66c2] transition-colors">
                <Linkedin size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/40 mb-2">LinkedIn</p>
                <p className="text-white font-semibold">Connect on LinkedIn</p>
              </div>
            </a>

            <a href="https://github.com/navodyadilruwan" target="_blank" className="group flex flex-col gap-4 rounded-[2rem] bg-[#111111]/90 border border-white/10 p-6 hover:border-white/30 hover:bg-white/5 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white transition-colors">
                <Github size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/40 mb-2">GitHub</p>
                <p className="text-white font-semibold">View my work</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl -z-10 rounded-[3rem]" />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#080808]/90 shadow-[0_40px_120px_rgba(10,17,24,0.55)]">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400" />
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-3">Contact form</p>
                <h3 className="text-3xl font-semibold text-white">Let’s start your next project.</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-white/50">Name</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all focus:border-cyan-400 focus:bg-white/10"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm text-white/50">Email</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all focus:border-cyan-400 focus:bg-white/10"
                      placeholder="name@example.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm text-white/50">Message</span>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition-all focus:border-cyan-400 focus:bg-white/10 resize-none"
                    placeholder="Tell me about your project, timeline, or technologies..."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-cyan-400 px-8 py-4 text-lg font-extrabold text-slate-950 shadow-[0_20px_50px_rgba(56,189,248,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm font-semibold ${status.includes("sent") ? "text-cyan-300" : "text-rose-300"}`}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}