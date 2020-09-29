import map from "../../map/map";
import "../buttonOk/buttonOk";
import openEditorMarker from "./openEditorMarker/openEditorMarker";
import { buttonMarker, editorMarker } from "../../states/varible/varebles";

export default marker;


map.addEventListener('click', function (event) {


    if (buttonMarker.classList.contains('mapEditor__headerEditor__buttons__shadow') && editorMarker.style.display === 'none') {

        openEditorMarker(event.latlng);

        marker = L.marker(event.latlng).addTo(map);

    }
});


