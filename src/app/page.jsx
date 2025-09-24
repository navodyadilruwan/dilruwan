
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ subject: "", message: "" });
        setIsOpen(false);
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("⚠️ Error sending message: " + err.message);
    }
  };

  return (
    <>
      <header className="bg-[#101828] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold hover:text-blue-200">
            Navodya Dilruwan
          </Link>
          <nav className="flex space-x-6">
            <Link href="#about" className="font-amber hover:text-blue-200 hover:underline">
              ABOUT
            </Link>
            <Link href="#company_project" className="hover:text-blue-200 hover:underline">
              EXPERIENCE
            </Link>
            <Link href="#academic_projects" className="hover:text-blue-200 hover:underline">
              PROJECTS
            </Link>
            <Link href="#contact" className="hover:text-blue-200 hover:underline">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <section id="about" className="bg-[#101828] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold">Navodya Dilruwan</h1>
          <h2 className="text-2xl font-semibold">Full-Stack Developer</h2>
          <h3 className="text-lg font-light">
            I build scalable, accessible web applications that blend thoughtful design with robust engineering.
          </h3>

          <p className="text-gray-300">
            Kadolla Junction Wathugedara, Thota Wathugedara
            <br />
            +94 751217434
          </p>

          <p className="text-gray-300 leading-relaxed">
            I am an enthusiastic and reliable Full-Stack Developer with strong problem-solving skills and a passion for building scalable applications.
            Currently pursuing my BSc (Hons) Information Technology specializing in Software Engineering at Sri Lanka Institute of Information Technology.
            With hands-on experience in both frontend (Next.js, React) and backend (Bun, Hono, Drizzle ORM, PostgreSQL) development, I am adaptable to challenging situations, a mature team player, and committed to delivering high-quality solutions. I am eager to continuously learn new technologies and contribute effectively to any team or project.
          </p>

          <div className="mt-8 space-y-4">
            

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>
<section id="education" className="bg-gray-900 text-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <h1 className="text-4xl font-bold text-center mb-12">Education & Certifications</h1>

    <div className="mt-12 grid gap-8 md:grid-cols-1">
      {/* Education */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h3 className="text-xl font-semibold text-amber-400 mb-3">Undergraduate Student</h3>
        <p className="text-gray-300 mb-1">Sri Lanka Institute of Information Technology (SLIIT) • Ongoing</p>
        <p className="text-gray-400 text-sm">Pursuing BSc (Hons) Information Technology specializing in Software Engineering</p>
      </div>
<div className="grid gap-8 md:grid-cols-2">
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h3 className="text-xl font-semibold text-amber-400 mb-3">IT Diploma</h3>
        <p className="text-gray-300 mb-1">Sri Lanka Technological Campus (SLTC) • Completed</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h3 className="text-xl font-semibold text-amber-400 mb-3">Graphic Design Diploma</h3>
        <p className="text-gray-300 mb-1">OSLO IT • Completed</p>
      </div>
    </div>
</div>
      

    {/* Experience / Internships */}
    <div className="mt-12 grid gap-8 md:grid-cols-1">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h3 className="text-xl font-semibold text-amber-400 mb-3">Software Development Intern</h3>
        <p className="text-gray-300 mb-1">DONEXT Company • Present</p>
        <p className="text-gray-400 text-sm">
          Working on various full-stack projects including hotel booking systems, university management platforms, mobile applications, and job portals. Gaining hands-on experience with modern web technologies.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="academic_projects" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Academic Projects</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-amber-400">SLIIT University</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold">Online Property Sales System</h3>
              <p className="mt-2 text-gray-300">
                Web-based property management and sales platform with user authentication and property listings.
              </p>
              <p className="mt-3 text-sm text-amber-300">HTML • CSS • JavaScript</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold">Online Music Store</h3>
              <p className="mt-2 text-gray-300">
                E-commerce platform for music sales with shopping cart functionality and user management.
              </p>
              <p className="mt-3 text-sm text-amber-300">Java • JSP • Servlet</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold">Gym Management System</h3>
              <p className="mt-2 text-gray-300">
                Mobile application for gym operations management with member tracking and workout scheduling.
              </p>
              <p className="mt-3 text-sm text-amber-300">Figma • Flutter</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold">Pharmacy Management System</h3>
              <p className="mt-2 text-gray-300">
                Full-stack developed website with customer management and API testing.
              </p>
              <p className="mt-3 text-sm text-amber-300">React • MongoDB • Postman • Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      <section id="company_project" className="bg-gray-900 text-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <h1 className="text-4xl font-bold text-center mb-12">Company Projects</h1>

    {/* Company Info */}
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-semibold text-amber-400">DONEXT</h2>
      <h3 className="text-lg text-gray-300">Full-Stack Development Projects</h3>
    </div>

    {/* Projects Grid */}
    <div className="grid gap-8 md:grid-cols-2">
      {/* Project 1 */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h2 className="text-xl font-semibold">BLOONSOO</h2>
        <h3 className="text-lg text-gray-300">Hotel Management System</h3>
        <p className="mt-2 text-gray-300">
          Full-stack hotel management system with room booking, payment handling, policies, and staff management. 
          Built with Drizzle ORM + PostgreSQL and secure session-based authentication.
        </p>
        <p className="mt-3 text-sm text-amber-300">Next.js • Drizzle ORM • PostgreSQL</p>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h2 className="text-xl font-semibold">My Universe</h2>
        <h3 className="text-lg text-gray-300">University Registration Platform</h3>
        <p className="mt-2 text-gray-300">
          Platform for university search and admission registration with role-based access control for students 
          and university admins. Includes application tracking and course management APIs.
        </p>
        <p className="mt-3 text-sm text-amber-300">Next.js • Drizzle ORM • PostgreSQL</p>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h2 className="text-xl font-semibold">Kid Link</h2>
        <h3 className="text-lg text-gray-300">Hotel Management System</h3>
        <p className="mt-2 text-gray-300">
          Full-stack hotel management system with room booking, payment handling, policies, and staff management. 
          Built with Drizzle ORM + PostgreSQL and secure session-based authentication.
        </p>
        <p className="mt-3 text-sm text-amber-300">Next.js • Drizzle ORM • PostgreSQL</p>
      </div>
      {/* Project 3 */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h2 className="text-xl font-semibold">E-Jobs</h2>
        <h3 className="text-lg text-gray-300">Job Search & Recruitment Platform</h3>
        <p className="mt-2 text-gray-300">
          Job search platform with advanced search & filter functionalities. Includes employer dashboards and candidate profile management systems.
        </p>
        <p className="mt-3 text-sm text-amber-300">Next.js • Drizzle ORM • PostgreSQL</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
        <h2 className="text-xl font-semibold">Taxi App</h2>
        <h3 className="text-lg text-gray-300"> Ride Booking & Vehicle Registration</h3>
        <p className="mt-2 text-gray-300">
          Created a full-stack taxi booking system where users can book rides and drivers can register vehicles.Integrated real-time ride management with booking history and payment tracking. Built scalable backend APIs with Drizzle ORM & PostgreSQL.
        </p>
        <p className="mt-3 text-sm text-amber-300">Next.js • Drizzle ORM • PostgreSQL</p>
      </div>
    </div>
  </div>
</section>

      <section id="technical_skill" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Technical Skills</h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Frontend</h3>
              <ul className="text-gray-300 space-y-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>HTML/CSS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Bun + Hono</li>
                <li>Java</li>
                <li>C</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Database</h3>
              <ul className="text-gray-300 space-y-1">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Drizzle ORM</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-amber-400/40 transition">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Tools</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Git</li>
                <li>Postman</li>
                <li>BetterAuth API</li>
                <li>Scalar API Reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">Let's Connect</h1>
          <p className="text-gray-300 text-lg">
            I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow developers.
            Feel free to reach out if you'd like to collaborate or chat about technology.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="https://wa.me/94751217434?text=Hello%20Navodya!%20I%20want%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffb900] hover:bg-[#f7c340] px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Whats App
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffb900] hover:bg-[#f7c340] px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#ffb900] hover:bg-[#f7c340] px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              E-mail
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-[#121922] rounded-2xl shadow-2xl w-96 p-8 relative">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Send me an Email</h2>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
        required
      />
      <input
        type="text"
        name="mail"
        placeholder="Mail"
        value={form.mail}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400 resize-none"
        required
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setIsOpen(false)}
          className="flex-1 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-xl transition"
        >
          Cancel
        </button>
        <button
          onClick={handleSend}
          className="flex-1 ml-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-2 rounded-xl transition"
        >
          Send
        </button>
      </div>

      {status && (
        <p className="mt-4 text-center text-sm text-gray-600">
          {status}
        </p>
      )}
    </div>
  </div>
)}

    </>
  );
}
