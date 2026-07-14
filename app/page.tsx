import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import MobileHome from "./components/MobileHome";
import MyWorks from "./components/MyWorks";
import MyWorksCard from "./components/MyWorksCard";
 
const chromeHeart = "/chrome-heart.png";
const footerChrome = "https://www.figma.com/api/mcp/asset/564c7c6b-f0ad-4220-9df8-426ebf6d8e95";

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen relative overflow-x-hidden overflow-y-auto">
      <MobileHome />

      <div className="hidden lg:block">
        <HeroCard>
          <Hero />
        </HeroCard>
        
        {/* About Me Section - positioned absolutely on top of heart decoration */}
        <div className="relative h-[800px] z-10">
          <AboutMe />
        </div>

        {/* Heart decoration behind about me */}
        <div className="flex justify-center absolute top-[650px] left-1/2 transform -translate-x-1/2 z-0 overflow-visible" data-name="Heart Decoration" data-node-id="137:11">
          <div className="relative w-[1000px] h-[1031px] opacity-16 overflow-visible">
            <img alt="" className="w-full h-full object-cover" src={chromeHeart} />
          </div>
        </div>

        {/* My Works + Footer Section */}
        <div className="relative mt-28 z-10 overflow-visible">
          <div
            className="pointer-events-none absolute left-1/2 top-[1450px] z-0 h-[1027px] w-[712px] -translate-x-[280px] opacity-33"
            aria-hidden="true"
          >
            <img alt="" className="h-full w-full object-cover" src={footerChrome} />
          </div>

          <div className="relative z-10">
            <MyWorksCard>
              <MyWorks />
            </MyWorksCard>

            <Footer />
          </div>
        </div>
      </div>
      

    </main>
  );
}