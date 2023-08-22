//seleção de elementos//
const tdForm = window.document.querySelector("#TdForm");
const tdInput = window.document.querySelector("#TdInput");
const TodoList = window.document.querySelector("#TodoList");
const EditForm = window.document.querySelector("#EditForm");
const EditInput = window.document.querySelector("#Edit-input");
const cancelEditBTN = window.document.querySelector("#cancelEditBTN");

//funções//
const saveTodo = (text) => {
    const todo = window.document.createElement ("div")
    todo.classList.add("td")

    const todoTitle = document.createElement ("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = window.document.createElement ("button")
    doneBtn.classList.add("finish-td")
    doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)
    
    const EditBtn = window.document.createElement ("button")
    EditBtn.classList.add("edit-td")
    EditBtn.innerHTML ='<i class="fa-solid fa-pen"></i>'
    todo.appendChild(EditBtn)

    const DeleteBtn = window.document.createElement ("button")
    DeleteBtn.classList.add("remove-td")
    DeleteBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(DeleteBtn)

    TodoList.appendChild(todo)
}

//eventos//
tdForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputvalue = tdInput.value
    if (inputvalue) {
        saveTodo(inputvalue)
    }
});