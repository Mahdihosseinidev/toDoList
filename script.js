// Define var UI
let form = document.querySelector("#task-form");
let taskInput = document.querySelector("#task");
let taskList = document.querySelector(".collection");
let filter = document.querySelector("#filter");
let clearTask = document.querySelector(".clear-task");

// Invoke all events
loadAllEvents();

// All events function
function loadAllEvents() {
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
  if (taskInput.value == "") {
    alert("Please fill the Task field");
  } else {
    let li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = taskInput.value;
    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Function Remove Task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear All Task

function clearAllTask(e) {
  e.preventDefault();
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks() {
  let text = filter.value.toLowerCase();
  console.log(text);
}
