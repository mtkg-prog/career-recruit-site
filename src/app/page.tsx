import RecruitHero from "@/components/RecruitHero";
import IssueSection from "@/components/IssueSection";
import AboutSection from "@/components/AboutSection";
import MovieSection from "@/components/MovieSection";
import BusinessSection from "@/components/BusinessSection";
import JobSection from "@/components/JobSection";
import PeopleSection from "@/components/PeopleSection";
import NumbersSection from "@/components/NumbersSection";
import CultureSection from "@/components/CultureSection";
import CareerPathSection from "@/components/CareerPathSection";
import PositionsSection from "@/components/PositionsSection";
import MediaSection from "@/components/MediaSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

/* ─── Page ─── */
export default function Home() {
  return (
    <>
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

      {/* 6. 仕事紹介 */}
      <JobSection />

      {/* 7. 社員インタビュー */}
      <PeopleSection />

      {/* 8. 数字で見るキャリア */}
      <NumbersSection />

      {/* 9. カルチャー */}
      <CultureSection />

      {/* 10. キャリアパス */}
      <CareerPathSection />

      {/* 11. 募集職種 */}
      <PositionsSection />

      {/* 12. メディア（応募検討後の「もっと知る」導線） */}
      <MediaSection />

      {/* 13. FAQ */}
      <FAQSection />

      {/* 14. 最終CTA */}
      <FinalCTASection />
    </>
  );
}
