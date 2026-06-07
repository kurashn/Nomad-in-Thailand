import React from "react";
import { Link } from '@/i18n/routing';

export default function CtcFooter() {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
        <a href="https://lin.ee/WYck3Sx" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '12px' }}>公式LINE</a>
        <Link href="/legal/tos" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '12px' }}>利用規約</Link>
        <Link href="/legal/privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '12px' }}>プライバシーポリシー</Link>
      </div>
      <p style={{ margin: 0 }}>© 2026 Chiang Mai Run Club. All rights reserved.</p>
    </footer>
  );
}
