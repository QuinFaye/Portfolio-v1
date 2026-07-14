export default function FicloCaseStudyBlock({
  title,
  height = "h-[280px]",
}: {
  title: string;
  height?: string;
}) {
  return (
    <section className={`rounded-[24px] border border-white/12 bg-white/[0.03] p-8 text-white ${height}`}>
      <h2 className="text-[28px] font-bold" style={{ fontFamily: 'var(--font-koho)' }}>
        {title}
      </h2>
    </section>
  );
}