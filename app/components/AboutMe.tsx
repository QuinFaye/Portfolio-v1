const myImg = "/my-img.jpg";
const chromePin = "/chrome-pin.png";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-left justify-left z-0 overflow-visible py-20 px-20">

    {/*Picture Stack - Center Positioned*/}
        <div className="relative w-[400px] h-[400px] mb-100"> 
          {/* Decorative border frames - layered behind */}
          <div className="absolute border-2 border-[#49cb3b] rounded-[10px] h-[300px] w-[350px] top-[80px] left-[10px] -z-20" />
          <div className="absolute border-2 border-[#49cb3b] rounded-[10px] h-[310px] w-[350px] top-[50px] left-[10px] -z-10" />
          
          {/* Main photo - center layer */}
          <div className="absolute bg-[#e2e2e2] rounded-[10px] h-[287px] w-[350px] top-[20px] left-[0px] z-0 overflow-hidden">
            <img 
              alt="Main portrait" 
              className="w-full h-full object-cover rounded-[10px]" 
              src={myImg} 
            />
          </div>
          
          {/* Top right accent photo - top layer */}
          <div className="absolute w-[180px] h-[180px] top-[-20px] right-[-30px] z-10 rounded-[10px] overflow-hidden">
            <img 
              alt="Accent photo" 
              className="w-full h-full object-cover rounded-[10px]" 
              src={chromePin} 
            />
          </div>
        </div>

    {/*Right Side, About, Skills List*/}
        
    </div>
  );
}