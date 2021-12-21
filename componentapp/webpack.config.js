/*
 * @Author: your name
 * @Date: 2021-12-20 15:36:01
 * @LastEditTime: 2021-12-20 16:07:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\webpack.config.js
 */
const path = require('path')

module.exports = {
    // 打包项目入口
    entry:'./src/main.js',
    // 项目打包出口
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'development'
}