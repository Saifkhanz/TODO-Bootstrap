var tasks = [];
//This function add task
function addTask() {
  document.getElementById("error").innerHTML = "";
  newTask = document.getElementById("NewTask");

  if (newTask.value == "") {
    document.getElementById("error").innerHTML = "Please Enter the task";
  } else {
    tasks.push({
      name: newTask.value,
      isCompeleted: false,
    });

    newTask.value = "";
    renderTasks();
  }
}
// this function is render the task
function renderTasks() {
  let TaskListContainer = document.getElementById("TaskList");
  TaskListContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    new_row = document.createElement("li");
    new_row.className = "list-group";
    new_row.innerHTML =
      `<li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"
     onclick='markTaskAsCompleted(` +
      index +
      `)'
    name='checkbox' ` +
      (task.isCompeleted ? "checked" : "") +
      `>
    <label class="form-check-label` +
      (task.isCompeleted ? " strike" : "") +
      `" for="">` +
      task.name +
      `</label>
      <i class="fa-solid fa-trash delete" onclick="deleteTask(` +
      index +
      `)"></i>
      '<i class="fas fa-edit delete" onclick="editTask(` +
      index +
      `)"name="edit"></i>
      </li>`;
    TaskListContainer.appendChild(new_row);
  });
}

function editTask(taskId) {
  var oldValue = tasks[taskId].name;
  var newValue = prompt("New Value?", oldValue);
  if (!newValue) {
    return;
  }
  tasks[taskId].name = newValue;
  this.renderTasks();
  return;
}

// this function is used for counted completed task
function markTaskAsCompleted(taskId) {
  if (tasks[taskId].isCompeleted === false) {
    tasks[taskId].isCompeleted = true;
  } else {
    tasks[taskId].isCompeleted = false;
  }
  this.renderTasks();
}
//this function used for deleting total task
function deleteTask(taskIndex) {
  if (!confirm("Are you sure want to delete!")) return;
  tasks.splice(taskIndex, 1);
  renderTasks();
}
