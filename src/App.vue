<template>
  <div id="app">
    <nxyHeader></nxyHeader>

    <div class="background"><!-- background内部显示路由的不同页面 -->
      <router-view></router-view>
    </div><!-- background_end -->

    <nxyFooter></nxyFooter>
  </div>
</template>

<script>
import nxyHeader from './components/header.vue'
import nxyFooter from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {

    };
  },
  methods: {

  },
  components:{
    nxyHeader,
    nxyFooter
  }
}
</script>

<style>
  /* 页面整体布局，固定header background，footer三部分 >>>>>>>>>>>>>>>>*/
  *{
      font-family: "微软雅黑";
      margin: 0px;
      padding: 0px;
  }
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .background{
    flex: 1 0 auto;
  }
  /* <<<<<<<<<<<<<<<<<页面整体布局，固定header background，footer三部分 */

  /* 初始为测试效果添加，之后可删>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
  .content{
    width: 80%;
    margin: 10px auto;
    margin-top: 150px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 220px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<初始为测试效果添加，之后可删 */
</style>
