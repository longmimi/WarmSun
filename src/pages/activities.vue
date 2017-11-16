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
        {
        title: "象棋比赛",
        content: "暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛。"
      }, {
        title: "迎春植树活动",
        content: "为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色,为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色,为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色,为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色,为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色,为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色。"
      }, {
        title: "北坡远足活动",
        content: "温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友,温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友,温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友,温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友,温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友,温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友,温度逐渐回暖，让我们一起出门走走路，锻炼身体，轻松交友。"
      }, {
        title: "元旦文艺汇演",
        content: "我们暖夕阳这个大家庭在一起过元旦，准备好一个拿手的节目展示给大家吧,我们暖夕阳这个大家庭在一起过元旦，准备好一个拿手的节目展示给大家吧,我们暖夕阳这个大家庭在一起过元旦，准备好一个拿手的节目展示给大家吧,我们暖夕阳这个大家庭在一起过元旦，准备好一个拿手的节目展示给大家吧,我们暖夕阳这个大家庭在一起过元旦，准备好一个拿手的节目展示给大家吧。"
      }, {
        title: "暖夕阳科普知识讲座（一）",
        content: "我们最有爱心的志愿者们第一次为这个大家庭的老人们准备了这次的关于老人饮食方面的科普知识讲座,我们最有爱心的志愿者们第一次为这个大家庭的老人们准备了这次的关于老人饮食方面的科普知识讲座,我们最有爱心的志愿者们第一次为这个大家庭的老人们准备了这次的关于老人饮食方面的科普知识讲座,我们最有爱心的志愿者们第一次为这个大家庭的老人们准备了这次的关于老人饮食方面的科普知识讲座"
      }
    ]
    };
  },
  mounted: function(){
    axios.post('http://www.xerus.cn/nanan/public/activities',)
    .then(res=>{
      console.log(res.data.msg+'===>res.data.msg');
      if(res.data.status===0){
          // this.activitiesList=res.data.data;
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
