<template>
  <div id="home">
    <div class="content">
        <el-row :gutter="20">
          <el-col :lg="6" :md="6" :sm="24" :xs="24"><!-- 最左 -->
            <div class="grid-content bg-jzfw ">
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="日期"
                      width="100%">
                    </el-table-column>
                </el-table>
                <!-- <div class="blurBox"></div> -->
            </div>
          </el-col><!-- 最左end -->
          <el-col :lg="14" :md="14" :sm="24" :xs="24"><!-- 中间 -->
            <div class="grid-content bg-purple">

              <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                  <div class="grid-content bg-weather ">
                    天气预报
                    <!-- <div class="blurBox"></div> -->
                  </div>
                </el-col>
              
              </el-row>

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
                                            <el-carousel height="160px">
                                                <el-carousel-item v-for="(pic,index) in oldmanImages"  class="carousel-item">
                                                  <img :src="pic.src" :alt="pic.name" class="oldmanPic">                         
                                                </el-carousel-item>
                                                <div class="oldmanTitle">
                                                    <span>需要帮助的老人们</span>
                                                </div>
                                              </el-carousel>                             
                                        </div>                                  
                                    </div>
                                  </el-col>
                                  <el-col :lg="1" :md="1":sm="1" :xs="1"><div class="grid-content bg-liubai"></div></el-col>
                                  <el-col :lg="11" :md="11" :sm="11" :xs="11">
                                    <div class="grid-content bg-volunteer"> 
                                        <div class="volunteer">
                                            <el-carousel height="160px">
                                                <el-carousel-item v-for="(item,index) in volunteerImages"  class="carousel-item">
                                                  <img :src="item.src" :alt="item.name" class="oldmanPic">                         
                                                </el-carousel-item>
                                                <div class="oldmanTitle">
                                                  <span>无私的志愿者</span>
                                                </div>
                                            </el-carousel>                                            
                                        </div>  
                                    </div>
                                  </el-col>
                                </el-row>
                                <el-row><!-- 活动空间 -->
                                  <el-col :lg="23" :md="23":sm="24" :xs="24">
                                    <div class="grid-content bg-activities">
                                      <nav class="grid-content activitiesTitle"><h3>活动空间</h3>
                                      </nav> 
                                      <ul class="grid-content activitesContent">
                                         <li v-for="(cont,index) in activitesList" class="activitesList">
                                              <a class="activites-article-title"><span>></span>
                                                {{cont.title}}
                                              </a>                                    
                                            <p><a class="activites-article-content" href="#">
                                              {{cont.content}}
                                            </a></p>
                                          </li>
                                        </ul> 
                                        <!-- <div class="blurBox"></div>                               -->
                                    </div>
                                  </el-col>
                                </el-row><!-- 活动空间end -->
                            </div>
                          </el-col>

                          <el-col :lg="9" :md="9" :sm="24" :xs="24"><div class="grid-content bg-zczs">zczs</div></el-col>
                      </el-row>
                  </div>
                </el-col>
              </el-row>

            </div>
          </el-col><!-- 中间end -->
          <!-- 最右列 -->
          <el-col :lg="4" :md="4" :sm="24" :xs="24">
            <div class="grid-content bg-right-info">
                <el-row>
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="grid-content bg-person-center">person-center                                
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="grid-content bg-tongzhi">tongzhi                                
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="grid-content bg-about">  about                              
                    </div>
                  </el-col>
                </el-row>
            </div>
          </el-col>
          <!-- end最右列 -->
        </el-row>
    </div><!-- content_end -->
  </div><!-- home_end -->
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                oldmanImages: [{
                    "name": "oldman1",
                    "src": require("../assets/oldman/oldman1.jpg")
                }, {
                    "name": "oldman2",
                    "src": require("../assets/oldman/oldman2.jpg")
                }],
                volunteerImages: [{
                    "name": "volunteer1",
                    "src": require("../assets/volunteer/volunteer1.jpg")
                }, {
                    "name": "volunteer2",
                    "src": require("../assets/volunteer/volunteer2.jpg")
                }],
                activitesList: [{
                    title: "活动一",
                    content: "重视老年人的心理健康问题。"
                }, {
                    title: "活动一",
                    content: "重视老年人的心理健康问题。"
                }, {
                    title: "活动一",
                    content: "重视老年人的心理健康问题"
                }]
            };
        },
        methods: {

        },
        components: {

        }
    }
</script>

<style>
    .content {
        width: 90%;
        margin: 0 auto;
        margin-top: 40px;
        text-align: center;
        z-index: 1;
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
        background: white;
        height: 160px;
        z-index: 1;
        position: relative;
        overflow: hidden;
    }
    
    
    .bg-jzfw {
        background: white;
        height: 600px;
        z-index: 1;
        position: relative;
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
        background: white;
    }
    
    .bg-oldman {
        background: white;
        height: 160px;
        padding: 0;
    }
    
    .bg-volunteer {
        background: white;
        height: 160px;
    }
    
    .bg-activities {
        background: white;
        height: 240px;
        z-index: 1;
        position: relative;
        overflow: hidden;
        /* background-color: rgba(255, 255, 255, 0.8); */
    }
    
    .bg-right-info {
        height: 600px;
    }
    
    .bg-person-center {
        background: white;
        height: 160px;
    }
    
    .bg-tongzhi {
        background: white;
        height: 240px;
    }
    
    .bg-about {
        background: white;
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
        border-radius: 5px;
    }
    
    .activitiesTitle {
        width: 90%;
        margin-bottom: 8px;
    }
    
    .activitiesTitle h3 {
        display: block;
        position: absolute;
        top: 15px;
        left: 20px;
        font-weight: bond;
        /* color: #FFFFFF; */
    }
    
    .activitesContent {
        box-sizing: border-box;
        width: 99%;
        height: 200px;
        padding: 10px;
        overflow: hidden;
    }
    
    .activitesList span {
        /* color: #FFFFFF; */
    }
    
    .activitesList {
        border-bottom: 1px dashed #ccc;
    }
    
    .activites-article-title {
        display: block;
        width: 100%;
        text-align: left;
        text-indent: 10px;
        /* color: #FFFFFF; */
    }
    
    .activites-article-title:hover {
        color: red;
        cursor: pointer;
    }
    
    .activites-article-content {
        display: block;
        width: 100%;
        padding: 5px;
        word-wrap: break-word;
        text-align: left;
        text-indent: 20px;
        /* color: #FFFFFF; */
    }
    
    .activites-article-content:hover {
        color: #c90;
        text-decoration: underline;
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



</style>