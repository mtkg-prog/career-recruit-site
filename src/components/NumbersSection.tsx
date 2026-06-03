// TODO: 後半3項目（STAFF / CLIENT / CAREER）を実データの具体数値に差し替え
// 差し替え後、見出しを「数字で見るキャリア」に戻すか「データで見るキャリア」のまま維持するか検討
const numbers = [
  {
    label: "MARKET",
    value: "グロース市場上場",
    description:
      "安定した経営基盤のもと、高齢社会の課題解決に向けて成長を続けています。",
  },
  {
    label: "AREA",
    value: "全国展開",
    description:
      "全国の介護・医療・シニアワーク領域に向き合い、地域ごとの課題解決に取り組んでいます。",
  },
  {
    label: "FIELD",
    value: "介護・医療領域に特化",
    description:
      "高齢社会に欠かせない領域に集中し、専門性を高めています。",
  },
  {
    label: "STAFF",
    value: "多様なキャリアフィールド", // TODO: 実データ確定後「XX万人以上」等の具体数値に差し替え
    description:
      "人材コーディネーター、営業、企画、DXなど、多様な職種で活躍できる環境があります。",
  },
  {
    label: "CLIENT",
    value: "地域に根ざした事業展開", // TODO: 実データ確定後「XX件以上」等の具体数値に差し替え
    description:
      "各地域の介護・医療現場と向き合い、地域ごとの課題解決に取り組んでいます。",
  },
  {
    label: "CAREER",
    value: "中途入社者も活躍", // TODO: 実データ確定後「XX%」等の具体数値に差し替え
    description:
      "異業種からの転職者も多く、多様なバックグラウンドを持つメンバーが活躍しています。",
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
              <p className="mt-4 text-sm leading-[1.8] text-white/70 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
