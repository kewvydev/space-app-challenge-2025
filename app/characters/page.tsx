"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Para poder animar el componente Link de Next.js
const MotionLink = motion(Link);

const characters = [
  {
    id: 1,
    name: "Captain Aura",
    title: "The Last Navigator",
    description: "A seasoned space captain with cybernetic implants that allow her to interface directly with ancient navigation systems. Her crystal compasses are the only way to navigate the treacherous space lanes.",
    image: "/kevin.png", // Usando la imagen disponible
    color: "#facc15",
    role: "Navigator",
    status: "Active",
    abilities: ["Crystal Navigation", "Cybernetic Interface", "Leadership"]
  },
  {
    id: 2,
    name: "Spark",
    title: "The Network Ghost",
    description: "A digital consciousness that survived the great network collapse. Spark exists in the remnants of the old data streams, helping survivors communicate across the void.",
    image: "/brandon.jpg", // Usando la imagen disponible
    color: "#facc15",
    role: "Communications",
    status: "Digital",
    abilities: ["Data Stream Navigation", "Long-range Communication", "System Hacking"]
  },
  {
    id: 3,
    name: "Epsilon",
    title: "The Station Keeper",
    description: "The last remaining AI of the Pulsar Command Station. Epsilon has been sending distress signals for decades, waiting for someone to answer the call for help.",
    image: "/gael.jpg", // Usando la imagen disponible
    color: "#facc15",
    role: "Station AI",
    status: "Operational",
    abilities: ["Station Management", "Signal Transmission", "Data Analysis"]
  },
  {
    id: 4,
    name: "The Sun",
    title: "The Angry Star",
    description: "Our solar system's star, now unstable and unpredictable. Its solar flares threaten the last remnants of human civilization, forcing them to seek refuge among the stars.",
    image: "/isis.jpg", // Usando la imagen disponible
    color: "#facc15",
    role: "Cosmic Force",
    status: "Unstable",
    abilities: ["Solar Flares", "Gravitational Pull", "Energy Source"]
  }
];

function CharacterCard({ character, isActive, onClick }: { character: any, isActive: boolean, onClick: () => void }) {
  return (
    <motion.div 
      className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20' 
          : 'border-yellow-400/30 bg-yellow-400/5 hover:border-yellow-400/60 hover:bg-yellow-400/8'
      }`}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400/50">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-400 font-serif">{character.name}</h3>
          <p className="text-yellow-300 text-sm font-mono">{character.title}</p>
        </div>
      </div>
      <p className="text-white/90 text-sm leading-relaxed">{character.description}</p>
    </motion.div>
  );
}

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const navLinkClasses = "px-5 py-2 text-md font-semibold text-white/80 rounded-lg hover:text-white transition-colors duration-300";

  return (
    <div className="relative min-h-screen flex flex-col items-center w-full">
      {/* Header consistente con la página principal */}
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
          <MotionLink href="/story" className={navLinkClasses} whileHover={{ y: -2 }}>
            HISTORY
          </MotionLink>
          <MotionLink href="/characters" className={`${navLinkClasses} bg-yellow-400/20 text-yellow-400`} whileHover={{ y: -2 }}>
            CHARACTERS
          </MotionLink>
          <MotionLink href="/about" className={navLinkClasses} whileHover={{ y: -2 }}>
            ABOUT US
          </MotionLink>
        </nav>
      </motion.header>

      {/* Contenido principal */}
      <motion.main 
        className="flex flex-col items-center w-full px-6 flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <section className="mt-10 max-w-7xl w-full bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-5xl font-bold text-yellow-400 mb-4 font-serif text-center">The Crew</h2>
          <p className="text-lg text-white/90 leading-relaxed text-center mb-8">
            Meet the survivors of the great collapse, each with their own story and unique abilities.
          </p>
          
          {/* Grid de personajes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {characters.map((character, index) => (
              <CharacterCard
                key={character.id}
                character={character}
                isActive={selectedCharacter === index}
                onClick={() => setSelectedCharacter(index)}
              />
            ))}
          </div>

          {/* Detalles del personaje seleccionado */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-8"
            key={selectedCharacter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Imagen del personaje */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-lg">
                <Image
                  src={characters[selectedCharacter].image}
                  alt={characters[selectedCharacter].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Información del personaje */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2 font-serif">
                  {characters[selectedCharacter].name}
                </h3>
                <p className="text-yellow-300 text-xl font-mono mb-4">
                  {characters[selectedCharacter].title}
                </p>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {characters[selectedCharacter].description}
                </p>
                
                {/* Stats del personaje */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/30">
                    <div className="text-yellow-400 font-bold text-sm mb-1">Role</div>
                    <div className="text-yellow-300">{characters[selectedCharacter].role}</div>
                  </div>
                  <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/30">
                    <div className="text-yellow-400 font-bold text-sm mb-1">Status</div>
                    <div className="text-yellow-300">{characters[selectedCharacter].status}</div>
                  </div>
                  <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/30">
                    <div className="text-yellow-400 font-bold text-sm mb-1">Abilities</div>
                    <div className="text-yellow-300 text-sm">
                      {characters[selectedCharacter].abilities.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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