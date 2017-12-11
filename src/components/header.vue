<template>
  <div id="header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <div class="logo" id="logo">
          <img src="../assets/logo.png" alt="logo">
          <b>暖</b>夕阳
        </div>  
        <el-menu-item index="1">
          <router-link :to="{name:'home'}">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">老人/志愿者</template>
          <router-link :to="{name:'oldpeople'}">
            <el-menu-item index="2-1">
              老人
            </el-menu-item>
          </router-link>
          <router-link :to="{name:'volunteer'}">
            <el-menu-item index="2-2">
              志愿者
            </el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="3">
          <router-link :to="{name:'policy'}">政策展示</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link :to="{name:'housekeeping'}">家政服务</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link :to="{name:'activities'}">活动空间</router-link>
        </el-menu-item>
        <el-submenu index="6">
          <template slot="title">关于我们</template>
          <el-menu-item index="6-1">微信</el-menu-item>
          <router-link :to="{name:'about'}">
            <el-menu-item index="6-2">
              关于我们
            </el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  #header{
    flex: 0 0 auto;
  }
  .logo{
    float: left;
    line-height: 55px;
    font-size: 30px;
    color: #475669;
    user-select: none;
  }
  .logo img{
    float: left;
    height: 20px;
    margin: 16px 6px 16px 20px;
  }
</style>
