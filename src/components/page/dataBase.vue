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
        <h1 class="title-main title-bg">{{web.database.introduceTitle}}</h1>
        <div class="video" @click="play()" :style="{backgroundImage: 'url('+database[$store.state.language][0].videoThumbnail+')'}">
          <i class="icon i-play cover"></i>
        </div>

        <article class="article" v-html="database[$store.state.language][0].article"></article>

        <a class="download" href="">
          <i class="iconfont icon-download"></i>
          {{web.database.download}}
        </a>
      </div>
    </section>
    <section class="database-company">
      <h1 class="title-main">{{web.database.company}}</h1>
      <companySwiper class="database-company-swiper" :text="web.database.companyLink" :company="database[$store.state.language][0].company"></companySwiper>
    </section>
    <section class="database-album wrap1200">
      <h1 class="title-main title-bg">{{web.database.albumTitle}}</h1>
      <ul class="database-album-list clearfix">
        <li v-for="item in database[$store.state.language][0].album">
          <div class="item">
            <div class="cover" :style="{backgroundImage: 'url('+item.thumbnail+')'}"></div>
            <div class="text omit">{{item.title}}</div>
          </div>
        </li>
      </ul>
      <div v-show="database[$store.state.language][0].albumPageCount>paginationAlbum" @click="getMoreAlbum()" class="news-more" :class="{isRefresh: isRefresh}">
        <i class="iconfont icon-refresh"></i>加载更多
      </div>
      <div v-show="database[$store.state.language][0].albumPageCount>paginationAlbum" @click="getMoreAlbum()" class="news-more" :class="{isRefresh: isRefresh}">

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
        paginationAlbum: 1,
        database: {
      		"zh": [{
      			"videoThumbnail": ""
          }],
          "en": [{
            "videoThumbnail": ""
          }]
        }
      }
    },
    mounted (){
      var self = this;
			self.$http({
        mothod: "get",
        url: '/api/text/GetSpecial?sid='+self.sid
      }).then((res) =>{
        self.fetchLoading = false;
        self.database = res.data;
      }).catch((err) => {
				console.log(err)
      })
    },
    methods: {
    	play: function () {
    		var self = this;
        self.playerOptions.poster = self.database[self.$store.state.language][0].videoThumbnail;
        self.playerOptions.sources[0].src = self.database[self.$store.state.language][0].video;
        self.video = true;
      },
      closeVideo(){
        this.video = false;
      },
      getMoreAlbum(){
        var self = this;
        var p = self.paginationAlbum+1;
        self.isRefresh = true;
        console.log( p);
        self.$http({
          mothod: "get",
          url: '/api/text/get_special_other_album?sid='+ self.sid+'&p='+p,
        }).then((res) =>{
        	console.log(res.data)
          self.isRefresh = false;
          self.database["zh"][0].album = self.database["zh"][0].album.concat(res.data["zh"].album[0]);
          self.database["en"][0].album = self.database["en"][0].album.concat(res.data["en"].album[0]);
          console.log( p);
          console.log(res.data["en"].album[0]);
          self.paginationAlbum++;
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    computed: {
    	sid(){
        var self = this;
        if (self.$route.params.type === 'underwear'){
    			return 1;
        }else if (self.$route.params.type === 'aluminum'){
          return 2;
        }
      },
      web(){
        return this.$store.state.config[this.$store.state.language].web
      }
    },
    watch: {
    	$route(to, from){
        var self = this;
        self.fetchLoading = true;
        self.$http({
          mothod: "get",
          url: '/api/text/GetSpecial?sid='+self.sid
        }).then((res) =>{
          console.log(res)
          self.fetchLoading = false;
          self.paginationAlbum = 1;
          self.database = res.data;
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
