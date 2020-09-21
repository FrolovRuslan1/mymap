(async ()=>{
    let getElemByClass = function (elem) {
        return document.getElementsByClassName(elem)[0];
    }


    let editButton = getElemByClass('editButton');
    editButton.addEventListener('click', function () {
        let placeForEdit = getElemByClass('placeForEdit');
        if (placeForEdit.style.display === ('' || 'none')) {
            placeForEdit.style.display = 'flex'
        }else {
            placeForEdit.style.display = 'none'
        }
    })


    let mapId = document.getElementById('map')
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
        foo: 'bar',
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(map);















})()