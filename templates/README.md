# 記事テンプレートの使い方

このディレクトリには、新しい記事を簡単に作成するためのテンプレートが含まれています。

##  テンプレートファイル

- `page.tsx.template` - 記事ページのReactコンポーネントテンプレート
- `translations-ja.json.template` - 日本語翻訳ファイルテンプレート
- `translations-en.json.template` - 英語翻訳ファイルテンプレート

## 📝 新規記事の作成手順

### 1. 記事の基本情報を決める

まず、以下の情報を決めてください：

- **記事キー** (ARTICLE_KEY): 例: `MyNewArticle`, `BangkokGuide`
- **記事スラッグ** (article-slug): URL用、例: `my-new-article`, `bangkok-guide`
- **ヒーロー画像**: 記事のトップに表示する画像

### 2. ページファイルを作成

```bash
# テンプレートをコピー
cp templates/article/page.tsx.template \\
   src/app/[locale]/nomad-info/[article-slug]/page.tsx

# 例: bangkok-guide という記事を作る場合
cp templates/article/page.tsx.template \\
   src/app/[locale]/nomad-info/bangkok-guide/page.tsx
```

ファイル内の以下をすべて置換：
- `[ARTICLE_KEY]` → 実際の記事キー（例: `BangkokGuide`）
- `[article-slug]` → URL用のスラッグ（例: `bangkok-guide`）
- `[hero-image]` → ヒーロー画像のファイル名（例: `bangkok-hero`）

### 3. 翻訳ファイルを作成

#### 日本語版

```bash
# テンプレートをコピー
cp templates/article/translations-ja.json.template \\
   messages/ja/[article-key].json

# 例:
cp templates/article/translations-ja.json.template \\
   messages/ja/bangkok-guide.json
```

ファイルを開いて、以下を置換：
- `[ARTICLE_KEY]` → 記事キー（例: `BangkokGuide`）
- その他の `[...]` プレースホルダーを実際のコンテンツに置換

#### 英語版

```bash
# テンプレートをコピー
cp templates/article/translations-en.json.template \\
   messages/en/[article-key].json

# 例:
cp templates/article/translations-en.json.template \\
   messages/en/bangkok-guide.json
```

### 4. i18n設定を更新

`src/i18n/request.ts` を開いて、`loadMessages` 関数にインポートを追加：

```typescript
async function loadMessages(locale: string) {
    const messages = {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/home.json`)).default,
        // ... 既存のインポート
        ...(await import(`../../messages/${locale}/[article-key].json`)).default,  // これを追加
    };
    
    return messages;
}
```

### 5. 開発サーバーで確認

```bash
npm run dev
```

ブラウザで以下にアクセス：
- 日本語: `http://localhost:3000/ja/nomad-info/[article-slug]`
- 英語: `http://localhost:3000/en/nomad-info/[article-slug]`

## 📋 翻訳ファイルの書き方

### リッチテキスト（太字・改行）の記法

```json
{
    "text": "これは{strong}太字{/strong}です。{br}これは改行されます。"
}
```

コンポーネント側で：
```tsx
{t.rich('text', {
    strong: (chunks) => <strong>{chunks}</strong>,
    br: () => <br />
})}
```

### 改行の記法

```json
{
    "title": "メインタイトル\\nサブタイトル"
}
```

- `\\n` は実際の改行として表示
- `{br}` はリッチテキスト内での改行

## 🎨 カスタマイズ

テンプレートは基本的な構造を提供しています。必要に応じて：

- セクションを追加・削除
- コンポーネントを追加（動画、画像ギャラリーなど）
- スタイルをカスタマイズ

## ✅ チェックリスト

新規記事作成時：

- [ ] ページファイルを作成（`src/app/[locale]/nomad-info/[slug]/page.tsx`）
- [ ] 日本語翻訳ファイルを作成（`messages/ja/[key].json`）
- [ ] 英語翻訳ファイルを作成（`messages/en/[key].json`）
- [ ] `src/i18n/request.ts`にインポートを追加
- [ ] ヒーロー画像を配置（`public/images/[image-name].png`）
- [ ] ローカルで動作確認（日本語・英語両方）
- [ ] コミット & プッシュ

##  サンプル

実際の記事例として、以下のファイルを参考にしてください：

- `src/app/[locale]/nomad-info/sponsor/page.tsx`
- `messages/ja/sponsor.json`
- `messages/en/sponsor.json`

## 🆘 トラブルシューティング

### 翻訳が表示されない

1. `src/i18n/request.ts`にインポートが追加されているか確認
2. ページコンポーネントの`useTranslations('[ARTICLE_KEY]')`のキーが正しいか確認
3. 開発サーバーを再起動

### ビルドエラー

```bash
npm run build
```

でエラー箇所を確認してください。
