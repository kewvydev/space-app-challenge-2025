"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Sample data for the story pages
const STORY_PAGES = [
  {
    id: 1,
    title: 'The Roar and The Silence',
    text: 'Hi! I\'m Aura. I\'m 14, and this is my navigation log aboard the Pulsar Wanderer. I\'m the navigator and comms specialist; basically, I\'m the eyes and ears for my dad, Captain \'Spark\', as we travel the Solar Highways.',
    images: [
      '/story-images/chapter1/image1.png'
    ]
  },
  {
    id: 2,
    title: 'The Roar and The Silence',
    text: 'My whole life, my job, everything I am, is connected to Space Weather. Dad explained what it is: it\'s when the Sun, our star, gets a little cranky. Sometimes, it hurls giant flares of energy (solar flares). Other times, it has cosmic "burps" that expel clouds of charged particles at millions of miles per hour. The ancient scientists called that a Coronal Mass Ejection (CME)',
    images: [
      '/story-images/chapter1/image1.png'
    ]
  },
  {
    id: 3,
    title: 'The Roar and The Silence',
    text: 'Usually, the Earth\'s magnetic shield protects us, and we only see beautiful lights in the sky—the auroras. But the GMS-28 storm, the "Great Roar," was too strong. We had been warned about the potential, especially after the 1859 Carrington Event—the largest space storm ever recorded—but the world wasn\'t ready for a modern catastrophe',
    images: [
      '/story-images/chapter1/image2.png'
    ]
  },
  {
    id: 4,
    title: 'The Roar and The Silence',
    text: 'The storm’s direct impact was instant and catastrophic. The energy overload fried the planet\'s electric grids, causing massive and permanent blackouts. Zzzzt! It also burned the delicate circuits of the thousands of satellites that gave us GPS, internet, and global communications, turning them into a ring of silent junk over our heads. Space Weather isn\'t just pretty lights; it\'s a critical threat to our entire infrastructure',
    images: [
      '/story-images/chapter1/image2.png'
    ]
  },
  {
    id: 5,
    title: 'The Roar and The Silence',
    text: 'The indirect impact is the world I was born into. Without electricity or global communications, cities collapsed, and the world fractured. My life and my work are a direct consequence. Dad, Captain \'Spark\', calls that era "The Ballad of the Broken Shield." And now, my biggest mission is to prevent a sequel from ever being written',
    images: [
      '/story-images/chapter1/image3.png'
    ]
  },
  {
    id: 6,
    title: 'Our Home, The Sun Traveler',
    text: 'Now we travel the Solar Highways. It gets boring sometimes, but our home is the Pulsar Wanderer, a big, strong vehicle. I installed the extra solar panels myself!',
    images: [
      '/story-images/chapter2/image1.png'
    ]
  },
  {
    id: 7,
    title: 'My Crystal Compasses',
    text: 'I designed the crystal compasses myself. They have a little bit of the Sun in them, and they point to the Sun. I also have a crystal compass for my dad, Captain \'Spark\'. I designed it for him. He\'s the captain, so he needs to be able to navigate.',
    images: [
      '/story-images/chapter3/image1.png'
    ]
  },
  {
    id: 8,
    title: 'The Pulsar Command Room',
    text: 'This is the cockpit. Captain \'Spark\' is always serious, watching the road. He\'s great with old mechanics. I\'m at my post. I have to tune in to hear Station Epsilon, the downed satellite that supposedly holds the blueprint for a new planetary shield. It\'s tough; the static is loud, but my Crystal Core helps me focus. If we find that blueprint, the Arcologies can protect themselves better. Science is our best magic tool!',
    images: [
      '/story-images/chapter4/image1.png'
    ]
  },
  {
    id: 9,
    title: 'The Sun Gets Angry Again',
    text: 'We found it! At Station Epsilon, the blueprint wasn\'t there, but we picked up an emergency signal. Look at the screen! The Sun is getting angry again. A new storm is coming, the GMS-29, just as strong as the first! We only have a few hours!',
    images: [
      '/story-images/chapter5/image1.png'
    ]
  },
  {
    id: 10,
    title: 'The Sun Gets Angry Again',
    text: 'Captain \'Spark\' was terrified, but he found the Shield blueprints we were looking for in the station\'s backup hard-drives. Our new mission: travel to Tower Zero to transmit the blueprint before the pulse hits. We can\'t let the world go silent again!',
    images: [
      '/story-images/chapter5/image2.png'
    ]
  },
  {
    id: 11,
    title: 'The Secret Message Sent!',
    text: 'We reached Tower Zero. The air was thick with static. Time was running out! Captain \'Spark\' had to be a human lightning rod. He went to the base to turn on a loud, old generator. It was a brave sacrifice',
    images: [
      '/story-images/chapter6/image1.png'
    ]
  },
  {
    id: 12,
    title: 'The Secret Message Sent!',
    text: 'I stayed up high with the radio. I poured all my energy into the Crystal Core, and I felt it guiding me by the stars. And I did it: I transmitted the blueprint! Just as the storm hit us, the message went out.',
    images: [
      '/story-images/chapter6/image2.png'
    ]
  },
  {
    id: 14,
    title: 'The Secret Message Sent!',
    text: 'Now, we look at the sky. The GMS-29 has arrived, but this time, it didn\'t end in silence. The world has the knowledge to start building a Strong Shield. The cycle is broken. And it was all thanks to a girl, a Captain, a drone, and a magical crystal!',
    images: [
      '/story-images/chapter6/image3.png'
    ]
  }

];

function StoryImages() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
  }, [currentPage, currentImageIndex]);

  const handleNext = () => {
    const currentChapter = STORY_PAGES[currentPage];
    
    // Si hay más imágenes en el capítulo actual
    if (currentImageIndex < currentChapter.images.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
        setIsLoading(false);
      }, 300);
    }
    // Si es la última imagen del capítulo, ir al siguiente capítulo
    else if (currentPage < STORY_PAGES.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setCurrentImageIndex(0);
        setIsLoading(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    // Si no es la primera imagen del capítulo actual
    if (currentImageIndex > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex - 1);
        setIsLoading(false);
      }, 300);
    }
    // Si es la primera imagen, ir al capítulo anterior
    else if (currentPage > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setCurrentImageIndex(STORY_PAGES[currentPage - 1].images.length - 1);
        setIsLoading(false);
      }, 300);
    }
  };

  const currentStory = STORY_PAGES[currentPage];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-full p-6">
       {/* Header */}
       <motion.header 
         className="w-full max-w-7xl flex items-center justify-between p-4 mb-4 bg-black/40 backdrop-blur-sm rounded-2xl z-10"
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
          <span className="text-sm">
            Chapter {currentPage + 1} of {STORY_PAGES.length} | Image {currentImageIndex + 1} of {STORY_PAGES[currentPage].images.length}
          </span>
        </nav>
      </motion.header>

      {/* Main content */}
      <motion.main 
        className="flex flex-col items-center w-full max-w-6xl flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {currentImageIndex === 0 && (
          <motion.div
            key={`chapter-title-${currentPage}`}
            className="w-full max-w-4xl mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/40 rounded-xl p-4 shadow-lg">
              <h2 className="text-center text-yellow-300 text-xl font-semibold tracking-wide">
                Chapter {currentPage + 1}: {currentStory.title}
              </h2>
            </div>
          </motion.div>
        )}
        {/* Frame with image */}
        <div className="relative">
          <div className="relative w-[720px] h-[581px] mx-auto">
            {/* Background frame */}
            <Image
              src="/marco.png"
              alt="Story frame"
              fill
              className="object-contain z-40"
              priority
            />
            
            {/* Content area inside the frame - adapted to frame */}
            <div className="absolute inset-16 z-20 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-[600px] flex items-center justify-center">
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
                      <div className="w-full h-full flex flex-col items-center justify-center relative">
                        {/* Imagen del cuento */}
                        <div className="w-full h-full relative flex items-center justify-center">
                          <Image
                            src={currentStory.images[currentImageIndex]}
                            alt={`${currentStory.title} - Image ${currentImageIndex + 1}`}
                            width={800}
                            height={600}
                            className="object-contain rounded-lg z-40"
                            priority={currentPage === 0 && currentImageIndex === 0}
                            sizes="600px"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

         {/* Narrative text */}
         <motion.div 
           className="w-full max-w-4xl mb-4"
           key={`text-${currentPage}`}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
         >
           <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-4 shadow-lg">
             <p className="text-white/90 text-base leading-relaxed text-center font-light">
               {currentStory.text}
             </p>
           </div>
         </motion.div>

        {/* Navigation controls */}
        <div className="flex items-center gap-6 mb-4">
          <motion.button
            onClick={handlePrevious}
            disabled={currentPage === 0 && currentImageIndex === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === 0 && currentImageIndex === 0
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 hover:text-yellow-300'
            }`}
            whileHover={currentPage > 0 || currentImageIndex > 0 ? { y: -2 } : {}}
            whileTap={currentPage > 0 || currentImageIndex > 0 ? { scale: 0.95 } : {}}
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
            disabled={currentPage === STORY_PAGES.length - 1 && currentImageIndex === STORY_PAGES[currentPage].images.length - 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentPage === STORY_PAGES.length - 1 && currentImageIndex === STORY_PAGES[currentPage].images.length - 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 hover:text-yellow-300'
            }`}
            whileHover={currentPage < STORY_PAGES.length - 1 || currentImageIndex < STORY_PAGES[currentPage].images.length - 1 ? { y: -2 } : {}}
            whileTap={currentPage < STORY_PAGES.length - 1 || currentImageIndex < STORY_PAGES[currentPage].images.length - 1 ? { scale: 0.95 } : {}}
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
