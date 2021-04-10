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
    // Add Task Event (1)
    form.addEventListener('submit', addTask)

    // Remove task event (2)
    taskList.addEventListener('click', removeTask)

    // Clear Task Event (3)

    clearBtn.addEventListener('click', clearTasks)

    // Filter tasks event

    filter.addEventListener('keyup', filterTasks)
}



// Add Task
//(1) First Function
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

//  (2) Second function
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

}



// Clear Tasks

// (3) Clear Task Function

function clearTasks(e) {
    // (1) taskList.innerHTML = ''   // This is the first of clearing. You set to an empty string. 

    // Faster 
    if (confirm('Are you sure you want to clear the task')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}



// Filter tasks 

// (4) Filter Tasks function

function filterTasks(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        let item = task.firstChild.textContent;

        if (item.toLocaleLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }

    })
}