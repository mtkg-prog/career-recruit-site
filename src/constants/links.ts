export const RECRUIT_LINKS = {
  /** 募集職種セクションへのアンカー */
  positions: "#positions",
  /** 募集職種一覧（CareerCloud） */
  jobList:
    "https://www.career-cloud.asia/mid/entry/job/offer/careerrecruit",
  /**
   * カジュアル面談の申し込みフォームURL。
   *
   * 本番公開前に Vercel 環境変数 NEXT_PUBLIC_CASUAL_INTERVIEW_URL を必ず設定すること。
   * 未設定の場合は通常応募フォーム（仮）にフォールバックする。
   * カジュアル面談専用フォーム作成後に差し替えること。
   */
  casualInterview:
    process.env.NEXT_PUBLIC_CASUAL_INTERVIEW_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLSdj427akjmsRonMHqZE0sRY8-OupKdu24KNIGGimrWq-AonHQ/viewform",

  /** 2027卒エントリー（CareerCloud） */
  entry2027:
    "https://www.career-cloud.asia/27/form/entryb/index/67c7f97e9a6d87564a5bcf9803107fca",
  /** 中途採用エントリー（CareerCloud） */
  entryMidCareer:
    "https://www.career-cloud.asia/mid/form/entry/2420dd96df6b4fcb7132946341870b3f?root=11674&job=20789",

  /** マイナビ2027 */
  mynavi2027: "https://job.mynavi.jp/27/pc/search/corp97333/outline.html",
  /** マイナビ2028 */
  mynavi2028: "https://job.mynavi.jp/28/pc/search/corp97333/outline.html",

  /** 社外広報 Instagram */
  instagram: "https://www.instagram.com/career_hr1/",
  /** 社外広報 note */
  note: "https://note.com/career_hr1",
  /** 社外広報 X */
  x: "https://x.com/career_hr1",
} as const;
