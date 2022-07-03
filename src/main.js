import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
import api from './api'
import './assets/css/global.less'

Vue.config.productionTip = false
Vue.prototype.$api = api
// use

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
