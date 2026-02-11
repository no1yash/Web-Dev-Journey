const btn = document.getElementById("btn");
const card = document.getElementById("card");
const descr = document.getElementById("descr");
const title = document.getElementById("title");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if(body.classList.contains("dark")){
        btn.textContent = "Light Mode ☀️";
        title.textContent = "Dark Mode 🌙";
        descr.textContent = "This is dark mode.";
    } else {
        btn.textContent = "Dark Mode 🌙";
        title.textContent = "Light Mode ☀️";
        descr.textContent = "This is light mode.";
    }
});
