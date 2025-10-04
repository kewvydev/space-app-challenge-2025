"use client";

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function AboutPage() {
    return (
    <div className="relative h-full w-full overflow-hidden">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <color attach="background" args={['#040d21']} />
          <Stars 
            radius={100} 
            depth={50} 
            count={4000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ffaa" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#ff33aa" />
          <ambientLight intensity={0.1} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic">
              About the Project
            </h1>
            <p className="text-xl text-cyan-300 neon-glow">
              A Digital Storytelling Innovation
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Project Description */}
            <section className="bg-cyan-400/5 border border-cyan-400/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">The Vision</h2>
              <p className="text-cyan-200 text-lg leading-relaxed mb-4">
                "The Ballad of the Broken Shield" represents a revolutionary approach to digital storytelling, 
                combining cutting-edge 3D web technologies with the timeless appeal of space western narratives. 
                This project pushes the boundaries of what's possible in browser-based interactive experiences.
              </p>
              <p className="text-cyan-200 text-lg leading-relaxed">
                Built with React Three Fiber and modern web technologies, the Crystal Core interface allows 
                users to navigate through the story in a completely immersive 3D environment, breaking away 
                from traditional linear storytelling formats.
              </p>
            </section>

            {/* Technical Innovation */}
            <section className="bg-green-400/5 border border-green-400/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6">Technical Innovation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-300 mb-4">3D Interactive Storytelling</h3>
                  <ul className="space-y-2 text-cyan-200">
                    <li>• Real-time 3D rendering with WebGL</li>
                    <li>• Interactive octahedron navigation</li>
                    <li>• Dynamic lighting and particle effects</li>
                    <li>• Responsive 3D text rendering</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-300 mb-4">Modern Web Stack</h3>
                  <ul className="space-y-2 text-cyan-200">
                    <li>• Next.js 15 with TypeScript</li>
                    <li>• React Three Fiber for 3D</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Optimized for all devices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Story Theme */}
            <section className="bg-purple-400/5 border border-purple-400/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-purple-400 mb-6">The Space Western Theme</h2>
              <p className="text-cyan-200 text-lg leading-relaxed mb-4">
                Drawing inspiration from classics like Cowboy Bebop and Firefly, "The Ballad of the Broken Shield" 
                explores themes of survival, hope, and human resilience in the face of cosmic adversity. The story 
                follows the last remnants of humanity as they navigate a post-apocalyptic solar system.
              </p>
              <p className="text-cyan-200 text-lg leading-relaxed">
                Each character represents a different aspect of the human spirit - from the determined navigator 
                to the digital ghost of the old world, creating a rich tapestry of interconnected stories that 
                unfold through the interactive Crystal Core interface.
              </p>
            </section>

            {/* Features */}
            <section className="bg-orange-400/5 border border-orange-400/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-orange-400 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Interactive Navigation</h3>
                  <p className="text-cyan-200 text-sm">Click, drag, and use keyboard shortcuts to explore the story</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-400 mb-2">Immersive 3D</h3>
                  <p className="text-cyan-200 text-sm">Full 3D space environment with dynamic lighting and effects</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-bold text-purple-400 mb-2">Responsive Design</h3>
                  <p className="text-cyan-200 text-sm">Optimized for desktop, tablet, and mobile devices</p>
                </div>
              </div>
            </section>

            {/* Credits */}
            <section className="bg-cyan-400/5 border border-cyan-400/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">Credits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">Development</h3>
                  <p className="text-cyan-200 mb-2">Built with ❤️ using modern web technologies</p>
                  <p className="text-cyan-200 text-sm">Next.js • React Three Fiber • TypeScript • Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">Inspiration</h3>
                  <p className="text-cyan-200 mb-2">Inspired by the great space westerns</p>
                  <p className="text-cyan-200 text-sm">Cowboy Bebop • Firefly • The Expanse • Blade Runner</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}