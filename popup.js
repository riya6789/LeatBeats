// Add click event listener to the button
document.getElementById("redirectButton").addEventListener("click", () => {
 // Redirect to LeetCode website
 chrome.tabs.create({ url: "https://leetcode.com/problemset/" });
});
