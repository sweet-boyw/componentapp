<!--
 * @Author: your name
 * @Date: 2021-12-03 09:23:38
 * @LastEditTime: 2021-12-06 16:47:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\components\bottomBar.vue
-->
<template>
    <div>
        <ul>
            <router-link 
            v-for="(item,index) in menu" 
            :key="index" 
            :to="item.path" 
            tag="li">
                {{item.title}}
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'bottomBar',
    data(){
        return{
            menu:[
                {
                    title:'首页',
                    path:'/',
                    name:'homePage'
                },
                {
                    title:'搜索',
                    path:'/search',
                    name:'searchPage'
                },
                {
                    title:'我的',
                    path:'/center',
                    name:'centerPage'
                },
            ]
        }
    },
    methods:{
        handlechange(path){
            this.$router.push(path)
        }
    }
}
</script>
<style lang="scss" scoped>
ul{
    height: 5vh;
    display: flex;
    border-top: 1px solid #ccc;
    padding: 0;
    margin: 0;
    li{
        flex: 1;
        list-style: none;
        text-align: center;
        line-height: 5vh;
    }
}
</style>