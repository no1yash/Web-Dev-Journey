const tasktext = document.getElementById("tasktext");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("tasklist");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");

const clearCompleted = document.getElementById("clearCompleted");
const filterRadios = document.querySelectorAll('input[name="filter"]');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounts(){
    totalCount.textContent = tasks.length;

    const completed = tasks.filter(t => t.completed);
    const pending = tasks.filter(t => !t.completed);

    completedCount.textContent = completed.length;
    pendingCount.textContent = pending.length;

    if (tasks.some(t => t.completed)) {
        clearCompleted.style.display = "block";
    } else {
        clearCompleted.style.display = "none";
    }


}

function renderTasks(){
    
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if(currentFilter === "completed"){
        filteredTasks = tasks.filter(t => t.completed);
    }

    if(currentFilter === "pending"){
        filteredTasks = tasks.filter(t => !t.completed);
    }

    filteredTasks.forEach(task => {
        
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.marginBottom = "10px";

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }

        const buttonContainer = document.createElement("div");

        const editBtn = document.createElement("button");
        editBtn.textContent = "✏";

        editBtn.addEventListener("click", () => {
            if (editBtn.textContent === "✏") {

                const input = document.createElement("input");
                input.type = "text";
                input.value = task.text;

               li.replaceChild(input, span);

                editBtn.textContent = "Save";

            } else {

                const input = li.querySelector("input");
                const newText = input.value.trim();

                if (newText !== "") {
                    task.text = newText;
                }

                saveTasks();
                updateCounts();
                renderTasks();
            }

        });

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.addEventListener("click", () => {
            task.completed = !task.completed;
                saveTasks();
                updateCounts();
                renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            saveTasks();
            updateCounts();
            renderTasks();
        });

        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);
        buttonContainer.appendChild(editBtn);

        li.appendChild(span);
        li.appendChild(buttonContainer);

        taskList.appendChild(li);
    });
}

tasktext.addEventListener("input", () => {
    if (tasktext.value.trim() === "") {
        addBtn.style.display = "none";
    } else {
        addBtn.style.display = "inline-block";
    }
});

addBtn.addEventListener("click", () => {

    const text = tasktext.value.trim();

    if(text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    tasktext.value = "";

    saveTasks();
    updateCounts();
    renderTasks();
});

filterRadios.forEach(radio => {
  radio.addEventListener("change", function () {
    currentFilter = this.value;
    renderTasks();
  });
});

clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  updateCounts();
  renderTasks();
});

updateCounts();
renderTasks();