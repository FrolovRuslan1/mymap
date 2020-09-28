

 let map = L.map('map').setView([55.7522, 37.6156], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
     zoomControl: true,
     attributionControl: true,
     minZoom: 3,
     dragging: false
 }).addTo(map);

export default map;