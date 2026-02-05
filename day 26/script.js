const box = document.getElementById("card");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    box.classList.toggle("dark");
});
