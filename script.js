// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                closeAllDropdowns();
                menu.style.display = 'block';
            }
        });
    });

    // Close dropdown menus when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        const menus = document.querySelectorAll('.dropdown-menu');
        menus.forEach(function(menu) {
            menu.style.display = 'none';
        });
    }
});
