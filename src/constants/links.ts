export const RECRUIT_LINKS = {
  /** 募集職種セクションへのアンカー */
  positions: "#positions",
  /**
   * カジュアル面談の申し込みフォームURL。
   *
   * 本番公開前に Vercel 環境変数 NEXT_PUBLIC_CASUAL_INTERVIEW_URL を必ず設定すること。
   * 未設定のまま公開すると、CTA クリック時にページ内 #final-cta へスクロールするだけで
   * フォームへ遷移しない。
   */
  casualInterview:
    process.env.NEXT_PUBLIC_CASUAL_INTERVIEW_URL ?? "#final-cta",
} as const;
