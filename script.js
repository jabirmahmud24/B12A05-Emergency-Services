const getFunc = function (id) {
  const element = document.getElementById(id);
  return element;
};
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
// Copy Count
let copyCount = 0;
const copyCounter = document.getElementById("copy-counter");
const copyBtns = document.querySelectorAll(".copy-btn");

for (const btn of copyBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    copyCount++;
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
// ******************

// ********************
// Call History Funtionality

// Coin Counter

let coinCount = 0;
let coinValue = Number(document.getElementById("coin-counter").innerText);
// Alert Content Value

// Append Children In History
const callBtns = document.getElementsByClassName("call-btn");
for (const btn of callBtns) {
  btn.addEventListener("click", function () {
    // ************************
    const serviceName =
      btn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      btn.parentNode.parentNode.children[2].children[0].innerText;
    // ******************************
    coinCount = coinValue - 20;
    coinValue = coinCount;
    document.getElementById("coin-counter").innerText = coinValue;
    if (coinValue <= -20) {
      alert("❌ You don't have sufficient coins.");
      const coinZeroValue = (document.getElementById(
        "coin-counter"
      ).innerText = 0);
      return;
    } else {
      alert("📞 Calling " + serviceName + " " + serviceNumber + "...");
    }
    console.log(coinValue);
    // TIME SEC STARTED
    function currentTimeWithAmPm() {
      const now = new Date();
      const hh = now.getHours(); // 0–23
      const mm = now.getMinutes(); // 0–59
      const ss = now.getSeconds(); // 0–59
      const ampm = hh >= 12 ? "PM" : "AM";
      const h24 = String(hh).padStart(2, "0");
      const m2 = String(mm).padStart(2, "0");
      const s2 = String(ss).padStart(2, "0");
      return `${h24}:${m2}:${s2} ${ampm}`;
    }
    // Time ended

    // SERVICE NAME AND NUMBER
    const historyContainer = document.getElementById("history-container1");

    const newCard = document.createElement("div");
    newCard.innerHTML = `<div
          class="rounded-md h-20 bg-gray-100 flex justify-between items-center p-4 my-4"
        >
          <div class="felx flex-col">
            <h4 class="font-bold">${serviceName}</h4>
            <p>${serviceNumber}</p>
          </div>
         <div>${currentTimeWithAmPm()}</div>
        </div>`;
    const appendValue = coinCount - 20;
    console.log(coinCount);

    historyContainer.append(newCard);
    console.log("appended");
  });
}
// Clear History
document.getElementById("clear-btn").addEventListener("click", function () {
  const cardContainer = document.getElementById("history-container1");
  cardContainer.innerHTML = "";
});
// __________***********
