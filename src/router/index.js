import Vue from 'vue'
import Router from 'vue-router'
import Home from '../routes/Home'
import Importance from '../routes/Importance'
import FunFacts from '../routes/Fun-facts'
import Specifications from '../routes/Specifications'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/importance',
            name: 'Importance',
            component: Importance
        },
        {
            path: '/fun-facts',
            name: 'Fun facts',
            component: FunFacts
        },
        {
            path: '/specs',
            name: 'Specifications',
            component: Specifications
        }
    ]
})
