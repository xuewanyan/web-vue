<template>
 

<div class="conDec">
    <div class="center">
      <h1>董琦的记事本</h1>

      <input type="text" class="col-c1" placeholder="小董董----请输入" @keyup.enter="addText()" v-model="inputVueal">
      <ul v-if="textList.length>0">
        <li v-for="(iteam,index) in textList" :key="index" >
          <div>
            <span>{{index+1}}</span>
            <label>{{iteam}}</label>
            <button @click="removeA(index)">X</button>
          </div>
        </li>
        <li>
          <span v-show="textList.length>0">{{textList.length}}inteam list</span>
          <div>
            <button @click="removeLi" v-show="textList.length>0"> clear</button>
          </div>
        </li>
      </ul>
    </div>
</div>


</template>

<style>
.conDec{
height: 680px;
display: flex;
justify-content: center;
align-items: center;
display: -webkit-flex;
}
.center{
    background-color: aliceblue;
    width: 500px;
    height: 400px;
    text-align: center;
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
input{
  height: 42px;
  width: 400px;
  border: 1px solid red;
}
ul{
     text-align: left;
    font-size: 22px;
    overflow: scroll;
    height: 72%;
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
      arr:[require("../../imgs/t1.png"),
      require("../../imgs/t2.png"),
      require("../../imgs/t3.png"),
      require("../../imgs/t4.png"),
      require("../../imgs/t5.png")],
      ver:[
        {name:"rr"},{name:"qq"}
      ],
      message:"黑马薛焱",
      textList:[],
      inputVueal:""
    }
  },
  methods: {
    addLeft:function(){
        this.index--;
    },
    addRight:function(){
        this.index++;
    },
    addArr:function(){
      this.ver.push({name:"新增测试方法"});

    },
    removeArr:function(){
      this.ver.shift();
    },
    doit : function(p1,p2){
      console.log("6666老铁");
      console.log(p1);
      console.log(p2);
    },
    enClick :function(){
      alert(1111);
    },
    addText : function(){
      this.textList.push(this.inputVueal);
    },
    removeLi : function(){
      this.textList=[];
      this.inputVueal="";
    },
    removeA :function(index){
      this.textList.splice(index,1);
    }
  }
}
</script>
