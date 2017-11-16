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

          </el-col>
        </el-row>
        <div style="text-align:center">第{{page}}页 {{warning}}</div>
        <el-button-group>
          <el-button plain icon="el-icon-arrow-left" @click="prev()">上一页</el-button>
          <el-button plain @click="next()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
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
        title:"习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        content:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        created_at:"2017/4/17"
      },{
        title:"《老年人健康护理手册》首发",
        content:"4月17日上午，《老年人健康护理手册》首发暨“凤凰夕阳红”微信公众号上线仪式在宁举行。",
        created_at:"2017/4/28"
      },{
        title:"养老服务市场将全面放开 托起幸福＂夕阳红",
        content:"满足数量庞大的老年群众多方面需求、妥善解决人口老龄化带来的社会问题，事关发展全局，事关百姓福祉。",
        created_at:"2017/5/2"
      },{
        title:"智能化服务将是居家养老的未来发展方向",
        content:"“产业要发展，标准要先行”智能化服务成居家养老发展方向“人口老龄化形势日益严峻。”",
        created_at:"2017/6/7"
      },{
        title:"关注定了！养老金要涨了！9月底前发到位！",
        content:"4月14日，人社部、财政部正式公布今年提高养老金标准，总体调整水平为5.5%左右。",
        created_at:"2017/8/20"
      },{
        title:"2017:企业参加养老保险职工缴费满15年且正常到龄退休 经办机构直接",
        content:"人社行政部门不再办理退休审核，系统信息完备，经办机构将直接办理待遇领取手续。",
        created_at:"2017/8/28"
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
    height: 356px;
    border-right: 2px solid #eee;
  }
  .pol_third{
    height: 356px;
    border-right: 2px solid #eee;
  }
  .pol_fourth{
    border-bottom: 2px solid #eee;
  }

  .nowrapElli p , .nowrapElli h2{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-button-group{
    display: flex;
    justify-content: center;
    margin: 10px auto;
  }
  .policyRouter{
    color: #000;
  }
  .policyRouter:hover{
    color: #878686;
  }
</style>
