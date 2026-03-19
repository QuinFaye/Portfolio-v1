import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import MyWorks from "./components/MyWorks";
import MyWorksCard from "./components/MyWorksCard";
 
const chromeHeart = "/chrome-heart.png";

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen relative overflow-x-hidden overflow-y-auto">
      <HeroCard>
        <Hero />
      </HeroCard>
      
      {/* About Me Section - positioned absolutely on top of heart decoration */}
      <div className="relative h-[800px] z-10">
        <AboutMe />
      </div>

      {/* Heart decoration behind about me */}
      <div className="flex justify-center absolute top-[700px] left-1/2 transform -translate-x-1/2 z-0 overflow-visible" data-name="Heart Decoration" data-node-id="137:11">
        <div className="relative w-[1000px] h-[1031px] opacity-16 overflow-visible">
          <img alt="" className="w-full h-full object-cover" src={chromeHeart} />
        </div>
      </div>

      {/* My Works Section */}
      <div className="relative mt-48">
        <MyWorksCard>
          {/* Content for My Works goes here */}
          <MyWorks />
        </MyWorksCard>
      </div>
      

    </main>
  );
}