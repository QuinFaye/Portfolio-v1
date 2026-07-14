'use client';

import ContactButton from './ContactButton';
import ArrowIcon from './ArrowIcon';
import DownArrowIcon from './DownArrowIcon';
import AboutMeHeading from './AboutMeHeading';
import HeroDecorations from './HeroDecorations';
import { ArrowDown } from "lucide-react";
import Navigation from './Navigation';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lerpPos, setLerpPos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  // Smooth lerp
  useEffect(() => {
    const animate = () => {
      setLerpPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [mousePos]);

  // Update inline CSS vars for mask/glow
  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.setProperty('--x', `${lerpPos.x}px`);
      imageContainerRef.current.style.setProperty('--y', `${lerpPos.y}px`);
    }
  }, [lerpPos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };
  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <section ref={sectionRef} className="h-screen relative overflow-visible hero-interactive-container">

      {/* Navigation */}
      <div className="absolute -top-13 left-1/2 transform -translate-x-1/2 z-30">
        <Navigation />
      </div>

      {/* Left Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 xl:px-20 space-y-2 lg:space-y-3 xl:space-y-4 z-10 -translate-y-16 w-1/2">
        <h1 className="text-2xl lg:text-3xl xl:text-[43px] font-necosmic text-black leading-tight">
          Sodein Fayé-Dikio
        </h1>
        <h2 className="-mt-3 text-xs lg:text-sm xl:text-[20px] font-semibold text-gray-800" style={{ fontFamily: 'var(--font-koho)' }}>
          UI/UX Designer & Creative Developer
        </h2>
        <p className="mt-2 lg:mt-3 xl:mt-4 max-w-xl text-xs lg:text-sm xl:text-[23px] font-medium text-black leading-relaxed" style={{ maxWidth: '450px', fontFamily: 'var(--font-koho)' }}>
          I design thoughtful digital experiences and build interactive interfaces.
          Let me bring your unique ideas to life!
        </p>
        <a
          href="/resume.pdf"
          className="mt-3 lg:mt-4 xl:mt-6 text-xs lg:text-sm xl:text-[22px] font-medium inline-flex items-center gap-1 lg:gap-1.5 xl:gap-2 px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 xl:py-3 border border-black rounded-lg lg:rounded-lg xl:rounded-[10px] font-semibold text-black hover:bg-black hover:text-[#49CB3B] hover:border-[#49CB3B] transition-all duration-300 w-fit"
          style={{ fontFamily: 'var(--font-koho)' }}
        >
          <ArrowDown size={16} />
          Download Resumé
        </a>
      </div>

      {/* Right Interactive Blob */}
      <div className="absolute inset-0 right-0 flex items-start justify-end pr-8 lg:pr-16 xl:pr-30 z-5" style={{ overflow: 'visible', paddingTop: 'clamp(80px, 15vh, 130px)' }}>
        <div
          ref={imageContainerRef}
          className="relative w-170 h-100"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            // these vars control the mask and glow
            '--x': '0px',
            '--y': '0px',
            width: 'clamp(200px, 30vw, 430px)',  
            height: 'clamp(200px, 30vw, 430px)',
          } as React.CSSProperties}
        >

          {/* Image stack */}
          <div className="relative w-full h-full" style={{ overflow: 'visible' }}>
            {/* Bottom image = visible by default */}
            <img
              src="/chrome-blob.png"
              alt="Chrome blob helmet"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                position: 'absolute',
                top:    '0px',  
                left:   '0px', 
                width:  '420px', 
                height: '420px',
                objectFit: 'cover',
                overflow: 'visible',
              }}
            />
            {/* Top image = revealed on hover */}
            <div className="relative overflow-visible" style={{ width: '800px', height: '840px' }}>
            <img src="/chrome-blob-reveal.png" 
              alt="Chrome blob face" 
              className="absolute object-cover" 
              style={{ 
                transform: 'rotate(5deg)',
                position: 'absolute', 
                top: '-45px', 
                left: '-36px', 
                width: '500px', 
                height: '490px', 
                objectFit: 'cover', 
                WebkitMaskImage: 'radial-gradient(circle 100px at var(--x) var(--y), black 60%, transparent 100%)', 
                maskImage: 'radial-gradient(circle 100px at var(--x) var(--y), black 80%, transparent 100%)', 
                WebkitMaskRepeat: 'no-repeat', 
                maskRepeat: 'no-repeat', 
                transition: 'mask-position 0.1s',
                overflow: 'visible', 
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorations */}
      <HeroDecorations
        cherryTop="100px"
        cherryLeft="20.4px"
        shroomTop="590.25px"
        shroomLeft="-160.23px"
        barcodeLeft="430px"
        barcodeTop="525px"
        sparkleLeft="600px"
        sparkleTop="390px"
      />

      {/* Top Right Contact */}
      <div className="absolute -top-11 -right-6 flex items-center gap-1 z-20">
        <ContactButton />
        <div className="w-14 h-10">
          <ArrowIcon />
        </div>
      </div>

      {/* Bottom Left About Me */}
      <div className="absolute bottom-20 -left-4 flex items-start gap-4 z-20">
        <AboutMeHeading />
        <div className="w-12 h-10">
          <ArrowDown size={45} />
        </div>
      </div>

    </section>
  );
}