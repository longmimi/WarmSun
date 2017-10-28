<template>
  <div id="about">
    <div class="content">       
       <el-card class="box-card">
        <div class="aboutBox item">
          <h1 class="aboutHeader">关于</h1>
          <div class="aboutInfo text item">
            <h3>小标题</h3>
            <p>关于内容</p>
            <p>关于内容关于内容关于内容</p>
            <p>关于内容关于内容</p>
            <p>关于内容关于内容关于内容关关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容于内容关于内容</p>
            <h3>小标题</h3>
            <p>关于内容关于内容关于内容关于内容</p>
            <p>关于内容关于内容关于内容关于内容关于内容</p>
            <p>关于内关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容容</p>
            <p>关于内容关于内关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容容关于内容</p>
            <h3>小标题</h3>
            <p>关于内容关于内容</p>
            <p>关于内容关于内容关于内容关于内容关于内容</p>
            <p>关于内容关于内容关于内容关于内容</p>
            <p>关于内容关于内容关于内容关于内容关于内容</p>
            <p>关于内容关于内关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容关于内容容关于内容</p>
          </div>
        </div><!-- activitiesBox_end -->
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
    margin: 2% auto;
  }
  .text {
    font-size: 16px;
    line-height: 22px;
    color: #B4BCCC;
  }
  .aboutInfo p{
    text-indent: 2em;
  }
  .aboutInfo h3{
    color: #ff7761;
  }
  .item {
    padding: 18px 0;
  }
  .aboutBox{
    width: 80%;
    margin: 0 auto;
  }
  .aboutHeader{
    text-align: center;
    width: 60%;
    border-bottom: 2px solid #ff7761;
    margin: 0 auto;
    padding-bottom: 6px;
    color: #ff7761;
    transition: width 0.3s ease;
  }
  .aboutHeader:hover{
    width: 80%;
  }
  .aboutInfo{
    color: #878D99;
  }

</style>