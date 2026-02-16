const countbtn = document.getElementById("count");
const incbtn = document.getElementById("increase");
const decbtn = document.getElementById("decrease");
const resbtn = document.getElementById("reset");
const body = document.body;

let count = 0;

function updateUI() {
    countbtn.textContent = count;

    if (count > 0) {
        body.style.backgroundColor = "lightgreen";
    } else if (count < 0) {
        body.style.backgroundColor = "lightcoral";
    } else {
        body.style.backgroundColor = "white";
    }
}

incbtn.addEventListener("click", () => {
    count++;
    updateUI();
});

decbtn.addEventListener("click", () => {
    count--;
    updateUI();
});

resbtn.addEventListener("click", () => {
    count = 0;
    updateUI();
});
