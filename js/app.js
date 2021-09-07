let input = document.querySelector("#inputTODO");
let ul = document.querySelector("#items");
let li;

input.value = '';
input.addEventListener("keyup", getInputValue);

function getInputValue(e) {
    if (e.keyCode === 13) {
        ul.style.display = "block";
        input = document.querySelector('#inputTODO').value;
        e.preventDefault();
        if (input !== '') {
            addTask(input);
        }
    }
}

function addTask(task) {
    document.querySelector('#inputTODO').value = '';
    let value = document.createTextNode(task);
    let divList = document.querySelector(".listTODO");

    li = document.createElement('li');
    li.appendChild(value);
    li.setAttribute('class', 'taskComponent');
    ul.appendChild(li);


    li.style.wordBreak = "break-all";
    divList.appendChild(ul);

    divList.style.overflowY = 'scroll';
    divList.style.display = 'block';

    completeTask(li);

}


function completeTask(element) {
    element.addEventListener('click', function(){
        element.style.textDecoration = 'line-through';
        element.style.backgroundColor = '#aaa';
    })
}

let btnClear = document.querySelector('.btnClearAll');

function clearTasks(){
    const tasks = document.querySelector('#items');
    if(tasks.hasChildNodes()){
        tasks.removeChild(tasks.firstChild);
    }
}

btnClear.addEventListener('click', clearTasks);
