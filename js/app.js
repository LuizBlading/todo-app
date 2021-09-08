let input = document.querySelector("#inputTODO");
let ul = document.querySelector("#items");
let li;
let btnClear = document.querySelector('.btnClearAll');
let btnCompleteAll = document.querySelector('.btnCompleteAll');
let id = 0;

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

    // Aumentar o id do component criado
    id += 1;

    completeTask(li);
    FillComponents(id,task,divList, li, false);
}

// obj que representa o component da lista 
function taskComponent(id, value, classUlElement, classLiElement , isToggle){
    this.id = id;
    this.value = value;
    this.classUlElement = classUlElement;
    this.classLiElement = classLiElement;
    this.isToggle = isToggle;
}


let lista = [];
function FillComponents(id, value, ul, li, isToggle){
    let component = new taskComponent();
    
    component.id = id;
    component.value = value;
    component.ul = ul;
    component.li = li;
    component.isToggle = isToggle;

    lista.push(component);

    // Apenas testes
    // console.log(component);
    console.log(lista);

}

function completeTask(element) {
    element.addEventListener('click', function(){
        element.style.textDecoration = 'line-through';
        element.style.backgroundColor = '#aaa';
    })
}


function clearTasks(){
    const tasks = document.querySelector('#items');
    if(tasks.hasChildNodes()){
        tasks.removeChild(tasks.firstChild);
    }
}

function completeAll(){
    let li = [];

    li.push(document.querySelectorAll(".taskComponent"));
    console.log(li);
    console.log(`Tamanho da lista ${li.length}`);
    
    for(let i=0; i<=li.length; i++){
        // li[i].style.textDecoration = 'line-through';
        // li[i].style.backgroundColor = '#aaa';
        // e.target.closest('li').style.textDecoration = 'line-through';
        // e.target.closest('li').style.backgroundColor = '#aaa';
    }
}

btnClear.addEventListener('click', clearTasks);
btnCompleteAll.addEventListener('click', completeAll);