const steps = [
  {
    label: "STEP 01",
    title: "現場を知る",
    description:
      "求職者やクライアントに向き合い、人材サービスの基本を学びます。\n人と仕事をつなぐ実感を持ちながら、課題解決の土台を身につけます。",
  },
  {
    label: "STEP 02",
    title: "成果をつくる",
    description:
      "担当領域を持ち、求職者・現場・地域の課題に向き合います。\n自分の提案や行動が、現場の安心や誰かの働き方につながる経験を重ねます。",
  },
  {
    label: "STEP 03",
    title: "チームを動かす",
    description:
      "リーダー、支店長、マネージャーとして、チームで成果をつくる役割へ。\nメンバー育成や拠点運営を通じて、より大きな課題解決に挑みます。",
  },
  {
    label: "STEP 04",
    title: "事業をつくる",
    description:
      "新規事業、DX、教育支援、本部企画など、会社全体の仕組みづくりにも挑戦できます。\n現場で得た気づきを、事業の進化につなげていくキャリアです。",
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
          挑戦の先に、
          <br />
          広がるキャリア。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          キャリアには、現場に向き合う仕事から、支店運営、マネジメント、新規事業、本部職まで、
          <br className="hidden md:block" />
          一人ひとりの挑戦に応じて広がるキャリアがあります。
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
