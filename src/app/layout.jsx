import "./globals.css";
import { Icons } from "lucide-react";
import { Alex_Brush, Montserrat, Playfair_Display } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

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

      <body className={`relative min-h-screen overflow-x-hidden text-white bg-black ${alexBrush.variable} ${montserrat.variable} ${playfair.variable} font-sans`}>
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
          <div className="absolute inset-0 bg-black/70 sm:bg-black/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Main Content Area */}
        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  );
}