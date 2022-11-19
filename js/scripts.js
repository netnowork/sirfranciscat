//last change
$(function () {
    var DlastKnownScrollPosition = 0;
    var ticking = false;
    var scrollTop = window.pageYoffset || document.documentElement.scrollTop;
    var titletextel = document.getElementById("testTitle");
    console.log(scrollTop);
    $('.testTitle').addClass("nav-update-text");
    if (scrollTop > 0) {
        $('.navbar').addClass("nav-update");
        $('.testTitle').addClass("fadeInC-text");
    } else {
        $('.navbar').addClass("fadeInC");
        $('.testTitle').addClass("nav-update-text");
    }

    function navFade(scrollPos) {
        if (scrollPos > 0) {
            $('.navbar').removeClass("fadeInC");
            $('.testTitle').removeClass("nav-update-text");
            $('.navbar').addClass("nav-update");
            $(".testTitle").addClass("fadeInC-text");

            console.log("Should be Black");
        } else {
            $('.navbar').removeClass("nav-update");
            $('.testTitle').removeClass("fadeInC-text");
            $('.navbar').addClass("fadeInC");
            $(".testTitle").addClass("nav-update-text");
        }
        console.log("Should be Transparent");
    }


    document.addEventListener('scroll', (e) => {
        DlastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                navFade(DlastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });
});