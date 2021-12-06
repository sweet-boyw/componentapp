/*
 * @Author: your name
 * @Date: 2021-12-02 13:40:05
 * @LastEditTime: 2021-12-06 11:15:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:() => import('@/views/Home'),
    children:[
      {
        path:'/search',
        name:'searchPage',
        component:() => import('@/views/searchPage')
      },
      {
        path:'/center',
        name:'centerPage',
        component:() => import('@/views/centerPage')
      },
      {
        path:'/',
        name:'homePage',
        component:() => import('@/views/homePage')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
