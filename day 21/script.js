const btn = document.getElementById("toggleBtn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        btn.textContent="Light Mode 🌞";
    } else {
        btn.textContent="Dark Mode 🌙";
    }
})