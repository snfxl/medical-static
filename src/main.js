import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//注册到vue中 任何一个vue组件都可以使用
import * as utils from '@/utils/utils'

Vue.prototype.utils = utils

//引入element ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

//引入less
import less from 'less'
Vue.use(less)

//引入自定义的组件
import common from '@/components/common/sn/snCommon'
Vue.use(common)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


