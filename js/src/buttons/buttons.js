import {mapElement, editorMarker, buttons} from "../states/varible/varebles";



for (let button of buttons) {
    button.addEventListener('click', function () {

        let buttonShadow = button.classList.contains('mapEditor__headerEditor__buttons__shadow');

        if (buttonShadow) {

            button.classList.remove('mapEditor__headerEditor__buttons__shadow');
            mapElement.style.cursor = 'grab';
            editorMarker.style.display = 'none';

        } else {

            button.classList.add('mapEditor__headerEditor__buttons__shadow');
            mapElement.style.cursor = 'pointer';

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
