import Vue from "vue/dist/vue";




let map = L.map('map',{drawControl: true}).setView([55.7522, 37.6156], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




let map__leftPanel = new Vue({
    el: document.getElementsByClassName('map__leftPanel')[0],
    data: function () {
        return {
            isClose: true
        }
    }
})

let map__closeLeftPanel = new Vue({
    el: document.getElementsByClassName('map__closeLeftPanel')[0],
    data: function () {
        return {

        }
    },
    methods: {
        close: function (event) {
            if (map__leftPanel.isClose === true) {
                map__leftPanel.isClose = false;
            }else {
                map__leftPanel.isClose = true;
            }

        }
    }
})





