<template>
  <div id="policy">
    <div class="content">
      <el-card class="box-card">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="grid-content policy pol_first">
              <router-link :to="{name:'policyContent'}" class="policyRouter">
                <policy-text :policyMsg="article[i]"></policy-text>
              </router-link>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="grid-content policy pol_second">
              <router-link :to="{name:'policyContent'}" class="policyRouter">
                <policy-text :policyMsg="article[i+1]"></policy-text>
              </router-link>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="grid-content policy pol_third">
              <router-link :to="{name:'policyContent'}" class="policyRouter">
                <policy-text :policyMsg="article[i+2]"></policy-text>
              </router-link>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="grid-content policy pol_fourth nowrapElli">
                <router-link :to="{name:'policyContent'}" class="policyRouter">
                  <policy-text :policyMsg="article[i+3]"></policy-text>
                </router-link>
              </div>
            </el-row>
            <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="grid-content policy pol_fifth nowrapElli">
                <router-link :to="{name:'policyContent'}" class="policyRouter">
                  <policy-text :policyMsg="article[i+4]"></policy-text>
                </router-link>
              </div>
            </el-row>
            <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="grid-content policy pol_sixth nowrapElli">
                <router-link :to="{name:'policyContent'}" class="policyRouter">
                  <policy-text :policyMsg="article[i+5]"></policy-text>
                </router-link>
              </div>
            </el-row>
          </el-col>
        </el-row>
        <el-button-group>
          <el-button plain icon="el-icon-arrow-left" @click="prev()">上一页</el-button>
          <el-button plain @click="next()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <div style="text-align:center">第{{page}}页 {{warning}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import policyText from '../components/policyText.vue'
export default {
  name: 'policy',
  data () {
    return {
      i: 0,
      page: 1,
      warning: null,
      article:[
        {
        title:"1习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"2习近平出席亚太经合组织工222商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"3习近平出席亚太经合组织工商333333领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"4习近平出席亚太经合组444织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"5习近平出席亚太经合组5555555织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"6习近平出席亚太经合6666666666666组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"7习近平出席亚太经合7777777组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"8习近平出席亚太经8888888888合组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"9习近平出席亚太999999999经合组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      },{
        title:"10习近平出席亚太经10101010101合组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2020/20/20"
      }
      ]
    };
  },
  mounted: function(){
    axios.post('http://www.xerus.cn/nanan/public/policies',)
    .then(res=>{
      console.log(res.data.msg+'===>res.data.msg');
      if(res.data.status===0){
          // this.article=res.data.data;
      }
    })
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
      if((this.page+1)<=Math.ceil(this.article.length/6)){
        this.i+=6;
        this.page++;
        this.warning=null;
      }
      else{
        this.warning="已经是最后一页了";
      }
    }
  },
  components:{
    policyText
  }
}
</script>

<style>
  .content{
    width: 80%;
    margin: 2% auto;
  }
  .grid-content {
    height: 146px;
  }
  .box-card{

  }
  .policy{
    padding: 30px;
  }
  .pol_first{
    height: 186px;
    border-bottom: 2px solid #eee;
  }
  .pol_second{
    height: 558px;
    border-right: 2px solid #eee;
  }
  .pol_third{
    height: 558px;
    border-right: 2px solid #eee;
  }
  .pol_fourth{
    border-bottom: 2px solid #eee;
  }
  .pol_fifth{
    border-bottom: 2px solid #eee;
  }
  .pol_sixth{

  }
  .nowrapElli p , .nowrapElli h2{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-button-group{
    display: flex;
    justify-content: center;
    margin: 30px auto;
  }
  .policyRouter{
    color: #000;
  }
  .policyRouter:hover{
    color: #878686;
  }
</style>
