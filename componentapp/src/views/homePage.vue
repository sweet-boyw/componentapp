<!--
 * @Author: your name
 * @Date: 2021-12-06 11:14:41
 * @LastEditTime: 2021-12-22 10:33:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEte=
 * @FilePath: \componentapp\componentapp\src\views\homePage.vue
-->
<template>
    <div>
        home
        <p>state:{{count.count}}</p>
        <button @click="hanlechangecount">点我</button>
        <img preview='2' src="@/assets/logo.png" alt="">
        <button @click="handletodo">todo</button>
    </div>
</template>
<script>
import '../assets/js/common'
export default {
    name:'homePage',
    data(){
        return{
            // count:0
        }
    },
    computed:{
        count(){
            return this.$store.state
        }
    },
    methods:{
        hanlechangecount(){
            this.$store.commit('handlecount')
            this.$dc.handleLog('aaaaaaaaaaaaaaa')
            this.$toast('hello world')
            console.log(this.$store.state.count)
        },
        handletodo(){
            this.$todo('this tood')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>