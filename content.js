var submitBtn = document.getElementsByClassName("font-medium items-center whitespace-nowrap focus:outline-none inline-flex relative select-none rounded-none px-3 py-1.5 bg-transparent dark:bg-transparent text-green-60 dark:text-green-60")[0];

submitBtn.onclick = () => {
  console.log("submitting");
}

// document.addEventListener("DOMContentLoaded", function () {
//   const submitButton = document.getElementsByClassName('font-medium items-center whitespace-nowrap focus:outline-none inline-flex relative select-none rounded-none px-3 py-1.5 bg-transparent dark:bg-transparent text-green-60 dark:text-green-60')[0];
//   if (submitButton) {
//     submitButton.addEventListener("click", () => {
//       console.log("Solution submitted");
//     });
//   }
// });

// setTimeout(() => {
//   const submitButton = document.getElementById('button[data-e2e-locator="console-submit-button"]');
//   if (submitButton) {
//     submitButton.addEventListener('click', () => {
//       // Send message to background.js indicating that the submit button was clicked
//       chrome.runtime.sendMessage({ action: "submitButtonClicked" });

//       // Check for changes in the submission result
//       const observer = new MutationObserver((mutationsList, observer) => {
//         mutationsList.forEach(mutation => {
//           // Check if the result changed to "Accepted"
//           const result = mutation.target.querySelector('.text-green-s span[data-e2e-locator="submission-result"]');
//           if (result && result.innerText === "Accepted") {
//             alert("content");
//             // Send message to background.js indicating that the code was accepted
//             chrome.runtime.sendMessage({ action: "codeAccepted" });
//             // Disconnect the observer once the result is accepted
//             observer.disconnect();
//           }
//         });
//       });

//       // Start observing changes in the DOM
//       observer.observe(document.body, { subtree: true, childList: true });
//     });
//   }
// }, 1000)



// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "codeAccepted") {
//     chrome.tabs.executeScript({
//       file: 'background.js'
//     });
//   }
// });



// console.log("start");

// document.addEventListener('DOMContentLoaded', function() {
//   const submitButton = document.querySelector('button[data-e2e-locator="console-submit-button"]');
//   if (submitButton) {
//     submitButton.addEventListener('click', () => {
//       // Debounce the click event to reduce frequent executions
//       clearTimeout(debounceTimeout);
//       debounceTimeout = setTimeout(() => {
//         // Send message to background.js indicating that the submit button was clicked
//         chrome.runtime.sendMessage({ action: "submitButtonClicked" });
//       }, 100); // Adjust the debounce delay as needed
//     });
//   }
// });

// // Initialize the debounce timeout variable
// let debounceTimeout;

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "codeAccepted") {
//     console.log("content");
//     // No need to execute background.js script again
//     // Instead, send a message directly to the background script
//     chrome.runtime.sendMessage({ action: "playAudioAndThrowConfetti" });
//   }
// });


// document.addEventListener('DOMContentLoaded', function() {
//   const submitButton = document.querySelector('button[data-e2e-locator="console-submit-button"]'); 
//   if (submitButton) {
//     submitButton.addEventListener('click', () => {
//       // Send message to background.js indicating that the submit button was clicked
//       chrome.runtime.sendMessage({ action: "submitButtonClicked" });
      
//       // Check for changes in the submission result
//       const observer = new MutationObserver((mutationsList, observer) => {
//         mutationsList.forEach(mutation => {
//           // Check if the result changed to "Accepted"
//           const result = mutation.target.querySelector('.text-green-s span[data-e2e-locator="submission-result"]');
//           if (result && result.innerText === "Accepted") {
//             alert("content");
//             // Send message to background.js indicating that the code was accepted
//             chrome.runtime.sendMessage({ action: "codeAccepted" });
//             // Disconnect the observer once the result is accepted
//             observer.disconnect();
//           }
//         });
//       });

//       // Start observing changes in the DOM
//       observer.observe(document.body, { subtree: true, childList: true });
//     });
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "codeAccepted") {
//     console.log("content");
//     // No need to execute background.js script again
//     // Instead, send a message directly to the background script
//     chrome.runtime.sendMessage({ action: "playAudioAndThrowConfetti" });
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "codeAccepted") {
//    chrome.tabs.executeScript({
//       file: 'background.js'
//     });
//  }
// });


// alert("content");
// const checkSubmissionResult = () => {
//   const result = document.querySelector('.text-green-s span[data-e2e-locator="submission-result"]');
//   if (result && result.innerText === "Accepted") {
//     celebrateSuccess();
//   }
// };

// const celebrateSuccess = () => {
//   playAudio();
//   throwConfetti();
// };

// const playAudio = () => {
//   console.log("dwd2eeeeeeee1");
//   alert("it works!!!!!!!!!");
//   // const audio = new Audio("success_sound.mp3");
//   // audio.play();
// };

// const throwConfetti = () => {
//   alert("ehehehe");
// };

// // checkSubmissionResult();
