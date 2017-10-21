<template>
  <div id="home">
    <div class="content">
        <el-row :gutter="20">
          <el-col :lg="4" :xs="0"><div class="grid-content bg-liubai">liubai</div></el-col>
          <el-col :lg="4" :xs="8"><div class="grid-content bg-jzfw">jzfw</div></el-col>
          <el-col :lg="9" :xs="12">
            <div class="grid-content bg-purple">

              <el-row>
                <el-col :lg="24">
                  <div class="grid-content bg-weather">
                    <div class="weather">
                        天气插件
                    </div>
                  
                  </div>
                </el-col>
              
              </el-row>

              <el-row>
                <el-col :lg="24">
                  <div class="grid-content bg-other">
                      <el-row :gutter="20">
                          <el-col :lg="15">
                            <div class="grid-content bg-left">
                                <el-row>
                                  <el-col :lg="11">
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
                                  <el-col :lg="1"><div class="grid-content bg-liubai"></div></el-col>
                                  <el-col :lg="11">
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
                                <el-row>
                                  <el-col :lg="23">
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
                                    </div>
                                  </el-col>
                                </el-row>
                            </div>
                          </el-col>

                          <el-col :lg="9"><div class="grid-content bg-zczs">zczs</div></el-col>
                      </el-row>
                  </div>
                </el-col>
              </el-row>

            </div>
          </el-col>
          <el-col :lg="3" :xs="4">
            <div class="grid-content bg-right-info">
                <el-row>
                  <el-col :lg="24" :xs="24">
                    <div class="grid-content bg-person-center">person-center                                
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :lg="24" :xs="24">
                    <div class="grid-content bg-tongzhi">tongzhi                                
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :lg="24" :xs="24">
                    <div class="grid-content bg-about">  about                              
                    </div>
                  </el-col>
                </el-row>
            </div>
          </el-col>
          <el-col :lg="4" :xs="0"><div class="grid-content bg-liubai"></div></el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                oldmanImages: [{
                    "name": 1,
                    "src": require("../assets/oldman/1.jpg")
                }, {
                    "name": 2,
                    "src": require("../assets/oldman/2.jpg")
                }, {
                    "name": 3,
                    "src": require("../assets/oldman/3.jpg")
                }, {
                    "name": 4,
                    "src": require("../assets/oldman/4.jpg")
                }, {
                    "name": 5,
                    "src": require("../assets/oldman/5.jpg")
                }],
                volunteerImages: [{
                    "name": 1,
                    "src": require("../assets/volunteer/1.jpg")
                }, {
                    "name": 2,
                    "src": require("../assets/volunteer/2.jpg")
                }, {
                    "name": 3,
                    "src": require("../assets/volunteer/3.jpg")
                }, {
                    "name": 4,
                    "src": require("../assets/volunteer/4.jpg")
                }, {
                    "name": 5,
                    "src": require("../assets/volunteer/5.jpg")
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
        margin-top: 140px;
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
    }
    
    .bg-weather:before {
        -webkit-filter: blur(20px);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
    }
    
    .bg-jzfw {
        background: white;
        height: 600px;
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
        height: 140px;
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
    }
    
    .activitesContent {
        box-sizing: border-box;
        width: 99%;
        height: 200px;
        padding: 10px;
        overflow: hidden;
    }
    
    .activitesList span {
        color: green;
    }
    
    .activitesList {
        border-bottom: 1px dashed #ccc;
    }
    
    .activites-article-title {
        display: block;
        width: 100%;
        text-align: left;
        text-indent: 10px;
        color: black;
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
        color: black;
    }
    
    .activites-article-content:hover {
        color: #c90;
        text-decoration: underline;
    }
</style>