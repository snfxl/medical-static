import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入element ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
//引入less
import less from 'less'
Vue.use(less)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
