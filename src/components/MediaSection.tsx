import { RECRUIT_LINKS } from "@/constants/links";

const mediaCards = [
  {
    label: "Instagram",
    heading: "働く人や採用情報を発信中",
    description: "日々の雰囲気や採用関連のお知らせをお届けします。",
    href: RECRUIT_LINKS.instagram,
    bg: "bg-gradient-to-br from-[#f9e4d4] to-[#f2c4c8]",
    text: "text-[#5c2e1e]",
    accent: "text-[#9e4b2e]",
  },
  {
    label: "note",
    heading: "キャリアの考え方を発信中",
    description: "事業や組織、働く人の想いを記事でご紹介します。",
    href: RECRUIT_LINKS.note,
    bg: "bg-[#1a3a2a]",
    text: "text-white/80",
    accent: "text-white",
  },
  {
    label: "X",
    heading: "採用・広報トピックスを発信中",
    description: "イベント情報やお知らせをタイムリーにお届けします。",
    href: RECRUIT_LINKS.x,
    bg: "bg-[#1c1c1c]",
    text: "text-white/70",
    accent: "text-white",
  },
];

export default function MediaSection() {
  return (
    <section id="media" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          MEDIA
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-2xl font-bold leading-snug text-[#073B34] md:mt-4 md:text-4xl">
          キャリアの発信を見る
        </h2>

        {/* Lead */}
        <p className="mt-4 text-base leading-[1.9] text-slate-600 md:text-lg">
          採用情報や働く人の声、会社の取り組みを各メディアで発信しています。
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {mediaCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-[220px] flex-col justify-between rounded-[24px] p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c] md:p-8 ${card.bg}`}
            >
              <div>
                <p className={`text-2xl font-bold tracking-tight md:text-3xl ${card.accent}`}>
                  {card.label}
                </p>
                <p className={`mt-3 text-sm font-medium leading-relaxed md:text-base ${card.accent}`}>
                  {card.heading}
                </p>
                <p className={`mt-2 text-xs leading-relaxed md:text-sm ${card.text}`}>
                  {card.description}
                </p>
              </div>
              <p className={`mt-6 text-xs font-medium ${card.text} transition-colors group-hover:opacity-80`}>
                →&ensp;{card.label}を見る
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
