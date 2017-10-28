<template>
  <div id="about">
    <div class="content">       
       <el-card class="box-card">
        <div class="activitiesBox item" v-for="(item,index) in activitiesList">
          <h3 class="activitiesHeader">{{item.title}}</h3>
          <div class="activitiesInfo text item">{{item.content}}</div>
          <a href="#" class="moreInfoBtn">活动详情</a>
        </div><!-- activitiesBox_end -->
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      activitiesList: [{
        title: "活动一",
        content: "重视老年人的心理健康问题心理健康问题重视重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健老年人的心理健康问题心理健康问题心理健康问题。心理健康问题。"
      }, {
        title: "活动一",
        content: "重视老年人的心理健康问题重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健重视老年人的心理健康问题心理健康问题重视老年人的心理健康问题心理健康问题心理健康问题。心理健心理健康问题重视老年人的心理健康问题心理健康问题心理。"
      }]
    };
  },
  methods: {
    
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
    font-size: 15px;
    text-indent: 2em;
    line-height: 22px;
    color: #B4BCCC;
  }
  .item {
    padding: 18px 0;
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
  }
  .activitiesInfo:hover{
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