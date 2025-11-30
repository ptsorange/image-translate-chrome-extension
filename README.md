<p align="center">
   <img src="/public/READMEIcon.png" alt="Icon" />
</p>

[![WXT](https://img.shields.io/badge/WXT-Framework-4CAF50?style=for-the-badge)](https://wxt.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tesseract.js](https://img.shields.io/badge/Tesseract.js-OCR-blue?style=for-the-badge)](https://tesseract.projectnaptha.com/)
[![Translate](https://img.shields.io/badge/Translate-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/translate)
# 🖼️ Image Translate Chrome Extension

画像内のテキストを認識（OCR）し、自動的に日本語へ翻訳するChrome拡張機能です。
WXTフレームワークとReactを使用して構築されています。

## ✨ 機能

- 📋 **画像の貼り付け**: クリップボードにある画像を貼り付けて翻訳できます。
- 📂 **画像のアップロード**: ローカルの画像ファイルを選択して翻訳できます。
- 🔍 **OCR処理**: Tesseract.js を使用して画像内の英語テキストを抽出します。
- 🌐 **翻訳**: 抽出したテキストを自動的に日本語に翻訳して表示します。

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
2. 🖼️ 翻訳したい画像がある場合:
   - 画像をコピーして、ポップアップ内のエリアに貼り付けます (Ctrl+V)。
   - または、「ファイルを選択」ボタンから画像ファイルを選びます。
3. ⏳ 自動的に「Processing...」と表示され、OCRと翻訳処理が始まります。
4. ✅ 処理が完了すると、翻訳された日本語テキストが表示されます。