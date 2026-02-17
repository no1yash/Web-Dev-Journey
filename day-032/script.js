const input = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");
const body = document.body;

addbtn.addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        addTask();
    }
});

function addTask() {
    const taskText = input.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const dltbtn = document.createElement("Button");
    dltbtn.textContent = "❌";

    dltbtn.addEventListener("click", function(event){
        event.stopPropagation();
        li.remove();
    });

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";

    completeBtn.addEventListener("click", function(event){
        event.stopPropagation();
        li.classList.toggle("completed");
    });

    li.appendChild(completeBtn);
    li.appendChild(dltbtn);
    tasklist.appendChild(li);

    input.value = "";
}