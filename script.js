const bodyElement = document.querySelector('body');
const navMenu = document.querySelector('#nav-menu');
const colorMenu = document.querySelector('#color-menu');
const menuIcon = document.querySelector('#menu-icon')
const colorBlue = document.querySelector('#blue');
const colorPink = document.querySelector('#pink');
const colorGreen = document.querySelector('#green');
const colorYellow = document.querySelector('#yellow');
const colorPurple = document.querySelector('#purple');
const backgroundText = document.querySelector('#background-text');

const showColorMenu = () => {
    colorMenu.classList.toggle('colortoggle__color-menu--show');
}

const changeColorToBlue = () => {
    const menu = colorBlue.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-blue');
    backgroundText.classList.remove('background-text-pink', 'background-text-green', 'background-text-yellow');
    bodyElement.classList.add('blue', 'color');
    bodyElement.classList.remove('pink', 'green', 'yellow', 'purple');
}

const changeColorToPink = () => {
    const menu = colorPink.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-pink');
    backgroundText.classList.remove('background-text-blue', 'background-text-green', 'background-text-yellow', 'background-text-purple');
    bodyElement.classList.add('pink', 'color');
    bodyElement.classList.remove('blue', 'green', 'yellow', 'purple');
}

const changeColorToGreen = () => {
    const menu = colorGreen.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-green');
    backgroundText.classList.remove('background-text-pink', 'background-text-blue', 'background-text-yellow', 'background-text-purple');
    bodyElement.classList.add('green', 'color');
    bodyElement.classList.remove('blue', 'pink', 'yellow', 'purple');
}

const changeColorToYellow = () => {
    const menu = colorYellow.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-yellow');
    backgroundText.classList.remove('background-text-pink', 'background-text-blue', 'background-text-green', 'background-text-purple');
    bodyElement.classList.add('yellow', 'color');
    bodyElement.classList.remove('blue', 'pink', 'green', 'purple');
}

const changeColorToPurple = () => {
    const menu = colorPurple.parentElement;
    menu.classList.remove('colortoggle__color-menu--show');
    backgroundText.classList.add('background-text-purple');
    backgroundText.classList.remove('background-text-pink', 'background-text-blue', 'background-text-green', 'background-text-yellow');
    bodyElement.classList.add('purple', 'color');
    bodyElement.classList.remove('blue', 'pink', 'green', 'yellow');
}

menuIcon.addEventListener('mouseover', showColorMenu);
menuIcon.addEventListener('click', showColorMenu);
colorBlue.addEventListener('click', changeColorToBlue);
colorPink.addEventListener('click', changeColorToPink);
colorGreen.addEventListener('click', changeColorToGreen);
colorYellow.addEventListener('click', changeColorToYellow);
colorPurple.addEventListener('click', changeColorToPurple);