



let map = L.map('map',{
    drawControl: true,
    zoomControl: false
}).setView([55.7522, 37.6156], 13);



L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);




L.control.zoom({
    position: 'topright',
}).addTo(map);


L.control.scale({
    position: 'bottomright',
    maxWidth: '300'
}).addTo(map);