<template>
  <div class="grid-content bg-weather ">
    <div class="weatherContent">
      <div id="locationWeatherInfo" class="weaterInfo">
        <div id="cnty">{{cnty}}</div>
        <div id="admin_area">{{admin_area}}</div>
        <div id="location">{{location}}</div>
        <div id="loc">更新时间{{loc_time}}</div>
      </div>
      <div id="tommorow" class="weaterInfo">
        <p>明天</p>
        <div id="tmp_max">最高温度:{{tmp_max0}}℃</div>
        <div id="tmp_max">最低温度:{{tmp_min0}}℃</div>
        <div id="cond_txt_d">白天:{{cond_txt_d0}}</div>
        <div id="cond_txt_n">夜晚:{{cond_txt_n0}}</div>
      </div>
      <div id="afterTommorow" class="weaterInfo">
        <p>后天</p>
        <div id="tmp_max">最高温度:{{tmp_max1}}℃</div>
        <div id="tmp_max">最低温度:{{tmp_min1}}℃</div>
        <div id="cond_txt_d">白天:{{cond_txt_d1}}</div>
        <div id="cond_txt_n">夜晚:{{cond_txt_n1}}</div>
      </div>
      <div id="twoDaysAfterTommorow" class="weaterInfo">
        <p>大后天</p>
        <div id="tmp_max">最高温度:{{tmp_max2}}℃</div>
        <div id="tmp_max">最低温度:{{tmp_min2}}℃</div>
        <div id="cond_txt_d">白天:{{cond_txt_d2}}</div>
        <div id="cond_txt_n">夜晚:{{cond_txt_n2}}</div>
      </div>
    </div>
    <!-- <div class="blurBox"></div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'weather',
  data () {
    return {
      cnty: "中国",
      admin_area: "陕西",
      location: "西安",
      loc_time: "null",
      tmp_max0: null,tmp_min0: null,cond_txt_d0: null,cond_txt_n0: null,
      tmp_max1: null,tmp_min1: null,cond_txt_d1: null,cond_txt_n1: null,
      tmp_max2: null,tmp_min2: null,cond_txt_d2: null,cond_txt_n2: null
    };
  },
  methods: {
    
  },
  mounted: function(){
    // if (navigator.geolocation)
    // {
    // }
    // 调用和风天气>>>>>>>>>>
    var that=this;
    axios.get("https://free-api.heweather.com/v5/forecast?city="+'西安'+"&key=76812a8c325b4245b40df89de7e6caea")
    .then(function(res){
      console.log(res.data.HeWeather5[0]);
      that.loc_time=res.data.HeWeather5[0].basic.update.loc;
      that.tmp_max0=res.data.HeWeather5[0].daily_forecast[0].tmp.max;
      that.tmp_min0=res.data.HeWeather5[0].daily_forecast[0].tmp.min;
      that.cond_txt_d0=res.data.HeWeather5[0].daily_forecast[0].cond.txt_d;
      that.cond_txt_n0=res.data.HeWeather5[0].daily_forecast[0].cond.txt_n;
      that.tmp_max1=res.data.HeWeather5[0].daily_forecast[1].tmp.max;
      that.tmp_min1=res.data.HeWeather5[0].daily_forecast[1].tmp.min;
      that.cond_txt_d1=res.data.HeWeather5[0].daily_forecast[1].cond.txt_d;
      that.cond_txt_n1=res.data.HeWeather5[0].daily_forecast[1].cond.txt_n;
      that.tmp_max2=res.data.HeWeather5[0].daily_forecast[2].tmp.max;
      that.tmp_min2=res.data.HeWeather5[0].daily_forecast[2].tmp.min;
      that.cond_txt_d2=res.data.HeWeather5[0].daily_forecast[2].cond.txt_d;
      that.cond_txt_n2=res.data.HeWeather5[0].daily_forecast[2].cond.txt_n;
    })//<<<<<<<<<<<<<调用和风天气
  },
  components:{

  }
}
</script>

<style>
.bg-weather {
  background-color: rgba(255, 255, 255, 0.8);
  height: 160px;
  z-index: 1;
  position: relative;
  overflow: hidden;
}
.weaterInfo{
  float: left;
  padding: 4px;
  width: 20%;
  height: 120px;
  margin: 16px 0 0 7px;
  text-align: center;
  line-height: 24px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #878D99;
  font-size: 14px;
}
.weatherContent{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>