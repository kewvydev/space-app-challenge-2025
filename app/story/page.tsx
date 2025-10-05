"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import StoryPage from "@/components/StoryPage";

// To animate the Next.js Link component
const MotionLink = motion(Link);

export default function Page() {
  const navLinkClasses = "px-5 py-2 text-md font-semibold text-white/80 rounded-lg hover:text-white transition-colors duration-300";

  return (
    <div className="relative min-h-screen flex flex-col items-center w-full">
      {/* Header consistent with the main page */}
      <motion.header 
        className="w-full max-w-7xl flex items-center justify-between p-4 my-6 bg-black/40 backdrop-blur-sm rounded-2xl z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="sun"></div>
        <div>
          <Link href="/" className="text-3xl font-bold text-yellow-400 font-serif hover:text-yellow-200 transition-colors">
            The Broken Ballad
          </Link>
        </div>
        <nav className="flex items-center gap-2">
          <MotionLink href="/story" className={`${navLinkClasses} bg-yellow-400/20 text-yellow-400`} whileHover={{ y: -2 }}>
            HISTORY
          </MotionLink>
          <MotionLink href="/characters" className={navLinkClasses} whileHover={{ y: -2 }}>
            CHARACTERS
          </MotionLink>
          <MotionLink href="/about" className={navLinkClasses} whileHover={{ y: -2 }}>
            ABOUT US
          </MotionLink>
        </nav>
      </motion.header>

      {/* Main content with the StoryPage component */}
      <motion.main 
        className="flex flex-col items-center w-full px-6 flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full h-[calc(100vh-200px)] max-w-7xl">
          <StoryPage />
        </div>
      </motion.main>
      
      <style jsx>{`
        .sun {
          position: absolute;
          top: 50px;
          right: -200px;
          width: 100px;
          height: 100px;
          z-index: -1;
          background: radial-gradient(ellipse at center, #ffd700 0%, #ff8c00 100%);
          border-radius: 50%;
          box-shadow: 0 0 20px 5px #ffd700,
                      0 0 50px 20px #ff8c00,
                      0 0 100px 40px #ff4500;
        }
      `}</style>
    </div>
  );
}
