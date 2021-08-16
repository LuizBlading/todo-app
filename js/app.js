let inputTask = document.querySelector('#inputTODO');
let result = document.querySelector('.listTODO');
let btn = document.querySelector('#btn');

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
    let inputRadio = document.createElement('input');
    let span = document.createElement('span');
    let value = document.createTextNode(valueTask);
    let div = document.createElement('div');

    inputRadio.type = 'radio'
    span.setAttribute('class', 'checkmark');
    div.setAttribute('class', 'taskComponent');

    div.appendChild(span);
    div.appendChild(inputRadio);
    div.appendChild(value);

    result.appendChild(div);

    document.querySelector('#inputTODO').value = '';
}
