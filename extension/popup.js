const tokenInput =
  document.getElementById("token");

const saveButton =
  document.getElementById("save");

chrome.storage.local.get(
  ["tabmind_token"],
  (result) => {
    if (result.tabmind_token) {
      tokenInput.value =
        result.tabmind_token;
    }
  }
);

saveButton.addEventListener(
  "click",
  async () => {
    const token =
      tokenInput.value;

    chrome.storage.local.set({
      tabmind_token: token,
    });

    alert("Token saved");
  }
);