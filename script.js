// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      ${taskText}
      <button class="delete-button" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
  
    taskInput.value = '';
  }
  
  // Function to remove a task
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  