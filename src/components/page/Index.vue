<template>
  <div id="index">
    <bannerMain :swiperData = "banner"></bannerMain>
    <div class="online-exhibition__wrap wrap1200">
      <h2 class="title-simple">线上展览</h2>
      <onlineExhibition class="online-exhibition" :swiperData = "onlineExhibition"></onlineExhibition>
    </div>




  </div>


</template>

<script>
  import onlineExhibition from '@/components/common/carousel-commentary.vue'
  import bannerMain from '@/components/common/swiper-main.vue'

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
            text: '往届NewStar颁奖典礼1'
          },
          {
          	url: '/static/images/index-exhibition.jpg',
            text: '往届NewStar颁奖典礼2'
          },
          {
          	url: '/static/images/index_banner.jpg',
            text: '往届NewStar颁奖典礼3'
          }
        ]
      }
    },
    components: {
      onlineExhibition,bannerMain
    }
	}
</script>

<style lang="scss">
  .title-simple {
    padding: 40px 0 20px;
    margin: 0 auto;
    font-size: 18px;
  }
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
  .online-exhibition__wrap {
    padding: 0 30px;
  }
 /* .online-exhibition {
    background: #fff;
    .carousel-commentary {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

  }*/
</style>
