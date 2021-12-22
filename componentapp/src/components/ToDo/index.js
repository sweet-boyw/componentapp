/*
 * @Author: your name
 * @Date: 2021-12-22 10:06:22
 * @LastEditTime: 2021-12-22 10:33:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\src\components\ToDo\index.js
 */
import ToDo from './ToDo.vue'

export default {
    gettodo:function(Vue){
        var todo = null
        if(!todo){
            todo = new (Vue.extend(ToDo))
            todo.$mount(document.createElement('div'))
            document.body.appendChild(todo.$el)
        }
        return todo
    },
    install(Vue){
        var timer = null
        Vue.prototype.$todo = (opt) =>{
            if(typeof opt === String && arguments.length == 1) opt = {msg:opt}
            var todo = this.gettodo(Vue)
            todo.msg = opt || ''
            todo.isShow = true
            clearTimeout(timer)
            timer = setTimeout(() => {
                todo.isShow = false
            }, 2000);
        }
    }
}