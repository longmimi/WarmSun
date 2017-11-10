<template>
<div>
    <div class="log_container">
        <el-row :gutter="10" type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="12">
                <div class="grid-content commonCenter logForm">
                    <div class="reg-header"><span>欢迎登录暖夕阳</span></div>
                    <loginForm></loginForm>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import loginForm from '../components/loginForm.vue'
export default {
    name:'registerForm',
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('昵称不能为空'));
        }
        setTimeout(() => {
          var re = /[^\u4e00-\u9fa5]/; 
          if (re.test(value)) {
            callback(new Error('您的昵称必须是中文'));
          } else {            
              callback();         
          }
        }, 500);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
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
        dynamicValidateForm: {
          email: ''
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]      
      }
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
      components:{
      loginForm
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
