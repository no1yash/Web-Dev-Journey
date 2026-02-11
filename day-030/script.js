const countText = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

increaseButton.addEventListener("click", () => {
    count++;
    countText.textContent = count;
});

decreaseButton.addEventListener("click", () => {
    count--;
    countText.textContent = count;
});

resetButton.addEventListener("click", () => {
    count = 0;
    countText.textContent = count;
});