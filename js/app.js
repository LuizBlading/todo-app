let inputTask = document.querySelector('#inputTODO');
let result = document.querySelector('.listTODO');
let btnCompleteTask;

inputTask.value = ''
inputTask.addEventListener("keyup", getInputValue);

function getInputValue(e){
    if(e.keyCode === 13)
    {
        inputTask = document.querySelector('#inputTODO').value;
        e.preventDefault();
        addTask(inputTask);
    }
    
}

function addTask(valueTask){
    btnCompleteTask = document.createElement('button');
    let p = document.createElement('p');
    let value = document.createTextNode(valueTask);
    let div = document.createElement('div');

    btnCompleteTask.setAttribute('class', 'btnComplete')
    div.setAttribute('class', 'taskComponent');

    div.style.wordBreak = "break-all";
    p.appendChild(value);
    div.appendChild(btnCompleteTask);
    div.appendChild(p);

    result.appendChild(div);

    document.querySelector('#inputTODO').value = '';
    btnCompleteTask.addEventListener('click', completeTask);
}

function completeTask(){
    btnCompleteTask.setAttribute('class', 'complete');
}
