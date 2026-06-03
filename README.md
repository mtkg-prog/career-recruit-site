This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Required Environment Variables

Vercel の Settings > Environment Variables で以下を設定してください。`.env.example` も参照してください。

| Variable | Purpose | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | OGP画像・canonical URL の生成に使用。未設定だと og:image が localhost を指す | `https://recruit.example.com` |
| `NEXT_PUBLIC_CASUAL_INTERVIEW_URL` | カジュアル面談CTAのリンク先。未設定だとページ内スクロールのみ。本番公開時は必ず設定すること | `https://docs.google.com/forms/d/e/1FAIpQLSdj427akjmsRonMHqZE0sRY8-OupKdu24KNIGGimrWq-AonHQ/viewform` |

## TODO: 今後の対応予定

- **ブランディング動画**: ブランディング動画が完成したら、Hero下またはAbout後に MovieSection を追加する。YouTube埋め込み、または軽量なサムネイル＋モーダル再生形式を検討する。
