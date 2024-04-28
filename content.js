setTimeout(() => {
  const submitButton = document.querySelector('button[data-e2e-locator="console-submit-button"]');
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      // Send message to background.js indicating that the submit button was clicked
      chrome.runtime.sendMessage({ action: "submitButtonClicked" });

      // Check for changes in the submission result
      const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
          // Check if the result changed to "Accepted"
          const result = mutation.target.querySelector('.text-green-s span[data-e2e-locator="submission-result"]');
          if (result && result.innerText === "Accepted") {
            alert("content");
            // Send message to background.js indicating that the code was accepted
            chrome.runtime.sendMessage({ action: "codeAccepted" });
            // Disconnect the observer once the result is accepted
            observer.disconnect();
          }
        });
      });

      // Start observing changes in the DOM
      observer.observe(document.body, { subtree: true, childList: true });
    });
  }
}, 1000)



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "codeAccepted") {
    chrome.tabs.executeScript({
      file: 'background.js'
    });
  }
});


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
