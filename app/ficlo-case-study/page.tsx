import FicloCaseStudyBlock from "../components/FicloCaseStudyBlock";
import FicloCaseStudyHero from "../components/FicloCaseStudyHero";

export default function FicloCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] px-6 py-10 text-white md:px-12 md:py-14">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6">
        <FicloCaseStudyHero />
        <FicloCaseStudyBlock title="Overview" />
        <FicloCaseStudyBlock title="Problem" height="h-[220px]" />
        <FicloCaseStudyBlock title="Process" height="h-[360px]" />
        <FicloCaseStudyBlock title="Outcome" height="h-[260px]" />
      </div>
    </main>
  );
}