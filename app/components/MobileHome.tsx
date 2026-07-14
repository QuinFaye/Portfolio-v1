import { Menu, ArrowDown } from "lucide-react";
import MobileProjectCard from "./MobileProjectCard";

const chromeBlob = "/chrome-blob.png";
const myImg = "/my-img.jpg";
const chromePin = "/chrome-pin.png";
const circMockup1 = "/circ-mockup1.png";
const ficloMockup2 = "/ficlo2.png";
const mossMockup2 = "/m&m2.png";

const skills = [
  "UI Design",
  "UX Design",
  "Framer",
  "React.js",
  "JavaScript",
  "HTML & CSS",
  "Prototyping",
  "Responsive Design",
  "Interactive Design",
  "Research",
];

export default function MobileHome() {
  return (
    <div className="bg-[#dddddd] lg:hidden">
      <section className="relative overflow-hidden px-5 pt-5 pb-16 text-black sm:px-8 sm:pt-6 sm:pb-20">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-necosmic text-[18px] text-[#1e1e1e]">SDFD</span>
          <button
            type="button"
            aria-label="Open navigation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 bg-black/5"
          >
            <Menu size={18} />
          </button>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[360px] flex-col items-center text-center sm:max-w-[560px]">
          <h1 className="font-necosmic text-[28px] leading-tight text-black sm:text-[36px]">
            Sodein Faye-Dikio
          </h1>
          <p className="mt-2 text-[16px] font-semibold text-[#4d4d4d] sm:text-[18px]" style={{ fontFamily: 'var(--font-koho)' }}>
            UI/UX Designer & Creative Developer
          </p>
          <p className="mt-6 max-w-[290px] text-[17px] leading-[1.45] text-black sm:max-w-[430px] sm:text-[19px]" style={{ fontFamily: 'var(--font-koho)' }}>
            I design thoughtful digital experiences and build interactive interfaces. Let me bring your unique ideas to life!
          </p>

          <div className="relative mt-8 h-[260px] w-[300px] sm:h-[340px] sm:w-[390px]">
            <img
              alt="Chrome blob"
              src={chromeBlob}
              className="h-full w-full rotate-[8deg] object-contain opacity-80"
            />
          </div>

          <div className="mt-8 flex w-full max-w-[260px] flex-col gap-3 sm:max-w-[290px]">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-black px-5 py-3 text-[18px] font-medium text-black transition-colors hover:bg-black hover:text-[#49CB3B]"
              style={{ fontFamily: 'var(--font-koho)' }}
            >
              <ArrowDown size={20} />
              Download Resumé
            </a>
            <a
              href="#mobile-works"
              className="inline-flex items-center justify-center rounded-[10px] border border-black px-5 py-3 text-[18px] font-medium text-black transition-colors hover:bg-black hover:text-white"
              style={{ fontFamily: 'var(--font-koho)' }}
            >
              View Works
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1E1E1E] px-5 py-14 text-white sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-8 text-center">
          <p className="font-necosmic text-[24px] text-[#dddddd] sm:text-[28px]">About me</p>

          <div className="relative h-[210px] w-[230px] sm:h-[250px] sm:w-[280px]">
            <div className="absolute left-[42px] top-[78px] h-[124px] w-[136px] rounded-[10px] border border-[#49cb3b] sm:left-[56px] sm:top-[88px] sm:h-[145px] sm:w-[160px]" />
            <div className="absolute left-[20px] top-[55px] h-[129px] w-[140px] rounded-[10px] border border-[#49cb3b] sm:left-[28px] sm:top-[62px] sm:h-[150px] sm:w-[168px]" />
            <div className="absolute left-0 top-[32px] h-[129px] w-[140px] overflow-hidden rounded-[10px] bg-[#e2e2e2] sm:h-[150px] sm:w-[168px]">
              <img alt="Portrait" src={myImg} className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-[10px] top-0 h-[83px] w-[83px] overflow-hidden rounded-[10px] sm:right-0 sm:h-[100px] sm:w-[100px]">
              <img alt="Accent" src={chromePin} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="max-w-[620px]">
            <h2 className="text-[30px] text-white sm:text-[34px]" style={{ fontFamily: 'var(--font-nicomoji)' }}>
              Hello <span className="text-[24px] sm:text-[28px]">♥</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white sm:text-[17px]" style={{ fontFamily: 'var(--font-koho)' }}>
              I&apos;m Sodein, a UI/UX designer-developer who enjoys designing clean, thoughtful interfaces and building engaging web products. I love exploring current ideas, experimenting with visuals and motion, and turning concepts into experiences people can interact with.
            </p>
          </div>

          <div className="w-full max-w-[620px]">
            <h3 className="mb-4 text-[30px] text-white sm:text-[34px]" style={{ fontFamily: 'var(--font-nicomoji)' }}>
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {skills.map((skill) => (
                <div key={skill} className="rounded-[28px] border border-white px-[3px] py-[2px]">
                  <div className="rounded-[38px] bg-white px-[12px] py-[6px] sm:px-[14px]">
                    <span className="text-[13px] text-black sm:text-[14px]" style={{ fontFamily: 'var(--font-koho)' }}>
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mobile-works" className="px-5 py-14 text-[#2a2929] sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-10 sm:gap-12">
          <p className="font-necosmic text-[24px] sm:text-[28px]">My Works</p>

          <MobileProjectCard
            title="CIRC - Redesign"
            subtitle="Social Media Fashion Marketplace"
            imageSrc={circMockup1}
            dateLabel="NOV\n2025"
            timeline="3 Weeks"
            scope="UX Research, Branding, Prototyping, UI/UX Product Design"
          />

          <MobileProjectCard
            title="FICLO"
            subtitle="AI Powered Studying Platform"
            imageSrc={ficloMockup2}
            dateLabel="FEB-MARCH\n2026"
            timeline="6 Weeks"
            scope="UX Research, Usability Testing, Prototyping, UI/UX Design"
            href="/ficlo-case-study"
          />

          <MobileProjectCard
            title="MOSS & MEADOWS"
            subtitle="Decorative Plants E-commerce Company"
            imageSrc={mossMockup2}
            dateLabel="MAR\n2025"
            timeline="2 Weeks"
            scope="Responsive Design, UX Research, UI/UX Product Design"
          />
        </div>
      </section>
    </div>
  );
}