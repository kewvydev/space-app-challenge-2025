"use client";

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import CrystalChapter, { STORY_FACES } from './ChapterCrystal';

function StoryPage() {
  const [currentFace, setCurrentFace] = useState(0);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      
      // Navegación con números 1-6
      if (key >= '1' && key <= '6') {
        const chapterIndex = parseInt(key) - 1;
        if (chapterIndex < STORY_FACES.length) {
          setCurrentFace(chapterIndex);
        }
      }
      
      // Navegación con flechas
      if (key === 'ArrowRight' || key === 'ArrowDown') {
        setCurrentFace((prev) => (prev + 1) % STORY_FACES.length);
      }
      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        setCurrentFace((prev) => (prev - 1 + STORY_FACES.length) % STORY_FACES.length);
      }
      
      // Navegación con espacio
      if (key === ' ') {
        event.preventDefault();
        setCurrentFace((prev) => (prev + 1) % STORY_FACES.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', background: '#040d21' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Fondo: Estrellas y Nebulosa para la sensación espacial */}
        <color attach="background" args={['#040d21']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Iluminación: Luz tenue y de neón para el ambiente postapocalíptico */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffaa" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff33aa" />
        <ambientLight intensity={0.1} />

        {/* El Núcleo de Cristal donde se cuenta la historia */}
        <CrystalChapter currentFace={currentFace} onFaceChange={setCurrentFace} />
        
        {/* Controles para interactuar (opcional, pero útil para desktop) */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Interfaz 2D Superpuesta (UI/UX) */}
      <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
        {/* Chapter Info */}
        <div className="max-w-4xl mx-auto text-center mb-6">
          <div className="bg-space-dark/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2 neon-glow">
              {STORY_FACES[currentFace].text}
            </h2>
            <p className="text-cyan-200 text-lg leading-relaxed mb-4">
              {STORY_FACES[currentFace].description}
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-cyan-300">
              <span>Chapter {currentFace + 1} of 6</span>
              <span>•</span>
              <span style={{ color: STORY_FACES[currentFace].color }}>
                {STORY_FACES[currentFace].color}
              </span>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="text-center">
          <p className="text-cyan-400 text-sm font-mono">
            Click vertices for direct navigation • Click center for next • Keys 1-6 or arrows
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoryPage;