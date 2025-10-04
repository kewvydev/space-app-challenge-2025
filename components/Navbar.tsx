"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-space-dark/90 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border border-cyan-300 rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-cyan-400 tracking-wider">
              LA BALADA DEL ESCUDO ROTO
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/story" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200">
              Story
            </Link>
            <Link href="/characters" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200">
              Characters
            </Link>
            <Link href="/about" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
