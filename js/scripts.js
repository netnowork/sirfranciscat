$(function () {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
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
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                navFade(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });
});