const responsive = {
    560:{
        items:2
    },
    350:{
        items:1
    },
    960:{
        items:3
    },
    0:{
        items:1
    },


}



$(document).ready(function(){


$nav =$('.nav');
$toggleCollapse=$('.toggle-collapse');


//  click event on toggle menu //

$toggleCollapse.click(function(){
 $nav.toggleClass('collapse');
})

// Owl-crousel for the blog//


$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots: false,
    nav:true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive

});


// click to scroll up 
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000)

})

//  AOS instance

AOS.init();





});