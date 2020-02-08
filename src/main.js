import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  data: {
    // Toggle bar
    drawBar: true,
    volume: localStorage.volume || 0.5,
  },
  render: h => h(App)
}).$mount('#app')
