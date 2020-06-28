var menuVisible = document.querySelectorAll('.menu-visible');
var screenSize = window.innerWidth;
var burgerHid = document.querySelector('.menu-icon');

function hideMenu() {
    if (screenSize < 768) {
        burgerHid.classList.remove('menu-icon_hid');
        for (i = 0; i < menuVisible.length; i++) {
            menuVisible[i].classList.add("menu-hid");
        }
    }
}
hideMenu();

function menuOpen() {
    burgerHid.addEventListener('click',
        function (evt) {
            evt.preventDefault;
            this.classList.toggle('menu-icon_activ');
            for (i = 0; i < menuVisible.length; i++) {
                menuVisible[i].classList.toggle("menu-hid");
            }
        }
    )
}
menuOpen();