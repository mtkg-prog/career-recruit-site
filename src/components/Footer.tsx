const footerLinks = [
  {
    title: "会社情報",
    links: [
      { label: "企業理念", href: "#" },
      { label: "会社概要", href: "#" },
      { label: "事業内容", href: "#" },
    ],
  },
  {
    title: "採用情報",
    links: [
      { label: "募集職種", href: "#positions" },
      { label: "社員インタビュー", href: "#interviews" },
      { label: "よくある質問", href: "#faq" },
    ],
  },
  {
    title: "お問い合わせ",
    links: [
      { label: "採用に関するお問い合わせ", href: "#" },
      { label: "カジュアル面談", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <p className="text-lg font-bold">株式会社キャリア</p>
            <p className="mt-1 text-xs tracking-widest text-white/60">
              CAREER CO., LTD.
            </p>
            <div className="mt-4 text-sm leading-relaxed text-white/70">
              <p>〒100-0001</p>
              <p>東京都千代田区千代田1-1-1</p>
              <p className="mt-2">TEL: 03-XXXX-XXXX</p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="font-medium text-sm text-white/90">{group.title}</p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-xs text-white/50">
            &copy; 2026 株式会社キャリア All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
