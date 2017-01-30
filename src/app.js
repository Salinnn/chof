import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.devtools = true

/* eslint-disable no-new */
const vue = new Vue({
  router,
  ...App
}).$mount("#app")
