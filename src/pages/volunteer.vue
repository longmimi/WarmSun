<template>
  <div id="about">
    <div class="content">
          <div class="volun-welcome">
            <h1 class="volun-welcome-word">暖夕阳的志愿者</h1>
          </div>
            <div class="volun-select">
              <span class="volun-word">排序：</span>
              <el-select v-model="value5" multiple placeholder="请选择志愿者属性">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <div class="volun-tag">
                <span class="volun-word">请选择志愿者标签：</span>
                <el-tag class="volun-tag-word">标签一</el-tag>
                <el-tag class="volun-tag-word" type="success">标签二</el-tag>
                <el-tag class="volun-tag-word" type="info">标签三</el-tag>
                <el-tag class="volun-tag-word" type="warning">标签四</el-tag>
                <el-tag class="volun-tag-word" type="danger">标签五</el-tag>
              </div>

            </div>
            <div class="volun-content">
                <el-row>
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
                              <!-- <time class="time">{{ currentDate }}</time> -->
                              <el-button type="text" class="button">查看详情</el-button>
                            </div>
                          </div>
                        </el-card>
                      </router-link>
                    </el-col>
                </el-row>
                <div class="pagination">
                  <el-pagination claaa="pagination-block"
                    layout="prev, pager, next"
                    :total="50">
                  </el-pagination>
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
            name: "小张",
            brth: 22,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer2.jpg'),
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
            name: "小王",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer3.jpg'),
            address: null,
            telphone: null,
            hobby: '唱歌',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小李",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer2.jpg'),
            address: null,
            telphone: null,
            hobby: '钢琴',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小赵",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer4.jpg'),
            address: null,
            telphone: null,
            hobby: '唱戏',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小张",
            brth: 22,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer2.jpg'),
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
            name: "小王",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer3.jpg'),
            address: null,
            telphone: null,
            hobby: '唱歌',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小李",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer2.jpg'),
            address: null,
            telphone: null,
            hobby: '钢琴',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小赵",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer4.jpg'),
            address: null,
            telphone: null,
            hobby: '唱戏',
            created_at: "",
            updated_at: ""
          },{
            id: 1,
            user_id: 1,
            role: "",
            name: "小张",
            brth: 22,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer2.jpg'),
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
            name: "小王",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer3.jpg'),
            address: null,
            telphone: null,
            hobby: '唱歌',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小李",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer2.jpg'),
            address: null,
            telphone: null,
            hobby: '钢琴',
            created_at: "",
            updated_at: ""
          },
          {
            id: 1,
            user_id: 1,
            role: "",
            name: "小赵",
            brth: null,
            job: '学生',
            sex: "",
            avatar: require('../assets/volunteer/volunteer4.jpg'),
            address: null,
            telphone: null,
            hobby: '唱戏',
            created_at: "",
            updated_at: ""
          }
      ]
    };
  },
  methods: {

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
.el-pagination{
  text-align: center;
  margin:20px auto;
}
.pagination-block{
  margin:0 auto;
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
