const footerLinks = ["Home", "About", "Resume", "Contact"];

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-12 w-full overflow-visible px-4 pb-60 lg:pb-100 text-white md:px-10 lg:-mt-[250px] lg:-mb-16 lg:px-[115px] lg:pb-0"
      aria-label="Footer"
    >
      <div className="mx-auto w-full max-w-[1298px] overflow-visible">
        <div className="relative z-10 flex flex-col items-start gap-3 lg:gap-4">
          <p className="text-sm lg:text-lg xl:text-[20px] leading-normal text-white/95 md:text-[22px]" style={{ fontFamily: 'var(--font-koho)' }}>
            Connect with me at
          </p>
          <a
            href="mailto:sodein.fd@gmail.com"
            className="text-2xl lg:text-4xl xl:text-[40px] font-bold leading-none text-white underline decoration-[1.5px] underline-offset-[5px] transition-opacity hover:opacity-80 md:text-[46px]"
            style={{ fontFamily: 'var(--font-koho)' }}
          >
            sodein.fd@gmail.com
          </a>
          <a
            href="mailto:sodein.fd@gmail.com"
            className="rounded-lg lg:rounded-lg xl:rounded-[10px] bg-[#ddd] px-3 lg:px-4 xl:px-[17px] py-2 lg:py-2.5 xl:py-[10px] text-sm lg:text-lg xl:text-[22px] text-[#1e1e1e] transition-colors hover:bg-white md:text-[24px]"
            style={{ fontFamily: 'var(--font-koho)' }}
          >
            Contact me
          </a>
        </div>

        <div className="relative z-10 mt-8 lg:mt-10 h-[2px] w-full bg-[#d9d9d9]" />

        <div className="relative z-10 mt-6 lg:mt-8 mb-20 lg:mb-30 flex flex-col gap-4 lg:gap-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-4 lg:gap-x-8 gap-y-2 lg:gap-y-3 md:gap-x-[60px]">
              {footerLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="py-2 lg:py-2.5 xl:py-[10px] text-xs lg:text-base xl:text-[20px] leading-normal text-white transition-opacity hover:opacity-70 md:text-[22px]"
                    style={{ fontFamily: 'var(--font-koho)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="text-[22px] leading-normal text-white transition-opacity hover:opacity-70"
            style={{ fontFamily: 'var(--font-koho)' }}
            aria-label="X profile"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}