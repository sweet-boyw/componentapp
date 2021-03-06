/*
 * @Author: your name
 * @Date: 2021-12-02 13:40:05
 * @LastEditTime: 2021-12-22 10:13:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import Toast from '@/components/Toast'
Vue.use(Toast)

import ToDo from '@/components/ToDo'
Vue.use(ToDo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
