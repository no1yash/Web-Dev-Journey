const input = document.getElementById("nameInput");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const greet = document.getElementById("greet");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    message.innerText = "Hello " + input.value + " 👋";
    form.classList.add("hidden");
    greet.classList.remove("hidden");
});