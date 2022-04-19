// Define var UI
let form = document.querySelector("#task-form");
let taskInput = document.querySelector("#task");
let taskList = document.querySelector(".collection");
let filter = document.querySelector("#filter");
let clearTask = document.querySelector("clear-task");

// Invoke all events
loadAllEvents();

// All events function
function loadAllEvents() {
  form.addEventListener("submit", addTask);
}

// Function Add Tasks

function addTask(e) {
  e.preventDefault();
  if (taskInput.value == "") {
    alert("Please fill the Task field");
  }else{
      let li = document.createElement('li');
      li.className = 'collection-item';
      li.innerText = taskInput.value;
      let link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>'
      li.appendChild(link);
        taskList.appendChild(li)
      console.log(li)
  }

}
