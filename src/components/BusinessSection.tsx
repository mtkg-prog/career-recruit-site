const cards = [
  {
    number: "01",
    label: "SENIOR CARE",
    title: (
      <>
        介護・医療現場に、
        <br />
        必要な人材を届ける。
      </>
    ),
    body: "看護師・介護士を中心とした人材サービスを通じて、人手不足に悩む介護・医療現場を支えています。",
  },
  {
    number: "02",
    label: "SENIOR WORK",
    title: (
      <>
        年齢に関係なく、
        <br />
        働ける機会を広げる。
      </>
    ),
    body: "働く意欲のあるシニアと、担い手を必要とする現場をつなぎ、経験や意欲が社会で活きる仕組みを広げています。",
  },
  {
    number: "03",
    label: "EDUCATION",
    title: (
      <>
        未経験から、
        <br />
        支える人を増やす。
      </>
    ),
    body: "介護職員初任者研修などの教育支援を通じて、高齢社会を支える新しい人材の入口をつくっています。",
  },
  {
    number: "04",
    label: "NEW BUSINESS / DX",
    title: (
      <>
        人と仕組みで、
        <br />
        課題解決を進化させる。
      </>
    ),
    body: "人材・教育・現場支援の仕組みをテクノロジーで進化させ、高齢社会に必要な新しい事業づくりに挑んでいます。",
  },
];

export default function BusinessSection() {
  return (
    <section id="business" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          BUSINESS
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          高齢社会を支える、
          <br />
          複数の事業フィールド。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          キャリアが向き合う課題は、一つではありません。
          <br className="hidden md:block" />
          介護・医療現場の人材不足、シニアの就労機会、未経験者の教育、そして新しい仕組みづくり。
          <br className="hidden md:block" />
          複数の事業を通じて、高齢社会に必要な支えを広げています。
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.number}
              className="rounded-[24px] border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md md:p-8"
            >
              <p className="text-4xl font-extrabold text-[#40916c]/20 md:text-5xl">
                {card.number}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-slate-500">
                {card.label}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-[1.6] text-[#073B34] md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.9] text-[#4b5563] md:text-base">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
