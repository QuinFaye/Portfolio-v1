import Link from "next/link";

const circBg = "/circ-bg.png";
const activecircMockup = "/circ-mockup1.png";
const circMockup2 = "/circ-onboarding.png";
const circMockup3 = "/circ2-onboarding.png";

const ficloMockup1 = "/ficlo1.png";
const activeficloMockup = "/ficlo2.png";
const ficloMockup3 = "/ficlo3.png";
const ficloDetailImg = "/ficlo-bg3.png";

const mossMockup1 = "/m&m1.png";
const mossMockup2 = "/m&m2.png";
const mossDetailImg = "/m&m-bg3.png";

const starIcon = "/star.png";
const starIcon2 = "/star2.png"
const starIcon3 = "/star3.png"


export default function MyWorks() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-1 flex flex-col items-center gap-6 lg:gap-8 z-20">
      {/* Heading */}
        <p className="font-necosmic text-xl lg:text-2xl xl:text-[33px] whitespace-nowrap" data-node-id="13:40">
            My Works
        </p>
      {/* Projects */}
      <div className="flex flex-col gap-3 lg:gap-4 items-center justify-center w-full">
        {/* CIRC Project Card */}
        <div className="px-4 lg:px-16 xl:px-[112px] w-full">
          {/* 183:55 - Title and Subtitle */}
          <div className="gap-2 lg:gap-3 xl:gap-[10px] flex flex-col items-start mb-3 lg:mb-4">
            <p className="text-xl lg:text-2xl xl:text-[38px] text-[#2a2929] font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
              CIRC - Redesign
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-2 lg:gap-4">
              <p className="text-sm lg:text-base xl:text-[22px] text-[#2a2929] leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                Social Media Fashion Marketplace
              </p>
              {/* 183:56 - View case study link */}
              <Link
                href="/ficlo-case-study"
                className="text-sm lg:text-base xl:text-[22px] text-[#2a2929] font-bold underline cursor-pointer transition-opacity hover:opacity-80 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-koho)' }}
              >
                View case study →
              </Link>
            </div>
          </div>

          {/* Background section with mockups on top - 60:295 + 183:54 + 296:86 */}
          <div className="relative w-full lg:w-[800px] xl:w-[1235px] aspect-[1235/470] rounded-lg lg:rounded-lg xl:rounded-[10px] overflow-visible mb-6 lg:mb-8 bg-[#1E1E1E] mx-auto">
            <img alt="Project background" src={circBg} className="w-full h-full object-cover rounded-lg lg:rounded-lg xl:rounded-[10px]" />
            
            {/* Phone Mockups - positioned on top */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-4 lg:gap-8 xl:gap-12 flex-row items-center scale-50 lg:scale-75 xl:scale-100">
              
              {/* Mockups 2 & 3 - stacked diagonally on right */}
              <div className="relative w-[220px] h-[450px]">
                <div className="absolute top-0 -left-27 h-[426px] w-[206px] overflow-hidden">
                  <img alt="CIRC App - Main" 
                       src={circMockup2} 
                       className="w-full h-full object-cover" 
                    />
                </div>
                <div className="absolute bottom-0 -right-7 h-[416px] w-[201px] overflow-hidden">
                  <img alt="CIRC App - Details"
                       src={circMockup3} 
                       className="w-full h-full object-cover" 
                    />
                </div>
              </div>

              {/* Mockup 1 - right side */}
              <div className="group relative -top-11.5 h-[561px] w-[345px] z-20 overflow-hidden">
                <img
                  alt="CIRC App - Onboarding"
                  src={activecircMockup}
                  className="block h-[calc(100%+28px)] w-full max-w-none object-cover object-top transition-transform duration-300 ease-out group-hover:-translate-y-3"
                />
              </div>
            </div>
            
            <div className="absolute bottom-2 lg:bottom-4 xl:bottom-6 right-3 lg:right-6 xl:right-8 text-base lg:text-xl xl:text-[25px] text-[#cacaca] leading-tight text-right" style={{ fontFamily: 'var(--font-nicomoji)' }}>
              <p>NOV</p>
              <p>2025</p>
            </div>
          </div>

          {/* Info boxes row with star - Timeline (296:72) + Scope (296:71) + Star */}
          <div className="flex gap-0 mb-6 lg:mb-8 items-stretch max-w-[800px] lg:max-w-full xl:max-w-full mx-auto">
            {/* Star decoration and white box - layered together */}
            <div className="relative w-16 lg:w-20 xl:w-[100px] aspect-square flex-shrink-0 rounded-l-sm lg:rounded-l-lg xl:rounded-l-[4px] overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-white border-1 border-black" />
              <img alt="Star decoration" src={starIcon} className="absolute inset-0 w-full h-full object-contain p-2 lg:p-3" />
            </div>

            {/* Timeline box */}
            <div className="flex-[0.35] border border-[#454444] p-2 lg:p-2.5 xl:p-3">
              <p className="text-xs lg:text-sm xl:text-[16px] text-[rgba(42,41,41,0.79)] mb-1 lg:mb-2 leading-normal" style={{ fontFamily: 'var(--font-nicomoji)' }}>
                TIMELINE
              </p>
              <p className="text-sm lg:text-base xl:text-[20px] text-black font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                3 Weeks
              </p>
            </div>

            {/* Scope box */}
            <div className="flex-[0.65] border border-[#4d4d4d] rounded-r-sm lg:rounded-r-lg xl:rounded-r-[4px] p-2 lg:p-2.5 xl:p-3">
              <p className="text-xs lg:text-sm xl:text-[16px] text-[rgba(77,77,77,0.9)] mb-1 lg:mb-2 leading-normal whitespace-nowrap" style={{ fontFamily: 'var(--font-nicomoji)' }}>
                SCOPE
              </p>
              <p className="text-xs lg:text-sm xl:text-[20px] text-black font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                UX Research, Branding, Prototyping, UI/UX Product Design
              </p>
            </div>
          </div>

        </div>

        {/* Ficlo Project Card */}
        <div className="px-4 lg:px-16 xl:px-[112px] w-full">
          {/* Title and Subtitle */}
          <div className="gap-2 lg:gap-3 xl:gap-[10px] flex flex-col items-start mb-3 lg:mb-4">
            <p className="text-xl lg:text-2xl xl:text-[38px] text-[#2a2929] font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
              Ficlo
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-2 lg:gap-4">
              <p className="text-sm lg:text-base xl:text-[22px] text-[#2a2929] leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                AI Powered Studying Platform
              </p>
              {/* View case study link */}
              <Link
                href="/ficlo-case-study"
                className="text-sm lg:text-base xl:text-[22px] text-[#2a2929] font-bold underline cursor-pointer transition-opacity hover:opacity-80 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-koho)' }}
              >
                View case study →
              </Link>
            </div>
          </div>

          {/* Background section with mockups on top */}
          <div className="relative w-full lg:w-[800px] xl:w-[1235px] aspect-[1235/470] rounded-lg lg:rounded-lg xl:rounded-[10px] overflow-visible mb-6 lg:mb-8 bg-[#1E1E1E] mx-auto">
            <img alt="Ficlo Project background" src={ficloDetailImg} className="w-full h-full object-cover rounded-lg lg:rounded-lg xl:rounded-[10px]" />
            
            {/* Phone Mockups - positioned on top */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-2 lg:gap-3 xl:gap-4 flex-row items-center scale-50 lg:scale-75 xl:scale-100">
              
              {/* Mockup 1 - left small screen */}
              <div className="relative w-[180px] h-[380px]">
                <img alt="Ficlo App - Main" src={ficloMockup1} className="w-full h-full object-cover" />
              </div>

              {/* Mockup 2 - center big screen */}
              <div className="group relative -top-11.5 h-[561px] w-[345px] z-20 overflow-hidden">
                <img
                  alt="Ficlo App - Onboarding"
                  src={activeficloMockup}
                  className="block h-[calc(100%+28px)] w-full max-w-none object-cover object-top transition-transform duration-300 ease-out group-hover:-translate-y-3"
                />
              </div>

              {/* Mockup 3 - right small screen */}
              <div className="relative w-[180px] h-[380px]">
                <img alt="Ficlo App - Details" src={ficloMockup3} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="absolute bottom-2 lg:bottom-4 xl:bottom-6 right-3 lg:right-6 xl:right-8 text-base lg:text-xl xl:text-[25px] text-[#cacaca] leading-tight text-right" style={{ fontFamily: 'var(--font-nicomoji)' }}>
              <p>FEB-MARCH</p>
              <p>2026</p>
            </div>
          </div>

          {/* Info boxes row with star - Timeline + Scope + Star */}
          <div className="flex gap-0 mb-6 lg:mb-8 items-stretch max-w-[800px] lg:max-w-full xl:max-w-full mx-auto">
            {/* Star decoration and white box - layered together */}
            <div className="relative w-16 lg:w-20 xl:w-[100px] aspect-square flex-shrink-0 rounded-l-sm lg:rounded-l-lg xl:rounded-l-[4px] overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-white border-1 border-black" />
              <img alt="Star2 decoration" src={starIcon2} className="absolute inset-0 w-full h-full object-contain p-2 lg:p-3" />
            </div>

            {/* Timeline box */}
            <div className="flex-[0.35] border border-[#454444] p-2 lg:p-2.5 xl:p-3">
              <p className="text-xs lg:text-sm xl:text-[16px] text-[rgba(42,41,41,0.79)] mb-1 lg:mb-2 leading-normal" style={{ fontFamily: 'var(--font-nicomoji)' }}>
                TIMELINE
              </p>
              <p className="text-sm lg:text-base xl:text-[20px] text-black font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                6 Weeks
              </p>
            </div>

            {/* Scope box */}
            <div className="flex-[0.65] border border-[#4d4d4d] rounded-r-sm lg:rounded-r-lg xl:rounded-r-[4px] p-2 lg:p-2.5 xl:p-3">
              <p className="text-xs lg:text-sm xl:text-[16px] text-[rgba(77,77,77,0.9)] mb-1 lg:mb-2 leading-normal whitespace-nowrap" style={{ fontFamily: 'var(--font-nicomoji)' }}>
                SCOPE
              </p>
              <p className="text-xs lg:text-sm xl:text-[20px] text-black font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                UX Research, Usability testing, Prototyping, UI/UX Design
              </p>
            </div>
          </div>

        </div>

        {/* Moss & Meadows Project Card */}
        <div className="z-10 px-[112px] w-full">
          {/* Title and Subtitle */}
          <div className="gap-[10px] flex flex-col items-start mb-4">
            <p className="text-[38px] text-[#2a2929] font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
              Moss & Meadows
            </p>
            <div className="flex items-center justify-between w-full">
              <p className="text-[22px] text-[#2a2929] leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                Decorative Plants E-commerce Company
              </p>
              {/* View case study link */}
              <p className="text-[22px] text-[#2a2929] font-bold underline cursor-pointer hover:opacity-80 transition-opacity" style={{ fontFamily: 'var(--font-koho)' }}>
                View case study →
              </p>
            </div>
          </div>

          {/* Background section with mockups on top */}
          <div className="relative w-[1235px] h-[470px] rounded-[10px] overflow-visible mb-8 bg-[#1E1E1E]">
            <img alt="Moss & Meadows Project background" src={mossDetailImg} className="w-full h-full object-cover rounded-[10px]" />
            
            {/* Phone Mockups - positioned on top */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-4 flex-row items-center">
              
              {/* Mockup 1 - desktop mockup */}
              <div className="absolute -top-0 h-[470px] w-[800px] relative overflow-visible z-10">
                <img alt="Moss & Meadows App - Desktop" src={mossMockup1} className="w-full h-full object-cover object-top" />
              </div>

              {/* Mockups 2 */}
              <div className="relative w-[220px] h-[450px]">
                <div className="absolute top-5 -left-27 h-[426px] w-[206px] overflow-hidden rotate-12 z-20">
                  <img alt="Moss & Meadows App - Mobile" src={mossMockup2} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-8 text-[25px] text-[#cacaca] leading-tight text-right" style={{ fontFamily: 'var(--font-nicomoji)' }}>
              <p>MAR</p>
              <p>2025</p>
            </div>
          </div>

          {/* Info boxes row with star - Timeline + Scope + Star */}
          <div className="flex gap-0 mb-8 items-stretch">
            {/* Star decoration and white box - layered together */}
            <div className="relative w-[100px] h-[100px] flex-shrink-0 rounded-l-[4px] overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-white border-1 border-black" />
              <img alt="Star decoration" src={starIcon3} className="absolute inset-0 w-full h-full object-contain p-3" />
            </div>

            {/* Timeline box */}
            <div className="flex-[0.35] border border-[#454444] p-3">
              <p className="text-[16px] text-[rgba(42,41,41,0.79)] mb-2 leading-normal" style={{ fontFamily: 'var(--font-nicomoji)' }}>
                TIMELINE
              </p>
              <p className="text-[20px] text-black font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                2 weeks
              </p>
            </div>

            {/* Scope box */}
            <div className="flex-[0.65] border border-[#4d4d4d] rounded-r-[4px] p-3">
              <p className="text-[16px] text-[rgba(77,77,77,0.9)] mb-2 leading-normal whitespace-nowrap" style={{ fontFamily: 'var(--font-nicomoji)' }}>
                SCOPE
              </p>
              <p className="text-[20px] text-black font-bold leading-normal" style={{ fontFamily: 'var(--font-koho)' }}>
                Responsive Design, UX Research, UI/UX Product Design
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
    
  );
}