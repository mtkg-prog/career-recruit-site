const cultures = [
  {
    label: "01 / UPDATE",
    title: "社会課題に向き合い、\n自分自身もアップデートし続ける。",
    description:
      "求職者、現場、地域、事業。\nそれぞれの課題に真摯に向き合い、周囲の声を素直に受け止める。\n誠実さを積み重ね、次の成長へと変えていきます。",
  },
  {
    label: "02 / TEAM",
    title: "一人で抱えず、\nチームで向き合う。",
    description:
      "求職者や現場の課題は、一人で解決できるものばかりではありません。\n困ったときに相談し、知恵を出し合い、チームで前に進めることを大切にしています。",
  },
  {
    label: "03 / POSITIVE ACTION",
    title: "正解がない課題にも、\nまず動いてみる。",
    description:
      "高齢社会の課題には、まだ決まった答えがないものも多くあります。\n小さく試し、学び、改善しながら、新しい可能性を広げていきます。",
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="bg-[#f8faf7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          CULTURE
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          変化を起こす人を、
          <br />
          ひとりにしない。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          キャリアの仕事は、求職者、現場、地域、事業の課題に向き合う仕事です。
          <br className="hidden md:block" />
          だからこそ、真摯に課題を受け止め、チームで考え、まず動き、より良い形へ変えていく文化を大切にしています。
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {cultures.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#40916c]">
                {item.label}
              </p>

              <h3 className="mt-4 whitespace-pre-line text-xl font-bold leading-[1.6] text-[#073B34] md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 whitespace-pre-line text-sm leading-[1.9] text-slate-600 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
