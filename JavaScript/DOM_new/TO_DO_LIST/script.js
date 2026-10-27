
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

// Save tasks in browser storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// CREATE and UPDATE
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") return;

    if (editId === null) {
        // CREATE
        tasks.push({
            id: Date.now(),
            text: text,
            completed: false
        });

        message.textContent = "Task added successfully!";
    } else {
        // UPDATE
        const task = tasks.find(task => task.id === editId);

        if (task) {
            task.text = text;
        }

        message.textContent = "Task updated successfully!";
        editId = null;
        submitBtn.textContent = "Add Task";
    }

    saveTasks();
    displayTasks();
    taskForm.reset();
});

// READ
function displayTasks() {
    taskList.replaceChildren();

    tasks.forEach(function(task) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            task.completed = checkbox.checked;
            saveTasks();
            displayTasks();
        });

        const span = document.createElement("span");
        span.className = "task-text";

        if (task.completed) {
            span.classList.add("completed");
        }

        span.textContent = task.text;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";

        editBtn.addEventListener("click", function() {
            // UPDATE: Load selected task into input
            taskInput.value = task.text;
            editId = task.id;
            submitBtn.textContent = "Update Task";
            taskInput.focus();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";

        deleteBtn.addEventListener("click", function() {
            // DELETE
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            if (editId === task.id) {
                editId = null;
                taskForm.reset();
                submitBtn.textContent = "Add Task";
            }

            saveTasks();
            displayTasks();
            message.textContent = "Task deleted successfully!";
        });

        li.append(checkbox, span, editBtn, deleteBtn);
        taskList.appendChild(li);
    });
}

// Initial READ operation
displayTasks();
