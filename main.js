const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.classList.add('color-nav');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)'
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0px)'
            scrolled = true

        }, 200)
    } else {
        navbar.classList.remove('color-nav');
        scrolled = false
    }
};


