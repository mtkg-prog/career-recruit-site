import { RECRUIT_LINKS } from "@/constants/links";

// TODO: 会社情報リンク・お問い合わせリンク・住所・TELは実URL・実データ確定後に追加
const footerNavLinks = [
  { label: "募集職種", href: "#positions" },
  { label: "動画で知る", href: "#movie" },
  { label: "社員インタビュー", href: "#people" },
  { label: "よくある質問", href: "#faq" },
];

const socialLinks = [
  { label: "Instagram", href: RECRUIT_LINKS.instagram },
  { label: "note", href: RECRUIT_LINKS.note },
  { label: "X", href: RECRUIT_LINKS.x },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          {/* Company identity */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">株式会社キャリア</p>
            <p className="mt-1 text-xs tracking-[0.2em] text-white/50">
              UPDATE AGING SOCIETY
            </p>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {footerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 社外広報 */}
        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <p className="text-xs tracking-[0.15em] text-white/50">社外広報</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center px-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; Career Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
