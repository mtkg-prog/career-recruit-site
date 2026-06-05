// TODO: 数値データは人事担当者から共有された内容に基づく。更新が必要な場合はここを差し替える
import type { ReactNode } from "react";

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function PieChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const numbers: { label: string; value: string; title: string; description: string; icon: ReactNode }[] = [
  {
    label: "OVERTIME",
    value: "月17.6h",
    title: "残業時間（平均）",
    description: "無理なく働ける環境づくりに取り組んでいます。",
    icon: <ClockIcon />,
  },
  {
    label: "HOLIDAY",
    value: "123日以上",
    title: "年間休日",
    description: "仕事とプライベートの両立を大切にできます。",
    icon: <CalendarIcon />,
  },
  {
    label: "CHILDCARE",
    value: "100%",
    title: "育休・産休取得率",
    description: "ライフステージが変わっても働き続けやすい制度があります。",
    icon: <HeartIcon />,
  },
  {
    label: "REVIEW",
    value: "★4.3",
    title: "Googleクチコミ評価",
    description: "対象拠点平均 / 2026年6月時点",
    icon: <StarIcon />,
  },
  {
    label: "EMPLOYEE RATIO",
    value: "81%",
    title: "正社員割合",
    description: "安定した雇用体制のもとで、長く働ける環境があります。",
    icon: <PieChartIcon />,
  },
  {
    label: "AREA",
    value: "47都道府県",
    title: "契約実績エリア",
    description: "25拠点を中心に、全国で派遣・紹介の実績があります。",
    icon: <MapPinIcon />,
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
              <div className="mb-4">{item.icon}</div>
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
