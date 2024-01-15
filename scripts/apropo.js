
//   NAV BAR
    document.addEventListener('DOMContentLoaded', function () {
        var hamburgerButton = document.querySelector('.hamburger-button');
        var hiddenMenu = document.querySelector('.hidden-menu');

        hamburgerButton.addEventListener('click', function () {
            hiddenMenu.style.display = (hiddenMenu.style.display === 'none' || hiddenMenu.style.display === '') ? 'flex' : 'none';
        });
    });
