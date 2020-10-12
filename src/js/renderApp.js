import '../../leaflet/leaflet'
import Vue from 'vue/dist/vue.js'
import '../css/index.css'
import '../../leaflet/leaflet.css'
import App from '../App.vue'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.config.productionTip = true
