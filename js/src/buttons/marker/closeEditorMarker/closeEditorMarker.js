import {editorMarker, buttonMarker} from "../../../states/varible/varebles";



export default function closeEditorMarker() {

    editorMarker.style.display = 'none';
    buttonMarker.classList.remove('mapEditor__headerEditor__buttons__shadow');

}