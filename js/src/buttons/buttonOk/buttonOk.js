import closeEditorMarker from "../marker/closeEditorMarker/closeEditorMarker";
import {inputName, inputDescription, buttonOk} from "../../states/varible/varebles";
import marker from "../marker/marker"
import save from "./save";



buttonOk.addEventListener('click', function () {

    console.log('cklick buttonOk')
    closeEditorMarker();
    marker.bindPopup('<div class="popUp"><div>name: ' + inputName.value + '</div><div>description: ' + inputDescription.value + '</div></div>');
    markers.push(marker);
    save();

})

