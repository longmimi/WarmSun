<template>
  <div id="personCenter">
    <div class="content">
      <el-card class="box-card">
        <profileHeader></profileHeader>
        <profileContent></profileContent>
      </el-card>
    </div>
  </div>
</template>

<script>
import profileHeader from '../components/profileHeader.vue'
import profileContent from '../components/profileContent.vue'
import axios from 'axios'
export default {
  name: 'personCenter',
  data () {
    return {

    };
  },
  methods: {

  },
  mounted: function(){

  },
  components:{
    profileHeader,
    profileContent
  }
}
</script>

<style>
  .content{
    width: 80%;
    margin: 2% auto;
  }

</style>
