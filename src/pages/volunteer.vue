<template>
  <div id="about">
    <div class="content">       
       <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">志愿者展示</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'内容 ' + o } this is test
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      
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
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
</style>