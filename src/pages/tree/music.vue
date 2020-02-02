<template>

<div class="wrap">
    <div class="play_wrap" id="player">
        <div class="search_bar">
             <img src="../../imgs/player_title.png" alt="" />
            <!-- 搜索歌曲 -->
            <input type="text" autocomplete="off" v-model="musicName" @keyup.enter="query"/>
        </div>
<div class="center_con">
        <!-- 搜索歌曲列表 -->
        <div class='song_wrapper'>
          <ul class="song_list">
            <li v-for="(iteam,index) in musicList" :key="index" >
                <a href="javascript:;" @click="playMusic(musicList[index].id)"></a>
                <b>{{musicList[index].name}}</b>
                <span v-show="musicList[index].mvid !=0" @click="playVideo(musicList[index].mvid)"><i></i></span>
            </li>
          </ul>
          <img src="../../imgs/line.png"  class="switch_btn" alt="">
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{playing:isPlay}">
          <img src="../../imgs/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="../../imgs/disc.png" class="disc autoRotate" />
          <img :src="picUrl" class="cover autoRotate" />
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper">
          <h5 class='title'>热门留言</h5>
          <div class='comment_list'>
            <dl v-for="(iteam,index) in msgList" :key="index">
              <dt><img :src="msgList[index].user.avatarUrl" alt="" ></dt>
              <dd class="name">{{msgList[index].user.nickname}}</dd>
              <dd class="detail">
                {{msgList[index].content}}
              </dd>
            </dl>
          </div>
          <img src="../../imgs/line.png" class="right_line">
        </div>
      </div>
        <div class="audio_con">
        <audio ref='audio' @play="play" @pause="pause" :src="musicUrl" controls autoplay loop class="myaudio"></audio>
      </div>
      <div class="video_con"  v-show="mvDiv" style="display: none;"> 
        <video :src="videoUrl" controls="controls"></video>
        <div class="mask" @click="isHide"></div>
      </div>

    </div>

</div>

</template>

<script>
import Vue from 'vue'
import "@/assets/css/tree.css"
/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
export default {
  name: "tree",
  props: {
    model: Object
  },
  data: function () {
    return {
     musicName:"",
     musicList:[],
     musicUrl:"",
     picUrl:"",
     msgList:[],
     isPlay:false,
     videoUrl:"",
     mvDiv:false
    }
  },
  methods: {
    query:function(){//查下歌曲\
     if(this.musicName == null || this.musicName == ""){
            return;
        }
         let that = this;
        this.$axios.get("https://autumnfish.cn/search?keywords=" + this.musicName)
        .then(function(json){
             console.log(json);
            that.musicList = json.data.result.songs;//歌曲列表   
            console.log(that.musicList);
        },function(){})
    },
    playMusic:function(id){
        let that = this;
        if(id == null || id == ""){
            return;
        }
        this.$axios.get("https://autumnfish.cn/song/url?id=" + id).then(function(json){
            console.log(json);
            that.musicUrl = json.data.data[0].url;
        },function(){})

        //歌曲详情获取
        this.$axios.get("https://autumnfish.cn/song/detail?ids="+id).then(function(json){
            // console.log(json);
            that.picUrl=json.data.songs[0].al.picUrl;
        },function(){})

        //歌曲评论获取
         this.$axios.get("https://autumnfish.cn/comment/hot?type=0&&id="+id).then(function(json){
            console.log(json);
            that.msgList = json.data.hotComments;
        },function(){})

    },
    play:function(){
        this.isPlay = true;

    },
    pause:function(){
        this.isPlay=false;

    },
    playVideo:function(id){
        let that = this;
         this.$axios.get("https://autumnfish.cn/mv/url?id="+id).then(function(json){
            console.log(json);
            that.videoUrl = json.data.data.url;
            that.mvDiv=true; 
        },function(){})
    },
    isHide:function(){
        this.mvDiv=false;
        this.videoUrl = "";
    }
  }
}
</script>
