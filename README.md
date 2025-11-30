<p align="center">
   <img width="200" src="/public/READMEIcon.png" alt="Icon" />
</p>

[![WXT](https://img.shields.io/badge/WXT-Framework-4CAF50?style=for-the-badge)](https://wxt.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tesseract.js](https://img.shields.io/badge/Tesseract.js-OCR-blue?style=for-the-badge)](https://tesseract.projectnaptha.com/)
[![Translate](https://img.shields.io/badge/Translate-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/translate)

# 🖼️ Image Translate Chrome Extension

画像内のテキストを認識（OCR）し、自動的に日本語へ翻訳するChrome拡張機能です。
テキストの直接入力による翻訳や、Weblio辞書での単語検索機能も備えています。
WXTフレームワークとReactを使用して構築されています。

## ✨ 機能

- 📋 **画像の貼り付け**: クリップボードにある画像を貼り付けて翻訳できます。
- 📂 **画像のアップロード**: ローカルの画像ファイルを選択して翻訳できます。
- ✍️ **テキスト入力**: テキストを直接入力または貼り付けて翻訳できます。
- 🔍 **OCR処理**: Tesseract.js を使用して画像内の英語テキストを抽出します。
- 🌐 **翻訳**: 抽出したテキストや入力したテキストを自動的に日本語に翻訳して表示します。
- 📖 **辞書検索**: 気になる英単語をWeblio辞書ですぐに検索できます。
- 🖱️ **選択テキスト翻訳**: Webページ上のテキストを選択すると表示されるボタンから、直接翻訳を実行できます。

## 📥 ダウンロードとインストール

この拡張機能はChromeウェブストアには公開されていません。

1. [Releasesページ](https://github.com/ptsorange/image-translate-chrome-extension/dist) から最新の `.zip` ファイル（例: `image-translate-chrome-extension-x.x.x.zip`）をダウンロードしてください。<br/>
[ダウンロード](https://github.com/ptsorange/image-translate-chrome-extension/tree/main/dist)
2. ダウンロードしたファイルを解凍します。
3. Chromeで `chrome://extensions/` を開きます。
4. 右上の「デベロッパーモード」をONにします。
5. 「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダを選択します。

## 🚀 開発の始め方

### 🛠️ 前提条件

- Node.js
- pnpm (推奨) または npm/yarn

### 📦 インストール

リポジトリをクローンし、依存関係をインストールします。

```bash
pnpm install
```

### 💻 開発サーバーの起動

以下のコマンドで開発モードで拡張機能を起動します。Chromeが自動的に立ち上がり、拡張機能が読み込まれた状態になります。

```bash
pnpm dev
```

Firefoxでの開発:

```bash
pnpm dev:firefox
```

## 🏗️ ビルド

本番用に拡張機能をビルドするには以下のコマンドを実行します。`.output/` ディレクトリに生成物が作成されます。

```bash
pnpm build
```

ZIPファイルを作成する場合:

```bash
pnpm zip
```

## 📖 使い方

1. 🧩 拡張機能のポップアップを開きます。
2. 🖼️ **画像翻訳**:
   - 画像をコピーして、ポップアップ内のエリアに貼り付けます (Ctrl+V)。
   - または、「ファイルを選択」ボタンから画像ファイルを選びます。
3. 📝 **テキスト翻訳**:
   - エリアに直接テキストを入力または貼り付けます。
4. ⏳ 自動的に「Processing...」と表示され、OCRと翻訳処理が始まります。
5. ✅ 処理が完了すると、翻訳された日本語テキストが表示されます。
6. 🔎 **辞書検索**:
   - 下部の検索ボックスに英単語を入力し、Enterキーまたは「辞書で検索」ボタンを押すと、Weblio辞書のページが開きます。
7. 🖱️ **Webページ上の翻訳**:
   - Webページ上のテキストを選択します。
   - 選択範囲の近くに「翻訳」ボタンが表示されます。
   - ボタンをクリックするとポップアップが開き、選択したテキストが自動的に翻訳されます。