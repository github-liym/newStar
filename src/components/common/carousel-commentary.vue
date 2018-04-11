<template>
  <div class="swiper-container__wrap">
    <div v-if="video" class="video-player-box">
      <i class="icon i-close" @click="closeVideo()"></i>
      <video-player
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    customEventName="customstatechangedeventname">
      </video-player>
    </div>
    <div class="swiper-bg">
      <swiper :options="swiperOption" ref="swiperCover" class="swiperCover">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <router-link :to="{path:'/newsInfo', query:{id:item.id}}" v-if="!item.video"  class="slide-cover cover" :style="{backgroundImage: 'url('+item.cover+')'}">
          </router-link>
          <div v-if="item.video"  class="slide-cover cover" :style="{backgroundImage: 'url('+item.cover+')'}">
            <div class="mask-video" @click="play(item)">
              <i class="icon i-play cover"></i>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <i class="carousel-commentary__prev icon i-prev swiper-button-prev" slot="button-prev"></i>
      <i class="carousel-commentary__next icon i-next swiper-button-next" slot="button-next"></i>
    </div>
    <swiper :options="swiperTextOption" ref="swiperText">
      <swiper-slide v-for="(item,index) in swiperData" :key="index">
        <div class="slide-text">{{item.title}}</div>
      </swiper-slide>
    </swiper>
    <div class="carousel-commentary__pagination swiper-pagination" slot="pagination"></div>
  </div>
</template>


<script>
  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'
  export default {
    name: 'carrousel',
    props: ['swiperData'],
    data() {
      return {
      	video: false,
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
        swiperOption: {
          centeredSlides: true,
          navigation: {
            nextEl: '.carousel-commentary__next',
            prevEl: '.carousel-commentary__prev'
          },
          pagination: {
            el: '.carousel-commentary__pagination',
          }
        },
        swiperTextOption: {
          simulateTouch : false,
        }
      }
    },
    computed: {
      swiperCover() {
        return this.$refs.swiperCover.swiper
      },
      swiperText() {
        return this.$refs.swiperText.swiper
      },
      /*player() {
        return this.$refs.videoPlayer.player
      }*/
    },
    methods: {
      play(data){
//      	console.log(data);
      	this.video = true;
        this.playerOptions.poster = data.cover;
//        console.log(this.playerOptions.sources[0].src);
        this.playerOptions.sources[0].src = data.video;
      },
      closeVideo(){
        this.video = false;
      },
      /*onPlayerPlay(player) {
         console.log('player play!', player)
      },
      onPlayerPause(player) {
         console.log('player pause!', player)
      },
      onPlayerWaiting(player) {
      	console.log("视频加载中")
      },
      onPlayerEnded(player) {
      	console.log("视频结束")
      },
      playerStateChanged(playerCurrentState) {
         console.log('player current update state', playerCurrentState)
      },
      playerReadied(player) {
        console.log('the player is readied', player)
      }*/
    },
    mounted() {
      this.swiperCover.controller.control = this.swiperText;
    },
    components: {
      videoPlayer
    }
  }
</script>
