<!--
 * @Author: your name
 * @Date: 2021-12-06 13:57:43
 * @LastEditTime: 2021-12-06 14:41:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \componentapp\componentapp\src\views\registerPage.vue
-->
<template>
   <div>
       <div class="title">
           <p>注册</p>
       </div>
       <van-form>
           <van-field name="uploader" label="上传头像">
               <template #input>
                   <van-uploader v-model="uploader" />
               </template>
           </van-field>
           <van-cell-group>
               <van-field
                       v-model="phone"
                       required
                       label="手机号"
                       placeholder="请输入手机号"
                       :rules="[
                         { required: true },
                         { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
               />
               <van-field
                       v-model="sms"
                       center
                       clearable
                       label="短信验证码"
                       placeholder="请输入短信验证码"
               >
                   <template #button>
                       <van-button size="small" type="primary">发送验证码</van-button>
                   </template>
               </van-field>
               <van-field
                       v-model="password"
                       required
                       type="password"
                       label="密码"
                       placeholder="请输入密码"
               />
               <van-field
                       v-model="password1"
                       required
                       type="password"
                       label="确认密码"
                       placeholder="请再次输入密码"
               />
           </van-cell-group>
           <van-field
                   readonly
                   clickable
                   name="picker"
                   :value="value"
                   label="选择地区"
                   placeholder="点击选择城市"
                   @click="showPicker = true"
           />
           <van-popup v-model="showPicker" position="bottom">
               <van-picker
                       show-toolbar
                       :columns="columns"
                       @confirm="onConfirm"
                       @cancel="showPicker = false"
               />
           </van-popup>
       </van-form>
       <div style="margin: 16px">
           <van-button round block type="info" native-type="submit" @click="onsubmit">注册</van-button>
       </div>
   </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                phone:'',
                sms:'',
                password:'',
                password1:'',
                uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
                value: '',
                columns: ["城中区", "鱼峰区", "柳南区", "柳北区", "柳江区"],
                showPicker: false,
            };
        },
        methods: {
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            },
            tologin(){
                this.$router.go(-1);
            },
            onsubmit(){
                if(this.phone==""||this.sms==""||this.password==""||this.password1==""){
                    Toast('注册失败！信息未完善');
                }
                else if(this.password!=this.password1){
                    Toast('密码输入两次不一致！');
                }
                else{
                    Toast.success('注册成功');
                    this.$notify({
                        type: "success",
                        message: "注册成功，3s后返回登录",
                        duration: 3000,
                    });
                    setTimeout(() => {
                        sessionStorage.clear("regis");
                        this.$router.go(-1);
                    }, 3000);
                }
            }
        },
    };
</script>

<style lang='scss' scoped>
.icon-back{
    position: absolute;
    left: 2px;
    top:15px
}
.title{
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
</style>