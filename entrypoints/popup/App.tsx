import React, { useState } from "react";
import { createWorker } from "tesseract.js";
import translate from "translate";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [words, setWords] = useState("");
  translate.engine = "google";

  const translater = async (to: string, text: string) => {
    return await translate(text, to);
  }

  const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("text") !== -1) {
        const text = await e.clipboardData.getData("Text");
        setText(await translater("ja", text));
      }

      else if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        if (!file) return;

        const translater = async (to: string, text: string) => {
          return await translate(text, to);
        }

        setText("Processing...");
        try {
          const worker = await createWorker("eng", 1, {
            workerPath: browser.runtime.getURL("/tesseract/worker.min.js"),
            corePath: browser.runtime.getURL("/tesseract/tesseract-core.wasm.js"),
            langPath: browser.runtime.getURL("/tesseract/"),
            workerBlobURL: false,
            gzip: false,
          });
          const { data } = await worker.recognize(file);
          setText(await translater("ja", data.text.replace(/\n+/g, " ")));
          await worker.terminate();
        } catch (err) {
          setText(String(err));
        }
      }
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const editableDiv = document.getElementById("contentEditable");
    if (editableDiv) {
      editableDiv.focus();
      document.execCommand('insertImage', false, url);
    }

    setText("Processing...");
    try {
      const worker = await createWorker("eng", 1, {
        workerPath: browser.runtime.getURL("/tesseract/worker.min.js"),
        corePath: browser.runtime.getURL("/tesseract/tesseract-core.wasm.js"),
        langPath: browser.runtime.getURL("/tesseract/"),
        workerBlobURL: false,
        gzip: false,
      });
      const { data } = await worker.recognize(file);
      setText(await translater("ja", data.text.replace(/\n+/g, " ")));
      await worker.terminate();
    } catch (err) {
      setText(String(err));
    }
  };

  return (
    <div className="container">
      <h2 className="title">Image Translator</h2>
      <p className="description">画像を貼り付けるかテキストを入力するか、ファイルを選択してください</p>

      <div
        id="contentEditable"
        className="paste-area"
        contentEditable
        onPaste={handlePaste}
        onInput={async (e) => {
          const inputText = (e.target as HTMLDivElement).innerText;
          setWords(inputText);
          if (inputText.trim()) {
            setText("Processing...");
            try {
              setText(await translater("ja", inputText));
            } catch (err) {
              setText(String(err));
            }
          }
        }}
        data-placeholder="ここに画像を貼り付けまたはテキストを入力 (Ctrl+V)"
      ></div>

      <div className="controls">
        <label className="file-label">
          ファイルを選択
          <input type="file" accept="image/*" onChange={handleChange} className="file-input" />
        </label>
      </div>

      <div className="result-area">
        <div className="result-text">{text || "翻訳結果がここに表示されます..."}</div>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="英単語を入力..."
          value={words}
          onChange={(e) => setWords(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && words.trim()) {
              window.open(`https://ejje.weblio.jp/content/${words}`, "_blank", "noopener,noreferrer");
            }
          }}
        />
        <a
          href={`https://ejje.weblio.jp/content/${words}`}
          target="_blank"
          rel="noopener noreferrer"
          className="search-button"
        >
          辞書で検索
        </a>
      </div>
    </div>
  );
}