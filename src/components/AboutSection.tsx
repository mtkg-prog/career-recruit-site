import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const cards = [
  {
    number: "01",
    title: (
      <>
        社会課題を、
        <br />
        事業で解く。
      </>
    ),
    body: "介護・医療・シニア領域にある課題を、単なる支援で終わらせず、持続可能な事業として解決していく。それが、キャリアの向き合い方です。",
  },
  {
    number: "02",
    title: (
      <>
        人の可能性を、
        <br />
        広げる。
      </>
    ),
    body: "働きたい人、支えを必要とする現場、地域社会。それぞれの可能性をつなぎ、新しい選択肢を生み出していきます。",
  },
  {
    number: "03",
    title: (
      <>
        現場の声を、
        <br />
        仕組みに変える。
      </>
    ),
    body: "日々の現場で見えてくる課題を、サービス改善や新規事業、DXへとつなげていく。人の力と仕組みの両方で、高齢社会を前に進めます。",
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
          人と仕組みで向き合う。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-2xl text-[15px] leading-[2.1] text-slate-700 md:mt-8 md:text-lg md:leading-[2]">
          キャリアは、介護・医療・シニア領域にある課題を、
          <br className="hidden md:block" />
          人材サービスだけでなく、教育、就労支援、新しい仕組みづくりを通じて
          <br className="hidden md:block" />
          解決していく会社です。
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
              <p className="text-3xl font-extrabold text-[#40916c]/20 md:text-4xl">
                {card.number}
              </p>
              <h3 className="mt-4 text-lg font-bold leading-[1.6] text-[#073B34] md:text-xl">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.95] text-[#4b5563] md:text-base">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
