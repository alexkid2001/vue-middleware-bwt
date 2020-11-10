import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.use(VueCookies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
