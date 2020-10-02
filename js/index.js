import Vue from "vue/dist/vue";
import "./src/renderMap/renderMap";








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











// ---------------------ВОТ ЗДЕСЬ НЕ РАБОТАЕТ
let map__leftPanel__buttons__risks = new Vue({
    el: document.getElementsByClassName('map__leftPanel__buttons__risks')[0],
    data: function () {
        return {
            active: true
        }
    }
})



let map__leftPanel__buttons__reports = new Vue({
    el: document.getElementsByClassName('map__leftPanel__buttons__reports')[0],
    data: function () {
        return {
            active: false
        }
    }
})
// ----------------------------------------