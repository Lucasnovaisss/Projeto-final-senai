let btnSend = document.getElementsByClassName('btn-send');
let inputs = document.querySelectorAll('input')




function validarEmBranco (inputs) {

    for (let i = 0; i < inputs.length; i ++) {
    
        if (inputs[i].value == "") {
            console.log("erro")
        }
    }
}

function callFunction() {
    validarEmBranco(inputs)
}


function validarEmail () {
    let emailValue = document.getElementById('email').value;
    let emailinput = document.getElementById('email');
    
    let mensageError = document.querySelector('.email-input label');


    if (emailValue == "") {
        mensageError.style.display = "block"
        mensageError.innerHTML = "este campo deve ser preenchido!"

    } else {
        mensageError.style.display = "none"

        if (!emailValue.includes("@")) {
            mensageError.style.display = "block"
            mensageError.innerHTML = "email invalido, deve conter @ "
        } 


    }
    
    }

function validarNome() {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;

            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if (
                (charCode > 64 && charCode < 91) || 
                (charCode > 96 && charCode < 123) ||
                (charCode > 191 && charCode <= 255)
              
            ){
                return true;
            } else {
                return false;
            }
        } catch (err) {
            alert(err.Description);
        }
        if (validarNome == ""){
            mensageError.style.display = "none"
            mensageError.innerHTML = "preencha este campo"
      }

    } 