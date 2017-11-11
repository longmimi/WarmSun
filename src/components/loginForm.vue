<template>
<div>
  <div class="el-form-padding">
     <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
            ]"
        >
            <el-input v-model="ruleForm2.email"></el-input>
        </el-form-item> 
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>            
        <el-form-item class="reg-btn-group-center">
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
        <el-form-item class="reg-btn-group-center">
           <router-link :to="{name:'register'}" tag="a">没有账号？去注册>></router-link>
        </el-form-item>
      </el-form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import home from '../pages/home.vue'
export default {
    name:'registerForm',
    data () {
      var validatePass = (rule, value, callback) => {
        var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/; 
          if (!re.test(value)) {
            callback(new Error('请输入8-16位字母数字组合的密码'));
          } 
        else if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
    return {
        ruleForm2: {
          email: '',
          pass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]    
      }
    }
  },
  methods: {
     submitForm(formName) {
        let user=this.$refs[formName].model;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log('验证成功，开始发送登录请求');
            // console.dir(user+'aaaaaaaaaa');
            let formData={
              email:user.email,
              password:user.password
            } ;
            //利用axios post 调用接口 www.xerus.cn/nanan/public/register 
            //传入 this.$refs[formName].model.email
            
            axios.post('www.xerus.cn/nanan/public/login',formData)
            .then(res=>{
            //   console.dir(res.data+'bbbbbbbbbbbbbbb');
            //   console.log(res.data.status+'cccccccccccccccc');
              
              if(res.status==0){
                //   console.log('nnnnnnnnnnnnnnn');
              //请求成功,通知登录成功,然后跳转到主页
                  const h = this.$createElement;
                  this.$notify({
                    title: '恭喜您，登录成功',
                    message: h('i', { style: 'color: teal'}, '欢迎来到一个新的养老天地')
                  });
                  this.$router.push('/');
              } 
            })
            .catch(error=>{
            //    console.log(error);
            });          
          } else {
            alert('登录失败')
            return false;
          }
        });
      }
  }
}
</script>

<style>
 .el-form-padding{
    padding:10px 50px 1px 50px;
    position: relative;
    right:18px;
}
.reg-btn-group-center{
    display: flex;
    justify-content: center;
    position: relative;
    right:20px;  
}
.log_container{
   margin:0 auto;
    width:60%;
    margin-top:5%;  
  }
.logForm{
    background: #fff;
    background:rgba(255,255,255,0.8);
}
.reg-header{
    text-align: center;
    padding:10px;
}
.reg-header span{
    font-family: Helvetica Neue;
    font-size:20px;
} 
</style>
