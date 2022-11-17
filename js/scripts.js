<<<<<<< HEAD
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
=======
// $(window).scroll(function () {
//     if ($(document).scrollTop() > 50) {
//         $('.nav').addClass('affix');
//         console.log("OK");
//     } else {
//         $('.nav').removeClass('affix');
//     }
// });


$(window).scroll(function () {

    if ($(this).scrollTop() > 50) {
        $('nav').stop().fadeIn(800);
        console.log("OK");
    } else {
        $('nav').stop().fadeOut(800);
        console.log("OK");
    };
}); 
>>>>>>> navbar-one-ul
