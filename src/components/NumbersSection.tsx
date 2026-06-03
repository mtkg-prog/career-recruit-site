// TODO: 数値データは人事担当者から共有された内容に基づく。更新が必要な場合はここを差し替える
// TODO: Google口コミやスタッフ満足度は未確定のため、確定後に項目追加を検討する
const numbers = [
  {
    label: "OVERTIME",
    value: "月14.3h",
    title: "残業時間（平均）",
    description: "月平均の残業時間です。",
  },
  {
    label: "HOLIDAY",
    value: "123日以上",
    title: "年間休日",
    description: "年間休日は123日以上です。",
  },
  {
    label: "CHILDCARE",
    value: "100%",
    title: "育休・産休",
    description: "育休・産休取得率です。",
  },
  {
    label: "CAREER UP",
    value: "最短半年",
    title: "支店長になるまでのスピード",
    description: "早期に役割を広げるチャンスがあります。",
  },
  {
    label: "EMPLOYEE RATIO",
    value: "83.7%",
    title: "正社員割合",
    description: "社員構成における正社員比率です。",
  },
  {
    label: "AREA",
    value: "27拠点",
    title: "拠点数（全国）",
    description: "全国に拠点を展開しています。",
  },
];

export default function NumbersSection() {
  return (
    <section id="numbers" className="bg-[#073B34] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-white/50 md:text-sm">
          NUMBERS
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-white md:mt-5 md:text-6xl">
          データで見るキャリア
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-white/70 md:mt-8 md:text-lg">
          事業の広がり、働く環境、会社としての安定性。
          <br className="hidden md:block" />
          キャリアの特徴を、数字でわかりやすく紹介します。
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {numbers.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-white/10 bg-white/[0.08] p-6 md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-white/50">
                {item.label}
              </p>
              <p className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-bold text-white/90">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-[1.8] text-white/70 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
