var formHid = document.querySelector('.form-search');
var btnSearch = document.querySelector('.btn');
formHid.classList.add('form-search_hid');

function formOpen() {
    btnSearch.addEventListener('click',
        function (evt) {
            evt.preventDefault;
            formHid.classList.toggle('form-search_hid');
        }
    )
}
formOpen();