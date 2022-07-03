var header = document.querySelector('header');
var el = document.querySelectorAll('nav ul li a');
var logo = document.getElementById('logo');
var nav = document.querySelector('nav');

var section = document.querySelector('section');

let topSection = section.offsetTop;

let topoHeader = header.offsetTop;

window.onscroll= function () {
    mudarEstiloHeader();
    tirarHeader();
}


function mudarEstiloHeader () {
   
        if (topoHeader < window.pageYOffset) {
            header.classList.add('header_style');

            el[0].style.color = "white"
            el[1].style.color = "white"
            el[2].style.color = "white"
            el[3].style.color = "white"

            logo.src = "./src/assets/img/logo sem fundo branca.png"
    
        } else {
            header.classList.remove('header_style')

            el[0].style.color = "#325819"
            el[1].style.color = "#325819"
            el[2].style.color = "#325819"
            el[3].style.color = "#325819"

            

            logo.src = "./src/assets/img/logo sem fundo verde.png"
        }
}

function tirarHeader () {
    
    for (let i = 0; i < window.pageYOffset; i++) {
        console.log(window.pageYOffset)

        if (window.pageYOffset >= 750) {
            el[0].style.border = "none"

            el[0].style.color = "#87b46700"
            el[1].style.color = "#87b46700"
            el[2].style.color = "#87b46700"
            el[3].style.color = "#87b46700"
            
            header.style.width = '0%'

            setTimeout(() => {
                header.style.position = 'absolute' 
            }, 370);

        } else if (window.pageYOffset < 500 ) {
            header.style.position = 'fixed'
            header.style.width = '100%'

        }

        break
    }

}

/*mostrar menu*/













