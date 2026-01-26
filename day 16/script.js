document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        window.alert("You clicked " + btn.dataset.name);
    });
});
