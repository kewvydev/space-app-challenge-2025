"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TeamMemberCard from "./components/TeamMemberCard";
import { motion } from "framer-motion";

const MotionLink = motion(Link);


export default function AboutPage() {

    const navLinkClasses = "px-5 py-2 text-md font-semibold text-white/80 rounded-lg hover:text-white transition-colors duration-300";
    return (
        <div className="min-h-screen flex flex-col items-center">
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
            <motion.main
                className="flex flex-col items-center w-full px-6 pt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }} // Delay ligeramente mayor al del header
            >

        
        <div className="min-h-screen flex flex-col items-center overflow-y-auto">
        
             <motion.header 
      className="w-full max-w-7xl flex items-center justify-between p-4 my-6 bg-black/40 backdrop-blur-sm rounded-2xl z-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 4 }}
    >
      <div>

                <div className="p-8 flex flex-col w-full items-center justify-start pt-20">
                    <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 uppercase tracking-widest text-center">
                        About us
                    </h1>
                    <p className="text-gray-300 text-2xl max-w-4xl mb-16 px-4 text-center">
                        We are a group of students from the Faculty of Engineering, Architecture and Design
                        at the Autonomous University of Baja California, eager to create interesting things and
                        challenge ourselves.
                    </p>


                    <section className="w-full max-w-6xl">
                        <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
                            The Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <TeamMemberCard
                                name="Kevin"
                                role="Developer"
                                image="kevin.png"
                            />

                            <TeamMemberCard
                                name="Eduardo"
                                role="Developer"
                                image="pelon.jpg"
                            />

                            <TeamMemberCard
                                name="Brandon"
                                role="Developer"
                                image="brandon.jpg"
                            />

                            <TeamMemberCard
                                name="Gael"
                                role="Developer"
                                image="gael.jpg"
                            />

                            <TeamMemberCard
                                name="Isis"
                                role="Designer"
                                image="isis.jpg"
                            />
                        </div>
                    </section>
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
    </div>
);
}