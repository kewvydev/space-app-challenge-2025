"use client";

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

// Definición de los 6 capítulos para los vértices del octaedro
const STORY_FACES = [
  { 
    id: 0, 
    text: "Chapter 1: The Roar and The Silence (GMS-28)", 
    position: [0, 1, 0],
    description: "The solar system trembles as the sun's fury reaches its peak. The last space stations scramble to find shelter among the asteroids.",
    color: "#ff8844"
  },
  { 
    id: 1, 
    text: "Chapter 2: Our Home, The Sun Traveler", 
    position: [1, 0, 0],
    description: "Captain Aura's ship, the Sun Traveler, becomes a beacon of hope as it navigates the treacherous space lanes with ancient crystal compasses.",
    color: "#00ffaa"
  },
  { 
    id: 2, 
    text: "Chapter 3: My Crystal Compasses", 
    position: [0, 0, 1],
    description: "The mysterious crystal navigation devices that allow safe passage through the void. Each crystal holds the memory of a thousand journeys.",
    color: "#8844ff"
  },
  { 
    id: 3, 
    text: "Chapter 4: The Pulsar Command Room", 
    position: [-1, 0, 0],
    description: "Deep in the asteroid belt, Epsilon's command station sends out its desperate signal. Will anyone answer the call for help?",
    color: "#ff33aa"
  },
  { 
    id: 4, 
    text: "Chapter 5: The Sun Gets Angry Again", 
    position: [0, 0, -1],
    description: "Solar flares threaten to destroy what little remains of human civilization. The crew must find a way to survive the star's wrath.",
    color: "#ff4444"
  },
  { 
    id: 5, 
    text: "Chapter 6: The Secret Message Sent!", 
    position: [0, -1, 0],
    description: "A message of hope is transmitted across the galaxy. The survivors have found a way to communicate with other human colonies.",
    color: "#44ff88"
  }
];

function CrystalChapter({ currentFace, onFaceChange }) {
  const meshRef = useRef();
  const targetRotation = useRef(0);

  useFrame(() => {
    meshRef.current.rotation.y += (targetRotation.current - meshRef.current.rotation.y) * 0.05;
  });

  const color = currentFace === STORY_FACES[currentFace].id ? '#00ffaa' : '#666666';
  const scale = currentFace === STORY_FACES[currentFace].id ? 1.2 : 1.0;

  // Manejar el clic para ir al siguiente capítulo (clic en el octaedro central)
  const handleCentralClick = () => {
    const nextFace = (currentFace + 1) % STORY_FACES.length;
    onFaceChange(nextFace);
  };

  // Manejar el clic directo en un vértice específico
  const handleVertexClick = (faceId) => {
    onFaceChange(faceId);
  };

  return (
    <group>
      {/* 1. Geometría Principal: El Octaedro/Cristal Visible para Interacción */}
      <mesh 
        ref={meshRef} 
        onClick={handleCentralClick}
      >
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#00ffaa" 
          transparent={true} 
          opacity={0.2} 
          wireframe={true}
          emissive="#00ffaa"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Glow Ring */}
      <mesh rotation-y={targetRotation.current * 0.3}>
        <octahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial 
          color="#00ffaa" 
          transparent={true} 
          opacity={0.05} 
          wireframe={true}
          emissive="#00ffaa"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 2. Textos de la Historia (Colocados en los vértices del Octaedro) */}
      {STORY_FACES.map((face) => {
        const [x, y, z] = face.position;
        const isActive = currentFace === face.id;
        return (
          <group key={face.id}>
            {/* Luz en cada vértice */}
            <pointLight 
              position={[x * 2.5, y * 2.5, z * 2.5]} 
              intensity={isActive ? 3 : 0.8}
              color={isActive ? face.color : '#666666'}
              distance={6}
            />
            {/* Texto en cada vértice */}
        <Text
              position={[x * 2.5, y * 2.5, z * 2.5]}
          anchorX="center"
          anchorY="middle"
              fontSize={0.08}
              color={isActive ? face.color : '#444444'}
              maxWidth={1.5}
        >
          {face.text}
        </Text>
            {/* Esfera indicadora en cada vértice - Clickable para navegación directa */}
            <mesh 
              position={[x * 2.5, y * 2.5, z * 2.5]} 
              scale={isActive ? 1.5 : 1}
              onClick={(e) => {
                e.stopPropagation(); // Evitar que se propague al octaedro central
                handleVertexClick(face.id);
              }}
              onPointerOver={(e) => {
                e.object.scale.setScalar(1.2);
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={(e) => {
                e.object.scale.setScalar(isActive ? 1.5 : 1);
                document.body.style.cursor = 'auto';
              }}
            >
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial 
                color={isActive ? face.color : '#444444'}
                emissive={isActive ? face.color : '#222222'}
                emissiveIntensity={isActive ? 2 : 0.1}
                transparent={true}
                opacity={isActive ? 0.9 : 0.6}
                roughness={0.1}
                metalness={0.8}
              />
            </mesh>
            
            {/* Energy Ring around active vertex */}
            {isActive && (
              <mesh position={[x * 2.5, y * 2.5, z * 2.5]} rotation-y={targetRotation.current}>
                <torusGeometry args={[0.15, 0.02, 8, 16]} />
                <meshStandardMaterial 
                  color={face.color}
                  emissive={face.color}
                  emissiveIntensity={1}
                  transparent={true}
                  opacity={0.8}
                />
              </mesh>
            )}
          </group>
        );
      })}

      {/* 3. Indicador Visual: El octaedro central que rota */}
       <mesh rotation-y={targetRotation.current} scale={[scale, scale, scale]}>
         <octahedronGeometry args={[1.2, 0]} />
         <meshStandardMaterial 
           wireframe={true} 
           color={STORY_FACES[currentFace].color} 
           emissive={STORY_FACES[currentFace].color} 
           emissiveIntensity={1.5}
           transparent={true}
           opacity={0.8}
           roughness={0.1}
           metalness={0.9}
         />
       </mesh>
       
       {/* 4. Cristal interior con efecto de brillo */}
       <mesh rotation-y={targetRotation.current * 0.5} scale={[0.6, 0.6, 0.6]}>
         <octahedronGeometry args={[1, 0]} />
         <meshStandardMaterial 
           color="#ffffff"
           transparent={true}
           opacity={0.4}
           emissive={STORY_FACES[currentFace].color}
           emissiveIntensity={0.8}
           roughness={0.0}
           metalness={1.0}
         />
       </mesh>
       
       {/* 5. Particle System for Energy Field */}
       <mesh position={[0, 0, 0]} rotation-y={targetRotation.current * 2}>
         <octahedronGeometry args={[0.3, 0]} />
         <meshStandardMaterial 
           color={STORY_FACES[currentFace].color}
           transparent={true}
           opacity={0.6}
           emissive={STORY_FACES[currentFace].color}
           emissiveIntensity={2}
         />
       </mesh>
    </group>
  );
}

export { STORY_FACES };
export default CrystalChapter;