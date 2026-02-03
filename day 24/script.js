const body = document.body;
const text = document.getElementById("text");
const btn = document.getElementById("btn");

body.classList.add("light"); // default mode

btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if(body.classList.contains("dark")){
        text.textContent = "Dark Mode 🌙";
    } else {
        text.textContent = "Light Mode ☀️";
    }
});
