<template>
  <div id="footer">
      <div>{{motto}}</div>
      <div>Designed with  by <a href="#" target="_blank">{{teamName}}</a> for developers</div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      motto:"养老从暖夕阳开始",
      teamName:"NXY Team"
    };
  },
  methods: {
    
  }
}
</script>

<style>
  #footer{
    width: 100%;
    height: 40px;
    background-color: #2D3D48;
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 16px;
    flex: 0 0 auto;
  }
  a{
    text-decoration: none;
    color: #B5B5B5;
  }
</style>
