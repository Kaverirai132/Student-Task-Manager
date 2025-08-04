const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

let tasks = [];

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("dueDate").value;

  const task = {
    title,
    category,
    priority,
    dueDate,
    status: "Pending"
  };

  tasks.push(task);
  displayTasks();
  taskForm.reset();
});

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `
      <strong>${task.title}</strong> [${task.category} | ${task.priority}]<br>
      Due: ${task.dueDate} <br>
      Status: ${task.status} <br>
      <button onclick="markDone(${index})">Mark Done</button>
    `;
    taskList.appendChild(div);
  });
}

function markDone(index) {
  tasks[index].status = "Completed";
  displayTasks();
}

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
