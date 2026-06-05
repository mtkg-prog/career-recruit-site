const cultures = [
  {
    label: "01 / TEAM",
    title: "一人で抱えず、\nチームで向き合う。",
    description:
      "難しい課題ほど、一人だけでは解決できません。\n困ったときに相談し、知恵を出し合いながら、チームで前に進めることを大切にしています。",
  },
  {
    label: "02 / INTEGRITY",
    title: "声を受け止め、\n誠実に向き合う。",
    description:
      "求職者、現場、地域、事業。\nそれぞれの課題に真摯に向き合い、周囲の声やアドバイスを素直に受け止めます。\n誠実な積み重ねを、次の成長へと変えていきます。",
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
          社会課題に向き合い、
          <br />
          自分自身もアップデート。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          求職者、現場、地域、事業の課題に真摯に向き合う。
          <br className="hidden md:block" />
          周囲の声を受け止め、チームで考え、まず動く。
          <br className="hidden md:block" />
          その積み重ねが、高齢社会と自分自身をアップデートします。
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
