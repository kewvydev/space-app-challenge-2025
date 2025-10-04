"use client"; // 👈 Esto es clave para usar framer-motion en un page.tsx

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      
      {/* Animación del título */}
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Ballad Broken of the Shield
      </motion.h1>

      {/* Animación del párrafo */}
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        This is the beginning of your adventure...
      </motion.p>
    </div>
  );
}
