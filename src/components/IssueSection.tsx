export default function IssueSection() {
  return (
    <section
      id="social-issues"
      className="bg-[#f8faf7] px-5 pt-16 pb-16 md:px-8 md:pt-28 md:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Upper: eyebrow + heading + lead — PC 2-col, SP stacked */}
        <div className="md:flex md:items-start md:gap-16 lg:gap-20">
          {/* Left column — text (always primary) */}
          <div className="md:flex-1">
            {/* Eyebrow */}
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#40916c] md:mb-4 md:text-sm">
              ISSUE
            </p>

            {/* Main heading */}
            <h2 className="text-[2rem] font-bold leading-[1.45] text-[#073B34] md:text-5xl md:leading-[1.35] lg:text-6xl lg:leading-[1.3]">
              高齢社会は、
              <br />
              まだ変えられる。
            </h2>

            {/* Lead copy — visible on PC next to heading */}
            <div className="mt-6 hidden md:block">
              <p className="max-w-xl text-lg leading-[2] text-slate-700">
                人手不足、働き方のミスマッチ、年齢による機会の差。
                <br />
                高齢社会には、まだ解決されていない課題があります。
              </p>
              <p className="mt-5 max-w-xl text-lg leading-[2] text-slate-700">
                でも私たちは、それを悲観ではなく、変化の余地だと考えています。
              </p>
            </div>
          </div>

          {/* Right column — subtle decorative visual (PC only) */}
          <div className="hidden md:flex md:w-[38%] md:shrink-0 md:items-center md:justify-center lg:w-[35%]">
            <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#073B34]/[0.04] lg:h-64">
              {/* Abstract geometric accent */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-[#40916c]/20 lg:h-40 lg:w-40" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border border-[#40916c]/15 lg:h-28 lg:w-28" />
              <div className="absolute right-8 bottom-8 h-16 w-16 rounded-full bg-[#40916c]/[0.07]" />
              <p className="relative text-center text-xs font-semibold tracking-[0.3em] text-[#40916c]/60">
                UPDATE
                <br />
                AGING
                <br />
                SOCIETY
              </p>
            </div>
          </div>
        </div>

        {/* Lead copy — SP only (below heading) */}
        <div className="mt-6 md:hidden">
          <p className="text-[15px] leading-[2.1] text-slate-700">
            人手不足、働き方のミスマッチ、年齢による機会の差。高齢社会には、まだ解決されていない課題があります。
          </p>
          <p className="mt-4 text-[15px] leading-[2.1] text-slate-700">
            でも私たちは、それを悲観ではなく、変化の余地だと考えています。
          </p>
        </div>

        {/* Core message */}
        <div className="mx-auto mt-10 text-center md:mt-20 md:max-w-4xl">
          <p className="text-[1.5rem] font-extrabold leading-[1.6] text-[#073B34] md:text-4xl md:leading-[1.5] lg:text-5xl">
            人の力と仕組みで、
            <br />
            高齢社会をアップデートする。
          </p>
        </div>

        {/* Closing divider + copy */}
        <div className="mx-auto mt-10 max-w-[280px] border-t border-slate-200 md:mt-16 md:max-w-4xl md:border-slate-200/70" />
        <div className="pt-8 text-center md:pt-14">
          <p className="text-2xl font-extrabold leading-[1.7] text-[#073B34] md:text-4xl md:leading-[1.5] lg:text-5xl">
            ともに、
            <br className="md:hidden" />
            高齢社会の未来を変えよう。
          </p>
        </div>
      </div>
    </section>
  );
}
