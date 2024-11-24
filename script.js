document.getElementById("submitButton").addEventListener("click", addTask);

function addTask(){
  const taskInput = document.getElementById('taskInput').value;
  alert(`New Task: ${taskInput}`);
}
