import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      
      <header className="w-full flex items-center justify-between px-8 pt-10 pb-10  bg-black/40 rounded-4xl">
        <img src="/NASA_logo.png" alt="NASA" className="h-40 ml-10 " />
        <div className="w-1 h-20 bg-white/70 mx-1 rounded"></div>
        <div className="text-yellow-200 text-4xl md:text-5xl font-bold text-center font-serif drop-shadow-lg">
          The Ballad Broken <br className="hidden md:block" /> of the Shield
        </div>
        <div className="w-1 h-20 bg-white/70 mx-6 rounded"></div>
        <img src="/SpaceAppChallenge_logo.png" alt="Space Apps" className="h-16" />
      </header>

      
      <nav className="flex justify-start  gap-20 mb-8 mt-10 py-10 bg-black/40 rounded-4xl px-20 shadow-lg">
        <Link
          href="/history"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-full px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-gray-600/90 transition-all duration-200"
        >
          HISTORY
        </Link>
        <Link
          href="/chapters"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-full px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-gray-600/90 transition-all duration-200"
        >
          CHAPTERS
        </Link>
        <Link
          href="/characters"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-full px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-gray-600/90 transition-all duration-200"
        >
          CHARACTERS
        </Link>
        <Link
          href="/about"
          className="bg-gray-700/90 border-4 border-gray-900 rounded-full px-8 py-4 text-2xl font-extrabold font-mono text-white shadow-lg tracking-wider hover:bg-gray-600/90 transition-all duration-200"
        >
          ABOUT US
        </Link>
      </nav>

      
      <div className="flex justify-center w-full">
        <img
          src="/main-image.jpg"
          alt="Main scene"
          className="rounded-xl shadow-2xl max-w-4xl w-full object-cover"
        />
      </div>
    </div>
  );
}
