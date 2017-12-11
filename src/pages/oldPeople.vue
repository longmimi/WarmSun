<template>
  <div id="about">
    <div class="content">   
          <div class="volun-welcome">
            <h1 class="volun-welcome-word">暖夕阳的老人们</h1>
          </div>
            <div class="volun-select">
              <span class="volun-word">排序：</span>
              <el-select v-model="value5" multiple placeholder="请选择老人属性">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <div class="volun-tag">
                <span class="volun-word">请选择老人标签：</span>
                <el-tag class="volun-tag-word">标签一</el-tag>
                <el-tag class="volun-tag-word" type="success">标签二</el-tag>
                <el-tag class="volun-tag-word" type="info">标签三</el-tag>
                <el-tag class="volun-tag-word" type="warning">标签四</el-tag>
                <el-tag class="volun-tag-word" type="danger">标签五</el-tag>
              </div>
              
            </div>
            <div class="volun-content">
                <!-- <el-row>
                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4"
                    v-for="(item, index) in volunteerList" :key="item.id">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">
                          
                            <img :src='item.avatar' class="image">
                          
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{item.name}}</span>
                            <span class="volun volun-age">{{item.brth}}</span>
                            <div class="volun volun-job">职业：{{item.job}}</div>
                            <div class="volun volun-hobby">爱好：{{item.hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
                </el-row> -->
                <el-row>
                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">                       
                            <img :src='volunteerList[i].avatar' class="image">                     
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{volunteerList[i].name}}</span>
                            <span class="volun volun-age">{{volunteerList[i].brth}}</span>
                            <div class="volun volun-job">职业：{{volunteerList[i].job}}</div>
                            <div class="volun volun-hobby">爱好：{{volunteerList[i].hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
                

                
                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">                       
                            <img :src='volunteerList[i+1].avatar' class="image">                     
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{volunteerList[i+1].name}}</span>
                            <span class="volun volun-age">{{volunteerList[i+1].brth}}</span>
                            <div class="volun volun-job">职业：{{volunteerList[i+1].job}}</div>
                            <div class="volun volun-hobby">爱好：{{volunteerList[i+1].hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
                

              
                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">                       
                            <img :src='volunteerList[i+2].avatar' class="image">                     
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{volunteerList[i+2].name}}</span>
                            <span class="volun volun-age">{{volunteerList[i+2].brth}}</span>
                            <div class="volun volun-job">职业：{{volunteerList[i+2].job}}</div>
                            <div class="volun volun-hobby">爱好：{{volunteerList[i+2].hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
             


               
                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">                       
                            <img :src='volunteerList[i+3].avatar' class="image">                     
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{volunteerList[i+3].name}}</span>
                            <span class="volun volun-age">{{volunteerList[i+3].brth}}</span>
                            <div class="volun volun-job">职业：{{volunteerList[i+3].job}}</div>
                            <div class="volun volun-hobby">爱好：{{volunteerList[i+3].hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
              

               
                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">                       
                            <img :src='volunteerList[i+4].avatar' class="image">                     
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{volunteerList[i+4].name}}</span>
                            <span class="volun volun-age">{{volunteerList[i+4].brth}}</span>
                            <div class="volun volun-job">职业：{{volunteerList[i+4].job}}</div>
                            <div class="volun volun-hobby">爱好：{{volunteerList[i+4].hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>

                    <el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                      <router-link :to="{name:'policy'}">
                        <el-card class="volun-card">                       
                            <img :src='volunteerList[i+5].avatar' class="image">                     
                          <div style="padding: 4px;" class="volun-box">
                            <span class="volun volun-name">{{volunteerList[i+5].name}}</span>
                            <span class="volun volun-age">{{volunteerList[i+5].brth}}</span>
                            <div class="volun volun-job">职业：{{volunteerList[i+5].job}}</div>
                            <div class="volun volun-hobby">爱好：{{volunteerList[i+5].hobby}}</div>            
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
                </el-row>             
                
                <div class="pagination">
                    <div style="text-align:center;margin:10px auto">第{{page}}页 {{warning}}</div>
                    <el-button-group>
                      <el-button plain icon="el-icon-arrow-left" @click="prev()">上一页</el-button>
                      <el-button plain @click="next()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                    </el-button-group>
                </div>
            </div>       
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import policy from './policy.vue'
export default {
  name: 'about',
  data () {
    
    return {
        i: 0,
        page: 1,
        warning: null,
       options: [{
          value: '选项1',
          label: '按好评度'
        }, {
          value: '选项2',
          label: '按服务方向'
        }, {
          value: '选项3',
          label: '按服务时间'
        }],
        value5: [],
        volunteerList:[
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 75,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman1.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 72,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman2.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 69,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman3.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 71,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman1.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 80,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman2.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 72,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman5.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 76,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman3.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 66,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman5.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 80,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman2.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 72,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman1.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 69,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman3.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "李建国",
            brth: 60,
            job: '退休',
            sex: "",
            avatar: require('../assets/oldman/oldman3.jpg'),
            address: null,
            telphone: null,
            hobby: '下棋',
            created_at: "",
            updated_at: ""
          }
      ]
    };
  },
  methods: {
     prev(){
      if((this.page-1)>=1){
        this.i-=6;
        this.page--;
        this.warning=null;
      }
      else{
        this.warning="已经是第一页了";
      }
    },
    next(){
      console.log(this.page+1+'   '+this.volunteerList.length/6+'  '+this.volunteerList.length)
      if((this.page+1)<=Math.ceil(this.volunteerList.length/6)){
        this.i+=6;
        this.page++;
        this.warning=null;
      }
      else{
        this.warning="已经是最后一页了";
      }
    }
  },
  // mounted:function(){
  //   let formData={

  //   };
  //    axios.post('http://www.xerus.cn/nanan/public/volunteers',formData)
  //           .then(res=>{
  //             console.dir(res.data);
  //             console.log(res.data);
  //             this.volunteerList=res.data;
  //             // console.log(this.volunteerList[0].avatar+'nnnnnnnnnnnnnnnnnnnnnnnn');
              
  //           })
  //           .catch(error=>{
  //              alert(res.msg);
  //           });
  // },
  components:{
    policy
  }
}
</script>

<style>
.pagination{
  width:100%;
}
.el-button-group{
  display: flex;
  justify-content: center;
  margin: 10px auto;
}
.content{
    width: 80%;
    margin: 2% auto;
  }
.volun-welcome-word{
    color:bisque;
  }
.volun-select{
    margin:20px auto 30px;;
    padding:10px;
    border-radius: 5px;
    background: #fff;
    background:rgba(255,255,255,0.8);
  }
.volun-content{
    border-radius: 5px;
    padding:10px;
    background: #fff;
    background:rgba(255,255,255,0.8);
}
  /* .el-card__body{
    background: #fff;
    background:rgba(255,255,255,0.8);
  } */
.volun{
    user-select: none;
    cursor: pointer;
  }
.volun-word{
    margin-left:10px;
  }
.volun-tag{
    margin-left:20px;
    display: inline-block;
  }
.volun-tag-word:hover{
    cursor: pointer;
    user-select: none;
  }
.volun-card{
    /* width:88%;
    height:88%; */
    padding:2px;
    margin:2px 10px 3px 0;
    display:block;
  }
.volun-age{
    float:right;
  }
.text {
    font-size: 14px;
  }
time {
    font-size: 13px;
    color: #999;
  }
  
  
.bottom {
    margin-top: 13px;
    line-height: 12px;
  }

.button {
    padding: 0;
    float: right;
  }
.volun-card .image {
  width:100%;
  height:100%;
  display: block; 
  
}

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
</style>