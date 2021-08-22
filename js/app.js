let inputTask = document.querySelector('#inputTODO');
let result = document.querySelector('.listTODO');
let container = document.querySelector('.container');
const ul = document.querySelector('ul');
let li;
let btnCompleteTask;
let p;
let divTextTask;
let tasksArray = [];
let taskComponentArray = [];

inputTask.value = ''
inputTask.addEventListener("keyup", getInputValue);
// window.addEventListener('load', drawButton);

function getInputValue(e) {
    if (e.keyCode === 13) {
        result.style.display = "block";
        inputTask = document.querySelector('#inputTODO').value;
        e.preventDefault();
        if (inputTask !== '') {
            addTask(inputTask);
        }
    }
}

function addTask(valueTask) {
    btnCompleteTask = document.createElement('button');
    p = document.createElement('p');
    let value = document.createTextNode(valueTask);
    li = document.createElement('li');
    let divButton = document.createElement('div');
    divTextTask = document.createElement('div');

    li.setAttribute('class', 'taskComponent');
    divButton.setAttribute('class', 'divButton');
    divTextTask.setAttribute('class', 'divTextTask');
    btnCompleteTask.setAttribute('class', 'btnComplete');

    li.style.wordBreak = "break-all";
    p.appendChild(value);
    divTextTask.appendChild(p);
    divButton.appendChild(btnCompleteTask);
    li.appendChild(divButton);
    li.appendChild(divTextTask);

    ul.appendChild(li);
    result.appendChild(ul);

    result.style.overflowY = "scroll";
    result.style.display = "block";

    document.querySelector('#inputTODO').value = '';

    btnCompleteTask.addEventListener('click', function(ev) {
        btnCompleteTask.setAttribute('class', 'complete');
        divTextTask.style.textDecoration = "line-through";

        ev.target.classList.toggle('checked');
        // if (ev.target.classList === 'taskComponent') {
            
           
        // }
    }, false)
}

let btnClear = document.querySelector('.btnClearAll');
function clearTasks(){
    li.parentNode.removeChild(li);
}

btnClear.addEventListener('click', clearTasks);