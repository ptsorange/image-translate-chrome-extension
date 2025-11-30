export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    document.addEventListener("mouseup", () => {
      const selectedText = window.getSelection()?.toString();
      if (selectedText) {
        const button = document.createElement("button");
        button.textContent = "翻訳";
        
        // Apply styles similar to .file-label in App.css
        Object.assign(button.style, {
          position: "absolute",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "25px",
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 2px 5px rgba(52, 152, 219, 0.3)",
          zIndex: "9999",
          transition: "background-color 0.3s, transform 0.1s"
        });

        // Hover effects
        button.addEventListener("mouseenter", () => {
          button.style.backgroundColor = "#2980b9";
        });
        button.addEventListener("mouseleave", () => {
          button.style.backgroundColor = "#3498db";
        });

        // Active effects
        button.addEventListener("mousedown", () => {
          button.style.transform = "translateY(1px)";
        });
        button.addEventListener("mouseup", () => {
          button.style.transform = "translateY(0)";
        });

        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          button.style.top = `${window.scrollY + rect.bottom + 5}px`;
          button.style.left = `${window.scrollX + rect.left}px`;
        }
        document.body.appendChild(button);

        button.addEventListener("click", () => {
          window.getSelection()?.removeAllRanges();
          browser.runtime.sendMessage({ action: "openPopup", text: selectedText });
        });
        document.addEventListener("selectionchange", () => {
          if (document.body.contains(button)) {
            document.body.removeChild(button);
          }
        });
      }
    });
  },
});
