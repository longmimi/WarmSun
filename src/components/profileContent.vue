<template>
  <div id="profileContent">
    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="24">
      <section class="profileContent-main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="动态" name="first">
            <li v-for="item in platFormActivity">
              {{item.thing}}
              <span class="flRight">{{item.time}}</span>
            </li>
          </el-tab-pane>
          <el-tab-pane label="参加的活动" name="second">content参加的活动参加的活动</el-tab-pane>
          <el-tab-pane label="发布的活动" name="third">content发布的活动发布的活动</el-tab-pane>
          <el-tab-pane label="参与的志愿服务" name="fourth">content参与的志愿服务参与的志愿服务</el-tab-pane>
        </el-tabs>
      </section>
    </el-col>

    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="24">
      <section class="profileContent-detailValue">
        <h3>详细信息</h3>
        <ul>
          <li v-for="item in detailValue">
            {{item.key}}:
            {{item.cont}}
          </li>
        </ul>
      </section>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profileContent',
  data () {
    return {
      activeName: 'first',
      detailValue:[
        {
          key:"姓名",
          cont:"小新"
        },
        {
          key:"邮箱",
          cont:"123456@qq.com"
        },
        {
          key:"年龄",
          cont:77
        },
        {
          key:"爱好",
          cont:"羽毛球"
        },
        {
          key:"志愿服务数",
          cont:6
        },
      ],
      platFormActivity:[//平台动态
        {
          thing: "something",
          time: "2017/11/17 19:22"
        },
        {
          thing: "something",
          time: "2017/11/17 19:22"
        },
        {
          thing: "something",
          time: "2017/11/17 19:22"
        },
        {
          thing: "something",
          time: "2017/11/17 19:22"
        },
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted: function(){

  },
  components:{

  }
}
</script>

<style>
#profileContent{
  margin-top: 10px;
  margin-bottom: 30px;
}
.profileContent-main{
  /*background-color: rgb(158, 232, 93);*/
  height: 300px;
  margin-left: 10px;
  padding: 20px;
}
.profileContent-detailValue{
  /*background-color: rgb(70, 227, 207);*/
  margin-left: 10px;
  padding: 20px;
}
.profileContent-detailValue h3{
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
li{
  list-style-type: none;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  text-indent: 1em;
  font-size: 14px;
}
.flRight{
  float: right;
}
</style>
