<template>
  <div id="policyContent">
    <div class="content">
       <el-card class="box-card">
        <div class="policyContent">
          <h1>{{policyTitle}}</h1>
          <p v-for="ph in policyText">{{ph}}</p>
          <div class="policyTime">{{policyTime}}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'policyContent',
  data () {
    return {
      policyTitle:"习近平出席亚太经合组织工商领导人峰会并发表主旨演讲",
      policyText:["习近平指出，发展之路没有终点，只有新的起点。世界正面临增长动能、全球发展方式、经济全球化进程、全球经济治理体系的深刻转变。亚太是全球经济最大的板块，也是世界经济增长的一个重要引擎。我们要洞察世界经济发展趋势，找准方位，把握规律，果敢应对世界经济的深刻转变。",
      "第一，继续坚持建设开放型经济，努力实现互利共赢。我们要努力打造平等协商、广泛参与、普遍受益的区域合作框架，合力构建开放型亚太经济，促进贸易和投资自由化便利化；引导经济全球化朝着更加开放、包容、普惠、平衡、共赢的方向发展；积极引领全球价值链重塑；支持多边贸易体制，坚持开放的区域主义；全面深入落实启动亚太自由贸易区进程的《亚太经合组织推动实现亚太自由贸易区北京路线图》，向着建成亚太自由贸易区的目标不断迈进。第二，继续谋求创新增长，挖掘发展新动能。我们要加大创新投入，转变发展方式，培育新的经济增长点；积极推进结构性改革，消除一切不利于创新的体制机制障碍，激发市场活力；落实好北京会议《经济创新发展、改革和增长共识》，深化互联网和数字经济合作，引领全球创新发展的方向。",
      "第三，继续加强互联互通，实现联动发展。我们要以亚太经合组织互联互通蓝图为指引，建立全方位、多层次、复合型的亚太互联互通网络，充分发挥互联互通对实体经济的辐射和带动作用，形成协调联动发展的格局。中方提出共建“一带一路”倡议的核心内涵，就是促进基础设施建设和互联互通，加强经济政策协调和发展战略对接，促进协同联动发展，实现共同繁荣。这一倡议源自中国，更属于世界；根植于历史，更面向未来；重点面向亚欧非大陆，更向所有伙伴开放。",
      "第四，继续增强经济发展包容性，让民众共享发展成果。我们要结合区域经济一体化的深入推进，做大开放普惠的市场，做强利益共享的链条；把包容共享理念融入发展战略，努力健全讲求效率、注重公平的体制机制，维护社会公平正义；加大民生领域投入，加大对弱势群体扶持力度，增强劳动者适应产业变革的能力，让人人拥有机遇，享有成果！"],
      policyTime:"2017/10/20"
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
  .policyContent p{
    text-indent: 2em;
    word-wrap:break-word;
    position: relative;
    line-height: 1.6em;
    letter-spacing: 2px;
    font-size: 16px;
    padding: 1em 40px;
  }
  .policyTime{
      float: right;
      font-size: 16px;
      position: relative;
      bottom: 0px;
      right: 15px;
      transition: color 0.3s ease;
  }
  .policyTime:hover{
      color:#ccc;
  }
</style>
