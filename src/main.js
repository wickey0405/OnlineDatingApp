import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add
import dotenv from 'dotenv'

Vue.config.productionTip = false
dotenv.config()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
