<template>
  <div class="swiper-container__wrap">
    <swiper :options="swiperOption" ref="swiperCover" class="swiperCover">
      <swiper-slide v-for="(item,index) in company" :key="index">
        <div class="main clearfix">
          <div class="thumbnail-main" :style="{backgroundImage: 'url('+item.thumbnail[0]+')'}"></div>
          <div class="caption">
            <a :href="item.link" class="title" target="_blank">{{item.name}}</a>
            <div class="desc">{{item.desc}}</div>
            <a :href="item.link" class="link" target="_blank">{{text}}<i class="iconfont icon-angle__right"></i></a>
          </div>
        </div>
        <ul class="thumb-other">
          <li><div v-if="item.thumbnail[1]" class="thumbnail" :style="{backgroundImage: 'url('+item.thumbnail[1]+')'}"></div></li>
          <li><div v-if="item.thumbnail[2]" class="thumbnail" :style="{backgroundImage: 'url('+item.thumbnail[2]+')'}"></div></li>
          <li><div v-if="item.thumbnail[3]" class="thumbnail" :style="{backgroundImage: 'url('+item.thumbnail[3]+')'}"></div></li>
          <li><div v-if="item.thumbnail[4]" class="thumbnail" :style="{backgroundImage: 'url('+item.thumbnail[4]+')'}"></div></li>
          <li></li>
        </ul>
      </swiper-slide>
    </swiper>
    <i class="carousel-commentary__prev icon i-prev swiper-button-prev" slot="button-prev"></i>
    <i class="carousel-commentary__next icon i-next swiper-button-next" slot="button-next"></i>
  </div>
</template>


<script>
  import { videoPlayer } from 'vue-video-player'
  import 'video.js/dist/video-js.css'
  export default {
    name: 'carrousel',
    props: ['company','text'],
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          navigation: {
            nextEl: '.carousel-commentary__next',
            prevEl: '.carousel-commentary__prev'
          }
        }
      }
    },
    computed: {
      swiperCover() {
        return this.$refs.swiperCover.swiper
      }
    }
  }
</script>
