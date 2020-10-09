import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = true

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
