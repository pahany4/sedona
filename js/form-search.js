var formHid = document.querySelector('form');
var btnSearch = document.querySelector('.btn');
var btnMinus = document.querySelectorAll('.btn-minus')
var btnPlus = document.querySelectorAll('.btn-plus')
formHid.classList.add('form-closed');
var click = 0;

function formOpen() {
    btnSearch.addEventListener('click',
        function (evt) {
            evt.preventDefault();
            this.classList.toggle('menu-icon_activ');
            if (click % 2 == 0) {
                formHid.classList.remove('form-closed');
                formHid.classList.add('form-open');
                formHid.classList.remove('form-close');
            } else {
                formHid.classList.remove('form-open');
                formHid.classList.add('form-close');
                formHid.classList.add('form-closed')
            }
            click++;
        }
    )
}
formOpen();

function searchPlus() {
    for (var i = 0; i < btnPlus.length; i++) {
        btnPlus[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            var input = this.parentNode.querySelector("input");
            input.value = parseInt(input.value) + 1;
        });
    }
}

searchPlus()

function searchMinus() {
    for (var i = 0; i < btnMinus.length; i++) {
        btnMinus[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            var input = this.parentNode.querySelector("input");
            var value = parseInt(input.value) - 1;
            if (value > 0) {
                input.value = value;
            } else {
                input.value = 0;
            }
        });
    }

}
searchMinus()