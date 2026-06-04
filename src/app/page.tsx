import RecruitHero from "@/components/RecruitHero";
import IssueSection from "@/components/IssueSection";
import AboutSection from "@/components/AboutSection";
import MovieSection from "@/components/MovieSection";
import MediaSection from "@/components/MediaSection";
import BusinessSection from "@/components/BusinessSection";
import JobSection from "@/components/JobSection";
import PeopleSection from "@/components/PeopleSection";
import NumbersSection from "@/components/NumbersSection";
import CultureSection from "@/components/CultureSection";
import CareerPathSection from "@/components/CareerPathSection";
import PositionsSection from "@/components/PositionsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      {/* 1. ファーストビュー */}
      <RecruitHero />

      {/* 2. 社会課題セクション */}
      <IssueSection />

      {/* 3. ABOUT US */}
      <AboutSection />

      {/* 4. 動画セクション */}
      <MovieSection />

      {/* 5. メディア */}
      <MediaSection />

      {/* 6. 事業紹介 */}
      <BusinessSection />

      {/* 5. 仕事紹介 */}
      <JobSection />

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

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. 最終CTA */}
      <FinalCTASection />
    </>
  );
}
