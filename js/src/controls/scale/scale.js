import map from "../../map/map";
let scale = L.control.scale().addTo(map);
scale.maxWidth = 1000;
scale.getContainer().children[0].style.fontSize = '20px';
scale.getContainer().children[1].style.fontSize = '20px';