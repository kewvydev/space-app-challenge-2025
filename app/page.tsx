"use client";

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <color attach="background" args={['#040d21']} />
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ffaa" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#ff33aa" />
          <ambientLight intensity={0.1} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 holographic">
            LA BALADA DEL ESCUDO ROTO
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 neon-glow">
            A Post-Apocalyptic Space Western
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-16 max-w-4xl">
          <p className="text-lg md:text-xl text-cyan-200 leading-relaxed mb-6">
            In the vast emptiness of space, where the last remnants of humanity drift among the stars, 
            a tale of survival, hope, and the unbreakable spirit of the frontier unfolds.
          </p>
          <p className="text-base text-cyan-300 terminal-cursor">
            Enter the Crystal Core to begin your journey...
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-cyan-300 text-lg mb-8">
            Use the navigation above to explore the story, meet the characters, and learn more about this project.
          </p>
          <div className="inline-block px-8 py-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
            <p className="text-cyan-400 font-mono text-sm">
              Click "Story" to enter the Crystal Core
            </p>
          </div>
        </div>

        {/* Tech Stats */}
        <div className="absolute bottom-8 left-8 text-sm text-cyan-500/60 font-mono">
          <div className="space-y-1">
            <div>SYSTEM STATUS: ONLINE</div>
            <div>CRYSTAL CORE: STABLE</div>
            <div>NAVIGATION: READY</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 right-8 text-sm text-cyan-500/60 font-mono text-right">
          <div className="space-y-1">
            <div>CLICK TO ROTATE</div>
            <div>DRAG TO EXPLORE</div>
            <div>KEYS 1-6 FOR CHAPTERS</div>
          </div>
        </div>
      </div>
    </div>
  );
}