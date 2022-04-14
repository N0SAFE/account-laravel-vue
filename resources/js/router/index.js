import { createRouter, createWebHistory } from 'vue-router'

import UserIndex from '../components/UserIndex.vue'

// setup the dashboard route for vue.js
const routes = [{
    path: '/',
    name: 'users.index',
    component: UserIndex
}]

// return a router object
export default createRouter({
    history: createWebHistory(),
    routes: routes
})