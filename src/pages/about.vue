<template>
  <div id="home">
    <div class="content">
      <el-row :gutter="16">
        <el-col :xs="24" :sm="16" :md="8" :lg="8"><div class="grid-content bg-purple">
          <div class="block">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 3" :key="item">
                <h3>政策{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4">
          <div class="grid-content bg-purple-dark">
            <h3>志愿服务简介</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4"><div class="grid-content bg-purple-dark"></div></el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4">
          <div class="grid-content bg-purple">
            <h3>天气</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4">
          <div class="grid-content bg-purple-dark">
            <h3>家政服务简介</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4"><div class="grid-content bg-purple"></div></el-col>
        <!-- 活动>>>>>>>>>>>>>>>>>>>>>>>> -->
        <el-col :xs="24" :sm="16" :md="8" :lg="8">
          <div class="grid-content bg-purple-dark">
            <div class="block">
              <el-carousel height="150px">
                <el-carousel-item v-for="(item,index) in activitisList" class="bgActivities">
                  <div class="activitis">
                    <h3>{{ item.tittle }}</h3>
                    <p>{{ item.content }} </p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>
        <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<活动 -->
        <el-col :xs="12" :sm="8" :md="4" :lg="4">
          <div class="grid-content bg-purple">
            <h3>关于暖夕阳</h3>
          </div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :lg="4"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      activitisList: [{
        tittle: "活动一",
        content: "活动一的内容啦啦啦啦啦。"
      }, {
        tittle: "活动二",
        content: "活动二哈哈哈哈哈哈哈哈。"
      }],
    };
  },
  methods: {
    
  },
  components:{
  }
}
</script>
<style>
  .content{
    width: 80%;
    margin: 6% auto;
  }
  .el-col {
    margin: 8px 0;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0px;
    min-height: 150px;
    text-align: center;
  }
  .grid-content h3{
    /* line-height: 150px; */
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .grid-content:hover{
    cursor: pointer;
    opacity: .6;
  }
  .bgActivities{
    background: url('../assets/hk2.jpg')
  }
</style>