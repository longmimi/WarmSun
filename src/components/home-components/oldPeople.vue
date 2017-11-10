<template>
  <div class="grid-content bg-oldman">
    <div class="oldman">
      <el-carousel height="160px" indicator-position="none">
        <el-carousel-item v-for="(item,index) in oldmanImages"  :key="item.name" class="carousel-item">
          <img :src="item.src" :alt="item.name" class="oldmanPic">                         
        </el-carousel-item>
        <!-- <div class="oldmanTitle">
            <span>需要帮助的老人们</span>
        </div> -->
      </el-carousel>                             
    </div><!-- oldman_end -->                                  
  </div>
</template>

<script>

export default {
  name: 'oldPeople',
  data () {
    return {
      oldmanImages: [{
          "name": "oldman1",
          "src": require("../../assets/oldman/oldman1.jpg")
      }, {
          "name": "oldman2",
          "src": require("../../assets/oldman/oldman2.jpg")
      }, {
          "name": "oldman3",
          "src": require("../../assets/oldman/oldman3.jpg")
      }, {
          "name": "oldman4",
          "src": require("../../assets/oldman/oldman4.jpg")
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
  .bg-oldman {
      background-color: rgba(255, 255, 255, 0.8);
      height: 160px;
      padding: 0;
  }
  .oldmanPic {
    width: 100%;
    /* height: 140px; */
    cursor:pointer;
  }
</style>