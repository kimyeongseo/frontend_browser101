const removeItemButton = document.querySelector('.removeItemButton');
const addItemButton = document.querySelector('.addItemButton');
const addItemInput = document.querySelector('.addItemInput');
const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');
var cnt = 1;

addItemButton.addEventListener('click', clickButton);


function clickButton(){
    let temp = document.createElement('li');
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "li" +cnt);
    temp.innerHTML = addItemInput.value;
    temp.innerHTML += "<button style = 'float: right;' class = 'btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'> <i class='fas fa-eraser'></i></button>";
    ul.appendChild(temp);
    cnt++;
}

function remove(cnt){
    let li = document.getElementById('li'+cnt);
    ul.removeChild(li);
}


