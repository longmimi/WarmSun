<template>
    <div>
        <div class="reg_container">
            <el-row :gutter="10" type="flex" justify="center">
                <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="12">
                    <div class="grid-content commonCenter regForm">
                        <div class="reg-header"><span>欢迎注册暖夕阳</span></div>
                        <registerForm></registerForm>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import registerForm from '../components/registerForm.vue'
export default {
  name: 'register',
  data () {
    return {
         
        }
  },
  methods: {
     
    },
  components:{
      registerForm
  }
}
</script>

<style scoped>
.reg_container{
    margin:0 auto;
    width:60%;
    margin-top:5%;
}
.commonCenter{
    margin:0 auto;
}
.el-col {
    border-radius: 4px;  
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.regForm{
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
    