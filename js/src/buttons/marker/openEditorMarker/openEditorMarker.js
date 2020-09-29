import map from "../../../map/map"
import {editorMarker, buttonMarker, inputLat, inputLng} from "../../../states/varible/varebles";



export default function openEditorMarker(latlng) {

    editorMarker.style.display = 'flex';
    inputLat.value = latlng.lat;
    inputLng.value = latlng.lng;
    buttonMarker.classList.add('mapEditor__headerEditor__buttons__shadow');


}