<template>
 

<div>
    <div class="center">
        <img :src="imgArr[index]" alt="">

        <a href="javascript:void(0)" class="left">
            <img src="../../imgs/left.png" v-show="index!=0" alt="" class="img-ui" @click="addLeft">
        </a>

        <a href="javascript:void(0)" class="right">
            <img src="../../imgs/right.png" alt="" class="img-ui" v-show="index<4" @click="addRight">
        </a>
    </div>
</div>


</template>

<style>
.center{
    margin-left: 20%;
    margin-top: 20%;
}
.img-ui{
    width: 40px;
    height: 80px;
}
.left{
    margin-left: -64%;
}
.right{
    margin-left: 58%;
}
</style>


<script>
import Vue from 'vue'
export default {
  name: "tree",
  props: {
    model: Object
  },
  data: function () {
    return {
      imgArr:[require("../../imgs/t1.png"),
      require("../../imgs/t2.png"),
      require("../../imgs/t3.png"),
      require("../../imgs/t4.png"),
      require("../../imgs/t5.png")],
      index:0
    }
  },
  methods: {
    addLeft:function(){
        this.index--;
    },
    addRight:function(){
        this.index++;
    }
  }
}
</script>
