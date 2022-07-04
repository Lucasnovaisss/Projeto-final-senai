let btnSend = document.getElementsByClassName('btn-send');
let inputs = document.querySelectorAll('input')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  let emailinput = document.getElementById('email');

function validarEmail () {

    let emailValue = emailinput.value;
    
    let mensageError = document.getElementById('email-label');


    if (emailValue == "") {
        mensageError.style.display = "block"
        mensageError.innerHTML = "este campo deve ser preenchido!"
        emailinput.style.background = '#ff61613a'

    } else {
        mensageError.style.display = "none"

        var emailValidado = validateEmail(emailValue);

        if (emailValidado) {
            console.log(emailValidado)
            mensageError.style.display = "none"
        } else {

            if (!emailValue.includes("@")) {
                mensageError.style.display = "block"
                mensageError.innerHTML = "email invalido, deve conter @ "
                emailinput.style.background = '#ff61613a'
            } else {
                mensageError.style.display = "block"
                mensageError.innerHTML = "email utilizado é invalido"
                emailinput.style.background = '#ff61613a'
            }
        }
    }

    if(emailValidado) {
        emailinput.style.background= "#E8F0FE"
    }
    
    }

    emailinput.addEventListener('keypress', function () {
        validarEmail()
    } )


    
    let nameInput = document.getElementById('name');

function validarNome () {

    let nameValue = nameInput.value;

    let mensageError = document.getElementById('name-label');

    let validado = false;

    if (!nameValue == "") {

        mensageError.style.display = "none"
        
        } else {

            mensageError.style.display = "block"
            mensageError.innerHTML = "este campo deve ser preenchido!"
    
            nameInput.style.background = '#ff61613a'
    }

        let soma = parseInt(nameValue[0]) + parseInt(nameValue[0])


    if (parseInt(nameValue[0]) + parseInt(nameValue[0]) === soma) {
        nameInput.style.background = '#ff61613a'
        mensageError.style.display = "block"
        mensageError.innerHTML = "seu nome não pode começar com um numero!"
    } 


}

nameInput.addEventListener('keypress', function () {
    validarNome()
} )


nameInput.addEventListener('change', function () {
    validarNome()
} )




