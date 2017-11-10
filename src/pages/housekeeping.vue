<template>
  <div id="about">
    <div class="content">       
      <el-card class="box-card">
        <div class="toc">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </div>
        

        <!-- housekeepingCard -->
        <div class="housekeepingContent">
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }" class="housekeepingCard">
              <img src="../assets/bg1.jpg" class="image">
              <div style="padding: 14px;">
                <span>家政服务</span>
                <div class="bottom clearfix">
                  <time class="fee">{{ fee }}</time>
                  <el-button type="text" class="button">服务详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </div>
        <!-- housekeepingCard_end -->
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      fee:"unKnown",
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{

  }
}
</script>

<style>
  .housekeepingContent{
    float: right;
    width: 90%;
    margin-bottom: 60px;
  }
  .toc{
    float: left;
  }
  .housekeepingCard{
    margin: 10px;
  }
  .content{
    width: 80%;
    margin: 2% auto;
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>