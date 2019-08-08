// JavaScript source code

function HideMenu () {
    document.getElementById('side-nav').style.display = 'none';
}

function DisplayMenu() {
    document.getElementById('side-nav').style.display = 'grid';
    document.getElementById('side-nav').style.gridTemplateColumns = '1fr';
    document.getElementById('side-nav').style.gridTemplateRows = 'auto auto auto auto auto auto auto';
    document.getElementById('side-nav').style.gridRowGap = '5vh';
    document.getElementById('side-nav').style.position = 'fixed';
    document.getElementById('side-nav').style.width = '70%';
    document.getElementById('side-nav').style.height = '100vh';
    document.getElementById('side-nav').style.background = '#211c1c';
    document.getElementById('side-nav').style.zIndex = '1';
    document.getElementById('side-nav').style.padding = '10% 5%';
}

function DisplayRooms() {
    let rooms = document.getElementsByClassName('sub-rooms');
    rooms[0].style.display = 'block'
}

function DisplaySignInForm() {
    let rooms = document.getElementsByClassName('sign-in-form');
    rooms[0].style.display = 'block'
}