let inputTask = document.querySelector('#inputTODO');
let result = document.querySelector('.listTODO');
let container = document.querySelector('.container');
let btnCompleteTask;
let p;

inputTask.value = ''
inputTask.addEventListener("keyup", getInputValue);
window.addEventListener('load', drawButton);

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
    p = document.createElement('p');
    let value = document.createTextNode(valueTask);
    let div = document.createElement('div');
    let divButton = document.createElement('div');
    let divTextTask = document.createElement('div');

    div.setAttribute('class', 'taskComponent');
    divButton.setAttribute('class', 'divButton');
    divTextTask.setAttribute('class', 'divTextTask');
    btnCompleteTask.setAttribute('class', 'btnComplete');

    div.style.wordBreak = "break-all";
    p.appendChild(value);
    divTextTask.appendChild(p);
    divButton.appendChild(btnCompleteTask);
    div.appendChild(divButton);
    div.appendChild(divTextTask);

    result.appendChild(div);

    result.style.overflowY = "scroll";
    
    document.querySelector('#inputTODO').value = '';
    btnCompleteTask.addEventListener('click', completeTask);
}

function completeTask(){
    btnCompleteTask.setAttribute('class', 'complete');
    p.style.textDecoration = "line-through";
}

function drawButton(){
    let divButtons = document.createElement('div');
    let divButtonCompleteAll = document.createElement('div');
    let divButtonClearAll = document.createElement('div');

    let buttonCompleteAll = document.createElement('button');
    let buttonClearAll = document.createElement('button');

    let txtBtnComplete = document.createTextNode('Completar Todos');
    let txtBtnClear = document.createTextNode('Limpar');

    // criar atributos (classes)
    divButtons.setAttribute('class', 'divButtons')
    buttonCompleteAll.setAttribute('class', 'btnCompleteAll');
    buttonClearAll.setAttribute('class', 'btnClearAll');

    buttonCompleteAll.appendChild(txtBtnComplete);
    buttonClearAll.appendChild(txtBtnClear);

    divButtonCompleteAll.appendChild(buttonCompleteAll);
    divButtonClearAll.appendChild(buttonClearAll);

    divButtons.appendChild(divButtonCompleteAll);
    divButtons.appendChild(divButtonClearAll);

    container.appendChild(divButtons);
}