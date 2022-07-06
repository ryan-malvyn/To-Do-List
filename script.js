// Selectors 
const addTask = document.querySelector('.add-task');
const taskInput = document.querySelector('.input-text');
const toDoList = document.querySelector('.task-list');

// Event Listeners
addTask.addEventListener('click',newTask);
toDoList.addEventListener('click',deleteOrComplete);

// Functions
function newTask(event){
    if(taskInput.value !== ''){
    //Preventing the form from submitting;
    event.preventDefault();
    
    //New Div;
    const newDiv = document.createElement('div')
    newDiv.classList.add('toDo')

    //New Li;
    const newToDo = document.createElement('li')
    newToDo.innerText=taskInput.value
    newToDo.classList.add('toDo-item')
    // Add the li to the end of the parent Div.
    newDiv.appendChild(newToDo)

    //Check Mark Button;
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('taskCompleted')
    newToDo.appendChild(checkButton)

    //Canceled Task Button;
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    cancelButton.classList.add('canceledTask')
    newToDo.appendChild(cancelButton)

    //Append to TaskList
    toDoList.appendChild(newDiv);
    taskInput.value = '';

    //If the text input is empty
    } else if ( taskInput.value === '') {
        alert('Please enter a new Task!')
        event.preventDefault();
    }
}

function deleteOrComplete(e){
    const item=e.target.parentElement;
    const todoItem = item.parentElement;

    //Canceled Task
    if(item.classList[0] === 'canceledTask'){
        todoItem.remove();
    }

    //Completed Task
    if(item.classList[0] === 'taskCompleted'){
        item.parentElement.classList.toggle('done');
    }
}