//seleção de elementos//
const tdForm = window.document.querySelector("#TdForm");
const tdInput = window.document.querySelector("#TdInput");
const TodoList = window.document.querySelector("#TodoList");
const EditForm = window.document.querySelector("#EditForm");
const EditInput = window.document.querySelector("#Edit-input");
const cancelEditBTN = window.document.querySelector("#cancelEditBTN");
const eraseBtn = window.document.getElementById("erase-button")
const searchInput = window.document.getElementById("searchInput")

let oldInputValue

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

    tdInput.value = ""
    tdInput.focus()
}

const toggleForms = () => {
    EditForm.classList.toggle("hide")
    tdForm.classList.toggle("hide")
    TodoList.classList.toggle("hide")
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".td")
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}

//eventos//
tdForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputvalue = tdInput.value
    if (inputvalue) {
        saveTodo(inputvalue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }


    if (targetEl.classList.contains("finish-td")){
        parentEl.classList.toggle("td-done")
    }

    if (targetEl.classList.contains("remove-td")){
        parentEl.remove()
    }

    if (targetEl.classList.contains("edit-td")){
        toggleForms()

        EditInput.value = todoTitle
        oldInputValue = todoTitle
    }
})

cancelEditBTN.addEventListener ("click", (e) => {
    e.preventDefault()

    toggleForms()
})

EditForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const EditInputValue = EditInput.value

    if (EditInputValue) {
        updateTodo(EditInputValue)
    }

    toggleForms()
})

searchInput.oninput = () => {
    let todo = window.document.querySelectorAll(".td h3")
    let td = window.document.querySelectorAll(".td")
    let conteudo = searchInput.value.toLowerCase()

    td.forEach((tdElement, index) => {
        const h3Elemt = todo[index]
        const h3text = h3Elemt.textContent.toLowerCase()

        if (h3text.includes(conteudo)) {
            tdElement.style.display = "flex"
        } else {
            tdElement.style.display = "none"
        }
    })
}

eraseBtn.addEventListener("click", (e) => {
    e.preventDefault()
    searchInput.value = ""
})
