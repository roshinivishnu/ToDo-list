let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');
let deleteTaskBtn = document.getElementById('delete-task-btn');
let taskList = document.getElementById('task-list');
let tasks = [];

// Add Task

addTaskBtn.addEventListener('click', () => {
    let task = taskInput.value.trim();
    if(task) {
        tasks.push({ text: task, completed: false});
        taskInput.value = '';
        displayTasks();
    }
});

// Delete task

deleteTaskBtn.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
});

//Display tasks

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task,index) => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        });
        let span = document.createElement('span');
        span.textContent = task.text;
        if(task.completed){
            span.className = 'completed';
        }
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'btn btn-sm btn-info';
        editBtn.addEventListener('click', () => {
            let newText = prompt('Enter new task text', task.text);
            if(newText){
                tasks[index].text = newText;
                displayTasks();
            }
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        taskList.appendChild(li);
    });
}