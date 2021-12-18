/*
 * @Author: your name
 * @Date: 2021-12-16 09:35:46
 * @LastEditTime: 2021-12-18 20:16:36
 * @LastEditors: Please set LastEditors
 * @Description: 原型封装Date
 * @FilePath: \componentapp\componentapp\src\assets\js\common.js
 */
import Vue from 'vue'
const dc = {
    handleLog(opt){
        console.log(opt)
    }
}
Vue.prototype.$dc = dc