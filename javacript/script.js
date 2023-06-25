//seleção de elementos//
const tdForm = window.document.querySelector("#TdForm");
const tdInput = window.document.querySelector("#TdInput");
const TodoList = window.document.querySelector("#TodoList");
const EditForm = window.document.querySelector("#EditForm");
const EditInput = window.document.querySelector("#Edit-input");
const cancelEditBTN = window.document.querySelector("#cancelEditBTN");

//funções//
const savetd = (Text) => {

    const td = document.createElement ("div")
    td.classList.add("td")
    const tdTitle = document.createElement("h3")
    tdTitle.innerText = Text

}

}


//eventos//
tdForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputvalue = tdInput.value
    if (inputvalue) {
        savetd(inputvalue)
    }
});