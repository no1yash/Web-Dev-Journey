const text = document.querySelector("p");
const buttons = document.querySelectorAll(".button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.name === "text") {
            text.textContent = "Hey, you're doing great. Be consistent.";
            text.style.color = "green";
            text.style.fontSize = "25px";
            text.style.fontStyle = "italic";
            text.style.fontWeight = "bold";
        }

        if (btn.dataset.name === "color") {
            document.querySelector(".card").style.backgroundColor = "lightgreen";
            document.querySelector(".card").style.fontStyle = "bold";   
        }
    });
});
