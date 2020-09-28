let buttons =  document.getElementsByClassName('mapEditor__headerEditor__buttons ')[0].children;

for (let button of buttons) {
    button.addEventListener('click', function () {

        let buttonShadow = button.classList.contains('mapEditor__headerEditor__buttons__shadow');

        if (buttonShadow) {

            button.classList.remove('mapEditor__headerEditor__buttons__shadow');

        } else {

            button.classList.add('mapEditor__headerEditor__buttons__shadow');

            for (let btn of buttons) {

                if (btn === button) {
                    continue;
                }else {

                    btn.classList.remove('mapEditor__headerEditor__buttons__shadow')

                }
            }
        }
    })
}
