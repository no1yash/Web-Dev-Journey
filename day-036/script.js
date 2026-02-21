const tasktext = document.getElementById("tasktext");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

const totalCount = document.getElementById("totaltasks");
const completedCount = document.getElementById("completed");
const pendingCount = document.getElementById("pending");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounts() {

    const total = tasklist.children.length;
    const completed = document.querySelectorAll("#tasklist .completed").length;
    const pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

function addTask() {

    if (tasktext.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = tasktext.value;

    tasks.push({ text: tasktext.value, completed: false });
    saveTasks();

    li.addEventListener("click", () => {
        li.classList.toggle("completed");

        const index = Array.from(tasklist.children).indexOf(li);
        tasks[index].completed = !tasks[index].completed;

        saveTasks();
        updateCounts();
    });

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete";

    dltbtn.addEventListener("click", (e) => {
        e.stopPropagation();

        const index = Array.from(tasklist.children).indexOf(li);
        tasks.splice(index, 1);

        li.remove();
        saveTasks();
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

function loadTasks() {

    tasks.forEach(task => {

        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            task.completed = !task.completed;
            saveTasks();
            updateCounts();
        });

        const dltbtn = document.createElement("button");
        dltbtn.textContent = "Delete";

        dltbtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t !== task);
            li.remove();
            saveTasks();
            updateCounts();
        });

        li.appendChild(dltbtn);
        tasklist.appendChild(li);
    });

    updateCounts();
}

loadTasks();

