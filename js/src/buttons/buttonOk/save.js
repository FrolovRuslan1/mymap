import { inputName, inputDescription, markers } from "../../states/varible/varebles"



export default function() {
    console.log(markers);
    let markersNew = [];
    for (let i = 0; i < markers.length; i++) {
        markersNew[i] = {};
        markersNew[i].name = inputName.value;
        markersNew[i].description = inputDescription.value;
        markersNew[i].lat = markers[i]._latlng.lat;
        markersNew[i].lng = markers[i]._latlng.lng;
    }
    console.log(markersNew)
    let markersJSON = JSON.stringify(markersNew);
    localStorage.setItem('markers', markersJSON);
}