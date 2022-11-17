// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".navbar-fixed-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

// $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 20) {
//             $('nav').fadeOut(400);
//         } else {
//             $('nav').fadeIn(400);
//         };
//     });
// });

// $(function() {
//     let lastKnownScrollPosition = 0;
//     let ticking = false;

//     function doSomething(scrollPos) {
//   // Do something with the scroll position
//     }

//     document.addEventListener('scroll', (e) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
// });