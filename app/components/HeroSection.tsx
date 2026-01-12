"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    // Setup video handlers for desktop video
    const setupVideo = (video: HTMLVideoElement | null) => {
      if (!video) return;
      
      video.playbackRate = 1;
      
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
    };

    const cleanupDesktop = setupVideo(videoRef.current);
    const cleanupMobile = setupVideo(mobileVideoRef.current);
    
    return () => {
      cleanupDesktop?.();
      cleanupMobile?.();
    };
  }, []);

  return (
    <section className="relative w-full md:h-[150vh] 2xl:h-[100vh] flex flex-col bg-black">
      {/* Video Background - Desktop (as background cover) */}
      <video
        ref={videoRef}
        src="/herosection.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-[150vh] 2xl:h-[100vh] object-cover"
        style={{ zIndex: 0 }}
      />
      
      {/* Overlay for desktop only - better text readability */}
      <div className="hidden md:block absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
      
      {/* Gradient at bottom of desktop video */}
      <div 
        className="hidden md:block absolute -bottom-1 left-0 right-0 h-[104px] bg-gradient-to-t from-black to-transparent" 
        style={{ zIndex: 1 }} 
      />
      
      {/* Mobile Video - Standalone element first, no overlay */}
      <div className="block md:hidden relative">
        <video
          ref={mobileVideoRef}
          src="/herosectionmob.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-contain"
        />
        {/* Gradient at bottom of mobile video */}
        <div className="absolute bottom-0 left-0 right-0 h-[14px] bg-gradient-to-t from-black to-transparent" />
      </div>
      
      {/* Content Container */}
      <div className="relative w-full flex flex-col px-4 md:px-24 py-8 md:py-16 min-h-screen md:min-h-screen" style={{ zIndex: 2 }}>
        
        {/* Top Section - Mobile Layout */}
        <div className="flex flex-col md:items-center">
          {/* Tagline Banner - Positioned below navbar on mobile */}
          <div className="mb-6 md:mb-6 w-full flex justify-center -mt-10 md:-mt-0 md:pt-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-[#0A0A0A] backdrop-blur-sm">
              <span className="text-[#888888] text-sm font-normal">Zero-Knowledge Privacy Protocol</span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>
          </div>

          {/* Main Headline - Mobile styling */}
          <div className="mb-6 md:text-center">
            <h1 className="text-5xl md:text-7xl md:font-bold font-black text-center">
              <span 
                className="inline-block bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #FFFFFF, #999999)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.6))'
                }}
              >
                Private
              </span>
            </h1>
            <h1 className="text-5xl md:text-7xl md:font-bold font-black text-center text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.8),0_2px_6px_rgba(0,0,0,0.6)]">
              Transactions.
            </h1>
            <h2 className="text-5xl md:text-7xl md:font-bold font-black text-center text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.8),0_2px_6px_rgba(0,0,0,0.6)]">
              Zero Compromise.
            </h2>
          </div>

          {/* Description - Mobile styling */}
          <p className="text-[#888888] text-lg md:text-xl text-center mb-3 md:text-center max-w-xl md:font-extralight leading-relaxed">
            Send, receive, and schedule completely private transactions across EVM chains.
          </p>

          {/* Privacy Statement */}
          <p className="text-[#ffffff] text-lg md:text-xl text-center mb-8 md:text-center">
            No public mode. Privacy enabled by default.
          </p>

          {/* Call-to-Action Buttons - Stacked on mobile */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-12 md:mb-0">
            <button 
              className="bg-white text-black px-6 py-4 md:px-6 md:py-4 rounded-xl md:font-semibold font-bold text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
              onClick={() => setShowComingSoon(true)}
              onMouseEnter={() => setShowComingSoon(true)}
              onMouseLeave={() => setShowComingSoon(false)}
            >
              {showComingSoon ? "Coming Soon" : "Launch App"}
              <img src="/images/arrow.svg" alt="arrow" width={24} height={16} />
            </button>
            <button className="text-white border border-white/20 bg-[#0A0A0A] px-6 py-4 md:px-6 md:py-4 rounded-xl md:font-semibold font-bold text-base hover:bg-white/10 transition-colors shadow-lg">
              Join Community
            </button>
          </div>
        </div>
      </div>

      {/* Feature Boxes - Stacked vertically on mobile, absolute at bottom for desktop */}
      <div className="relative -mt-20 md:mt-0 md:absolute md:-bottom-25 md:left-1/2 md:-translate-x-1/2 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto pb-8 md:pb-8 px-4 md:px-24" style={{ zIndex: 2 }}>
        {/* Left Box - 100% Private Transactions */}
        <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-7  text-center">
          <div className="text-4xl font-bold text-white mb-3">100%</div>
          <div className="text-white text-sm font-normal">Private Transactions</div>
        </div>

        {/* Middle Box - $0 Gas Fees Required */}
        <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-7 text-center">
          <div className="text-4xl font-bold text-white mb-3">$0</div>
          <div className="text-white text-sm font-normal">Gas Fees Required</div>
        </div>

        {/* Right Box - ∞ Unlinkable Transfers */}
        <div className="bg-[#0A0A0A] backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-7 text-center">
          <div className="text-4xl font-bold text-white mb-3">∞</div>
          <div className="text-white text-sm font-normal">Unlinkable Transfers</div>
        </div>
      </div>
    </section>
  );
}

