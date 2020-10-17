import map from '../map'

// eslint-disable-next-line no-undef
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// eslint-disable-next-line no-undef
}).addTo(map)
