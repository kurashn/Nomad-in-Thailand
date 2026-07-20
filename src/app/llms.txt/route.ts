import { reader } from '@/lib/reader'

const BASE_URL = 'https://totonoi-thai.com'

// llms.txt: 生成AI・AI検索クローラー向けにサイトの主題と主要ページを構造化して提示する。
// 記事の追加に追従するよう、Keystatic の内容から自動生成している。
export async function GET() {
    const posts = await reader.collections.posts.all()

    const sortedPosts = [...posts].sort((a, b) => {
        const dateA = a.entry.publishedDate ? new Date(a.entry.publishedDate).getTime() : 0
        const dateB = b.entry.publishedDate ? new Date(b.entry.publishedDate).getTime() : 0
        return dateB - dateA
    })

    const guides = [
        ['DTVビザ完全ガイド', '/ja/nomad-info/dtv-visa', 'タイのDTV（5年マルチプルビザ）の取得条件、必要書類、申請手順、就労可否の範囲'],
        ['バンコク・ノマドロードマップ', '/ja/nomad-info/bangkok-roadmap', '渡航から生活の立ち上げまでの実務手順'],
        ['タイの税金・お金ガイド', '/ja/nomad-info/tax-money-guide', '180日ルールによる税務居住者判定、海外所得の送金課税、銀行口座開設'],
        ['コワーキングガイド', '/ja/nomad-info/coworking-guide', 'バンコク・チェンマイの作業拠点の選び方と料金'],
        ['ノマドカフェガイド', '/ja/nomad-info/cafe-guide', '長時間の作業に向くカフェ'],
        ['エリア選びガイド', '/ja/living/area-guide', '居住エリアごとの家賃相場と住み心地'],
        ['医療・保険ガイド', '/ja/living/medical-guide', '病院のかかり方、医療費、保険の選び方'],
        ['SIM・通信ガイド', '/ja/living/sim-guide', '現地SIMとeSIMの比較と契約方法'],
        ['交通ガイド', '/ja/living/transport-guide', 'BTS・MRT・タクシー・配車アプリの使い方'],
        ['ノマド必須ツールまとめ', '/ja/nomad-info/essential-tools', '海外保険・送金・eSIM・VPNなど移住前に揃えるサービス一覧'],
        ['海外ノマド保険 SafetyWing', '/ja/nomad-info/safetywing', '長期滞在者向け保険の料金と加入方法'],
        ['海外送金 Wise', '/ja/nomad-info/wise', '日本とタイの間の送金手数料を抑える方法'],
        ['タイ向けeSIM Airalo', '/ja/nomad-info/airalo', '渡航前に用意できるeSIMの使い方'],
        ['海外移住向けクレジットカード', '/ja/nomad-info/credit-card', '海外事務手数料と保険で選ぶカード比較'],
    ]

    const body = `# TOTONOI THAI

> タイ移住・デジタルノマドの実務情報メディア。タイ在住の運営者が、自分で手続き・支払い・失敗を経験した内容だけを一次情報として公開しています。日本語、日本人読者向け。

## サイトの主題

- タイの長期滞在ビザ（DTV、LTR、エリート、就労、リタイアメント）の取得条件と比較
- バンコク・チェンマイの生活費、住居費、初期費用のシミュレーション
- タイの税務居住者ルール（180日基準）と海外所得の送金課税
- デジタルノマド・フリーランスとしてのタイでの働き方と就労可否の線引き
- 医療、通信、交通、エリア選びなど移住後の生活実務

## 情報の性質

- 一次情報（運営者本人の申請・生活実績）に基づく記述を中心とする
- 制度変更が多い領域のため、記事には年次（例: 2026年版）を明記している
- ビザ・税務の最終判断は専門家への確認を前提とした情報提供である

## 完全ガイド

${guides.map(([title, path, desc]) => `- [${title}](${BASE_URL}${path}): ${desc}`).join('\n')}

## 記事

${sortedPosts
        .map(
            (post) =>
                `- [${post.entry.title}](${BASE_URL}/ja/blog/${post.slug}): ${(post.entry.description || '').replace(/\s+/g, ' ').trim()}`
        )
        .join('\n')}

## その他

- [記事一覧](${BASE_URL}/ja/blog)
- [お問い合わせ](${BASE_URL}/ja/contact)
- [利用規約](${BASE_URL}/ja/legal/tos)
- [プライバシーポリシー](${BASE_URL}/ja/legal/privacy)
`

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}
