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

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

















})()