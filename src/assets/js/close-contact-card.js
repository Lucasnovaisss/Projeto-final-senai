let btnClose = document.getElementById('btn-close');

let contactCard = document.getElementsByClassName('card-contact')[0];

btnClose.addEventListener('click', function () {
    contactCard.style.display = 'none'
})