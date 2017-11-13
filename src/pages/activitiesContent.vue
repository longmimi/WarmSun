<template>
  <div id="activitiesContent">
    <div class="content">
       <el-card class="box-card">
        <div class="activitiesContentBox item">
          <h1 class="activitiesContentHeader">{{activitiesTitle}}</h1>
          <div class="activitiesContentInfo text item">
            <h3>发布时间：{{activitiesReleaseTime}}</h3>
            <h3>举办时间：{{activitiesHoldTime}}</h3>
            <p>{{activitiesInfo}}</p>
            <div class="moreInfoBtn">参加活动</div>
            <div class="membersBox">
              <h4>已报名参加：</h4>
              <div class="membersItem" v-for="(item,index) in membersList">
                <img :src="item.headImg" :alt="item.name">
              </div>
            </div>
          </div>
        </div><!-- activitiesBox_end -->
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'activitiesContent',
  data () {
    return {
      activitiesTitle:"活动名称",
      activitiesReleaseTime:"2017/10/10",
      activitiesHoldTime:"2017/10/10",
      activitiesInfo:"活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍",
      membersList:[{
        name:"wang",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"li",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"pan",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"li",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"pan",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"li",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"pan",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"li",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"pan",
        headImg:"src/assets/headImg.jpg"
      },{
        name:"li",
        headImg:"src/assets/headImg.jpg"
      }]
    };
  },
  methods: {

  },
  mounted: function(){
    axios.post('http://www.xerus.cn/nanan/public/activity',)
    .then(res=>{
      console.log(res.data.msg+'===>res.data.msg');
      // if(res.data.status===0){
      //     this.activitiesList=res.data.data;
      // }
    })
  },
  components:{

  }
}
</script>

<style>
  .content{
    width: 80%;
    margin: 2% auto;
  }
  .text {
    font-size: 16px;
    line-height: 22px;
    color: #B4BCCC;
  }
  .activitiesContentInfo p{
    text-indent: 2em;
    margin: 20px;
  }
  .activitiesContentInfo h3{
    color: #ff7761;
    display: inline-block;
    margin: 10px;
  }
  .membersBox{
    color: #ff7761;
    margin: 10px;
  }
  .membersItem{
    display: inline-block;
    margin: 6px;
  }
  .membersItem img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ff7761;
  }
  .item {
    padding: 18px 0;
  }
  .activitiesContentBox{
    width: 80%;
    margin: 0 auto;
  }
  .activitiesContentHeader{
    text-align: center;
    width: 60%;
    border-bottom: 2px solid #ff7761;
    margin: 0 auto;
    padding-bottom: 6px;
    color: #ff7761;
    transition: width 0.3s ease;
  }
  .activitiesContentHeader:hover{
    width: 80%;
  }
  .activitiesContentInfo{
    color: #878D99;
  }
  .moreInfoBtn{
    margin: 0 auto;
    text-align: center;
    display: block;
    width: 80px;
    padding: 6px;
    border-radius: 5px;
    color: #fff;
    background-color: #ff7761;
    border: 1px solid #ff7761;
    transition: background 0.3s ease;
  }
  .moreInfoBtn:hover{
    color: #ff7761;
    background-color: #fff;
    border: 1px solid #ff7761;
  }

</style>
