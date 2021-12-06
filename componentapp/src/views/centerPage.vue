<!--
 * @Author: your name
 * @Date: 2021-12-06 10:12:12
 * @LastEditTime: 2021-12-06 17:14:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\views\centerPage.vue
-->
<template>
    <div class="main">
        <div class="title">
            用户中心
            <p>state:{{count.count}}</p>
            <button @click="handlechange">点我</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'centerPage',
    data(){
        return{
            date:[]
        }
    },
    computed:{
        count(){
            return this.$store.state
        }
    },
    methods:{
        handlechange(){
            this.$store.commit('handlecount')
            console.log(this.$store.state.count)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>