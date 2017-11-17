<template>
  <div id="profileHeader">
    <div class="profileHeader-headImg">
      <img src="../assets/headImg.jpg" alt="headImg">
    </div>
    <div class="profileHeader-title">
      <main class="profileId">userId</main>
      <el-button type="info" plain class="profileEditInfo">编辑信息</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profileHeader',
  data () {
    return {

    };
  },
  methods: {

  },
  mounted: function(){

  },
  components:{

  }
}
</script>

<style>
  #profileHeader{
    width: 100%;
    background: url(../assets/bg1.jpg);
    overflow: hidden;
  }
  .profileHeader-headImg{
    width: 112px;
    height: 112px;
    margin: 50px auto 0 auto;
  }
  .profileHeader-headImg img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 6px solid rgba(255, 255, 255, 0.4);
  }
  .profileHeader-headImg img:hover{
    border: 6px solid rgba(255, 255, 255, 0.6);
  }
  .profileHeader-title{
    margin: 10px;
  }
  .profileHeader-title .profileId{
    text-align: center;
    color: #E6EBF5;
  }
  .profileEditInfo{
    float: right;
    margin-bottom: 10px;
  }
</style>
