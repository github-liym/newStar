<template>
  <swiper :options="swiperOption" class="swiper-main">
    <swiper-slide v-for="(item,index) in swiperData" :key="index">
      <div class="slide-cover cover" :style="{backgroundImage: 'url('+item.url+')'}"></div>
    </swiper-slide>
    <div class="swiper-main__pagination swiper-pagination" slot="pagination"></div>
  </swiper>
</template>


<script>
  export default {
    name: 'carrousel',
    props: ['swiperData'],
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3000,//5秒切换一次
            disableOnInteraction: false,
          },
          centeredSlides: true,
          pagination: {
            el: '.swiper-main__pagination',
            clickable :true,
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .swiper-main {
    .slide-cover {
      &:before {
        padding-top: (525/1920)*100%;
        @media (max-width: 768px) {
          padding-top: (525/1200)*100%;
        }
      }
    }
    .swiper-main__pagination {
      .swiper-pagination-bullet {
        background: #fff;
        width: 10px;
        height: 10px;

      }
      .swiper-pagination-bullet-active {
        background: #fff;
      }
    }
    @media (max-width: 768px) {

      .swiper-main__pagination {
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;

        }
      }
    }
  }




</style>
