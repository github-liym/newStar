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
      <!--<video-player
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    customEventName="customstatechangedeventname"

                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @waiting="onPlayerWaiting($event)"

                    @statechanged="playerStateChanged($event)"
                    @ready="playerReadied">
      </video-player>-->
    </div>
    <div class="swiper-bg">
      <swiper :options="swiperOption" ref="swiperCover" class="swiperCover">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <router-link :to="{path:'/'}" v-if="!item.video"  class="slide-cover cover" :style="{backgroundImage: 'url('+item.cover+')'}">
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

<style lang="scss">
  .swiper-container__wrap {
    position: relative;
    margin: 0 95px;
    .swiper-bg {
      position: relative;
      background: #fff;
      margin: 0 -115px;
      padding: 15px 115px;
    }
    .swiper-slide {
      position: relative;
      .slide-cover {
        display: block;
        &:before {
          padding-top: (9/16)*100%;
        }
      }
    }
    .i-prev,.i-next {
      position: absolute;
      z-index: 2;
      top: 50%;
      margin-top: -22px;
    }
    .i-prev {
      left: 20px;
    }
    .i-next {
      right: 20px;
    }
    .slide-text {
      height: 95px;
      padding: 15px 0;
      overflow: hidden;
      background: transparent;
      color: #767676;
      font-weight: bold;
      line-height: 1.8;
    }
    .carousel-commentary__pagination {
      display: none;
    }
    @media (max-width: 768px) {
      margin: 0 auto;
      .carousel-commentary__pagination {
        display: block;
        bottom: 20px;
        width: 100%;
      }
      .swiper-pagination-bullet {
        background: rgba(#000,.7);
        margin: 0 4px;
      }
      .swiper-pagination-bullet-active {
        background: rgba(#000,.5);
      }
      .swiper-bg {
        margin: 0 auto;
        padding: 0px;
      }

      .i-prev,.i-next {
        display: none;
      }
    }
  }
  .video-player-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background: rgba(#000,.85);
    i.icon.i-close {
      position: absolute;
      right: 30px;
      top: 25px;
      width: 40px;
    }
    .video-player {
      position: relative;
      top: 50%;
      width: 100%;
      max-width: 800px;
      margin: 0 auto 0;
      transform: translateY(-50%);
      &:before {
        content: '';
        display: block;
        padding-top: (720/1080)*100%;
      }
    }
    .video-js {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /*width: 90%;
      height: 50%;
      max-width: 800px;
      margin: 15% auto 0;*/
      .vjs-big-play-button {
        left: 50%;
        top: 50%;
        margin-left: -1.5em;
        margin-top: -0.75em;
      }
    }
  }

  .mask-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000,.5);
    .i-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }

</style>
