"use client";
  import Link from "next/link";
  import { motion, AnimatePresence } from "framer-motion";
  import { useState, useEffect } from "react";

  // Para poder animar el componente Link de Next.js
  const MotionLink = motion(Link);

  export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 4000);
      return () => clearTimeout(timer);
    }, []);

    const title = "The Broken Ballad of the Shield";
    const titleWords = title.split(" ");

    const titleContainerVariant = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1, 
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
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              className="absolute inset-0 flex items-center justify-center bg-black z-50"
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-center font-serif text-yellow-400 max-w-4xl"
                variants={titleContainerVariant}
                initial="hidden"
                animate="visible"
              >
            
                {titleWords.map((word, index) => (
                  <motion.span key={index} variants={titleWordVariant} className="inline-block mr-4">
                    {word}
                    {word === "Ballad" && <br className="hidden md:block" />}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

      {/* --- Mejora 2: Header simplificado y animado --- */}
      {/* El header ahora aparece con una animación suave después de la intro */}
      <motion.header 
        className="w-full max-w-7xl flex items-center justify-between p-4 my-6 bg-black/40 backdrop-blur-sm rounded-2xl z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4 }} // Delay para que aparezca después de la intro
      >
        <div className="sun"></div>
        <div>
          {/* Título simplificado a un tamaño más adecuado para un "logo" */}
          <Link href="/" className="text-3xl font-bold text-yellow-400 font-serif hover:text-yellow-200 transition-colors">
            The Broken Ballad
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

            <Link href="/" className="text-3xl font-bold text-yellow-400 font-serif hover:text-yellow-200 transition-colors">
              The Broken Ballad <br className="hidden md:block" />
                of the Shield
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <MotionLink href="/story" className={navLinkClasses} whileHover={{ y: -2 }}>
              HISTORY
            </MotionLink>
            <MotionLink href="/chapters" className={navLinkClasses} whileHover={{ y: -2 }}>
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
          transition={{ duration: 0.8, delay: 4.2 }} 
        >
          <section className="mt-10 max-w-5xl w-full bg-yellow-200/8 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <h2 className="text-5xl font-bold text-yellow-400 mb-4 font-serif text-center">Sinopsis</h2>
            <p className="text-lg text-white/90 leading-relaxed text-center">
              En un mundo donde la esperanza se desvanece y los héroes han caído, un grupo inesperado debe unir fuerzas para restaurar el equilibrio perdido. "The Broken Ballad of the Shield" narra la travesía de almas rotas que buscan redención, enfrentando antiguos enemigos y descubriendo secretos que cambiarán su destino para siempre.
            </p>
          </section>
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