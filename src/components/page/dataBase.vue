<template>
	<div class="database">
    <loading v-show="fetchLoading"></loading>
    <div v-if="video" class="video-player-box">
      <i class="icon i-close" @click="closeVideo()"></i>
      <video-player
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname">
      </video-player>
    </div>
    <section class="introduce bg-f5f5f5">
      <div class="wrap1200">
        <h1 class="title-main title-bg">产业介绍</h1>
        <div class="video" @click="play()" :style="{backgroundImage: 'url('+database[$store.state.language].videoThumbnail+')'}">
          <i class="icon i-play cover"></i>
        </div>

        <article class="article" v-html="database[$store.state.language].article"></article>

        <a class="download" href="">
          <i class="iconfont icon-download"></i>
          下载资料
        </a>
      </div>
    </section>
    <section class="database-company">
      <h1 class="title-main">名企风采</h1>
      <companySwiper class="database-company-swiper" :company="database[$store.state.language].company"></companySwiper>
    </section>
    <section class="database-album wrap1200">
      <h1 class="title-main title-bg">产品相册</h1>
      <ul class="database-album-list clearfix">
        <li v-for="item in database[$store.state.language].album">
          <div class="item">
            <div class="cover" :style="{backgroundImage: 'url('+item.thumbnail+')'}"></div>
            <div class="text omit">{{item.title}}</div>
          </div>
        </li>
      </ul>
      <div @click="getMoreAlbum()" class="news-more" :class="{isRefresh: isRefresh}">
        <i class="iconfont icon-refresh"></i>加载更多
      </div>
    </section>
	</div>
</template>

<script>
  var data = require('../../api/database/database');

  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'
  import companySwiper from '@/components/common/database-swiper.vue'
	export default {
		name: 'database',
    data: function () {
      return {
      	video: false,
      	fetchLoading: true,
        isRefresh: false,
        playerOptions: {
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          preload: 'none',
          sources: [{
            type: "video/mp4",
            src: ""
          }],
          poster: "",
        },
        database: {
      		"zh": {},
          "en": {}
        }
      }
    },
    mounted (){
      var self = this;
			self.$http({
        mothod: "post",
        url: '/api/text/'+ self.$route.params.type,
      }).then((res) =>{
				console.log(res)
        self.fetchLoading = false;
        self.database = res.data;
//        console.log(res)
//        console.log(data)
      }).catch((err) => {
				console.log(err)
      })
    },
    methods: {
    	play: function () {
    		var self = this;
        self.playerOptions.poster = self.database[self.$store.state.language].videoThumbnail;
        self.playerOptions.sources[0].src = self.database[self.$store.state.language].video;
        self.video = true;
      },
      closeVideo(){
        this.video = false;
      },
      getMoreAlbum(){
      	this.isRefresh = true;
      }
    },
    watch: {
    	$route(to, from){
        var self = this;
        self.fetchLoading = true;
    		console.log(to.params.type);
        self.$http({
          mothod: "post",
          url: '/api/index/index',
          data: {
            type: self.$route.params.type
          }
        }).then((res) =>{
          console.log(res);
          self.fetchLoading = false;
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      videoPlayer,companySwiper
    }
	}
</script>

<style>
</style>
