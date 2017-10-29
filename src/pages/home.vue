<template>
  <div id="home">
    <div class="content">
        <el-row :gutter="20">
          <el-col :lg="6" :md="6" :sm="24" :xs="24"><!-- 最左 -->
            <div class="grid-content bg-jzfw ">
                <nav class="grid-content boxTitle"><h3>家政服务</h3>
                </nav> 
                <ul class="grid-content activitesContent">
                    <li v-for="(cont,index) in housekeepingList" class="activitesList">
                      <a class="activites-article-title">
                        {{cont.title}}
                      </a>                                    
                      <p><a class="activites-article-content" href="#">
                      {{cont.content}}
                      </a></p>
                      <a href="#" class="moreInfo">了解更多>></a>
                      <a href="#" class="moreInfoFirm">XXX家政公司</a>
                    </li>
                </ul> 
                <!-- <div class="blurBox"></div> -->
            </div>
          </el-col><!-- 最左end -->
          <el-col :lg="14" :md="14" :sm="24" :xs="24"><!-- 中间 -->
            <div class="grid-content bg-purple">

              <el-row><!-- 天气预报 -->
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                  <div class="grid-content bg-weather ">
                    <div class="weatherContent">
                        <div id="locationWeatherInfo" class="weaterInfo">
                            <div id="cnty">{{cnty}}</div>
                            <div id="admin_area">{{admin_area}}</div>
                            <div id="location">{{location}}</div>
                            <div id="loc">更新时间{{loc_time}}</div>
                        </div>
                        <div id="tommorow" class="weaterInfo">
                            <p>明天</p>
                            <div id="tmp_max">最高温度:{{tmp_max0}}℃</div>
                            <div id="tmp_max">最低温度:{{tmp_min0}}℃</div>
                            <div id="cond_txt_d">白天:{{cond_txt_d0}}</div>
                            <div id="cond_txt_n">夜晚:{{cond_txt_n0}}</div>
                        </div>
                        <div id="afterTommorow" class="weaterInfo">
                            <p>后天</p>
                            <div id="tmp_max">最高温度:{{tmp_max1}}℃</div>
                            <div id="tmp_max">最低温度:{{tmp_min1}}℃</div>
                            <div id="cond_txt_d">白天:{{cond_txt_d1}}</div>
                            <div id="cond_txt_n">夜晚:{{cond_txt_n1}}</div>
                        </div>
                        <div id="twoDaysAfterTommorow" class="weaterInfo">
                            <p>大后天</p>
                            <div id="tmp_max">最高温度:{{tmp_max2}}℃</div>
                            <div id="tmp_max">最低温度:{{tmp_min2}}℃</div>
                            <div id="cond_txt_d">白天:{{cond_txt_d2}}</div>
                            <div id="cond_txt_n">夜晚:{{cond_txt_n2}}</div>
                        </div>
                    </div>
                    <!-- <div class="blurBox"></div> -->
                  </div>
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
                                    <div class="grid-content bg-activities">
                                        <nav class="grid-content boxTitle"><h3>活动空间</h3>
                                        </nav> 
                                        <ul class="grid-content activitesContent">
                                            <li v-for="(cont,index) in activitesList" class="activitesList">
                                              <a class="activites-article-title">
                                                {{cont.title}}
                                              </a>                                    
                                              <p><a href="#" class="activites-article-content">
                                                  {{cont.content}}
                                              </a>
                                              </p>
                                              <a href="#" class="moreInfo">了解更多>></a>
                                            </li>
                                        </ul> 
                                        <!-- <div class="blurBox"></div>                               -->
                                    </div>
                                  </el-col>
                                </el-row><!-- 活动空间end -->
                            </div>
                          </el-col>

                        <el-col :lg="9" :md="9" :sm="24" :xs="24">
                            <div class="grid-content bg-zczs">
                                <nav class="grid-content boxTitle"><h3>政策展示</h3>
                                </nav> 
                                <ul class="grid-content activitesContent">
                                    <li v-for="(cont,index) in policyList" class="activitesList">
                                      <a class="activites-article-title">
                                        {{cont.title}}
                                      </a>                                    
                                      <p><a class="activites-article-content" href="#">
                                      {{cont.content}}
                                      </a></p>
                                      <a href="#" class="moreInfo">了解更多>></a>
                                    </li>
                                </ul> 
                            </div>
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
import axios from 'axios'
    export default {
        name: 'home',
        data() {
            return {
                userId: "王小五",
                // 天气相关>>>>>>>>
                cnty: "中国",
                admin_area: "陕西",
                location: "西安",
                loc_time: "null",
                tmp_max0: null,tmp_min0: null,cond_txt_d0: null,cond_txt_n0: null,
                tmp_max1: null,tmp_min1: null,cond_txt_d1: null,cond_txt_n1: null,
                tmp_max2: null,tmp_min2: null,cond_txt_d2: null,cond_txt_n2: null,//<<<<天气相关
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
                activitesList: [{
                    title: "活动一",
                    content: "重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健康问题。"
                }, {
                    title: "活动一",
                    content: "重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理。"
                }],
                policyList: [{
                    title: "政策一",
                    content: "政策内容政策内容政策内容政策内政策内容政策内容政策政策内容政策内容政策容。"
                }, {
                    title: "政一",
                    content: "政策内容政策内容政策内容政策内容政策内容政策政策内容政策内容政策政策内容。"
                }, {
                    title: "政策一",
                    content: "政策内容政策内容政策内容政策内容政策政策内容政策内容政策政策内容政策内容政策政策内容政策内容。"
                }, {
                    title: "政策",
                    content: "政策内容政策内容政策政策内容政策内容政策政策内容政策内容政策政策内容政策内容政策内容政策内容。"
                }],
                housekeepingList: [{
                    title: "服务一",
                    content: "服务服务内容服务内容服务内容服务内容服务内容服务内容服务内容内容。"
                }, {
                    title: "服务二",
                    content: "服务服务内容服务内容服务内容服务内容服务内容服服务服务内容服务内容服务内容服务内容服务内容服务内容服务内容内容。务内容服务内容内容。"
                }, {
                    title: "服务三",
                    content: "服务服务内容服内容服务内容服务内容服务内容服务内容"
                }, {
                    title: "服务二",
                    content: "服务服务内容服务内容服务内容服务内容服务内容服服务服务内容服务内容服务内容服务内容服务内容服务内容服务内容内容。务内容服务内容内容。"
                }, {
                    title: "服务三",
                    content: "服务服务内容服内容服务内容服务内容服务内容服务内容"
                }]
            };
        },
        methods: {
            
        },
        mounted: function(){
            // if (navigator.geolocation)
            // {
            // }
            // 调用和风天气>>>>>>>>>>
            var that=this;
            axios.get("https://free-api.heweather.com/v5/forecast?city="+'西安'+"&key=76812a8c325b4245b40df89de7e6caea")
            .then(function(res){
                console.log(res.data.HeWeather5[0]);
                that.loc_time=res.data.HeWeather5[0].basic.update.loc;
                that.tmp_max0=res.data.HeWeather5[0].daily_forecast[0].tmp.max;
                that.tmp_min0=res.data.HeWeather5[0].daily_forecast[0].tmp.min;
                that.cond_txt_d0=res.data.HeWeather5[0].daily_forecast[0].cond.txt_d;
                that.cond_txt_n0=res.data.HeWeather5[0].daily_forecast[0].cond.txt_n;
                that.tmp_max1=res.data.HeWeather5[0].daily_forecast[1].tmp.max;
                that.tmp_min1=res.data.HeWeather5[0].daily_forecast[1].tmp.min;
                that.cond_txt_d1=res.data.HeWeather5[0].daily_forecast[1].cond.txt_d;
                that.cond_txt_n1=res.data.HeWeather5[0].daily_forecast[1].cond.txt_n;
                that.tmp_max2=res.data.HeWeather5[0].daily_forecast[2].tmp.max;
                that.tmp_min2=res.data.HeWeather5[0].daily_forecast[2].tmp.min;
                that.cond_txt_d2=res.data.HeWeather5[0].daily_forecast[2].cond.txt_d;
                that.cond_txt_n2=res.data.HeWeather5[0].daily_forecast[2].cond.txt_n;
            })//<<<<<<<<<<<<<调用和风天气
        },
        components: {

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
    
    .bg-weather {
        background-color: rgba(255, 255, 255, 0.8);
        height: 160px;
        z-index: 1;
        position: relative;
        overflow: hidden;
    }
    
    
    .bg-jzfw {
        background-color: rgba(255, 255, 255, 0.8);
        height: 600px;
        overflow: hidden;
    }
    
    .bg-other {
        height: 420px;
    }
    
    .bg-left {
        height: 420px;
        margin-right: -10px;
    }
    
    .bg-zczs {
        height: 420px;
        background-color: rgba(255, 255, 255, 0.8);
        overflow: hidden;
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
    
    .bg-activities {
        /* background: #fff; */
        height: 240px;
        z-index: 1;
        position: relative;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.8);
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
    
    .boxTitle {
        width: 100%;
        height: 50px;
        background-color: rgba(255, 255, 255, 0.4);
    }
    
    .boxTitle h3 {
        margin-left: 20px;
        line-height: 50px;
        color: #2D2F33;
        font-size: 16px;
    }
    
    .activitesContent {
        box-sizing: border-box;
        width: 100%;
        padding: 0 18px;
    }
    
    
    .activitesList {
        list-style-type: none;
        margin: 8px 0;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 6px;
        overflow: hidden;
        border-radius: 5px;
        transition: box-shadow 0.3s ease;
        transition: border 0.3s ease;
    }
    .activitesList:hover {
        border-left: 6px solid #ff7761;
        box-shadow: -3px 3px 6px #CBCBCB;
    }
    
    .activites-article-title {
        display: block;
        width: 100%;
        text-align: left;
        text-indent: 10px;
        color: #5A5E66;
        font-size: 16px;
        transition: color 0.3s ease;
    }
    
    .activites-article-title:hover {
        color: #B4BCCC;
        cursor: pointer;
    }
    
    .activites-article-content {
        display: block;
        width: 100%;
        padding: 5px;
        word-wrap: break-word;
        text-align: left;
        text-indent: 1em;
        color: #878D99;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
    }
    
    .moreInfo{
        float: right;
        font-size: 12px;
        margin: 4px;
        transition: color 0.3s ease;
    }
    .moreInfo:hover{
        color:#ccc;
    }
    .moreInfoFirm{
        float: left;
        font-size: 12px;
        margin: 4px 12px;
    }
    .weaterInfo{
        float: left;
        padding: 4px;
        width: 20%;
        height: 120px;
        margin: 16px 0 0 7px;
        text-align: center;
        line-height: 24px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        color: #878D99;
        font-size: 14px;
    }
    .weatherContent{
        display: flex;
        justify-content: center;
        align-items: center;
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