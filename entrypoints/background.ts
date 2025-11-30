export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "openPopup") {
      browser.action.openPopup();
      browser.storage.local.set({ selectedText: message.text });
    }
  });
});