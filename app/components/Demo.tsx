"use client";

import { useRef, useEffect } from "react";

export default function Demo() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const demoVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (bgVideoRef.current) {
      const video = bgVideoRef.current;
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
    }
  }, []);

  useEffect(() => {
    if (demoVideoRef.current) {
      const video = demoVideoRef.current;
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
    }
  }, []);

  return (
    <section id="demo" className="relative w-full h-[60vh] md:h-[150vh] 2xl:h-[100vh] flex flex-col items-center justify-center bg-black">
      {/* Background Video */}
      <video
        ref={bgVideoRef}
        src="/footerlogo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[60vh] md:h-[150vh] 2xl:h-[100vh] md:object-contain object-cover"
        style={{ zIndex: 0 }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
      
      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 md:px-24 py-16" style={{ zIndex: 2 }}>
        
        {/* Top Header */}
        <div className="mb-5 flex items-center justify-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm">
            <span className="text-white text-sm font-normal">Bianco Demo - Send Private</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          </div>
        </div>

        {/* Demo Video Box */}
        <div className="w-full md:max-w-4xl rounded-xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
          <video
            ref={demoVideoRef}
            src="/Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

