chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save-to-tabmind",
    title: "Save to TabMind",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(
  async (info, tab) => {
    if (
      info.menuItemId !==
      "save-to-tabmind"
    ) {
      return;
    }

    chrome.storage.local.get(
      ["tabmind_token"],
      async (result) => {
        const token =
          result.tabmind_token;

        if (!token) {
          alert(
            "Please add your token first."
          );

          return;
        }

        try {
          await fetch(
            "http://localhost:3000/api/memories",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",

                Authorization:
                  `Bearer ${token}`,
              },

              body: JSON.stringify({
                title: tab.title,
                content:
                  info.selectionText,
                source_url: tab.url,
              }),
            }
          );

          console.log(
            "Saved to TabMind"
          );
        } catch (error) {
          console.error(error);
        }
      }
    );
  }
);