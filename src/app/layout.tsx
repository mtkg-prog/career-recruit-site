import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// TODO: src/app/favicon.ico を株式会社キャリアの独自faviconに差し替え
//
// 本番デプロイ時は Vercel の環境変数に NEXT_PUBLIC_SITE_URL を必ず設定すること。
// 未設定の場合 og:image 等が localhost を指し、SNS共有時に画像が表示されない。
const siteUrl = (() => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url && (process.env.VERCEL || process.env.CI)) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required for deployment. Set it in your environment variables."
    );
  }
  return url ?? "http://localhost:3000";
})();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "株式会社キャリア 採用サイト｜高齢社会をアップデートする",
  description:
    "株式会社キャリアの採用サイトです。介護・医療・シニアワーク領域を中心に、人材サービス、就労支援、教育、新規事業を通じて高齢社会の課題解決に挑んでいます。",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "採用",
    "株式会社キャリア",
    "介護",
    "医療",
    "シニアワーク",
    "人材サービス",
    "新卒採用",
    "中途採用",
  ],
  openGraph: {
    title: "株式会社キャリア 採用サイト｜高齢社会をアップデートする",
    description:
      "株式会社キャリアの採用サイトです。介護・医療・シニアワーク領域を中心に、人材サービス、就労支援、教育、新規事業を通じて高齢社会の課題解決に挑んでいます。",
    type: "website",
    siteName: "株式会社キャリア 採用サイト",
    locale: "ja_JP",
    images: [
      {
        url: "/images/ogp/recruit-ogp.png",
        width: 1200,
        height: 630,
        alt: "株式会社キャリア 採用サイト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社キャリア 採用サイト｜高齢社会をアップデートする",
    description:
      "株式会社キャリアの採用サイトです。高齢社会の課題解決に挑む仲間を募集しています。",
    images: ["/images/ogp/recruit-ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
