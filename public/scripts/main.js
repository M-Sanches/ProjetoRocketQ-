import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector ('.modal h2')
const modalDescription = document.querySelector ('.modal p')
const modalButton = document.querySelector ('.modal button')



// Pegar os botoes que existem com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{

    //Adionar estrutura 
    button.addEventListener("click", handleClick)
})
 

//Botão de excluir será acionado com essa função (classe delete)
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{

    //Adionar estrutura 
    button.addEventListener("click", (event) => handleClick(event,  false))
   
})


function handleClick(event, check = true){

    event.preventDefault()

    modalTitle.innerHTML= check ? "Marcar como Lida" : "Excluir pergunta"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id


    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalDescription.innerHTML = check ? "Tem certeza que deseja marcarcar esta pergunta como lida?" : "Tem certeza que deseja excluir esta pergunta? "
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")


    
    modal.open()
}