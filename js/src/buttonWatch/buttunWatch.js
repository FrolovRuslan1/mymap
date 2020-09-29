let buttonMode = document.getElementsByClassName('mapEditor__headerEditor__mode')[0];
let buttonsContainer = document.getElementsByClassName('mapEditor__headerEditor__buttons')[0];
let buttons =  document.getElementsByClassName('mapEditor__headerEditor__buttons ')[0].children;



buttonMode.addEventListener('click', function () {
    if (buttonMode.innerHTML === 'Edit') {

        buttonsContainer.style.display = 'flex';
        buttonMode.innerHTML = 'Back to watch';

    }else {

        buttonsContainer.style.display = 'none';
        buttonMode.innerHTML = 'Edit';

        for (let button of buttons) {
            button.classList.remove('mapEditor__headerEditor__buttons__shadow')
        }

    }
})



















