// JavaScript source code

function HideMenu() {
    //We need this to hide menu.
    document.getElementById('side-nav').style.display = 'none'; 

    //When hiding menu, it is better to close open sub-menus of the menu.
    let signIn = document.getElementsByClassName('sign-in-form');
    signIn[0].style.display = 'none';

    let rooms = document.getElementsByClassName('sub-rooms');
    rooms[0].style.display = 'none'
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
    if (rooms[0].style.display == 'none') {
        rooms[0].style.display = 'block'
    }
    else {
        rooms[0].style.display = 'none'
    }
}

function DisplaySignInForm() {
    let signIn = document.getElementsByClassName('sign-in-form');
    if (signIn[0].style.display == 'none') {
        signIn[0].style.display = 'block';
    }
    else {
        signIn[0].style.display = 'none';
    }
}