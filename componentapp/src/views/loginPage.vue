<!--
 * @Author: your name
 * @Date: 2021-12-06 13:56:07
 * @LastEditTime: 2021-12-06 14:29:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\views\loginPage.vue
-->
<template>
    <div class="main">
        <div class="logintitle">登录</div>
        <div class="loginform">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
            <div class="password">
                <van-field name="switch" label="记住我们">
                    <template #input>
                        <van-switch v-model="switchChecked" size="20" />
                    </template>
                </van-field>
            </div>
            <div class="submitbtn">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
            <div class="reg">
                <div>
                    <router-link tag="a" to="/">忘记密码？</router-link>
                </div>
                <div @click="toRegister">没有账号？立即注册</div>
            </div>
            </van-form>
        </div>
    </div>
</template>
<script>
export default {
    name:'centerPage',
    data(){
        return{
            username:'',
            password:'',
            switchChecked: false,
        }
    },
    methods:{
        onSubmit(values){
            console.log(values)
        },
        toRegister(){
            this.$router.push({
                path:'/register'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.logintitle{
    background-color: #20a1ff;
    color: #fff;
    width: 100vw;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
}
.submitbtn{
    margin: 16px;
}
.reg{
    text-align: center;
}
.loginform{
    margin-top: 10vh;
}
.reg{
    display: flex;
    flex-direction: row;
    div{
        flex: 1;
    }
}
a{
    color: #2c3e50;
}
</style>