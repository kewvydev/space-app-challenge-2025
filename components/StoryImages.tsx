"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Sample data for the story pages
const STORY_PAGES = [
  {
    id: 1,
    image: '/marco.png', // For now we use the frame as placeholder
    title: 'The Beginning',
    text: 'In a distant universe, where stars sing forgotten melodies, a story began that would change everything. Space, once silent and empty, now resonated with echoes of a lost past.'
  },
  {
    id: 2,
    image: '/marco.png',
    title: 'The Encounter',
    text: 'In the midst of cosmic darkness, two lost souls found each other. Their gazes crossed through dimensions, creating a bond that would transcend time and space.'
  },
  {
    id: 3,
    image: '/marco.png',
    title: 'The Adventure',
    text: 'Together they embarked on an epic journey through unknown galaxies. Each planet visited revealed new secrets and each star told a different story.'
  },
  {
    id: 4,
    image: '/marco.png',
    title: 'The Discovery',
    text: 'In the heart of a bright nebula, they discovered the crystal that contained all the wisdom of the universe. Its light pulsed with the energy of thousands of civilizations.'
  },
  {
    id: 5,
    image: '/marco.png',
    title: 'The Revelation',
    text: 'The crystal showed them the truth: the universe was not broken, it simply waited to be repaired. And they were the chosen ones for this sacred mission.'
  },
  {
    id: 6,
    image: '/marco.png',
    title: 'The End',
    text: 'With determination and love, they restored cosmic harmony. The stars began to sing again, and the universe filled with hope and light once more.'
  }
];

function StoryImages() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        handleNext();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < STORY_PAGES.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsLoading(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsLoading(false);
      }, 300);
    }
  };

  const currentStory = STORY_PAGES[currentPage];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-full p-6">
      {/* Header */}
      <motion.header 
        className="w-full max-w-7xl flex items-center justify-between p-4 mb-8 bg-black/40 backdrop-blur-sm rounded-2xl z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="sun"></div>
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 font-serif text-center">
            The Broken Ballad
          </h1>
          <p className="text-yellow-300 text-sm text-center mt-1">
            Visual Story
          </p>
        </div>
        <nav className="flex items-center gap-4 text-white/80">
          <a 
            href="/story" 
            className="px-4 py-2 text-sm bg-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors duration-300"
          >
            ← Back to 3D
          </a>
          <span className="text-sm">Page {currentPage + 1} of {STORY_PAGES.length}</span>
        </nav>
      </motion.header>

      {/* Main content */}
      <motion.main 
        className="flex flex-col items-center w-full max-w-6xl flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Frame with image */}
        <div className="relative mb-8">
          <div className="relative w-[800px] h-[800px] mx-auto">
            {/* Background frame */}
            <Image
              src="/marco.png"
              alt="Story frame"
              fill
              className="object-contain z-10"
              priority
            />
            
            {/* Content area inside the frame */}
            <div className="absolute inset-16 z-20 bg-black/90 rounded-lg flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-yellow-400"></div>
                    </div>
                  ) : (
                    <div className="text-center p-12">
                      <h3 className="text-4xl font-bold text-yellow-400 mb-8 font-serif">
                        {currentStory.title}
                      </h3>
                      <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-black">
                          {currentStory.id}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Narrative text */}
        <motion.div 
          className="w-full max-w-4xl mb-8"
          key={`text-${currentPage}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-8 shadow-lg">
            <p className="text-white/90 text-lg leading-relaxed text-center font-light">
              {currentStory.text}
            </p>
          </div>
        </motion.div>

        {/* Navigation controls */}
        <div className="flex items-center gap-6 mb-8">
          <motion.button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === 0 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 hover:text-yellow-300'
            }`}
            whileHover={currentPage > 0 ? { y: -2 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          {/* Page indicators */}
          <div className="flex gap-2">
            {STORY_PAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsLoading(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-yellow-400/40 hover:bg-yellow-400/60'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            disabled={currentPage === STORY_PAGES.length - 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === STORY_PAGES.length - 1 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 hover:text-yellow-300'
            }`}
            whileHover={currentPage < STORY_PAGES.length - 1 ? { y: -2 } : {}}
            whileTap={currentPage < STORY_PAGES.length - 1 ? { scale: 0.95 } : {}}
          >
            Next →
          </motion.button>
        </div>

        {/* Instructions */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-yellow-400 text-sm font-mono">
            Use arrows ← → or spacebar to navigate
          </p>
        </motion.div>
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

export default StoryImages;
