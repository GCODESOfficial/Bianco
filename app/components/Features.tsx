"use client";

import { useRef, useEffect } from "react";

export default function Features() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.playbackRate = 1;
      
      // Smooth seamless loop
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      
      const handleSeeking = () => {
        if (video.readyState >= 2) {
          video.play();
        }
      };
      
      video.addEventListener('ended', handleEnded);
      video.addEventListener('seeked', handleSeeking);
      
      return () => {
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('seeked', handleSeeking);
      };
    }
  }, []);

  return (
    <section className="relative w-full md:h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/features.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      
      {/* Content Container */}
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12" style={{ zIndex: 2 }}>
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1: Privacy First */}
          <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col md:items-start items-center text-center">
            {/* Shield Icon */}
            <div className="mb-4">
              <div className="md:rounded-2xl rounded-4xl bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] p-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl font-bold text-white mb-3 text-center w-full">
              Privacy First
            </h3>
            
            {/* Description */}
            <p className="text-sm md:text-sm text-[#888888] font-normal leading-relaxed">
              All transactions are private and unlinkable by default
            </p>
          </div>

          {/* Card 2: Gasless */}
          <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col md:items-start items-center text-center w-full">
            {/* Lightning Icon */}
            <div className="mb-4">
              <div className="md:rounded-2xl rounded-4xl bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] p-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl font-bold text-white mb-3 text-center w-full">
              Gasless
            </h3>
            
            {/* Description */}
            <p className="text-sm md:text-sm text-[#888888] font-normal leading-relaxed">
              No gas complexity through relayer network
            </p>
          </div>

          {/* Card 3: Scheduled */}
          <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col md:items-start items-center text-center">
            {/* Clock Icon */}
            <div className="mb-4">
              <div className="md:rounded-2xl rounded-4xl bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] p-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl font-bold text-white mb-3 text-center w-full">
              Scheduled
            </h3>
            
            {/* Description */}
            <p className="text-sm md:text-sm text-[#888888] font-normal leading-relaxed">
              Schedule private transfers for future execution
            </p>
          </div>

          {/* Card 4: Zero-Knowledge */}
          <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col md:items-start items-center text-center">
            {/* Padlock Icon */}
            <div className="mb-4">
              <div className="md:rounded-2xl rounded-4xl bg-gradient-to-br from-[#1A1A1A] via-[#3A3A3A] to-[#1A1A1A] p-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-xl font-bold text-white mb-3 text-center w-full">
              Zero-Knowledge
            </h3>
            
            {/* Description */}
                <p className="text-sm md:text-sm text-[#888888] font-normal leading-relaxed">
              Cryptographic proofs ensure complete anonymity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

