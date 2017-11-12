<template>
  <div id="activities">
    <div class="content">
       <el-card class="box-card">
        <div class="activitiesBox item" v-for="(item,index) in activitiesList">
          <h3 class="activitiesHeader">{{item.title}}</h3>
          <div class="activitiesInfo text item">{{item.content}}</div>
          <router-link :to="{name:'activitiesContent'}" class="moreInfoBtn">活动详情</router-link>
        </div><!-- activitiesBox_end -->
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'activities',
  data () {
    return {
      activitiesList: [
      //   {
      //   title: "活动一",
      //   content: "重视老年人的心理健康问题心理健康问题重视重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健老年人的心理健康问题心理健康问题心理健康问题。心理健康问题。"
      // }, {
      //   title: "活动一",
      //   content: "重视老年人的心理健康问题重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健心理健康问题重视老年人的心理健康问题心理健康问题心理。"
      // }, {
      //   title: "活动一",
      //   content: "重视老年人的心理健康问题重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健心理健康问题重视老年人的心理健康问题心理健康问题心理。"
      // }
    ]
    };
  },
  mounted: function(){
    axios.post('http://www.xerus.cn/nanan/public/activities',)
    .then(res=>{
      console.log(res.data.msg+'===>res.data.msg');
      if(res.data.status===0){
          this.activitiesList=res.data.data;
      }
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
    color: #878D99;
  }
  .item {
    padding: 18px 0;
  }
  .box-card{
    /* background-color: rgba(255, 255, 255, 0.8); */
    overflow: hidden;
  }
  .activitiesBox{
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px dotted #ff7761
  }
  .activitiesHeader{
    text-align: center;
    width: 20%;
    border-bottom: 2px solid #ff7761;
    margin: 0 auto;
    padding-bottom: 6px;
    color: #ff7761;
    transition: width 0.3s ease;
  }
  .activitiesHeader:hover{
    width: 60%;
  }
  .activitiesInfo{
    transition: color 0.3s ease;
    text-indent: 2em;
  }
  .activitiesInfo:hover{
    color: #5A5E66;
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
