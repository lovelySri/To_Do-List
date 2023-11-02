function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <span class="delete" onclick="deleteTask(this)">X</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    element.parentNode.remove();
}