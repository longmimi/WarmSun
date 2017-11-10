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
                                        <oldPeople></oldPeople>                               
                                    </div>
                                  </el-col>
                                  <el-col :lg="1" :md="1":sm="1" :xs="1"><div class="grid-content bg-liubai"></div></el-col>
                                  <el-col :lg="11" :md="11" :sm="11" :xs="11">
                                    <volunteer></volunteer>
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
                    <personCenter></personCenter>
                  </el-col>
                </el-row><!-- person-center_end --> 
                <el-row><!-- tongzhi -->
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <notice></notice>
                  </el-col>
                </el-row><!-- tongzhi_end -->
                <el-row><!-- about -->
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <about></about>
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
import housekeeping from '../components/home-components/housekeeping.vue'
import weather from '../components/home-components/weather.vue'
import activities from '../components/home-components/activities.vue'
import policy from '../components/home-components/policy.vue'
import oldPeople from '../components/home-components/oldPeople.vue'
import volunteer from '../components/home-components/volunteer.vue'
import personCenter from '../components/home-components/personCenter.vue'
import about from '../components/home-components/about.vue'
import notice from '../components/home-components/notice.vue'
import axios from 'axios'
    export default {
        name: 'home',
        data() {
            return {
                
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
            policy,
            oldPeople,
            volunteer,
            personCenter,
            about,
            notice
        }
    }
</script>

<style>
    .content {
        width: 80%;
        margin: 2% auto;
        margin-top: 40px;
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
    .bg-right-info {
        height: 600px;
    }  
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>