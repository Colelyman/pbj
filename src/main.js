import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RouterNav from 'vue-router-nav'

Vue.config.productionTip = false
Vue.use(RouterNav)

new Vue({
  data: {
      images: [ { src: '', caption: '', ref: '' } ],
      questions: [ { q: '' } ],
      currentQuestion: { q: '' }
  },
  router,
  render: h => h(App)
}).$mount('#app')
