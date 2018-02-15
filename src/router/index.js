import Vue from 'vue'
import Router from 'vue-router'
import Home from '../routes/Home'
import Mechanics from '../routes/Mechanics'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/mechanics',
            name: 'Mechanics',
            component: Mechanics
        }
    ]
})
