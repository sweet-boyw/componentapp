/*
 * @Author: your name
 * @Date: 2021-12-02 13:40:05
 * @LastEditTime: 2021-12-13 17:40:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:21
  },
  mutations: {
    handlecount(state){
      state.count ++
    }
  },
  actions: {
    
  },
  modules: {
    
  }
})
