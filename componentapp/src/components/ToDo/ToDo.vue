<!--
 * @Author: your name
 * @Date: 2021-12-22 10:02:17
 * @LastEditTime: 2021-12-22 10:33:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\src\components\ToDo\ToDo.vue
-->
<template>
    <div class="main">
        <div class="todo">{{msg}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'',
            isShow:false
        }
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
.todo{
    width: 150px;
    height: 40px;
    line-height: 40px;
    position: fixed;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, 0.35);
    padding: 0.2rem;
    border-radius: 0.5rem;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 1rem;
}
</style>