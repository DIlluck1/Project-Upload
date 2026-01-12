const taskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
addTaskButton.addEventListener('click', function() {
    const taskInputValue = taskInput.value;
    console.log(taskInputValue);
    const listItem = document.createElement('li');
    const textListItem = document.createTextNode(taskInputValue);
    const appendTaskList = taskList.appendChild(listItem);
    const emptyText = taskInputValue === "";
    if (!emptyText) {
        listItem.appendChild(textListItem);
        taskInput.value = "";
    } else {
        alert("Masukkan Tugas Terlebih Dahulu!");
    }

listItem.addEventListener('click', function() {
        listItem.style.textDecoration = "line-through";
        listItem.style.cursor = "pointer";
        listItem.style.color = "gray";
    });
});