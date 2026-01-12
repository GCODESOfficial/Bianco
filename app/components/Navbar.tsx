"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full border-b border-white/10 px-4 md:px-24 py-4 md:py-5 flex items-center justify-between relative md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:bg-black/80 bg-black">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Bianco Logo"
          width={20}
          height={20}
          className="w-auto h-8 md:h-9"
        />
      </div>

      {/* Navigation Links - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex items-center gap-8 relative px-6 py-2 mx-auto">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-900/30 to-transparent blur-md -z-10"></div>
        <button 
          onClick={() => scrollToSection('how-it-works')}
          className="relative text-[#888888] hover:text-white text-base font-normal transition-colors cursor-pointer"
        >
          How It Works
        </button>
        <button 
          onClick={() => scrollToSection('demo')}
          className="relative text-[#888888] hover:text-white text-base font-normal transition-colors cursor-pointer"
        >
          Demo
        </button>
        <button 
          onClick={() => scrollToSection('security')}
          className="relative text-[#888888] hover:text-white text-base font-normal transition-colors cursor-pointer"
        >
          Security
        </button>
        <button 
          onClick={(e) => e.preventDefault()}
          className="relative text-[#888888] hover:text-white text-base font-normal transition-colors cursor-pointer"
        >
          Documentation
        </button>
      </div>

      {/* Connect Wallet Button */}
      <button 
        className="bg-white text-black px-4 py-2 rounded-2xl font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors shrink-0 min-w-[140px] md:min-w-[160px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {isHovered || isClicked ? "Coming Soon" : "Connect Wallet"}
      </button>
    </nav>
  );
}

