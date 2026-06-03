import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const cards = [
  {
    number: "01",
    label: "SENIOR CARE",
    title: "介護・医療現場を支える",
    body: "看護師・介護士などの人材サービスを通じて、人手不足に悩む介護・医療現場を支えています。",
  },
  {
    number: "02",
    label: "SENIOR WORK",
    title: "年齢に関係なく働ける機会をつくる",
    body: "働く意欲のあるシニアに、多様な就労機会を提供し、経験や意欲が社会で活きる仕組みを広げています。",
  },
  {
    number: "03",
    label: "EDUCATION / NEW BUSINESS",
    title: "人と仕組みで、新しい入口をつくる",
    body: "資格取得支援やDX、新規事業を通じて、高齢社会を支える人と仕組みを増やしています。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          ABOUT US
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-5xl lg:text-6xl">
          高齢社会の課題に、
          <br />
          事業で向き合う。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-2xl text-[15px] leading-[2.1] text-slate-700 md:mt-8 md:text-lg md:leading-[2]">
          株式会社キャリアは、介護・医療・シニアワーク領域を中心に、
          <br className="hidden md:block" />
          人材サービス、就労支援、教育、そして新しい仕組みづくりを通じて、
          <br className="hidden md:block" />
          高齢社会の課題解決に取り組んでいます。
        </p>

        {/* Main visual */}
        <div className="mt-12 overflow-hidden rounded-2xl md:mt-16 md:rounded-[24px]">
          <div className="relative hidden md:block" style={{ aspectRatio: "16/9" }}>
            <Image
              src={`${bp}/images/recruit/about/about-main-pc.png`}
              alt="オフィスで議論する社員たち"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative block md:hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src={`${bp}/images/recruit/about/about-main-sp.png`}
              alt="オフィスで議論する社員たち"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className="rounded-[24px] border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tabular-nums text-[#40916c]">
                  {card.number}
                </span>
                <span className="text-[0.6rem] font-semibold tracking-[0.15em] text-slate-500">
                  {card.label}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold leading-snug text-[#073B34] md:text-lg">
                {card.title}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.95] text-[#4b5563]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
