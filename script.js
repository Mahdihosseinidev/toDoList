// Define var UI
let form = document.querySelector("#task-form");
let taskInput = document.querySelector("#task");
let taskList = document.querySelector(".collection");
let filter = document.querySelector("#filter");
let clearTask = document.querySelector(".clear-task");
let error = document.querySelector(".error");

// Invoke all events
loadAllEvents();

// All events function
function loadAllEvents() {
  // Get tasks
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task
  form.addEventListener("submit", addTask);
  // remove task
  taskList.addEventListener("click", removeTask);
  // remove all task
  clearTask.addEventListener("click", clearAllTask);
  // filter task
  filter.addEventListener("keyup", filterTasks);
}

// Function Add Tasks

function addTask(e) {
  e.preventDefault();
  if (taskInput.value.trim() === "" || !taskInput.value) {
    error.style.opacity = "1";
    setTimeout(() => {
      error.style.opacity = "0";
    }, 3000);
  } else {
    let li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = taskInput.value;
    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    storeTaskInLs(taskInput.value);
    taskInput.value = "";
  }
}

// Function Remove Task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
        e.target.parentElement.parentElement.remove();
        removeTaskFromLs(e.target.parentElement.parentElement);
      }
    });
  }
}

// Clear All Task

function clearAllTask(e) {
  e.preventDefault();
  Swal.fire("Any fool can use a computer");
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearLs();
}

// Filter Tasks
function filterTasks() {
  let text = filter.value.toLowerCase();
  let listTask = document.querySelectorAll(".collection-item");
  listTask.forEach((taskName) => {
    let listTaskName = taskName.innerText.toLowerCase();
    if (listTaskName.indexOf(text) != -1) {
      taskName.style.display = "block";
    } else {
      taskName.style.display = "none";
    }
  });
}

// Store Task in LS

function storeTaskInLs(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(taskItem);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Get Tasks From LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = task;
    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// Remove Task From Ls

function removeTaskFromLs(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear All Task in Ls
function clearLs() {
  localStorage.clear();
}
