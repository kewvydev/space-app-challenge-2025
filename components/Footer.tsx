import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white py-8 mt-auto relative z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 gap-8 md:flex-row flex-col relative z-20">

        <div className="flex-shrink-0 flex items-center justify-center relative z-30">
          <Image
            src="/NASA_logo.png"
            alt="NASA Logo"
            width={120}
            height={120}
            className="brightness-110 transition-opacity duration-300 hover:opacity-80 relative z-30"
          />
        </div>

        <div className="flex-1 text-center flex flex-col gap-2 relative z-30">
          <p className="text-base font-medium text-gray-300 relative z-30">
            Part of NASA International Space Apps Challenge 2025
          </p>
          <p className="text-lg font-semibold text-white italic relative z-30">
            "Stellar Stories: Space Weather Through the Eyes of Earthlings"
          </p>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center relative z-30">
          <Image
            src="/SpaceAppChallenge_logo.png"
            alt="Space App Challenge Logo"
            width={120}
            height={120}
            className="brightness-110 transition-opacity duration-300 hover:opacity-80 relative z-30"
          />
        </div>
      </div>
    </footer>
  );
}
