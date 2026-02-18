const task = document.getElementById("task");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("taskList");

addbtn.addEventListener("click", () => {

    if(task.value === "") return;

    const li = document.createElement("li");
    li.textContent = task.value;

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "X";

    dltbtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(dltbtn);
    tasklist.appendChild(li);

    dltbtn.classList.add("delete-btn");

    task.value = "";
});
