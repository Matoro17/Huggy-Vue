import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(ToggleButton)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'body',
      component: body
    }
  ]
})
