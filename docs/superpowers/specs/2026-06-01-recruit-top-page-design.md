# 株式会社キャリア 採用サイト トップページ設計

## Context

株式会社キャリアの採用サイトを新規構築する。ベンチマーク: borderless-japan.com/recruit/。
高齢社会の課題解決に挑む企業として、「希望」「成長」を感じさせるダークグリーン × 白の配色で、
信頼感とフレッシュさを両立する採用ページを1ページで実装する。

## 技術スタック

- Next.js 16.2.6（App Router）
- React 19
- Tailwind CSS v4（`@tailwindcss/postcss`）
- TypeScript

## カラーパレット

| 用途 | 値 | Tailwind記法 |
|------|-----|-------------|
| メインダーク | `#1a3a2a` | `bg-[#1a3a2a]` |
| アクセント | `#2d6a4f` | `bg-[#2d6a4f]` |
| CTA | `#40916c` | `bg-[#40916c]` |
| CTAホバー | `#358a60` | `hover:bg-[#358a60]` |
| 背景白 | `#ffffff` | `bg-white` |
| 背景薄グレー | `#f8faf9` | `bg-[#f8faf9]` |
| テキスト黒 | `#1a1a1a` | `text-[#1a1a1a]` |
| テキスト白 | `#ffffff` | `text-white` |

## ファイル構成

```
src/
  app/
    page.tsx          ← 12セクション構成のトップページ（Server Component）
    layout.tsx        ← lang="ja"、Noto Sans JP追加、メタデータ更新
    globals.css       ← Ken Burnsアニメーション定義追加
  components/
    Header.tsx        ← ナビゲーションヘッダー（"use client" ハンバーガーメニュー）
    RecruitHero.tsx   ← ファーストビュー（"use client" クロスフェード）
    Footer.tsx        ← フッター（Server Component）
public/
  images/recruit/     ← hero-01〜04.pngを移動
```

## ファーストビュー（RecruitHero.tsx）

### 構造
```
<section class="relative h-screen (sp: h-[80vh])">
  <!-- 4枚の画像レイヤー（absolute, inset-0） -->
  <img class="absolute inset-0 w-full h-full object-cover
              opacity-0/100 transition-opacity duration-1000
              animate-kenburns" />
  <!-- 半透明オーバーレイ -->
  <div class="absolute inset-0 bg-[#1a3a2a]/50" />
  <!-- テキストコンテンツ -->
  <div class="relative z-10 flex flex-col justify-center items-center">
    <p>UPDATE AGING SOCIETY</p>
    <h1>高齢社会を、希望ある社会に変えていく。</h1>
    <p>人の力と仕組みで、介護・医療・シニアワークの課題解決に挑む。</p>
    <div>
      <a>募集職種を見る</a>
      <a>カジュアル面談を申し込む</a>
    </div>
  </div>
</section>
```

### クロスフェードロジック
- `useState`で`activeIndex`を管理（0〜3）
- `useEffect`で5000msのsetInterval
- アクティブ画像のみ`opacity: 1`、他は`opacity: 0`
- `transition-opacity duration-1000 ease-in-out`でスムーズ切替

### Ken Burnsアニメーション
- `@keyframes kenburns`で`scale(1)→scale(1.08)`を20秒
- 各画像に異なる`transform-origin`を設定（center, top-left, bottom-right, top-right）
- アクティブ時にアニメーション再開

### レスポンシブ対応
- PC: `h-screen`, テキスト大きめ
- タブレット: `h-[85vh]`
- スマホ: `h-[80vh]`, テキスト小さめ
- 各画像に`objectPosition`プロパティを設定可能な設計（スマホで見切れ防止）

## 12セクション構成

### 1. ファーストビュー
- RecruitHeroコンポーネント（上記参照）

### 2. 社会課題セクション（背景: 白）
- 見出し: 「日本が直面する、高齢社会の課題」
- 3つの数字カード（高齢化率、介護人材不足、医療費）
- 説明テキスト

### 3. キャリアがやっていること（背景: 薄グレー）
- 見出し: 「私たちキャリアがやっていること」
- ミッション・ビジョンを大きなテキストで表示
- 説明文

### 4. 事業紹介（背景: 白）
- 見出し: 「事業紹介」
- 3カードグリッド（介護、医療、シニアワーク）
- 各カードにアイコン的な装飾 + タイトル + 説明

### 5. 仕事紹介（背景: ダークグリーン、白文字）
- 見出し: 「仕事を知る」
- 職種カテゴリをカードで表示（営業、コーディネーター、企画、エンジニア）

### 6. 社員インタビュー（背景: 白）
- 見出し: 「社員インタビュー」
- 3名分のカード（名前、部署、コメント）
- プレースホルダー画像（背景色のdiv）

### 7. 数字で見るキャリア（背景: 薄グレー）
- 見出し: 「数字で見るキャリア」
- 大きな数字 + ラベルのグリッド（設立年、社員数、平均年齢、拠点数、有給取得率、育休復帰率）

### 8. カルチャー（背景: 白）
- 見出し: 「カルチャー」
- バリューや働き方を3〜4つのカードで表示

### 9. キャリアパス（背景: 薄グレー）
- 見出し: 「キャリアパス」
- 縦型タイムラインUI（入社→2年目→5年目→マネージャー）

### 10. 募集職種（背景: 白）
- 見出し: 「募集職種」
- 職種リストをシンプルなカードで表示（職種名、雇用形態、勤務地）

### 11. FAQ（背景: 薄グレー）
- 見出し: 「よくある質問」
- 5〜6問のQ&A（details/summaryタグでアコーディオン）

### 12. 最終CTA（背景: ダークグリーン、白文字）
- 見出し: 「あなたの力で、高齢社会に希望を。」
- CTAボタン2つ: 「募集職種を見る」「カジュアル面談を申し込む」

## Header（Header.tsx）
- 固定ヘッダー（`sticky top-0`）
- ロゴ（テキスト: 株式会社キャリア RECRUIT）
- PC: 横並びナビ（会社を知る / 仕事を知る / 人を知る / 募集職種 / FAQ）
- スマホ: ハンバーガーメニュー（"use client"でトグル）
- 背景: 透明→スクロールで白背景に変化（ファーストビュー通過後）

## Footer（Footer.tsx）
- 背景: `#1a3a2a`、白文字
- 会社名、住所（仮）、リンク集、コピーライト

## レスポンシブブレイクポイント
- sm: 640px〜（スマホ横向き）
- md: 768px〜（タブレット）
- lg: 1024px〜（PC）
- max-w-6xl（1152px）をコンテンツ最大幅として使用

## 検証方法
1. `npm run dev` でローカル確認
2. PC幅（1440px）でセクション表示・ヒーローアニメーション確認
3. スマホ幅（375px）で全セクションのレスポンシブ確認
4. タブレット幅（768px）で中間サイズ確認
5. ヒーロー画像のクロスフェード（5秒間隔）とKen Burns動作確認
6. ヘッダーのスクロール挙動・ハンバーガーメニュー動作確認
