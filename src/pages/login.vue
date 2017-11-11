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
    return {
      }
    },
    methods: {
    
    },
    components:{
    loginForm
  }
}
</script>

<style>
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
