import Link from "next/link";

type MobileProjectCardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  dateLabel: string;
  timeline: string;
  scope: string;
  href?: string;
};

export default function MobileProjectCard({
  title,
  subtitle,
  imageSrc,
  dateLabel,
  timeline,
  scope,
  href,
}: MobileProjectCardProps) {
  const cta = href ? (
    <Link
      href={href}
      className="text-[15px] font-bold underline transition-opacity hover:opacity-80"
      style={{ fontFamily: 'var(--font-koho)' }}
    >
      View case study
    </Link>
  ) : (
    <p className="text-[15px] font-bold underline" style={{ fontFamily: 'var(--font-koho)' }}>
      View case study
    </p>
  );

  return (
    <article className="flex flex-col items-center gap-3 text-[#2a2929]">
      <div className="text-center">
        <h3 className="text-[24px] font-bold" style={{ fontFamily: 'var(--font-koho)' }}>
          {title}
        </h3>
        <p className="mt-1 text-[15px]" style={{ fontFamily: 'var(--font-koho)' }}>
          {subtitle}
        </p>
      </div>

      <div className="relative h-[430px] w-full max-w-[326px] overflow-hidden rounded-[18px] border border-[#454444] bg-[#1E1E1E]">
        <img alt={`${title} preview`} src={imageSrc} className="h-full w-full object-cover object-top" />
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 text-center text-[14px] text-[#cacaca]"
          style={{ fontFamily: 'var(--font-nicomoji)' }}
        >
          {dateLabel.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[326px] rounded-[14px] border border-[#454444] bg-[#dddddd] px-5 py-4 text-center">
        <p className="text-[13px] text-[rgba(42,41,41,0.79)]" style={{ fontFamily: 'var(--font-nicomoji)' }}>
          TIMELINE
        </p>
        <p className="mt-2 text-[22px] font-bold" style={{ fontFamily: 'var(--font-koho)' }}>
          {timeline}
        </p>
      </div>

      <div className="w-full max-w-[326px] rounded-[14px] border border-[#454444] bg-[#dddddd] px-5 py-5 text-center">
        <p className="text-[13px] text-[rgba(42,41,41,0.79)]" style={{ fontFamily: 'var(--font-nicomoji)' }}>
          SCOPE
        </p>
        <p className="mt-3 text-[15px] font-bold leading-snug" style={{ fontFamily: 'var(--font-koho)' }}>
          {scope}
        </p>
      </div>

      {cta}
    </article>
  );
}