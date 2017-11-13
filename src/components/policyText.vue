<template>
  <div id="policyText">
    <div class="policyItem" v-if="policyMsg">
      <h2>{{policyMsg.title}}</h2>
      <p>{{policyMsg.content}}</p>
      <div class="policyTime">{{policyMsg.created_at}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'policyText',
  data () {
    return {

    };
  },
  props: [
    "policyMsg"
  ],
  methods: {

  },
  components:{

  }
}
</script>

<style>
.policyItem{

}
.policyItem p{
  text-indent: 2em;
  word-wrap:break-word;
  position: relative;
  line-height: 1.6em;
  letter-spacing: 2px;
  font-size: 16px;
  padding-top: 20px;
}
.policyTime{
    float: right;
    font-size: 16px;
    position: relative;
    bottom: -10px;
    right: 5px;
    transition: color 0.3s ease;
}
.policyTime:hover{
    color:#ccc;
}
</style>
