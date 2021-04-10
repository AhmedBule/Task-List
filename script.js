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

    // Remove task event 
    taskList.addEventListener('click', removeTask)
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

    let link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    console.log(link);

    // Add icon html

    link.innerHTML = '<i class="fas fa-times"></i>';

    // Append the link to li

    li.appendChild(link);


    // Append li to ul

    taskList.appendChild(li)

    // Clear taskinput

    taskInput.value = ''

    e.preventDefault();
}


// Remove task


function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {

        console.log(e.target)
    }

    console.log(e.target)

}