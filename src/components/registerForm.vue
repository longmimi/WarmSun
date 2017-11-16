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
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
            <el-input v-model.number="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item class="reg-btn-group-center">
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        <el-form-item class="reg-btn-group-center">
           <router-link :to="{name:'login'}" tag="a">已有账号？去登录>></router-link>
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
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('昵称不能为空'));
        }
        // setTimeout(() => {
        //   var re = /[^\u4e00-\u9fa5]/;
        //   if (re.test(value)) {
        //     callback(new Error('您的昵称必须是中文'));
        //   } else {
        //       callback();
        //   }
        // }, 500);
        callback();
      };
      var validatePass = (rule, value, callback) => {
        // var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        var re = /^[0-9A-Za-z]{8,16}$/;
          if (!re.test(value)) {
            callback(new Error('请输入8-16位字母或数字的密码'));
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
        ruleForm2: {
          email:'',
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    submitForm(formName) {
        let user=this.$refs[formName].model;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('验证成功，开始发送注册请求');
            // console.dir(user);
            let formData={
              email:user.email,
              password:user.pass,
              name:user.name
            } ;
            //利用axios post 调用接口 www.xerus.cn/nanan/public/register
            //传入 this.$refs[formName].model.email

            axios.post('http://www.xerus.cn/nanan/public/register',formData)
            .then(res=>{
              console.dir(res.data);
              console.log(res.data);
              if(res.data.status==0){
              //请求成功,通知注册成功,然后跳转到主页
                  const h = this.$createElement;
                  this.$notify({
                    title: '恭喜您，注册成功',
                    message: h('i', { style: 'color: teal'}, '欢迎来到一个新的养老天地')
                  });
                  this.$router.push('/');
              }
            })
            .catch(error=>{
               alert(res.msg);
            });
          } else {
            alert('注册失败')
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
</style>
