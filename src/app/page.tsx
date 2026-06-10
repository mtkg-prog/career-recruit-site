import RecruitHero from "@/components/RecruitHero";
import IssueSection from "@/components/IssueSection";
import AboutSection from "@/components/AboutSection";
import MovieSection from "@/components/MovieSection";
import BusinessSection from "@/components/BusinessSection";
import PeopleSection from "@/components/PeopleSection";
import NumbersSection from "@/components/NumbersSection";
import CultureSection from "@/components/CultureSection";
import CareerPathSection from "@/components/CareerPathSection";
import PositionsSection from "@/components/PositionsSection";
import MediaSection from "@/components/MediaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社キャリア",
  url: "https://www.careergift.co.jp/",
  logo: `${siteUrl}/images/ogp/recruit-ogp.png`,
  sameAs: [
    "https://www.instagram.com/career_hr1/",
    "https://note.com/career_hr1",
    "https://x.com/career_hr1",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "株式会社キャリア 採用サイト",
  url: siteUrl,
  description:
    "株式会社キャリアの採用サイトです。介護・医療・シニアワーク領域を中心に、人材サービス、就労支援、教育、新規事業を通じて高齢社会の課題解決に挑んでいます。",
};

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. ファーストビュー */}
      <RecruitHero />

      {/* 2. 社会課題 */}
      <IssueSection />

      {/* 3. ABOUT US */}
      <AboutSection />

      {/* 4. 採用動画（正式な自社動画のためAbout直後に配置） */}
      <MovieSection />

      {/* 5. 事業紹介 */}
      <BusinessSection />

      {/* 6. 社員インタビュー */}
      <PeopleSection />

      {/* 7. 数字で見るキャリア */}
      <NumbersSection />

      {/* 8. カルチャー */}
      <CultureSection />

      {/* 9. キャリアパス */}
      <CareerPathSection />

      {/* 10. 募集職種 */}
      <PositionsSection />

      {/* 11. メディア（応募検討後の「もっと知る」導線） */}
      <MediaSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. 最終CTA */}
      <FinalCTASection />
    </>
  );
}
