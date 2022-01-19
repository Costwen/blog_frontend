import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import mavonEditor from 'mavon-editor'
import api from './api'
import mk from '@iktakahiro/markdown-it-katex'
import './global.css'

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.use(mavonEditor)
const markdownIt = mavonEditor.mavonEditor.getMarkdownIt()
markdownIt.use(mk)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
