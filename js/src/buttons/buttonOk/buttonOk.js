import closeEditorMarker from "../marker/closeEditorMarker/closeEditorMarker";
import {buttonOk} from "../../states/varible/varebles";
import {marker} from "../marker/marker";
import {inputName, inputDescription} from "../../states/varible/varebles";

buttonOk.addEventListener('click', function (event) {
    closeEditorMarker();
    marker.bindPopup('<div class="popUp"><div>name: ' + inputName.value + '</div><div>description: ' + inputDescription.value + '</div></div>');
})