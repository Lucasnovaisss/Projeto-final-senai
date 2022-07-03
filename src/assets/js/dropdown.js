
let porayvuaBtn = document.getElementById('porayvua')

let projetosBtn = document.getElementById('projetos')


var menuPorayvua = document.getElementsByClassName('drop_porayvua')
    
var menuProjetos = document.getElementsByClassName('drop_projetos')

function mostrarMenu (menu) {
    menu[0].style.display = "flex"

} 

function tirarMenu(menu) {
    menu[0].style.display = "none"
}

porayvuaBtn.addEventListener('mouseover', function() {
    mostrarMenu(menuPorayvua)
})

function tirarMenuPorayvua () {
    tirarMenu(menuPorayvua)
}

projetosBtn.addEventListener('mouseover', function() {
    mostrarMenu(menuProjetos)
})

function tirarMenuProjetos() {
    tirarMenu(menuProjetos)
    tirarMenu(projetosBtn)
    tirarMenu(porayvuaBtn)
}


