const menuDiv = document.getElementById('menu');
const menuDisplay = menuDiv.style.display;

const showMenu = () => {
    menuDiv.style.display = 'block';
}

const hideMenu = () => {
    menuDiv.style.display = 'none';
}

const toggleMenu = () => {
    if (menuDiv.style.display === 'none') {
        showMenu();
    } else {
        hideMenu();
    }
}

document.addEventListener('click', e => {
    if (e.target.matches('#menu_button')) {
        toggleMenu()
    }
})

