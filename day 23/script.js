const text = document.getElementById("text");
const btn = document.getElementById("btn");
const body = document.body;

const moods = [
    { text: "Happy 😊", bg: "#FFF3B0" },
    { text: "Focused 💻", bg: "#E3F2FD" },
    { text: "Sad 😔", bg: "#ECEFF1" },
    { text: "Tired 😑", bg: "#F3E5F5" }
];

let index = 0;

btn.addEventListener("click", () => {
    if (index >= moods.length) {
        index = 0;
        text.textContent = "Click the button to change mood";
        body.style.backgroundColor = "#f2f2f2";
        return;
    }

    text.textContent = moods[index].text;
    body.style.backgroundColor = moods[index].bg;
    index++;
});
