const cards = [
  {
    number: "01",
    label: "SENIOR CARE",
    title: (
      <>
        介護・医療領域の
        <br />
        人材支援
      </>
    ),
    body: "介護施設や医療機関の人材課題に向き合い、働きたい人と必要とする現場をつなぎます。求職者とクライアント双方に向き合い、地域の安心を支える事業です。",
    tags: ["人材派遣", "人材紹介", "マッチング支援"],
  },
  {
    number: "02",
    label: "SENIOR WORK",
    title: (
      <>
        シニアの
        <br />
        就労支援
      </>
    ),
    body: "年齢に関係なく働ける機会を広げるため、働きたいシニアと企業・地域をつなぎます。経験や意欲が社会の中で活きる場を増やしていく事業です。",
    tags: ["就労支援", "社会参加", "地域課題"],
  },
  {
    number: "03",
    label: "EDUCATION",
    title: (
      <>
        教育・
        <br />
        研修事業
      </>
    ),
    body: "介護職員初任者研修などを通じて、未経験から介護・福祉領域に踏み出す人を支援します。人材不足の解決だけでなく、現場で活躍できる人を育てる事業です。",
    tags: ["資格取得支援", "研修", "人材育成"],
  },
  {
    number: "04",
    label: "NEW BUSINESS / DX",
    title: (
      <>
        新規事業・
        <br />
        DX
      </>
    ),
    body: "現場で見えてきた課題をもとに、新しいサービスや仕組みづくりに挑戦しています。人の力だけに頼るのではなく、テクノロジーや事業開発を通じて課題解決を進化させます。",
    tags: ["事業企画", "DX", "仕組みづくり"],
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
          キャリアの事業。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          介護・医療領域の人材支援、シニアの就労支援、教育・研修、新規事業・DX。
          <br className="hidden md:block" />
          キャリアは複数の事業を通じて、高齢社会に必要な仕組みを広げています。
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
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#e8f0ec] px-3 py-1 text-xs font-medium text-[#40916c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to People */}
        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-[2] text-slate-500 md:mt-16 md:text-base">
          事業の最前線から、組織を支える本部機能、仕組みをつくる企画職まで。
          <br className="hidden md:block" />
          それぞれの立場で声を受け止め、チームで課題を前に進めています。
        </p>
      </div>
    </section>
  );
}
