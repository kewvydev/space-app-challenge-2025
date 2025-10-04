"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";




export default function Home() {

  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (

    <div className="min-h-screen flex flex-col items-center">


      <header className="w-full flex items-center justify-between px-8 pt-10 pb-10  bg-black/40 rounded-4xl">
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
          <img src="/NASA_logo.png" alt="NASA" className="h-40 ml-10 " />
        </a>

        <div className="w-1 h-20 bg-white/70 mx-1 rounded"></div>

        {/*
        <motion.h1
          className=" w-full text-yellow-200 text-4xl md:text-5xl font-bold text-center font-serif drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        > The<br className="hidden md:block" /> Ballad <br className="hidden md:block" />Broken<br className="hidden md:block" /> of the Shield

        </motion.h1>
        */}

        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              className="absolute inset-0 flex items-center justify-center bg-black text-yellow-200 z-50"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-center font-serif drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{opacity:0,y:-20}}
                transition={{ duration: 1 }}
    
              >
                The Broken Ballad <br className="hidden md:block" />
                of the Shield
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-yellow-200 text-4xl md:text-5xl font-bold text-center font-serif drop-shadow-lg">
          The Broken Ballad <br className="hidden md:block" /> of the Shield
        </div>
        <div className="w-1 h-20 bg-white/70 mx-6 rounded"></div>
        <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noopener noreferrer">
          <img src="/SpaceAppChallenge_logo.png" alt="Space Apps" className="h-16" />
        </a>
      </header>


      <nav className="flex justify-start  gap-20 mb-8 mt-10 py-10 bg-black/40 rounded-4xl px-20 shadow-lg">
        <Link
          href="/story"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-4xl px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-yellow-600/90  transition-all duration-200"
        >
          HISTORY
        </Link>
        <Link
          href="/chapters"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-4xl px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-yellow-600/90  transition-all duration-200"
        >
          CHAPTERS
        </Link>
        <Link
          href="/characters"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-4xl px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-yellow-600/90  transition-all duration-200"
        >
          CHARACTERS
        </Link>
        <Link
          href="/about"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-4xl px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-yellow-600/90 transition-all duration-200"
        >
          ABOUT US
        </Link>
      </nav>


      <div className="flex justify-center w-full">
        <img
          src="/main-image.jpg"
          alt="Main scene"
          className="rounded-xl shadow-2xl max-w-4xl w-full object-cover"
        />
      </div>
    </div>
  );
}
