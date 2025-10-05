"use client";
import Link from "next/link";
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
        <section className="mt-10 max-w-5xl w-full bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 font-serif text-center font-bold">Characters </h1>



        </section>
        <div className="left-0 flex flex-col items-start w-max  gap-8 text-gray-300 text-2xl mt-10 mb-20 px-4  ">
          <div className=" w-4xl text-gray-300 text-2xl mt-10 mb-20 px-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg text-yellow-400">
            <h1 className="font-bold">Aura- The young genius /Navegadora</h1><br className="hidden md:block" />

            <p>She was born after the Storm. She only knows the sky through the "Crystal Cores." She has endless curiosity and is an expert at repairing the ship’s old radio. She embodies innocence and hope. </p>

          </div>

          <div className="max-w-4xl text-gray-300 text-2xl mt-10 mb-20 px-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg text-yellow-400">

            <h1 className="font-bold">Captain Spark</h1><br className="hidden md:block" />

            <p>He was an electrical grid engineer before the Storm. His mission is to find the old "Epsilon Station," a space research satellite that might hold the knowledge to build a functional Magnetic Shield for an Arcology. He represents guilt and adult redemption.
            </p>
          </div>

          <div className="max-w-4xl text-gray-300 text-2xl mt-10 mb-20 px-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg text-yellow-400">

            <h1 className="font-bold">Captain Spark</h1><br className="hidden md:block" />

            <p>He was an electrical grid engineer before the Storm. His mission is to find the old "Epsilon Station," a space research satellite that might hold the knowledge to build a functional Magnetic Shield for an Arcology. He represents guilt and adult redemption.
            </p>
          </div>



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