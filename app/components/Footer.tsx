"use client";

import { useRef, useEffect } from "react";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.playbackRate = 1; // Very slow playback speed (15% of normal speed)
      
      // Smooth seamless loop
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      
      const handleSeeking = () => {
        // Ensure smooth playback after seeking
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
    <footer className="w-full bg-black text-white py-12 px-6 md:px-24">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0">
        {/* Mobile: Stacked vertically, Desktop: Left Section - Logo */}
        <div className="flex flex-col items-start gap-8 md:gap-4">
          {/* Logo Video */}
          <div className="flex items-center justify-start">
            <video
              ref={videoRef}
              src="/footerlogo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-30"
              style={{ transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>
          
          {/* Description Text - Mobile: Below logo, Desktop: Hidden here */}
          <p className="text-[#E5E5E5] text-sm font-normal leading-relaxed md:hidden">
            Bianco is a zero knowledge privacy utility for<br />
            secure, anonymous transactions across EVM<br />
            chains. Privacy is built in by default.
          </p>
          
          {/* Links - Mobile: Stacked vertically, Desktop: Hidden here */}
          <div className="flex flex-col md:hidden gap-6 text-[#888888] text-sm font-normal">
            <a href="#" className="hover:text-gray-300 transition-colors">
              X(Twitter)
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Telegram
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Documentation
            </a>
          </div>
          
          {/* Copyright Text - Mobile: At bottom, Desktop: Below logo */}
          <p className="text-sm font-normal text-[#888888] md:ml-6 ">
            © 2026 Bianco. Privacy-first transactions for everyone.
          </p>
        </div>

        {/* Desktop: Right Section - Description and Links */}
        <div className="hidden md:flex flex-col items-end gap-12 text-right mt-4">
          {/* Description Text */}
          <p className="text-[#E5E5E5] text-sm font-normal max-w-md leading-relaxed">
            Bianco is a zero knowledge privacy utility for<br />
            secure, anonymous transactions across EVM<br />
            chains. Privacy is built in by default.
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-[#888888] text-sm font-normal">
            <a href="#" className="hover:text-gray-300 transition-colors">
              X(Twitter)
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Telegram
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

