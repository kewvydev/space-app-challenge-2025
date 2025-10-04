"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // La intro dura 3 segundos
    return () => clearTimeout(timer);
  }, []);

  const navLinkClasses = "px-5 py-2 text-md font-semibold text-white rounded-lg hover:bg-white/10 transition-colors duration-300";

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="absolute inset-0 flex items-center justify-center bg-black z-50" // Color base del texto eliminado de aquí
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              // CAMBIOS AQUÍ: Tamaño de texto aumentado y color especificado
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-center font-serif drop-shadow-lg text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              The Broken Ballad <br className="hidden md:block" />
              of the Shield
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      <header className="w-full max-w-7xl flex items-center justify-between p-4 my-6 bg-black/40 backdrop-blur-sm rounded-2xl z-10">
        <div className="sun"></div>

        <div>
          <Link href="/" 
            // CAMBIOS AQUÍ: Tamaño y color actualizados para consistencia
            className="text-6xl font-bold text-yellow-400 font-serif hover:text-yellow-200 transition-colors"
          >
            
            The Broken Ballad <br className="hidden md:block" />
              of the Shield
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/story" className={navLinkClasses}>
            HISTORY
          </Link>
          <Link href="/chapters" className={navLinkClasses}>
            CHARACTERS
          </Link>
          <Link href="/about" className={navLinkClasses}>
            ABOUT US
          </Link>
        </nav>
      </header>

      <main className="flex justify-center w-full px-6">
        <motion.img
          src="/main-image.jpg"
          alt="Main scene"
          className="rounded-xl shadow-2xl max-w-4xl w-full object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        />
      </main>

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