import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes'

Vue.use( VueRouter );

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
  //render: h => h(App)
}).$mount('#app')
