var $video2 = $('.video2'); 

$video2.on('mouseenter', function (){
    $video2.get(0).play()
})

$video2.on('mouseout', function () {
    $video2.get(0).pause()
})





