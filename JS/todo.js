const toDoForm = document.querySelector(".toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList");

const TODOS_LS = 'toDos';

/*function filterFn(toDo) {
    return toDo.id === 1;
}*/

let toDos = [];

/*li.id의 값을 꺼내올때 string을 int로 변환후 화면에서 보이는 목록 삭제하기*/
function deleteToDo(event) {
    // console.dir(event.target);
    // console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        // console.log(toDo.id, li.id);
        // li.id는 string 타입이기 때문에 number타입으로 바꿔주어야 한다.

        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    // console.log(cleanToDos);
}

/*스트링을 JSON 객체로 변환하여 저장하기*/
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
/*삭제 하기 버튼 누를시에 li, button, span 을 불러와 해당 to do 태그를 제거함*/
function paintToDo(text) {
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    const span = document.createElement("span");
    delBtn.innerText = "삭제하기";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

/*function something(toDo) {
    console.log(toDo.text);
}*/

/*로컬스토리지에 저장되어있는 ToDo를 불러와서
* 객체로 되어있는 데이터를 JSON 파서를 통해 string으로 변환 후
* for each를 통해 차례대로 text 띄워준다.*/
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}



function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();