export default function IssueSection() {
  return (
    <section
      id="social-issues"
      className="bg-[#f8faf7] px-5 pt-16 pb-16 md:px-8 md:pt-28 md:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] text-[#40916c] md:text-sm">
          ISSUE
        </p>

        {/* Main heading */}
        <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.45] text-[#073B34] md:mt-5 md:text-4xl md:leading-[1.4] lg:text-5xl lg:leading-[1.35]">
          人の力と仕組みで、
          <br />
          高齢社会をアップデート。
        </h2>

        {/* Lead copy */}
        <div className="mt-8 max-w-xl md:mt-12">
          <p className="text-[15px] leading-[2.1] text-slate-700 md:text-lg md:leading-[2]">
            人手不足、働き方のミスマッチ、年齢による機会の差。
            <br className="hidden md:block" />
            高齢社会には、まだ解決されていない課題があります。
          </p>
          <p className="mt-4 text-[15px] leading-[2.1] text-slate-700 md:mt-5 md:text-lg md:leading-[2]">
            でも私たちは、それを悲観ではなく、変化の余地だと考えています。
          </p>
        </div>

        {/* Closing copy */}
        <div className="mt-14 border-t border-slate-200/70 pt-10 md:mt-20 md:pt-14">
          <p className="text-xl font-bold leading-[1.6] text-[#073B34] md:text-3xl md:leading-[1.5] lg:text-4xl">
            ともに、
            <br className="md:hidden" />
            高齢社会の未来を変えよう。
          </p>
        </div>
      </div>
    </section>
  );
}
