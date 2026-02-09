const btn = document.getElementById("btn");
const text = document.getElementById("text");
const body = document.body;

body.classList.add("light");

btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if(body.classList.contains("dark")){
        text.textContent = "Dark Mode 🌙";
    } else {
        text.textContent = "Light Mode ☀️";
    }
});