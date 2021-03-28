// 구현하기 전에 정확하게 어떤 기능을 구현할 것인지 계획을 세우는 것이 중요함
// 1. 사용자가 텍스트 input에서 타이핑
// 2. 사용자가 버튼을 클릭하거나 텍스트에서 엔터키를 쳤을 때 item을 등록
// 3. 등록된 아이템의 삭제버튼을 누르면 삭제한다.

// 주석을 작성하려면 함수에 대해서 작성
// 코드를 설명하는 주석은 쓰지 말자

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;
    // console.log(text);  <- 콘솔을 통해 제대로 작동하는지 확인하자!
    if(text === ''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듦(텍스트+삭제버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: "end"});
    // 5. 인풋을 초기화 한다.
    input.value = '';
    input.focus(); // <- 사용자가 편하게 입력할 수 있도록 도와줌
}
let id = 0; //UUID
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);

    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
               <i class="fas fa-eraser" data-id=${id}></i>
            </button>
         </div>
         <div class="item__divider"></div> `;
    id++;
    return itemRow;
    /* const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete')
    deleteBtn.innerHTML = ' <i class="fas fa-eraser"></i>'
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider); */
}

addBtn.addEventListener('click', () => {
    onAdd();
});

/* 혼자서 생각해서 끄적여본 코드..외않되?..?
document.getElementsByTagName('ul').addEventListener('click', (event) => {
    if(event.target.class === "item__delete"){
        items.removeChild(itemRow);
    } else if(target.class === "footer__button") {
        onAdd();
    }
}); */


input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        onAdd();
    }
    
});


items.addEventListener('click',  event => {
    const id = event.target.dataset.id;
   if(id){
       const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
       toBeDeleted.remove();
   }
});