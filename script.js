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
  });
}
