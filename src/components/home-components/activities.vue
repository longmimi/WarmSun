<template>
  <div class="grid-content bg-activities">
    <nav class="grid-content boxTitle"><h3>活动空间</h3>
    </nav>
    <ul class="grid-content activitesContent">
        <li v-for="(cont,index) in activitesList" class="activitesList">
          <a class="activites-article-title">
            {{cont.title}}
          </a>
          <p><a href="#" class="activites-article-content">
              {{cont.content}}
          </a>
          </p>
          <a href="#" class="moreInfo">了解更多>></a>
        </li>
    </ul>
    <!-- <div class="blurBox"></div>                               -->
  </div>
</template>

<script>

export default {
  name: 'activities',
  data () {
    return {
      activitesList: [{
        title: "象棋比赛",
        content: "暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛,暖夕阳第一届人民公园老年象棋比赛"
      }, {
        title: "迎春植树活动",
        content: "为了迎接春天到来，我们组织了这次迎春活动，让我们为大自然奉献绿色,为了迎接春天到来，我们组织了这次迎春活动"
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
.bg-activities {
  /* background: #fff; */
  height: 240px;
  z-index: 1;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
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
