import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login }
  ]
})
