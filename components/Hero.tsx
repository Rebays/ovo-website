import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const pathData = "M 100 400 Q 400 100 700 400"; // Example curve path

  return (
    <section className="relative h-screen flex items-center overflow-hidden -mt-20">
      <div className="absolute inset-0 z-0 bg-[#001d59]">
        <Image
          src="/abstract_logistics_bg.png"
          alt="Abstract Logistics Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        {/* Animated Logistics Visual */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <svg width="800" height="500" viewBox="0 0 800 500" className="w-full max-w-4xl h-auto">
            {/* Connection Path */}
            <path
              id="logistic-path"
              d={pathData}
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="opacity-20"
            />
            
            {/* Point A (Australia) */}
            <g transform="translate(100, 400)">
              <circle r="6" fill="#7598f8" className="animate-pulse-glow" />
              <text y="30" textAnchor="middle" fill="white" className="text-xs font-bold uppercase tracking-widest opacity-60">Australia</text>
            </g>

            {/* Point B (Solomon Islands) */}
            <g transform="translate(700, 400)">
              <circle r="6" fill="#7598f8" className="animate-pulse-glow" />
              <text y="30" textAnchor="middle" fill="white" className="text-xs font-bold uppercase tracking-widest opacity-60">Solomon Islands</text>
            </g>
          </svg>

          {/* Abstract Glowing Pulse (The Package) */}
          <div 
            className="absolute w-6 h-6 bg-blue-400 rounded-full blur-md animate-package"
            style={{ 
              offsetPath: `path("${pathData}")`,
              boxShadow: '0 0 20px #60a5fa, 0 0 40px #60a5fa'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight tracking-tight">
            The OVO App is <br /><span className="text-blue-200">Coming Soon</span>
          </h1>
          <p className="text-2xl md:text-xl text-slate-200 font-light max-w-xl leading-relaxed">
            Shop any Australian online store. Send to our warehouse. Consolidate and track delivery to Honiara – all in one simple mobile app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#003087] text-white px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all oceanic-gradient">
              Join the Waitlist
            </button>
          </div>
          <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60">Powered by Zonos</span>
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60">Transparent Duties & 15% VAT</span>
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/60">Australia → Solomon Islands</span>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl p-4 flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
            <div className="relative w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden group">
              <Image
                src="/ovo_app_highlight.png"
                alt="App interface preview"
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-primary/40 text-white p-6 text-center">
                <div className="w-20 h-20 bg-[#003087] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </div>
                <p className="font-bold text-lg">Watch how OVO works</p>
                <span className="text-sm opacity-80">(30 seconds)</span>
              </div>
            </div>
          </div>
          <p className="text-white/60 mt-6 text-sm font-medium italic">See the app in action – Package arrival, fees calculation, and tracking</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;
