<template>
  <div class="grid-content bg-zczs">
    <nav class="grid-content boxTitle"><h3>政策展示</h3>
    </nav>
    <ul class="grid-content activitesContent">
        <li v-for="(cont,index) in policyList" class="activitesList">
          <a class="activites-article-title">
            {{cont.title}}
          </a>
          <p><a class="activites-article-content" href="#">
          {{cont.content}}
          </a></p>
          <a href="#" class="moreInfo">了解更多>></a>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'policy',
  data () {
    return {
      policyList: [{
          title: "习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
          content: "习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、"
      }, {
          title: "《老年人健康护理手册》首发",
          content: "4月17日上午，《老年人健康护理手册》首发暨“凤凰夕阳红”微信公众号上线仪式在宁举行。"
      }, {
          title: "养老服务市场将全面放开",
          content: "满足数量庞大的老年群众多方面需求、妥善解决人口老龄化带来的社会问题，事关发展全局，事关百姓福祉。"
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
.bg-zczs {
    height: 420px;
    background-color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
}
.boxTitle {
    width: 100%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.4);
}

.boxTitle h3 {
    margin-left: 20px;
    line-height: 50px;
    color: #2D2F33;
    font-size: 16px;
}

.activitesContent {
    box-sizing: border-box;
    width: 100%;
    padding: 0 18px;
}


.activitesList {
    list-style-type: none;
    margin: 8px 0;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 6px;
    overflow: hidden;
    border-radius: 5px;
    transition: box-shadow 0.3s ease;
    transition: border 0.3s ease;
}
.activitesList:hover {
    border-left: 6px solid #ff7761;
    box-shadow: -3px 3px 6px #CBCBCB;
}

.activites-article-title {
    display: block;
    width: 100%;
    text-align: left;
    text-indent: 10px;
    color: #5A5E66;
    font-size: 16px;
    transition: color 0.3s ease;
}

.activites-article-title:hover {
    color: #B4BCCC;
    cursor: pointer;
}

.activites-article-content {
    display: block;
    width: 100%;
    padding: 5px;
    word-wrap: break-word;
    text-align: left;
    text-indent: 1em;
    color: #878D99;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.moreInfo{
    float: right;
    font-size: 12px;
    margin: 4px;
    transition: color 0.3s ease;
}
.moreInfo:hover{
    color:#ccc;
}
</style>
