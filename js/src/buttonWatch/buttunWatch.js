let buttonMode = document.getElementsByClassName('mapEditor__headerEditor__mode')[0];
let buttonsContainer = document.getElementsByClassName('mapEditor__headerEditor__buttons')[0];



buttonMode.addEventListener('click', function (e) {
    if (buttonMode.innerHTML === 'Edit') {
        buttonsContainer.style.display = 'flex';
        buttonMode.innerHTML = 'Back to watch';
    }else {
        buttonsContainer.style.display = 'none';
        buttonMode.innerHTML = 'Edit';
    }
})



















