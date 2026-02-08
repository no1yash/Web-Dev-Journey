const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        result.textContent = "You selected: " + name;
    });
});
