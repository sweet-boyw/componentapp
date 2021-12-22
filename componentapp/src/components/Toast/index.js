/*
 * @Author: your name
 * @Date: 2021-12-18 20:53:31
 * @LastEditTime: 2021-12-22 09:41:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\components\Toast\index.js
 */
import Toast from './Toast.vue'

export default {
    getInstance:(function(){
        var toastance = null
        return function(Vue){
            if(!toastance){
                toastance = new (Vue.extend(Toast))
                toastance.$mount(document.createElement('div'))
                document.body.appendChild(toastance.$el)
            }
            return toastance
        }
    })(),
    install(Vue){
        var timer = null
        Vue.prototype.$toast = (opt) =>{
            var toastance = this.getInstance(Vue)
            if(typeof opt === String && arguments.length == 1) opt = { message: opt}
            toastance.message = opt || ''
            toastance.IsShow = true

            clearTimeout(timer)
            timer = setTimeout(() => {
                toastance.IsShow = false
            }, 2000);
        }
    }
}