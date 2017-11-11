<template>
  <div class="grid-content bg-volunteer"> 
      <div class="volunteer">
          <el-carousel height="160px" indicator-position="none">
              <el-carousel-item v-for="(item,index) in volunteerImages"  :key="item.name" class="carousel-item">
                <img :src="item.src" :alt="item.name" class="oldmanPic">                         
              </el-carousel-item>
              <!-- <div class="oldmanTitle">
                <span>无私的志愿者</span>
              </div> -->
          </el-carousel>                                            
      </div><!-- volunteer_end -->
  </div>
</template>

<script>

export default {
  name: 'volunteer',
  data () {
    return {
      volunteerImages: [{
          "name": "volunteer1",
          "src": require("../../assets/volunteer/volunteer1.jpg")
      }, {
          "name": "volunteer2",
          "src": require("../../assets/volunteer/volunteer2.jpg")
      }, {
          "name": "volunteer3",
          "src": require("../../assets/volunteer/volunteer3.jpg")
      }, {
          "name": "volunteer4",
          "src": require("../../assets/volunteer/volunteer4.jpg")
      }]
    };
  },
  methods: {
    
  },
  components:{

  }
}
</script>

<style>
  .bg-volunteer {
    background-color: rgba(255, 255, 255, 0.8);
    height: 160px;
  } 
  .oldmanPic {
    width: 100%;
    /* height: 140px; */
    cursor:pointer;
  }
</style>