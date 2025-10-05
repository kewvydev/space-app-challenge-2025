"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Para poder animar el componente Link de Next.js
const MotionLink = motion(Link);

export default function Home() {


  // --- Mejora 1: Variantes para la animación del título palabra por palabra ---
  const title = "The Ballad of The Broken Shield";
  const titleWords = title.split(" ");

  const titleContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Tiempo entre la aparición de cada palabra
        delayChildren: 0.5,
      },
    },
  };

  const titleWordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinkClasses = "px-5 py-2 text-md font-semibold text-white/80 rounded-lg hover:text-white transition-colors duration-300";

  return (
    <div className="relative min-h-screen flex flex-col items-center w-full">


      {/* --- Mejora 2: Header simplificado y animado --- */}
      {/* El header ahora aparece con una animación suave después de la intro */}
      <motion.header
        className="w-full max-w-7xl flex items-center justify-between p-4 my-6 bg-black/40 backdrop-blur-sm rounded-2xl z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }} // Delay para que aparezca después de la intro
      >
        <div className="sun"></div>
        <div>
          {/* Título simplificado a un tamaño más adecuado para un "logo" */}
          <Link href="/" className="text-3xl font-bold text-yellow-400 font-serif hover:text-yellow-200 transition-colors">
            The Ballad of the Broken Shield
          </Link>
        </div>
        <nav className="flex items-center gap-2">
          {/* --- Mejora 3: Botones de navegación con micro-interacción --- */}
          <MotionLink href="/story" className={navLinkClasses} whileHover={{ y: -2 }}>
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

      <motion.main
        className="flex flex-col items-center w-full px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }} // Delay ligeramente mayor al del header
      >
        <section className="mt-10 max-w-5xl w-full bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl pt-5 pb-5 shadow-lg">

          <h1 className="text-5xl font-bold text-yellow-400 mb-8 mt-8 font-serif text-center">Characters </h1>

        </section>
        <div className="w-full max-w-6xl mt-8 space-y-8">
          {/* Aura Character Card */}
          <motion.div 
            className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <Image
                    src="/aura.png"
                    alt="Aura - The young genius"
                    fill
                    className="object-cover object-top rounded-lg border border-yellow-400/30"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4 font-serif">Aura</h2>
                <h3 className="text-xl text-yellow-300 mb-4 italic">The young genius</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  She was born after the Storm. She only knows the sky through the "Crystal Cores." She has endless curiosity and is an expert at repairing the ship's old radio. She embodies innocence and hope.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Captain Spark Character Card */}
          <motion.div 
            className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <Image
                    src="/spark.png"
                    alt="Captain Spark - Electrical grid engineer"
                    fill
                    className="object-cover object-top rounded-lg border border-yellow-400/30"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-right">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4 font-serif">Captain Spark</h2>
                <h3 className="text-xl text-yellow-300 mb-4 italic">Electrical grid engineer</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  He was an electrical grid engineer before the Storm. His mission is to find the old "Epsilon Station," a space research satellite that might hold the knowledge to build a functional Magnetic Shield for an Arcology. He represents guilt and adult redemption.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      <style jsx>{`
        .sun {
          /* Estilos del sol sin cambios */
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