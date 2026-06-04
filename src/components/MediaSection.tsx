import { RECRUIT_LINKS } from "@/constants/links";

function InstagramIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="size-16 md:size-20"
    >
      <rect
        x="4"
        y="4"
        width="72"
        height="72"
        rx="20"
        stroke="white"
        strokeWidth="5"
      />
      <circle cx="40" cy="40" r="16" stroke="white" strokeWidth="5" />
      <circle cx="60" cy="20" r="4" fill="white" />
    </svg>
  );
}

const mediaCards = [
  {
    label: "Instagram",
    copy: "働く人や採用情報を\n発信中！",
    href: RECRUIT_LINKS.instagram,
    bg: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    logo: <InstagramIcon />,
  },
  {
    label: "note",
    copy: "キャリアの考え方を\n発信中！",
    href: RECRUIT_LINKS.note,
    bg: "bg-gradient-to-br from-[#1a3a2a] to-[#2d5a3f]",
    logo: (
      <span className="text-5xl font-bold tracking-tight text-white md:text-7xl">
        note
      </span>
    ),
  },
  {
    label: "X",
    copy: "採用・広報トピックスを\n発信中！",
    href: RECRUIT_LINKS.x,
    bg: "bg-[#1c1c1c]",
    logo: (
      <span className="text-6xl font-bold text-white md:text-8xl">X</span>
    ),
  },
];

export default function MediaSection() {
  return (
    <section id="media" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          MEDIA
        </p>

        <h2 className="mt-3 text-2xl font-bold leading-snug text-[#073B34] md:mt-4 md:text-4xl">
          キャリアの発信を見る
        </h2>

        <p className="mt-4 text-base leading-[1.9] text-slate-600 md:text-lg">
          採用情報や働く人の声、会社の取り組みを各メディアで発信しています。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {mediaCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex aspect-square flex-col items-center justify-center rounded-[24px] p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c] md:p-8 ${card.bg}`}
            >
              <div className="mb-4 md:mb-6">{card.logo}</div>
              <p className="whitespace-pre-line text-base font-bold leading-[1.6] text-white md:text-lg">
                {card.copy}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
