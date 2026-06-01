export default function SocialIssuesSection() {
  return (
    <section id="social-issues" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-[0.3em] text-[#40916c] md:text-sm">
          ISSUE
        </p>

        {/* Main copy */}
        <h2 className="mt-4 text-3xl font-bold leading-[1.4] text-[#1a2e23] md:text-4xl lg:text-5xl lg:leading-[1.3]">
          高齢社会は、
          <br />
          まだ変えられる。
        </h2>

        {/* Body — PC: 2-column with image / SP: stacked */}
        <div className="mt-10 md:mt-14 md:flex md:items-start md:gap-12 lg:gap-16">
          {/* Text column */}
          <div className="md:flex-1">
            <p className="text-sm leading-[2.1] text-[#4b5563] md:text-[0.95rem]">
              人手不足、働き方のミスマッチ、年齢による機会の差。
              <br />
              高齢社会には、まだ解決されていない課題があります。
              <br />
              でも私たちは、それを悲観ではなく、変化の余地だと考えています。
            </p>

            {/* Accent copy */}
            <p className="mt-8 text-lg font-bold leading-[1.7] text-[#1a3a2a] md:mt-10 md:text-xl lg:text-2xl">
              人の力と仕組みで、
              <br />
              高齢社会をアップデートする。
            </p>
          </div>

          {/* Visual — title image used as section visual */}
          <div className="mt-10 md:mt-0 md:w-[45%] md:shrink-0">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/images/recruit/social-issues/social-issues-title-sp.png"
              />
              <img
                src="/images/recruit/social-issues/social-issues-title-pc.png"
                alt="高齢社会の課題に向き合う"
                className="w-full h-auto rounded-lg"
              />
            </picture>
          </div>
        </div>

        {/* Closing CTA message */}
        <div className="mt-16 border-t border-gray-100 pt-12 text-center md:mt-20 md:pt-14">
          <p className="text-xl font-bold leading-[1.6] text-[#1a3a2a] md:text-2xl lg:text-3xl">
            ともに、
            <br />
            高齢社会の未来を変えよう。
          </p>
        </div>
      </div>
    </section>
  );
}
