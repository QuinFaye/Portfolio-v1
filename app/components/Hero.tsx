import ContactButton from './ContactButton';
import ArrowIcon from './ArrowIcon';
import AboutMeHeading from './AboutMeHeading';
import DownArrowIcon from './DownArrowIcon';
import HeroDecorations from './HeroDecorations';
import { ArrowDown } from "lucide-react";
import Navigation from './Navigation';

export default function Hero() {
  return (

      <section className="h-screen relative overflow-visible">
        

        {/* Navigation - Positioned at Top Center */}
        <div className="absolute -top-13 left-1/2 transform -translate-x-1/2 z-30">
          <Navigation />
        </div>

      {/* Left Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-12 space-y-4 z-10 -translate-y-16">
          <h1 className="text-[43px] font-necosmic font text-black leading-tight">
            Sodein Fayé-Dikio
          </h1>
          <h2 className="-mt-3 text-[20px] font-koho font-semibold text-gray-800 leading-snug">
            UI/UX Designer & Creative Developer
          </h2>
          <p className="mt-4 max-w-xl text-[23px] font-koho font-medium text-black leading-relaxed" style={{ maxWidth: '450px' }}>
            I design thoughtful digital experiences and build interactive interfaces.
            Let me bring your unique ideas to life!
          </p>
      {/* Right Content */}
          {/* Decorative elements on the right */}
          <HeroDecorations 
            mainShapeTop="150px"
            mainShapeLeft="20px"
            cherryTop="100px"
            cherryLeft="20.4px"
            leafTop="590.25px"
            leafLeft="-160.23px"
          />

          {/* Download Resumé Button */}
          <a
            href="/resume.pdf"
            className="mt-6 text-[22px] font-koho font-medium max-w-xl inline-flex items-center gap-2 px-6 py-3 border border-black rounded-[10px] font-semibold text-black whitespace-nowrap hover:bg-black hover:text-[#49CB3B] hover:border-[#49CB3B] transition-all duration-300"  style={{ maxWidth: '275px' }}>
            <ArrowDown />
            Download Resumé
          </a>
        </div>

      {/* Upper Right - Contact & Arrow */}
      <div className="absolute -top-11 -right-6 flex items-center gap-1 z-20">
        <ContactButton />
        <div className="w-14 h-10">
          <ArrowIcon />
        </div>
      </div>

      {/* Bottom Left - About Me & Down Arrow */}
      <div className="absolute bottom-20 -left-4 flex flex items-start gap-4 z-20">          <AboutMeHeading />
        <div className="w-12 h-10">
          <DownArrowIcon />
        </div>
      </div>

    </section>
  );
}