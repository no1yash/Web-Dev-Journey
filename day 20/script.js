const buttons = document.querySelectorAll("button");
const message = document.getElementById("message");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.className = "";
        const mood = btn.dataset.mood;
        document.body.classList.add(mood);

        message.textContent = "You feel " + mood;
    });
});
