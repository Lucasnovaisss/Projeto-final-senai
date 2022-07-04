let btnAmzWork = document.getElementById('btn-amz_work');
let btnAmz = document.getElementById('btn-amz');

btnAmz.addEventListener('click', function (event) {
    event.preventDefault();
 scrolToOnClick()
})


btnAmzWork.addEventListener('click', function (event) {
    event.preventDefault();
    scrolToOnClick2()
})

function scrolToOnClick (event) {
    window.scroll({
        top: 3480,
        behavior:"smooth"
    })  

}

function scrolToOnClick2 (event) {
    window.scroll({
        top: 5000,
        behavior:"smooth"
    })  

}



