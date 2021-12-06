<!--
 * @Author: your name
 * @Date: 2021-12-02 13:40:05
 * @LastEditTime: 2021-12-06 11:09:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\views\Home.vue
-->
<template>
  <div class="home">
    <main>
      <router-view></router-view>
    </main>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import bottomBar from '@/components/bottomBar'
export default {
  name: 'Home',
  components:{
    'bottom-bar':bottomBar
  }
}
</script>
<style lang="scss" scoped>
.home{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
main{
  flex: 1;
}
</style>