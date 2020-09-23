(async ()=>{
    let getElemByClass = function (className) {
        return document.getElementsByClassName(className)[0];
    };

    let mapId = document.getElementById('map');
    let placeForEdit__header__tools = getElemByClass('placeForEdit__header__tools');
    let placeForEdit__header__tools_common = document.getElementsByClassName('placeForEdit__header__tools_common');
    let placeForEdit__footer = getElemByClass('placeForEdit__footer');
    let placeForEdit__header__tools_Marker_state1 = getElemByClass('placeForEdit__header__tools_Marker_state1');
    let placeForEdit__footer__element__name__value = getElemByClass('placeForEdit__footer__element__name__value');
    let placeForEdit__footer__element__description__value = getElemByClass('placeForEdit__footer__element__description__value');
    let placeForEdit__footer__element__coords__value__latitude = getElemByClass('placeForEdit__footer__element__coords__value__latitude');
    let placeForEdit__footer__element__coords__value__longitude = getElemByClass('placeForEdit__footer__element__coords__value__longitude');
    let placeForEdit__footer__element__button = getElemByClass('placeForEdit__footer__element__button');



    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        zoomControl: true,
        attributionControl: true
    }).addTo(map);



    let markers = localStorage.getItem('markers');



    console.log('markers: before render',markers);
    // render past markers
    if (markers === null) {
        markers = [];
    }else {
        markers = JSON.parse(markers);

        for (let i = 0; i < markers.length; i++){
            let marker = L.marker([markers[i].lat, markers[i].lng], {
                draggable: true
            }).addTo(map).
                // map to opacity and view edit info
                on('click', function (e) {
                    if (placeForEdit__header__tools_Marker_state1.classList.contains('placeForEdit__header__tools_state2')){
                        mapId.style.opacity = '0.2';
                        placeForEdit__footer.style.display = 'flex';
                        placeForEdit__footer__element__name__value.value = markers[i].name;
                        placeForEdit__footer__element__description__value.value = markers[i].description;
                        // set coords
                        placeForEdit__footer__element__coords__value__latitude.setAttribute('disabled', '');
                        placeForEdit__footer__element__coords__value__longitude.setAttribute('disabled', '');
                        placeForEdit__footer__element__coords__value__latitude.value = e.target._latlng.lat;
                        placeForEdit__footer__element__coords__value__longitude.value = e.target._latlng.lng;
                    }
                }).
                // render latlng in input
                on('drag', function (e) {
                    console.log('dragstart', e)
                    if (placeForEdit__header__tools_Marker_state1.classList.contains('placeForEdit__header__tools_state2') && mapId.style.opacity === '0.2') {
                        e.target.dragging.enable()
                        console.log(e.target)
                        if (placeForEdit__footer.style.display === 'flex'){
                            placeForEdit__footer__element__coords__value__latitude.value = e.latlng.lat;
                            placeForEdit__footer__element__coords__value__longitude.value = e.latlng.lng;
                        }
                    }else {
                        e.target.dragging.disable();
                    }

                }).bindPopup('<div style="display: flex; justify-content: center; align-items: center; flex-direction: column"><div></div>' + markers[i].name + '<div>' + markers[i].description + '</div></div>')
        }

    }
    console.log('markers: after render',markers);









    let editButton = getElemByClass('editButton');
    editButton.addEventListener('click', function () {


        // render click shadow
        for (let elem of placeForEdit__header__tools_common){
            elem.addEventListener('click', function (event) {
                let element = event.target;

                if (element.classList.contains('placeForEdit__header__tools_state2')) {
                    element.classList.remove('placeForEdit__header__tools_state2');
                    mapId.style.opacity = '1';
                    placeForEdit__footer.style.display = 'none';
                }else{
                    element.classList.add('placeForEdit__header__tools_state2');
                }
            });
        }



        if (mapId.style.opacity === '0.2' || editButton.innerHTML === 'Go back') {
            mapId.style.opacity = '1';
            placeForEdit__footer.style.display = 'none';
        }




        if (editButton.innerHTML === 'GoEditMap!!!') {
            editButton.innerHTML = 'Go back';
            placeForEdit__header__tools.style.display = 'flex';



            map.on('click', function (event) {
                let nameMarker;
                let descriptionMarker;

                placeForEdit__footer__element__name__value.value = '';
                placeForEdit__footer__element__description__value.value = '';

                // if marker turn on and click to map
                if (placeForEdit__header__tools_Marker_state1.classList.contains('placeForEdit__header__tools_state2')) {
                    placeForEdit__footer.style.display = 'flex';
                    mapId.style.opacity = '0.2';


                    let marker = L.marker(event.latlng, {
                        draggable: true
                    }).addTo(map);



                    //set input event
                    placeForEdit__footer__element__name__value.addEventListener('input', function () {
                        nameMarker = placeForEdit__footer__element__name__value.value;
                        marker.bindPopup('<div style="display: flex; justify-content: center; align-items: center; flex-direction: column"><div></div>' + nameMarker + '<div>' + descriptionMarker + '</div></div>');
                        marker.update();
                        console.log('nameMarker', nameMarker);
                    });
                    placeForEdit__footer__element__description__value.addEventListener('input', function () {
                        descriptionMarker = placeForEdit__footer__element__description__value.value;
                        marker.bindPopup('<div style="display: flex; justify-content: center; align-items: center; flex-direction: column"><div></div>' + nameMarker + '<div>' + descriptionMarker + '</div></div>');
                        marker.update();
                        console.log('descriptionMarker', descriptionMarker);
                    });


                    placeForEdit__footer__element__coords__value__latitude.setAttribute('disabled', '');
                    placeForEdit__footer__element__coords__value__longitude.setAttribute('disabled', '');
                    placeForEdit__footer__element__coords__value__latitude.value = event.latlng.lat;
                    placeForEdit__footer__element__coords__value__longitude.value = event.latlng.lng;



                    marker.
                    // map to opacity
                    on('click', function () {
                        if (placeForEdit__header__tools_Marker_state1.classList.contains('placeForEdit__header__tools_state2')) {
                            mapId.style.opacity = '0.2';
                            placeForEdit__footer.style.display = 'flex';
                        }
                    }).
                    // set coords
                    on('click', function (e) {
                        if (placeForEdit__header__tools_Marker_state1.classList.contains('placeForEdit__header__tools_state2') && mapId.style.opacity === '0.2') {
                            e.target.dragging.enable()
                            console.log(e.target)
                            if (placeForEdit__footer.style.display === 'flex'){
                                placeForEdit__footer__element__coords__value__latitude.value = e.latlng.lat;
                                placeForEdit__footer__element__coords__value__longitude.value = e.latlng.lng;
                            }
                        }else {
                            e.target.dragging.disable();
                        }
                        placeForEdit__footer__element__coords__value__latitude.setAttribute('disabled', '');
                        placeForEdit__footer__element__coords__value__longitude.setAttribute('disabled', '');
                    }).
                    // render latlng in input
                    on('drag', function (e) {
                        if (placeForEdit__header__tools_Marker_state1.classList.contains('placeForEdit__header__tools_state2') && mapId.style.opacity === '0.2') {
                            e.target.dragging.enable()
                            console.log(e.target)
                            if (placeForEdit__footer.style.display === 'flex'){
                                placeForEdit__footer__element__coords__value__latitude.value = e.latlng.lat;
                                placeForEdit__footer__element__coords__value__longitude.value = e.latlng.lng;
                            }
                        }else {
                            e.target.dragging.disable();
                        }
                    })






            // set to localStorage
                    placeForEdit__footer__element__button.addEventListener('click', function () {
                        markers.push({
                            name: nameMarker,
                            description: descriptionMarker,
                            lat: event.latlng.lat,
                            lng: event.latlng.lng
                        });
                        let json = JSON.stringify(markers);
                        localStorage.setItem('markers', json);
                        console.log('localStorage ', localStorage);
                        mapId.style.opacity = '1';
                        placeForEdit__footer.style.display = 'none';
                        nameMarker = null;
                        descriptionMarker = null;
                        placeForEdit__footer__element__name__value.value = '';
                        placeForEdit__footer__element__description__value.value = '';
                    })



                }else {
                    mapId.style.opacity = '1.0';
                    placeForEdit__footer.style.display = 'none';
                }

            })






        }else {
            editButton.innerHTML = 'GoEditMap!!!';
            placeForEdit__header__tools.style.display = 'none';
        }
    })






























})();