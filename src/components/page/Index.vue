<template>
  <div id="index">
    <el-carousel class="carousel-main" trigger="click" arrow="never">
      <el-carousel-item v-for="(item,index) in banner" :key="index" :style="{backgroundImage: 'url('+item.url+')'}">
      </el-carousel-item>
    </el-carousel>
    <div class="online-exhibition">
      <!--<el-carousel class="carousel-commentary" trigger="click" arrow="always" :autoplay="false">
        <el-carousel-item v-for="(item,index) in onlineExhibition" :key="index" >
          <div class="cover" :style="{backgroundImage: 'url('+item.url+')'}"></div>
          <div v-text="item.text"></div>
        </el-carousel-item>
      </el-carousel>-->
    </div>
    <div class="online-exhibition1">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1<br/><br/><br/><br/><br/><br/><br/></swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>


  </div>


</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'index',
    data: function () {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          notNextTick: true,
          autoplay: 3000,
//          direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          scrollbar:'.swiper-scrollbar',//滚动条
//          mousewheelControl : true,
//          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
//          debugger: true,
        },
      	banner: [
          {
            url: '/static/images/index_banner.jpg'
          },
          {
          	url: '/static/images/index_banner.jpg'
          },
          {
            url: '/static/images/index_banner.jpg'
          }
        ],
        onlineExhibition: [
          {
          	url: '/static/images/index-exhibition.jpg',
            text: '往届NewStar颁奖典礼'
          },
          {
          	url: '/static/images/index-exhibition.jpg',
            text: '往届NewStar颁奖典礼'
          },
          {
          	url: '/static/images/index-exhibition.jpg',
            text: '往届NewStar颁奖典礼'
          }
        ]
      }
    },
    components: {
			swiper,
      swiperSlide
    }
	}
</script>

<style lang="scss">
  .carousel-main {
    .el-carousel__button {
      width: 10px;
      height: 10px;
      border-radius: 50%
    }
    .el-carousel__container {
      background: #000000;
      height: auto;
      &:before {
        content: '';
        display: block;
        padding-top: (525/1920)*100%;
      }
    }
    .el-carousel__item {
      background: center repeat-y;
      background-size: auto 100%;
    }
    @media (max-width: 768px) {
      .el-carousel__container {
        &:before {
          padding-top: (525/1200)*100%;
        }
      }
    }
  }
  .carousel-commentary {
    .el-carousel__container {
      background: #f7f8f8;
      padding: 0 95px;
      height: auto;
      &:before {
        content: '';
        display: block;
        padding-top: (712/949)*100%;
      }
    }
  }
  .online-exhibition {
    background: #fff;
    .carousel-commentary {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

  }
</style>
