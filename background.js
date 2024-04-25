alert("back");

// function playAudio() {
//   const audio = new Audio("success_sound.mp3"); // Replace "success_sound.mp3" with the path to your audio file
//   audio.play();
// }

// function throwConfetti() {
//   console.log("Confetti thrown!");
// }

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "codeAccepted") {
    alert("back");
    console.log("back");
    // playAudio();
    // throwConfetti();
  }
});


// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete" && tab.url.includes("leetcode.com")) {
//     // Check if the LeetCode tab has fully loaded and its URL matches leetcode.com
//     chrome.scripting.executeScript({
//       target: { tabId: tabId },
//       function: () => {
//         const submitButton = document.querySelector('button[data-e2e-locator="console-submit-button"]');
//         if (submitButton) {
//           submitButton.addEventListener('click', () => {
//             chrome.runtime.sendMessage({ action: "submitButtonClicked" });
//           });
//         }
//       }
//     });
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "submitButtonClicked") {
//     chrome.tabs.executeScript({
//       file: 'content.js'
//     });
//   }
// });


// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete") {
//     chrome.tabs.executeScript(tabId, {
//       code: `
//         document.querySelector('button[data-e2e-locator="console-submit-button"]').addEventListener('click', () => {
//           chrome.runtime.sendMessage({ action: "submitButtonClicked" });
//         });
//       `
//     });
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "submitButtonClicked") {
//     chrome.tabs.executeScript({
//       file: 'content.js'
//     });
//   }
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (
//       changeInfo.status === "complete") {
//       chrome.scripting
//           .executeScript({
//               target: {
//                   tabId: tabId,
//               },
//               files: ["content.js"],
//           })
//           .then(() => {
//               console.log(
//                   `Injected the foreground script into tab: ${tabId}`
//               );
//               chrome.tabs.sendMessage(tabId, {
//                   message: "url_updated",
//                   url: tab.url,
//               });
//           })
//           .catch((err) => console.error(err));
//   }
// });
