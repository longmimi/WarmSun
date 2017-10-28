import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import axios from 'axios'

Vue.prototype.$ajax = axios

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})