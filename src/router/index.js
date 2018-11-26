import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HelloWorld'
import Login from '@/views/login'
import Usuario from '@/views/Usuario/index'
import Paciente from '@/views/Paciente/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/usuario', component: Usuario },
    { path: '/paciente', component: Paciente }
  ]
})
