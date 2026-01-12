const taskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addClickListener(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('toDoCompleted');
    });
}

addTaskButton.addEventListener('click', function() {
    const taskInputValue = taskInput.value;
    console.log(taskInputValue);
    const listItem = document.createElement('li');
    const textListItem = document.createTextNode(taskInputValue);
    const emptyText = taskInputValue === "";
    if (!emptyText) {
        listItem.appendChild(textListItem);
        listItem.classList.add('toDoItem'); 
        taskList.appendChild(listItem);
        addClickListener(listItem); 
        taskInput.value = "";
    } else {
        alert("Masukkan Tugas Terlebih Dahulu!");
    }
});

const toDoItems = document.querySelectorAll('.toDoItem');
toDoItems.forEach(addClickListener);