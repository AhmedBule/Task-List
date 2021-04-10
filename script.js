// Define UI Variables

let form = document.querySelector('form')
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');


// Load all event listeners

loadEventListeners();

// Create a function called loadEventListeners

function loadEventListeners() {
    // Add Task Event
    form.addEventListener('submit', addTask)

}



// Add Task

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task')
    }


    // Create li element from scratch 

    let li = document.createElement('li');

    li.className = 'collection-item';

    // Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element



    // 

    e.preventDefault();
}

//loadEventListeners();