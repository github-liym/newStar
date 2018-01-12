<template>
  <div id="index">
    <bannerMain :swiperData = "option[$store.state.language].banner"></bannerMain>
    <div class="online-exhibition__wrap" v-show="option[$store.state.language].onlineExhibition">
      <div class="wrap1200">
        <onlineExhibition class="online-exhibition" :swiperData = "option[$store.state.language].onlineExhibition"></onlineExhibition>
      </div>
    </div>
    <div class="news-wrap" v-show="option[$store.state.language].news">
      <div class="wrap1200">
        <h2 class="title-simple ">大赛动态 | Competition dynamics</h2>
        <news class="news-list__wrap" :news="option[$store.state.language].news"></news>
      </div>
    </div>
    <div class="expert-library__wrap wrap1200"  v-show="option[$store.state.language].expertInit">
      <h2 class="title-simple">大师库 | Master library</h2>
      <div class="expert-list__wrap clearfix" :options="expertSwiperOption">
        <div class="expert-item__wrap" v-for="item in option[$store.state.language].expertInit">
          <expert :expert="item"></expert>
        </div>
      </div>
    </div>
    <div class="partner-wrap">
      <div class="wrap1200">
        <div class="partner-list">
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[0].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[0].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[1].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[1].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[2].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[2].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[5].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[5].list">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[3].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[3].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[6].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[6].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[7].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[7].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[8].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[8].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[9].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[9].list">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <h3>{{option[$store.state.language].partner[4].title[0]}}</h3>
            <ul>
              <li  v-for="item in option[$store.state.language].partner[4].list">{{item}}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import onlineExhibition from '@/components/common/carousel-commentary.vue'
  import bannerMain from '@/components/common/swiper-main.vue'
  import news from '@/components/common/news.vue'
  import expert from '@/components/common/expert.vue'


	export default {
		name: 'index',
    data: function () {
      return {
      	option: {
      		zh: {
            onlineExhibition: [],
            partner: [
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            	{ "title": [], "list": [] },
            ]
          },
      		en: {
            onlineExhibition: [],
            partner: [
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
              { "title": [], "list": [] },
            ]
          }
        },
        expertSwiperOption: {
          speed: 800,
          pagination: {
            el: '.expert-library__pagination',
            clickable :true,
          }
        }
      }
    },
    mounted(){
			var self = this;
			self.$http({
        method: 'post',
        url: '/api/index/index'
      }).then(function (res) {
      	self.option = res.data;
      }).catch(function (err) {
        console.log(err)
      })
    },
    components: {
      onlineExhibition,bannerMain,news,expert
    }
	}

</script>

<style lang="scss">
  #index {
    background: #f7f8f8;
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
      padding-top: 40px;
    }
    .news-wrap {
      padding-bottom: 25px;
      background: #fff;
    }
    .expert-list__wrap {
      margin: 0 -10px;
      padding-bottom: 60px;
      background: #f7f8f8;
    }
    .expert-item__wrap {
      float: left;
      width: 16.66666%;
      padding: 0 10px;
      margin-bottom: 10px;
    }
    .expert-library__pagination {
      bottom: 40px;
      .swiper-pagination-bullet-active {
        background: #fabf1b;
      }
    }
    .partner-wrap {
      background: #000;
      color: #fff;
      padding: 30px 0 1px;
      font-size: 0;
      h3 {
        margin: 0 0 10px;
        font-size: 18px;
        color: #fabf1b;
      }
      li {
        line-height: (20/16);
        margin-bottom: 9px;
      }
      .partner-list {
        display: inline-block;
        width: 33.33%;
        vertical-align: top;
        &:last-child {
          text-align: right;
          .partner-item {
            display: inline-block;
          }
        }
      }
    }
    .partner-item {
      margin-bottom: 38px;
      font-size: 14px;
      text-align: left;
    }

    @media (max-width: 992px) {
      .expert-item__wrap {
        width: 25%;
      }
    }
    @media (max-width: 768px) {
      .expert-list__wrap {
        margin: 0 -6px;
      }
      .expert-item__wrap {
        width: 33.33%;
        padding: 0 6px;
      }

      .partner-wrap {
        .partner-list {
          display: inline-block;
          width: 100%;
          vertical-align: top;
          font-size: 0;
          &:last-child {
            text-align: left;
            width: 100%;
            .partner-item {
              display: inline-block;
              width: 100%;
              font-size: 0;
              li {
                display: inline-block;
                width: 50%;
                font-size: 12px;
              }
            }
          }
        }
      }
      .partner-item {
        display: inline-block;
        font-size: 12px;
        width: 50%;
        vertical-align: top;
      }

    }
    @media (max-width: 480px) {
      .expert-item__wrap {
        width: 50%;
      }

    }
  }



</style>
