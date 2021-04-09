// Define UI Variables

let form = document.querySelector('#form')
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


    e.preventDefault();
}