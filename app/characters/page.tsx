"use client";

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Text } from '@react-three/drei';
import { useState } from 'react';

const characters = [
  {
    id: 1,
    name: "Captain Aura",
    title: "The Last Navigator",
    description: "A seasoned space captain with cybernetic implants that allow her to interface directly with ancient navigation systems. Her crystal compasses are the only way to navigate the treacherous space lanes.",
    position: [2, 0, 0],
    color: "#00ffaa"
  },
  {
    id: 2,
    name: "Spark",
    title: "The Network Ghost",
    description: "A digital consciousness that survived the great network collapse. Spark exists in the remnants of the old data streams, helping survivors communicate across the void.",
    position: [-2, 0, 0],
    color: "#ff33aa"
  },
  {
    id: 3,
    name: "Epsilon",
    title: "The Station Keeper",
    description: "The last remaining AI of the Pulsar Command Station. Epsilon has been sending distress signals for decades, waiting for someone to answer the call for help.",
    position: [0, 2, 0],
    color: "#8844ff"
  },
  {
    id: 4,
    name: "The Sun",
    title: "The Angry Star",
    description: "Our solar system's star, now unstable and unpredictable. Its solar flares threaten the last remnants of human civilization, forcing them to seek refuge among the stars.",
    position: [0, -2, 0],
    color: "#ff8844"
  }
];

function CharacterCard({ character, isActive, onClick }: { character: any, isActive: boolean, onClick: () => void }) {
  return (
    <div 
      className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20' 
          : 'border-cyan-400/30 bg-cyan-400/5 hover:border-cyan-400/60 hover:bg-cyan-400/8'
      }`}
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{character.name}</h3>
      <p className="text-green-400 text-sm mb-3 font-mono">{character.title}</p>
      <p className="text-cyan-200 text-sm leading-relaxed">{character.description}</p>
    </div>
  );
}

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

    return (
    <div className="relative h-full w-full overflow-hidden">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <color attach="background" args={['#040d21']} />
          <Stars 
            radius={100} 
            depth={50} 
            count={3000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          
          {/* Lighting */}
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffaa" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff33aa" />
          <ambientLight intensity={0.2} />

          {/* Character Representations in 3D */}
          {characters.map((character, index) => (
            <group key={character.id}>
              {/* Character Orb */}
              <mesh position={character.position}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial 
                  color={character.color}
                  emissive={character.color}
                  emissiveIntensity={0.5}
                  transparent={true}
                  opacity={0.8}
                />
              </mesh>
              
              {/* Character Name */}
              <Text
                position={[character.position[0], character.position[1] - 0.8, character.position[2]]}
                fontSize={0.2}
                color={selectedCharacter === index ? character.color : "#666666"}
                anchorX="center"
                anchorY="middle"
              >
                {character.name}
              </Text>
            </group>
          ))}

          <OrbitControls enableZoom={true} enablePan={true} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex">
        {/* Character Cards */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-cyan-400 mb-8 neon-glow">
              The Crew
            </h1>
            <p className="text-cyan-300 mb-8 text-lg">
              Meet the survivors of the great collapse, each with their own story and unique abilities.
            </p>
            
            <div className="space-y-6">
              {characters.map((character, index) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  isActive={selectedCharacter === index}
                  onClick={() => setSelectedCharacter(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Character Details */}
        <div className="w-1/2 p-8 flex items-center justify-center">
          <div className="max-w-lg text-center">
            <div className="mb-8">
              <div 
                className="w-32 h-32 mx-auto rounded-full mb-6 flex items-center justify-center text-4xl font-bold"
                style={{ 
                  backgroundColor: characters[selectedCharacter].color + '20',
                  border: `2px solid ${characters[selectedCharacter].color}`,
                  boxShadow: `0 0 20px ${characters[selectedCharacter].color}40`
                }}
              >
                {characters[selectedCharacter].name.charAt(0)}
              </div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-2">
                {characters[selectedCharacter].name}
              </h2>
              <p className="text-green-400 text-lg font-mono mb-4">
                {characters[selectedCharacter].title}
              </p>
            </div>
            
            <div className="text-cyan-200 leading-relaxed text-lg">
              {characters[selectedCharacter].description}
            </div>

            {/* Character Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-cyan-400/10 p-4 rounded border border-cyan-400/30">
                <div className="text-cyan-400 font-bold">Status</div>
                <div className="text-green-400">Active</div>
              </div>
              <div className="bg-cyan-400/10 p-4 rounded border border-cyan-400/30">
                <div className="text-cyan-400 font-bold">Role</div>
                <div className="text-green-400">Essential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}