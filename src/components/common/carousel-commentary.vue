<template>
  <div class="swiper-container__wrap">
    <div class="swiper-bg">
      <swiper :options="swiperOption" ref="swiperCover" class="swiperCover">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <div class="slide-cover cover" :style="{backgroundImage: 'url('+item.url+')'}"></div>
        </swiper-slide>
      </swiper>
      <i class="carousel-commentary__prev icon i-prev swiper-button-prev" slot="button-prev"></i>
      <i class="carousel-commentary__next icon i-next swiper-button-next" slot="button-next"></i>
    </div>
    <swiper :options="swiperTextOption" ref="swiperText">
      <swiper-slide v-for="(item,index) in swiperData" :key="index">
        <div class="slide-text">{{item.text}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
  export default {
    name: 'carrousel',
    props: ['swiperData'],
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          navigation: {
            nextEl: '.carousel-commentary__next',
            prevEl: '.carousel-commentary__prev'
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
      }
    },
    methods: {
    },
    mounted() {
      this.swiperCover.controller.control = this.swiperText
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container__wrap {
    position: relative;
    margin-bottom: 95px;
    margin: 0 95px;
  }
  .swiper-bg {
    position: relative;
    background: #f7f8f8;
    margin: 0 -95px;
    padding: 0 95px;
  }
  .swiperCover {
    /*margin: 0 95px;*/
  }
  .swiper-slide {
    position: relative;
    background: #f7f8f8;
    .slide-cover {
      &:before {
        padding-top: (712/949)*100%;
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
    background: #fff;
    color: #767676;
    font-weight: bold;
    line-height: 1.8;
  }

</style>
