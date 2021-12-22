/*
 * @Author: your name
 * @Date: 2021-12-22 09:44:54
 * @LastEditTime: 2021-12-22 10:24:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\src\requests\axios.js
 */
import axios from 'axios'

export default {
    Post:function(name,param){
        axios.post(name,param)
    }
}