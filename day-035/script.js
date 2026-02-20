const tasktext = document.getElementById("textinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

const totalCount = document.getElementById("total");
const completedCount = document.getElementById("completed");
const pendingCount = document.getElementById("pending");

function updateCounts() {

    const totalTasks = tasklist.children.length;

    const completedTasks = document.querySelectorAll("#tasklist .completed").length;

    const pendingTasks = totalTasks - completedTasks;

    totalCount.textContent = totalTasks;
    completedCount.textContent = completedTasks;
    pendingCount.textContent = pendingTasks;
}

function addTask() {

    if (tasktext.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = tasktext.value;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateCounts();
    });

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete";

    dltbtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        updateCounts();
    });

    li.appendChild(dltbtn);
    tasklist.appendChild(li);

    tasktext.value = "";

    updateCounts();
}

addbtn.addEventListener("click", addTask);

tasktext.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
