// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

window.$ = require('jquery')
window.JQuery = require('jquery')

require('./assets/css/bootstrap.min.css')
require('./assets/css/bootstrap-grid.min.css')
require('./assets/css/bootstrap-reboot.min.css')

import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import authConfigs from '../config/auth.configs'

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, authConfigs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
