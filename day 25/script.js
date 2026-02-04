const input = document.getElementById("colorInput");
const btn = document.querySelector("button");
const body = document.body;

btn.addEventListener("click", () => {
    body.style.background = input.value;
});
