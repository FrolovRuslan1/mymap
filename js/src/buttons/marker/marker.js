import map from "../../map/map";
let buttonMarker = document.getElementsByClassName('mapEditor__headerEditor__buttons__marker')[0];

map.addEventListener('click', function (event) {
    if (buttonMarker.classList.contains('mapEditor__headerEditor__buttons__shadow')) {
        L.marker(event.latlng).addTo(map)
    }
})
