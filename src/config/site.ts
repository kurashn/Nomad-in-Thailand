// サイト全体の商品・導線の設定
// note商品を公開したら enabled を true にするだけで、
// トップのCTAセクション・記事内[NOTE_CTA]・ビザ記事下の自動CTAがすべて復活する。
export const NOTE_PRODUCT = {
    enabled: false, // 2026-07: 有料noteは非公開中のため導線停止
    url: "https://note.com/nomad_dayo/n/neee79f24c62b",
} as const;
