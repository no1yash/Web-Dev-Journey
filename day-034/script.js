const tasktext = document.getElementById("tasktext");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", () => {

    if(tasktext.value === "") return;

    const li = document.createElement("li");
    li.textContent = tasktext.value;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete";

    dltbtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(dltbtn);
    tasklist.appendChild(li);

    input.value = "";
});