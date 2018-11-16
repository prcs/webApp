// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import authConfigs from '../config/auth.configs'

window.$ = require('jquery')
window.JQuery = require('jquery')

require('./assets/css/bootstrap.min.css')
require('./assets/css/font-awesome.css')
require('./assets/css/ionicons.min.css')
require('./assets/css/jquery-jvectormap.css')
require('./assets/css/AdminLTE.min.css')
require('./assets/css/skins/_all-skins.min.css')

require('./assets/js/bootstrap.min')
require('./assets/js/fastclick')
require('./assets/js/adminlte.min')
require('./assets/js/jquery.sparkline.min')
require('./assets/js/jquery-jvectormap-1.2.2.min')
require('./assets/js/jquery-jvectormap-world-mill-en')
require('./assets/js/jquery.slimscroll.min')
require('./assets/js/Chart')
//require('./assets/js/pages/dashboard2')
require('./assets/js/demo')

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
