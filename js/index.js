import map from "./src/map/map";
import "./src/buttonWatch/buttunWatch.js";
import "./src/buttons/buttons";
import "./src/buttons/marker/marker";
import "./src/controls/scale/scale";



//
// // var map = L.map('map',{drawControl: true}).setView([55.7522, 37.6156], 13);
// // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// // }).addTo(map);
// //
// //
// // // FeatureGroup is to store editable layers
// // var drawnItems = new L.FeatureGroup();
// // map.addLayer(drawnItems);
// // var drawControl = new L.Control.Draw({
// //     edit: {
// //         featureGroup: drawnItems
// //     }
// // });
// // map.addControl(drawControl);
//
//
//
// var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib }),
//     map = new L.Map('map', { center: new L.LatLng(51.505, -0.04), zoom: 13 }),
//     drawnItems = L.featureGroup().addTo(map);
// L.control.layers({
//     'osm': osm.addTo(map),
//     "google": L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
//         attribution: 'google'
//     })
// }, { 'drawlayer': drawnItems }, { position: 'topleft', collapsed: false }).addTo(map);
// map.addControl(new L.Control.Draw({
//     edit: {
//         featureGroup: drawnItems,
//         poly: {
//             allowIntersection: false
//         }
//     },
//     draw: {
//         polygon: {
//             allowIntersection: false,
//             showArea: true
//         }
//     }
// }));
//
// map.on(L.Draw.Event.CREATED, function (event) {
//     var layer = event.layer;
//
//     drawnItems.addLayer(layer);
// });
