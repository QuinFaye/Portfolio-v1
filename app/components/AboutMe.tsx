const myImg = "/my-img.jpg";
const chromePin = "/chrome-pin.png";

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between z-0 overflow-visible py-10 lg:py-20 px-6 lg:px-20 gap-8 lg:gap-20">

    {/*Left Side, Picture Stack*/}
        <div className="relative w-full lg:w-[400px] lg:flex-shrink-0" style={{ aspectRatio: '1', maxWidth: '400px' }}> 
          {/* Decorative border frames - layered behind */}
          <div className="absolute border-1 border-[#49cb3b] rounded-lg lg:rounded-[10px] lg:h-[280px] lg:w-[320px] lg:top-[160px] lg:left-[70px] -z-20 inset-0 lg:inset-auto" style={{ height: 'clamp(160px, 25vw, 280px)', width: 'clamp(160px, 25vw, 320px)', top: 'clamp(120px, 20vw, 160px)', left: 'clamp(40px, 10vw, 70px)' }} />
          <div className="absolute border-1 border-[#49cb3b] rounded-lg lg:rounded-[10px] lg:h-[280px] lg:w-[320px] lg:top-[120px] lg:left-[40px] -z-10 inset-0 lg:inset-auto" style={{ height: 'clamp(160px, 25vw, 280px)', width: 'clamp(160px, 25vw, 320px)', top: 'clamp(80px, 15vw, 120px)', left: 'clamp(20px, 5vw, 40px)' }} />
          
          {/* Main photo - center layer */}
          <div className="absolute bg-[#e2e2e2] rounded-lg lg:rounded-[10px] lg:h-[280px] lg:w-[320px] lg:top-[90px] lg:left-[10px] z-0 overflow-hidden inset-0 lg:inset-auto" style={{ height: 'clamp(160px, 25vw, 280px)', width: 'clamp(160px, 25vw, 320px)', top: 'clamp(60px, 12vw, 90px)', left: 'clamp(5px, 1vw, 10px)' }}>
            <img 
              alt="Main portrait" 
              className="w-full h-full object-cover rounded-lg lg:rounded-[10px]" 
              src={myImg} 
            />
          </div>
          
          {/* Top right accent photo - top layer */}
          <div className="absolute w-[90px] h-[90px] lg:w-[180px] lg:h-[180px] lg:top-[26px] lg:right-[-16px] z-10 rounded-lg lg:rounded-[10px] overflow-hidden" style={{ width: 'clamp(90px, 15vw, 180px)', height: 'clamp(90px, 15vw, 180px)', top: 'clamp(10px, 3vw, 26px)', right: 'clamp(-20px, -2vw, -16px)' }}>
            <img 
              alt="Accent photo" 
              className="w-full h-full object-cover rounded-lg lg:rounded-[10px]" 
              src={chromePin} 
            />
          </div>
        </div>

    {/*Right Side, About & Skills*/}
        <div className="flex-1 w-full lg:w-auto">
          {/* About Me Section */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-4xl xl:text-[40px] text-white mb-3 lg:mb-4" style={{ fontFamily: 'var(--font-nicomoji)', }}>Hello <span className="text-xl lg:text-2xl xl:text-3xl">♥</span></h2>
            <p className="text-sm lg:text-lg xl:text-[23px] font-medium text-white leading-snug" style={{ fontFamily: 'var(--font-koho)' }}>
              I'm Sodein, a UI/UX designer-developer who enjoys designing clean, thoughtful interfaces and building engaging web products. I love exploring current ideas, experimenting with visuals and motion, and turning concepts into experiences people can interact with. Creating and designing is something I truly enjoy, and it's a craft I'm always working to refine.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <span className=" absolute text-[#49cb3b] font-bold text-sm lg:text-base xl:text-[18px]"  style={{ transform: 'rotate(-25deg)', fontFamily: 'var(--font-koho)', left: 'clamp(300px, 50vw, 520px)' }}>relevant</span>
            <h3 className="text-2xl lg:text-4xl xl:text-[40px] text-white mb-3 lg:mb-4" style={{ fontFamily: 'var(--font-nicomoji)' }}>
              <div>Skills</div>
            </h3>
            
            <div className="flex flex-wrap gap-2 lg:gap-3" style={{ fontFamily: 'var(--font-koho)' }}>
              {/* UI Design */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>UI Design</span>
                </div>
              </div>
              
              {/* UX Design */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>UX Design</span>
                </div>
              </div>
              
              {/* Lo-Fi/Hi-fi Wireframing */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>Lo-Fi/Hi-fi Wireframing</span>
                </div>
              </div>
              
              {/* Prototyping */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>Prototyping</span>
                </div>
              </div>
              
              {/* Responsive Design */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>Responsive Design</span>
                </div>
              </div>
              
              {/* React.js */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>React.js</span>
                </div>
              </div>
              
              {/* JavaScript */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>JavaScript</span>
                </div>
              </div>
              
              {/* HTML5 & CSS3 */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>HTML5 & CSS3</span>
                </div>
              </div>
              
              {/* Interactive Design */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>Interactive Design</span>
                </div>
              </div>
              
              {/* Framer */}
              <div className="border border-white rounded-full px-0.5 lg:px-1 py-0.5">
                <div className="bg-white flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                  <span className="text-black text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>Framer</span>
                </div>
              </div>
              
              {/* Not-So-Relevant Skills */}
              <div className="relative group">
                {/* Hover tooltip box */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-[#1e1e1e] border border-[#e3e3e3] rounded-lg lg:rounded-[13px] h-auto w-64 lg:w-[580px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 p-4 lg:p-6 flex flex-wrap content-start gap-2 lg:gap-3 items-start">
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Digital Art ||</span>
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Traditional Art ||</span>
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Django ||</span>
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Blender (3D Art) ||</span>
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Technical Writing ||</span>
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Copywriting ||</span>
                  <span className="text-[#49cb3b] text-xs lg:text-lg" style={{ fontFamily: '"Glass TTY VT220", monospace' }}>Character Design</span>
                </div>
                
                {/* Not-So-Relevant Skills Button */}
                <div className="rounded-full group-hover:border group-hover:border-[#49cb3b] transition-colors duration-200">
                  <div className="bg-[#1e341c] flex items-center justify-center px-3 lg:px-4 xl:px-[16px] py-1 lg:py-1.5 xl:py-[6px] rounded-full">
                    <span className="text-[#49cb3b] text-xs lg:text-sm xl:text-[20px] font-medium" style={{ fontFamily: 'var(--font-koho)' }}>Not-So-Relevant Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}