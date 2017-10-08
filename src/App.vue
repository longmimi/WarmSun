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
      font-family: Hiragino Sans GB;
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
    background: url(./assets/bg.jpg);
    background-size:100% 100%;
  }
  /* <<<<<<<<<<<<<<<<<页面整体布局，固定header background，footer三部分 */

  
</style>
