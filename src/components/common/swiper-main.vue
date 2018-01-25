<template>
  <swiper :options="swiperOption" class="swiper-main">
    <swiper-slide v-for="(item,index) in swiperData" :key="index">
      <router-link :to="{path: item.href=='javascript:void(0);'? '/':item.href}" class="slide-cover cover" :style="{backgroundImage: 'url('+item.cover+')'}"></router-link>
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
