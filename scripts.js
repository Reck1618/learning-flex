document.addEventListener('DOMContentLoaded', function() {
    var sidemenuBtn = document.getElementById('side-menu__button');
    var sidemenu = document.getElementById('side-menu');

    sidemenuBtn.addEventListener('click', function() {
        if (sidemenu.classList.contains('active')) {
            sidemenu.classList.remove('active');
        } else {
            sidemenu.classList.add('active');
        }
    });
});