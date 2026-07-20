import React from "react";
import { Link } from '@/i18n/routing';

const linkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  fontSize: '13px',
};

const headingStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '13px',
  fontWeight: 700,
  marginBottom: '14px',
  letterSpacing: '0.04em',
};

const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'flex-start',
  textAlign: 'left',
};

export default function CtcFooter() {
  return (
    <footer className="footer">
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
          padding: '0 8px',
        }}
      >
        <div style={columnStyle}>
          <p style={headingStyle}>コンテンツ</p>
          <Link href="/blog" style={linkStyle}>記事一覧</Link>
          <Link href="/blog?category=visa" style={linkStyle}>ビザ・手続き</Link>
          <Link href="/blog?category=money" style={linkStyle}>お金・税金</Link>
          <Link href="/blog?category=living" style={linkStyle}>生活情報</Link>
          <Link href="/blog?category=career" style={linkStyle}>キャリア・移住</Link>
        </div>

        <div style={columnStyle}>
          <p style={headingStyle}>ビザ・ノマド情報</p>
          <Link href="/nomad-info/dtv-visa" style={linkStyle}>DTVビザ完全ガイド</Link>
          <Link href="/nomad-info/bangkok-roadmap" style={linkStyle}>バンコク・ロードマップ</Link>
          <Link href="/nomad-info/tax-money-guide" style={linkStyle}>税金・お金ガイド</Link>
          <Link href="/nomad-info/coworking-guide" style={linkStyle}>コワーキングガイド</Link>
          <Link href="/nomad-info/cafe-guide" style={linkStyle}>ノマドカフェガイド</Link>
        </div>

        <div style={columnStyle}>
          <p style={headingStyle}>暮らしのガイド</p>
          <Link href="/living/area-guide" style={linkStyle}>エリア選び</Link>
          <Link href="/living/medical-guide" style={linkStyle}>医療・保険</Link>
          <Link href="/living/sim-guide" style={linkStyle}>SIM・通信</Link>
          <Link href="/living/transport-guide" style={linkStyle}>交通</Link>
        </div>

        <div style={columnStyle}>
          <p style={headingStyle}>移住の準備ツール</p>
          <Link href="/nomad-info/essential-tools" style={linkStyle}>必須ツールまとめ</Link>
          <Link href="/nomad-info/safetywing" style={linkStyle}>海外保険（SafetyWing）</Link>
          <Link href="/nomad-info/wise" style={linkStyle}>海外送金（Wise）</Link>
          <Link href="/nomad-info/airalo" style={linkStyle}>eSIM（Airalo）</Link>
          <Link href="/nomad-info/credit-card" style={linkStyle}>クレジットカード</Link>
        </div>

        <div style={columnStyle}>
          <p style={headingStyle}>サイト情報</p>
          <Link href="/contact" style={linkStyle}>お問い合わせ</Link>
          <a href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer" style={linkStyle}>公式LINE</a>
          <a href="https://www.youtube.com/channel/UCSpo7KdBG5sPBhcvSSWDntA" target="_blank" rel="noopener noreferrer" style={linkStyle}>YouTube（ポッドキャスト）</a>
          <Link href="/legal/tos" style={linkStyle}>利用規約</Link>
          <Link href="/legal/privacy" style={linkStyle}>プライバシーポリシー</Link>
          <Link href="/legal/tokushoho" style={linkStyle}>特定商取引法に基づく表記</Link>
        </div>
      </div>

      <p style={{ margin: 0 }}>© 2026 TOTONOI THAI. All rights reserved.</p>
    </footer>
  );
}
