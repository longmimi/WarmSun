<template>
  <div id="home">
    <div class="content">
        <el-row :gutter="20">
          <el-col :lg="6" :md="6" :sm="24" :xs="24"><!-- 最左 -->
            <housekeeping></housekeeping>
          </el-col><!-- 最左end -->
          <el-col :lg="14" :md="14" :sm="24" :xs="24"><!-- 中间 -->
            <div class="grid-content bg-purple">

              <el-row><!-- 天气预报 -->
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                  <weather></weather>
                </el-col>
              
              </el-row><!-- 天气预报end -->

              <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                  <div class="grid-content bg-other">
                      <el-row :gutter="20">
                          <el-col :lg="15" :md="15" :sm="24" :xs="24">
                            <div class="grid-content bg-left">
                                <el-row>
                                  <el-col :lg="11" :md="11":sm="11" :xs="11">
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
                                  </el-col>
                                  <el-col :lg="1" :md="1":sm="1" :xs="1"><div class="grid-content bg-liubai"></div></el-col>
                                  <el-col :lg="11" :md="11" :sm="11" :xs="11">
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
                                  </el-col>
                                </el-row>
                                <el-row><!-- 活动空间 -->
                                  <el-col :lg="23" :md="23":sm="24" :xs="24">
                                    <activities></activities>
                                  </el-col>
                                </el-row><!-- 活动空间end -->
                            </div>
                          </el-col>
                        <el-col :lg="9" :md="9" :sm="24" :xs="24">
                            <policy></policy>
                        </el-col>
                      </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col><!-- 中间end -->
          <!-- 最右列 -->
          <el-col :lg="4" :md="4" :sm="24" :xs="24">
            <div class="grid-content bg-right-info">
                <el-row><!-- person-center --> 
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="grid-content bg-person-center">
                        <a href="#" class="userId">
                            <img src="../assets/headImg.jpg" alt="headImg" class="headImg">
                            <strong class="userId">{{userId}}</strong>
                        </a>                             
                    </div>
                  </el-col>
                </el-row><!-- person-center_end --> 
                <el-row><!-- tongzhi -->
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="grid-content bg-tongzhi icon-center">
                        <i class="el-icon-bell icon-size-big"></i>                       
                    </div>
                  </el-col>
                </el-row><!-- tongzhi_end -->
                <el-row><!-- about -->
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="grid-content bg-about icon-center"> 
                        <i class="el-icon-info icon-size-big"></i>                            
                    </div>
                  </el-col>
                </el-row><!-- about_end -->
            </div>
          </el-col>
          <!-- end最右列 -->
        </el-row>
    </div><!-- content_end -->
  </div><!-- home_end -->
</template>

<script>
import housekeeping from '../components/housekeeping.vue'
import weather from '../components/weather.vue'
import activities from '../components/activities.vue'
import policy from '../components/policy.vue'
import axios from 'axios'
    export default {
        name: 'home',
        data() {
            return {
                userId: "王小五",
                oldmanImages: [{
                    "name": "oldman1",
                    "src": require("../assets/oldman/oldman1.jpg")
                }, {
                    "name": "oldman2",
                    "src": require("../assets/oldman/oldman2.jpg")
                }, {
                    "name": "oldman3",
                    "src": require("../assets/oldman/oldman3.jpg")
                }, {
                    "name": "oldman4",
                    "src": require("../assets/oldman/oldman4.jpg")
                }],
                volunteerImages: [{
                    "name": "volunteer1",
                    "src": require("../assets/volunteer/volunteer1.jpg")
                }, {
                    "name": "volunteer2",
                    "src": require("../assets/volunteer/volunteer2.jpg")
                }, {
                    "name": "volunteer3",
                    "src": require("../assets/volunteer/volunteer3.jpg")
                }, {
                    "name": "volunteer4",
                    "src": require("../assets/volunteer/volunteer4.jpg")
                }],
            };
        },
        methods: {
            
        },
        mounted: function(){
            
        },
        components: {
            housekeeping,
            weather,
            activities,
            policy
        }
    }
</script>

<style>
    .content {
        width: 80%;
        margin: 2% auto;
        margin-top: 40px;
        /* text-align: center; */
        z-index: 1;
    }
    .carousel-item{
        border-radius: 5px;
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
    .bg-other {
        height: 420px;
    }
    
    .bg-left {
        height: 420px;
        margin-right: -10px;
    }
    .bg-oldman {
        background-color: rgba(255, 255, 255, 0.8);
        height: 160px;
        padding: 0;
    }
    
    .bg-volunteer {
        background-color: rgba(255, 255, 255, 0.8);
        height: 160px;
    } 
    .bg-right-info {
        height: 600px;
    }
    
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
    
    .bg-tongzhi {
        background-color: rgba(255, 255, 255, 0.8);
        height: 240px;
    }
    
    .bg-about {
        background-color: rgba(255, 255, 255, 0.8);
        height: 160px;
    }
    
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    
    .oldmanTitle {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
    }
    
    .oldmanTitle span {
        text-align: center;
    }
    
    .oldmanPic {
        width: 100%;
        /* height: 140px; */
        cursor:pointer;
    }
    .blurBox{
      position: absolute;
      width:500%;
      height:100%;
      margin-left:-50%;
      top:-10px;
      background:url(../assets/bg.jpg) no-repeat center center fixed  ;
      -webkit-filter: blur(30px);
      filter: blur(30px);
      z-index: -1;
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