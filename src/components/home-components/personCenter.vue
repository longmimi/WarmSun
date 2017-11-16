<template>
  <div class="grid-content bg-person-center">
    <router-link :to="{ name: 'personCenter'}">
      <img src="../../assets/headImg.jpg" alt="headImg" class="headImg">
      <strong class="userId">{{userId}}</strong>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'personCenter',
  data () {
    return {
      userId: "Id"
    };
  },
  methods: {

  },
  components:{

  }
}
</script>

<style>
.bg-person-center {
  background-color: rgba(255, 255, 255, 0.8);
  height: 160px;
  text-align: center;
}
.bg-person-center .headImg{
  border: 6px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 4px;
  transition: border 0.3s ease;
}
.bg-person-center .headImg:hover{
  border: 8px solid rgba(255, 255, 255, 0.6);
}
.bg-person-center .userId{
  font-size: 14px;
  display: block;
  color: #5A5E66;
  transition: color 0.3s ease;
}
.bg-person-center .userId:hover{
  color: #878D99;
}
</style>
