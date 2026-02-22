const taskInput = document.getElementById("taskText");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const clearCompleted = document.getElementById("clearCompleted");
const filterRadios = document.querySelectorAll('input[name="filter"]');

const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounts(){
    totalCount.textContent = tasks.length;

    const completed = tasks.filter(t => t.completed).length;
    const pending = tasks.filter(t => !t.completed).length;

    completedCount.textContent = completed;
    pendingCount.textContent = pending;
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

        li.appendChild(span);
        li.appendChild(buttonContainer);

        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {

  const text = taskInput.value.trim();

  if (text === "") return;

  tasks.push({
    text: text,
    completed: false
  });

  taskInput.value = "";

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