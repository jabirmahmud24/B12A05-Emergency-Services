const getFunc = function (id) {
  const element = document.getElementById(id);
  return element;
};
// Copy Count
let copyCount = 0;
const copyCounter = document.getElementById("copy-counter");
const copyBtns = document.querySelectorAll(".copy-btn");

for (const btn of copyBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // Note: this needs parentheses to work properly
    copyCount++; // Increase total
    copyCounter.innerText = copyCount;
    // ________________________
    const parentCard = btn.closest(".card");
    if (!parentCard) return;

    const thirdDiv = parentCard.children[2];
    if (!thirdDiv || !thirdDiv.firstElementChild) return;

    const textToCopy = thirdDiv.firstElementChild.innerText;

    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => alert("Number Coppied: " + textToCopy))
        .catch((err) => console.error("Failed to copy:", err));
    }
  });
}
// Heart Count
let heartCount = 0;
const heartCounter = document.getElementById("heart-counter");
const heartBtns = document.querySelectorAll(".heart-btn");

for (const btn of heartBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    heartCount++;
    heartCounter.innerText = heartCount;
  });
}
