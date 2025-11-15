"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, GraduationCap, User, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/academic", label: "Academic", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: Vertical Right Nav */}
      <motion.div className="flex-col hidden gap-6 md:flex">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} className="relative group">
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/30"
                }`}
              >
                <Icon size={32} strokeWidth={2} />
              </motion.div>

              {/* Desktop Tooltip */}
              <div className="absolute px-4 py-2 mr-4 text-sm transition-opacity -translate-y-1/2 border opacity-0 pointer-events-none right-full top-1/2 bg-black/90 rounded-xl whitespace-nowrap group-hover:opacity-100 border-white/20">
                {item.label}
              </div>
            </Link>
          );
        })}
      </motion.div>

      {/* Mobile: Bottom Horizontal Icons */}
      <div className="flex justify-around w-full md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p-3 rounded-xl transition-all ${
                isActive ? "text-cyan-400" : "text-white/70"
              }`}
            >
              <Icon size={28} strokeWidth={2.5} />
            </Link>
          );
        })}
      </div>
    </>
  );
}