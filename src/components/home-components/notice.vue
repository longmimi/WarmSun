<template>
  <div class="grid-content bg-notice icon-center">
    <i class="el-icon-bell icon-size-big"></i>                       
  </div>
</template>

<script>

export default {
  name: 'notice',
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
.bg-notice {
  background-color: rgba(255, 255, 255, 0.8);
  height: 240px;
}
.icon-size-big{
    font-size: 60px;
    color: #878D99;
    transition: color 0.3s ease;
}
.icon-size-big:hover{
    color: #5A5E66;
}
.icon-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>