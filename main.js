const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);

function addTask() {
  // Get the task from the input field
  const task = taskInput.value;

  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${task}</span>
    <button type="button">Delete</button>
  `;

  // Add a click event listener to the delete button
  const deleteButton = li.querySelector("button");
  deleteButton.addEventListener("click", deleteTask);

  // Add the new list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

function deleteTask(event) {
  // Get the parent list item of the delete button that was clicked
  const li = event.target.parentNode;

  // Remove the list item from the task list
  taskList.removeChild(li);
}




