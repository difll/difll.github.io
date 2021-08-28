function showMenu(toggleId, menuId) {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        })
    }
}
showMenu('burger', 'menu');