import { RECRUIT_LINKS } from "@/constants/links";

const siteNavLinks = [
  { label: "会社を知る", href: "#about" },
  { label: "仕事を知る", href: "#business" },
  { label: "人を知る", href: "#people" },
  { label: "動画で知る", href: "#movie" },
  { label: "働き方を知る", href: "#numbers" },
  { label: "募集職種", href: "#positions" },
  { label: "よくある質問", href: "#faq" },
];

const recruitLinks = [
  { label: "募集職種一覧", href: RECRUIT_LINKS.jobList },
  { label: "中途採用エントリー", href: RECRUIT_LINKS.entryMidCareer },
  { label: "マイナビ2028", href: RECRUIT_LINKS.mynavi2028 },
];

const corporateLinks = [
  { label: "コーポレートサイト", href: RECRUIT_LINKS.corporate },
  { label: "プライバシーポリシー", href: RECRUIT_LINKS.privacyPolicy },
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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Column 1: 会社情報 */}
          <div>
            <p className="text-xl font-bold">株式会社キャリア</p>
            <p className="mt-1 text-xs tracking-[0.2em] text-white/50">
              UPDATE AGING SOCIETY
            </p>
            <p className="mt-0.5 text-[0.65rem] tracking-[0.25em] font-medium text-white/40">
              RECRUIT
            </p>

            {/* SNSリンク */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: サイトマップ */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
              サイトマップ
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {siteNavLinks.map((link) => (
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

          {/* Column 3: 採用情報・企業リンク */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
              採用情報
            </p>
            <nav className="flex flex-col gap-2">
              {recruitLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
              企業情報
            </p>
            <nav className="flex flex-col gap-2">
              {corporateLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; Career Co., Ltd. All Rights Reserved.
          </p>
          <a
            href={RECRUIT_LINKS.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 transition-colors hover:text-white/70"
          >
            プライバシーポリシー
          </a>
        </div>
      </div>
    </footer>
  );
}
