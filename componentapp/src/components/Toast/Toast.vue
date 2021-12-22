<!--
 * @Author: your name
 * @Date: 2021-12-18 20:52:41
 * @LastEditTime: 2021-12-22 09:34:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\components\Toast\Toast.vue
-->
<template>
    <div class="main">
        <div class="toast" v-if="IsShow">{{message}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'',
            IsShow:false
        }
    }
}
</script>
<style lang="scss" scoped>
.toast{
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