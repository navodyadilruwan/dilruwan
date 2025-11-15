import "./globals.css";
import Nav from "./components/Nav";
import { Icons } from "lucide-react";



export const metadata = {
  title: "Navodya Dilruwan",
  icons: {
    icon: "/profile.jpg",
  },
  
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="relative min-h-screen overflow-x-hidden text-white bg-black">
        {/* Full-Screen Video Background */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute object-cover w-auto h-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src="/video1.mp4"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay - Responsive Opacity */}
          <div className="absolute inset-0 bg-black/70 sm:bg-black/60 md:bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Right Side Navigation - Hidden on Mobile, Shows on Hover/Tap */}
        <div className="fixed z-50 hidden -translate-y-1/2 right-4 top-1/2 md:block">
          <Nav />
        </div>

        {/* Mobile Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t md:hidden bg-black/70 backdrop-blur-xl border-white/10">
          <div className="flex items-center justify-around px-4 py-3">
            <Nav /> {/* Reuses same Nav component — it auto-adjusts on mobile */}
          </div>
        </nav>

        {/* Main Content Area - Padding for Mobile Bottom Nav */}
        <main className="relative z-20 pb-24 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}