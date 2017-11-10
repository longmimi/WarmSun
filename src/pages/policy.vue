<template>
  <div id="policy">
    <div class="content">       
      <el-card class="box-card">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="grid-content policy pol_first">
              <router-link :to="{name:'policyContent'}" class="policyRouter">
                <policy-text :policyMsg="article[0]"></policy-text>
              </router-link>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="grid-content policy pol_second">
              <router-link :to="{name:'policyContent'}" class="policyRouter">
                <policy-text :policyMsg="article[1]"></policy-text>
              </router-link>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="grid-content policy pol_third">
              <router-link :to="{name:'policyContent'}" class="policyRouter">
                <policy-text :policyMsg="article[2]"></policy-text>
              </router-link>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="grid-content policy pol_fourth nowrapElli">
                <router-link :to="{name:'policyContent'}" class="policyRouter">
                  <policy-text :policyMsg="article[3]"></policy-text>
                </router-link>
              </div>
            </el-row>
            <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="grid-content policy pol_fifth nowrapElli">
                <router-link :to="{name:'policyContent'}" class="policyRouter">
                  <policy-text :policyMsg="article[4]"></policy-text>
                </router-link>
              </div>
            </el-row>
            <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="grid-content policy pol_sixth nowrapElli">
                <router-link :to="{name:'policyContent'}" class="policyRouter">
                  <policy-text :policyMsg="article[5]"></policy-text>
                </router-link>
              </div>
            </el-row>
          </el-col>
        </el-row>
        <el-button-group>
          <el-button plain icon="el-icon-arrow-left">上一页</el-button>
          <el-button plain>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </el-card>
    </div>
  </div>
</template>

<script>
import policyText from '../components/policyText.vue'
export default {
  name: 'policy',
  data () {
    return {
      article:[{
        policyTitle:"1习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        policyText:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        policyTime:"2020/20/20"
      },{
        policyTitle:"2习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        policyText:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        policyTime:"2020/20/20"
      },{
        policyTitle:"3习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        policyText:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        policyTime:"2020/20/20"
      },{
        policyTitle:"4习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        policyText:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        policyTime:"2020/20/20"
      },{
        policyTitle:"5习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        policyText:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        policyTime:"2020/20/20"
      },{
        policyTitle:"6习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
        policyText:"习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
        policyTime:"2020/20/20"
      }]
    };
  },
  methods: {
    
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