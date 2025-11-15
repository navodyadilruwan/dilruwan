"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, MapPin, Phone, Send } from "lucide-react";

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
  

    

      {/* CONTACT PAGE CONTENT */}
      <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-7xl drop-shadow-2xl">
              Get In Touch
            </h1>
            <p className="max-w-3xl mx-auto mt-8 text-xl font-light md:text-2xl text-white/60">
              Let's turn your vision into reality — together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <motion.a
                href="mailto:navodya@example.com"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block p-8 transition-all duration-500 border group bg-white/5 backdrop-blur-xl rounded-3xl border-white/10 hover:border-cyan-500/50"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 border bg-cyan-500/20 rounded-2xl border-cyan-500/40">
                    <Mail className="text-cyan-400" size={32} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">Email</h3>
                    <p className="transition text-white/70 group-hover:text-cyan-400">
                      navodya@example.com
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+94123456789"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block p-8 transition-all duration-500 border group bg-white/5 backdrop-blur-xl rounded-3xl border-white/10 hover:border-cyan-500/50"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 border bg-cyan-500/20 rounded-2xl border-cyan-500/40">
                    <Phone className="text-cyan-400" size={32} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">Phone</h3>
                    <p className="transition text-white/70 group-hover:text-cyan-400">
                      +94 71 234 5678
                    </p>
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="p-8 border bg-white/5 backdrop-blur-xl rounded-3xl border-white/10"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 border bg-cyan-500/20 rounded-2xl border-cyan-500/40">
                    <MapPin className="text-cyan-400" size={32} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">Location</h3>
                    <p className="text-white/70">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              onSubmit={handleSubmit}
              className="p-8 border bg-white/5 backdrop-blur-xl rounded-3xl md:p-10 border-white/10"
            >
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-6 py-5 text-white transition border bg-white/10 border-white/20 rounded-2xl placeholder-white/50 focus:border-cyan-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-6 py-5 text-white transition border bg-white/10 border-white/20 rounded-2xl placeholder-white/50 focus:border-cyan-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-6 py-5 text-white transition border resize-none bg-white/10 border-white/20 rounded-2xl placeholder-white/50 focus:border-cyan-500 focus:outline-none"
                />

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center justify-center w-full gap-3 py-5 text-xl font-bold transition-all duration-300 border-2 shadow-2xl bg-cyan-500/20 border-cyan-500/50 text-cyan-300 rounded-2xl hover:bg-cyan-500/30 hover:border-cyan-400 hover:text-white"
                >
                  <Send size={24} />
                  Send Message
                </motion.button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center font-semibold text-lg ${
                      status.includes("sent") ? "text-cyan-400" : "text-red-400"
                    }`}
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </motion.form>
          </div>

          {/* Final Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-32 text-center"
          >
            <p className="text-2xl italic font-light md:text-3xl text-white/40">
              “Great things are done by a series of small things brought together.” — Vincent van Gogh
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}