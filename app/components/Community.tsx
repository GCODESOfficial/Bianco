"use client";

import { useState } from "react";

export default function Community() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/community.svg)',
          zIndex: 0
        }}
      />
      
      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center justify-center px-6 min-h-screen pb-[98%] md:pb-[30%]" style={{ zIndex: 2, paddingTop: '1%' }}>
        
        {/* Main Heading */}
        <h1 className="text-xl md:text-3xl font-bold text-white text-center mb-6">
          Ready to Experience Privacy?
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#888888] text-center mb-8 max-w-2xl font-light">
          Start making private transactions with complete anonymity
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
          {/* Launch App Button - White with black text */}
          <button 
            className="bg-white text-black w-full md:w-auto px-6 py-4 md:px-6 md:py-4 rounded-xl md:font-semibold font-bold text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
            onClick={() => setShowComingSoon(true)}
            onMouseEnter={() => setShowComingSoon(true)}
            onMouseLeave={() => setShowComingSoon(false)}
          >
            {showComingSoon ? "Coming Soon" : "Launch App"}
            <img src="/images/arrow.svg" alt="arrow" width={24} height={16} />
          </button>
          
          {/* Join Community Button - Black with white text */}
          <button className="text-white border border-white/20 bg-[#0A0A0A] w-full md:w-auto px-6 py-4 md:px-6 md:py-4 rounded-xl md:font-semibold font-bold text-base hover:bg-white/10 transition-colors shadow-lg">
            Join Community
          </button>
        </div>
      </div>

      
    </section>
  );
}

