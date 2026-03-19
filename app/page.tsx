import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import MyWorks from "./components/MyWorks";
import MyWorksCard from "./components/MyWorksCard";
const chromeHeart = "/chrome-heart.png";

const imgHeartDecoration = "https://www.figma.com/api/mcp/asset/06f423d7-5325-47fd-a058-268d0b23ae6c";

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen relative overflow-visible">
      <HeroCard>
        <Hero />
      </HeroCard>
      
      {/* Heart decoration between hero and about me */}
      <div className="flex justify-center -mt-30 z-50 overflow-visible" data-name="Heart Decoration" data-node-id="137:11">
        <div className="relative w-[1000px] h-[1031px] opacity-16 overflow-visible">
          <img alt="" className="w-full h-full object-cover" src={chromeHeart} />
        </div>
      </div>

      {/* My Works Section */}
      <MyWorksCard>
        {/* Content for My Works goes here */}
        <MyWorks />
      </MyWorksCard>
      

    </main>
  );
}