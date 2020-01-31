<template>
 

<div class="conDec">
    <div class="center">
        <div>
            <input type="text" @keyup.enter="getBut" v-model="message">
        </div>



        <div class="search clearfix">
        <div class="select_li">
          
          <ul class="select_box">
            <li class="tianqi cur" @click="getOne('北京')">北京</li>
            <li class="zixun" @click="getOne('上海')">上海</li>
            <li class="zixun" @click="getOne('深圳')">深圳</li>
            <li class="zixun" @click="getOne('广东')">广东</li>
          </ul>
        </div>
        </div>
        
        <div class="col-top">
            <label>这里是测试：{{city}}</label>
        </div>

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
    width: 80%;
    height: 80%;
    text-align: center;
}

.search-box{
        margin: 16px 0 0 153px;
    width: 400px;
    height: 40px;
    position: relative;
}
.clearfix{
    zoom: 1;
}
.search{
        width: 398px;
    height: 38px;

    border-radius: 2px;
    position: relative;
}
.select_li{
        border: 0;
    border-right: 1px solid #e4ecf4;
    float: left;
    height: 38px;
    position: absolute;
    width: 63px;
    display: block;
    top: 0;
    left: 0;
    overflow: inherit;
  
}
.search input#txtZip{
        width: 294px;
    height: 38px;
    line-height: 38px;
    border-radius: 0;
    color: #aaa;
    font-size: 14px;
    padding: 0 30px 0 74px;
    text-indent: 0;
    background: #fff;
    margin: 0;
    border: 0;
}
input, button, select{
        vertical-align: middle;
}
input{
        outline: 0;
            width: 200px;

    margin-top: 12px;
}
.select_li p{
        width: 58px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    padding-bottom: 5px;
    padding-right: 5px;
}
.select_box{
    width: 80px;
}
.col-top{
    margin-top: 110px;
}

</style>


<script>
import Vue from 'vue'
export default {
  name: "inter",
  props: {
    model: Object
  },
  data: function () {
    return {
      message:"黑马薛焱",
      textList:[],
      inputVueal:"",
      city:""
    }
  },
  methods: {
    addLeft:function(){
        this.index--;
    },
    getBut:function(){
          let that=this;
       this.$axios.get("https://autumnfish.cn/api/joke").then(function(json){
       
             console.log(json);
           that.city=json.data;
         

       },function(json){
console.log(json);
       })

    },
    getOne:function(key){
        this.message=key;
        this.getBut();

    }
  }
}
</script>
