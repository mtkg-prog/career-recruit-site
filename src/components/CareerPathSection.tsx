const steps = [
  {
    label: "STEP 01",
    title: "仕事を知る",
    description:
      "求職者、現場、地域の課題を知り、キャリアの事業や仕事の基本を学びます。",
  },
  {
    label: "STEP 02",
    title: "担当領域を持つ",
    description:
      "担当する顧客や求職者に向き合い、自分のミッションを持って成果につなげていきます。",
  },
  {
    label: "STEP 03",
    title: "チームを動かす",
    description:
      "メンバー育成や支店運営など、チームで成果をつくる役割へ挑戦します。",
  },
  {
    label: "STEP 04",
    title: "事業をつくる",
    description:
      "現場で見えてきた課題をもとに、事業改善、新規事業、DXなどに関わっていきます。",
  },
];

const evaluationCards = [
  {
    label: "MISSION",
    title: "ミッションの難易度を大切にする",
    description:
      "担うミッションの難易度や責任の大きさを踏まえ、役割や評価を考えます。目の前の業務だけでなく、どんな課題に向き合うかを大切にしています。",
  },
  {
    label: "FAIR CHANCE",
    title: "年齢・性別・社歴だけで決めない",
    description:
      "若手でも中途入社でも、課題に向き合い行動する人には、役割を広げる機会があります。一人ひとりの挑戦を見つめる風土があります。",
  },
  {
    label: "CAREER UP",
    title: "挑戦が、次の役割につながる",
    description:
      "担当領域、リーダー、支店運営、企画職、新規事業など、挑戦の積み重ねが次のキャリアにつながります。役割やミッションに応じて、待遇にも反映されていきます。",
  },
];

export default function CareerPathSection() {
  return (
    <section id="career-path" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          CAREER PATH
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          挑戦の数だけ、
          <br />
          キャリアは広がる。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          キャリアでは、年齢や社歴だけで可能性を決めるのではなく、
          <br className="hidden md:block" />
          一人ひとりが掲げるミッションの難易度や、課題に向き合う姿勢を大切にしています。
          <br className="hidden md:block" />
          担う役割や責任が広がるほど、キャリアアップや待遇にもつながっていきます。
        </p>

        {/* Steps — PC: 4列グリッド / SP: タイムライン */}
        <div className="mt-12 md:mt-16">
          {/* PC: 4列カード + 接続線 */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.label} className="relative">
                {/* 接続線 */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 h-[2px] w-6 translate-x-full bg-[#40916c]/20" />
                )}

                <div className="h-full rounded-[24px] border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#40916c]">
                    {step.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold leading-[1.6] text-[#073B34]">
                    {step.title}
                  </h3>

                  <p className="mt-4 whitespace-pre-line text-base leading-[1.9] text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SP: タイムライン */}
          <div className="space-y-0 md:hidden">
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex gap-5">
                {/* タイムライン軸 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#073B34] text-xs font-bold tracking-wide text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-2 w-[2px] flex-1 bg-[#073B34]/10" />
                  )}
                </div>

                {/* コンテンツ */}
                <div className="pb-10">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#40916c]">
                    {step.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-[1.6] text-[#073B34]">
                    {step.title}
                  </h3>

                  <p className="mt-3 whitespace-pre-line text-sm leading-[1.9] text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 評価・キャリアアップの考え方 */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-center text-2xl font-bold leading-[1.5] text-[#073B34] md:text-3xl">
            評価・キャリアアップの考え方
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-[2] text-slate-700 md:mt-6 md:text-lg">
            一人ひとりが掲げるミッションの難易度や、課題に向き合う姿勢、
            <br className="hidden md:block" />
            成果を踏まえて、役割や評価を考えています。
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {evaluationCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[24px] border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md md:p-8"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-[#40916c]">
                  {card.label}
                </p>

                <h4 className="mt-4 text-lg font-bold leading-[1.6] text-[#073B34] md:text-xl">
                  {card.title}
                </h4>

                <p className="mt-4 text-sm leading-[1.9] text-slate-600 md:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 補足メッセージ */}
        <p className="mt-12 text-center text-xl font-bold leading-[1.7] text-[#073B34] md:mt-16 md:text-3xl">
          年齢や経験だけで決まるのではなく、
          <br />
          向き合った課題の数だけ、次の挑戦が広がっていく。
        </p>
      </div>
    </section>
  );
}
