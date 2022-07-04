window.onscroll = function () {
    StickyTop()
    console.log(window.pageYOffset)

}


let corpo = document.getElementsByTagName('body')[0];
let btn_descer = document.getElementsByClassName('box')[0];
let container = document.getElementsByClassName('container-section')[0];
let rodape = document.querySelector('footer')

let vejaMais = document.querySelector('.about-more h3')

let hiddenCarrosel = document.getElementsByClassName('hidden')[0];

function StickyTop () {
    if (window.pageYOffset === 0) {

        corpo.style.overflowY = "hidden"
        container.style.display = "none"

        btn_descer.style.display= "flex"

        hiddenCarrosel.style.display = "none"

    }
}

function descer() {

    var gridContent = document.querySelector('main')
    let topGrid = gridContent.offsetTop
    rodape.style.display = "block"
    
    
    corpo.style.overflowY = "auto"
    
    container.style.display = "flex"

    vejaMais.style.display = "none"
    btn_descer.style.display= "none"

    hiddenCarrosel.style.display = "block"
    
    window.scroll({
        top: topGrid + 140,
        behavior:"smooth"
    })   
}

btn_descer.addEventListener('mouseover', function() {
    descer()
})


