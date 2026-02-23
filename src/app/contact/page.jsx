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

        {/* Left Column: Context & Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-script tracking-wide text-white mb-8 drop-shadow-xl leading-tight">
            Let's work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">together.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 mb-12 font-light max-w-lg">
            I'm currently available for freelance work and open to full-time opportunities.
          </p>

          <div className="space-y-6">
            <a href="mailto:navodya@example.com" className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group">
              <div className="p-4 bg-cyan-500/20 text-cyan-400 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Email Me</h3>
                <span className="text-white/60 group-hover:text-white transition-colors">navodyadilruwan220@gmail.com</span>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-6">
              <a href="https://www.linkedin.com/in/navodya-dilruwan-3b8a243b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all group text-center">
                <Linkedin size={32} className="text-white/50 group-hover:text-[#0077b5] mb-3 transition-colors" />
                <span className="font-bold text-white group-hover:text-[#0077b5]">LinkedIn</span>
              </a>
              <a href="https://github.com/navodyadilruwan" target="_blank" className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group text-center">
                <Github size={32} className="text-white/50 group-hover:text-white mb-3 transition-colors" />
                <span className="font-bold text-white">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl -z-10 transform rotate-6 scale-95" />

          <div className="p-8 md:p-12 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white/40 mb-2 ml-2">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-6 py-4 text-lg text-white bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                  placeholder="full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white/40 mb-2 ml-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-6 py-4 text-lg text-white bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                  placeholder="name@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white/40 mb-2 ml-2">MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-6 py-4 text-lg text-white bg-white/5 border border-white/10 rounded-2xl resize-none focus:border-cyan-500 focus:bg-white/10 focus:outline-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 mt-4 bg-white text-black font-black text-xl rounded-2xl hover:bg-cyan-400 hover:scale-[1.02] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-bold mt-4 ${status.includes("sent") ? "text-cyan-400" : "text-red-400"
                    }`}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}