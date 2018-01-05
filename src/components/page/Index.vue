<template>
  <div id="index">
    <bannerMain :swiperData = "banner"></bannerMain>
    <div class="online-exhibition__wrap wrap1200">
      <h2 class="title-simple">线上展览</h2>
      <onlineExhibition class="online-exhibition" :swiperData = "onlineExhibition"></onlineExhibition>
    </div>
    <div class="news-wrap">
      <div class="wrap1200">
        <h2 class="title-simple ">新闻动态</h2>
        <news class="news-list__wrap" :news="news"></news>
      </div>
    </div>
    <div class="expert-library__wrap wrap1200">
      <h2 class="title-simple">专家库</h2>
      <swiper class="expert-list__wrap" :options="expertSwiperOption">
        <swiper-slide v-for="(item1,index) in expert" :key="index">
          <div class="expert-item__wrap" v-for="item in item1">
            <expert :expert="item"></expert>
          </div>
        </swiper-slide>
        <div class="expert-library__pagination swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="partner-wrap">
      <div class="wrap1200">
        <div class="partner-list">
          <div class="partner-item">
            <h3>主办单位</h3>
            <ul class="">
              <li  v-for="item in partner['主办单位']">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>联合协办</h3>
            <ul class="">
              <li  v-for="item in partner['联合协办']">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <h3>战略合作</h3>
            <ul class="">
              <li  v-for="item in partner['战略合作']">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>合作媒体</h3>
            <ul class="">
              <li  v-for="item in partner['合作媒体']">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <h3>行业合作</h3>
            <ul class="">
              <li  v-for="item in partner['行业合作']">{{item}}</li>
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
        ],
        news: [
          {
            href: "",
            cover: '/static/images/login-bg.jpg',
            title: "2018NewStar新星设计奖参赛指南",
            time: '201-2-1',
            desc: ''
          },
          {
            href: "",
            cover: '/static/images/news-cover.jpg',
            title: "2018NEWSTAR国际设计大奖全球征集发布会2018NEWSTAR国际设计大奖全球征集发布会",
            time: '201-2-1',
            desc: '2018NEWSTAR国际设计大奖全球征集于2017年9月19日晚上19点30分在中国杭州武林广场举行盛大发布会，即时开始全球征集。征集期为：2017年9月19日－2018年9月19日。'
          }
        ],
        expertSwiperOption: {
      		speed: 800,
          pagination: {
            el: '.expert-library__pagination',
            clickable :true,
          }
        },
        expertInit: [
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "柳冠中",
            from: '中国'
          },
          {
          	cover: "/static/images/expert-cover.png",
          	name: "最后一个",
            from: '中国'
          }
        ],
        partner: {
          "主办单位":["澳大利亚设计基金会","蚂蚁雄兵"],
          "联合协办":["大沥镇人民政府 ","南方日报"],
          "战略合作":["中国高等教育学会","浙江广播电视集团","阿里巴巴","网易","新浪","艺创小镇","云栖小镇","梦栖小镇"],
          "合作媒体":["浙江卫视","网易设计","新浪家居","domus 国际中文版","动点科技","视觉ME","设计与制造"],
          "行业合作":["日本工业设计师协会","韩国设计振兴院","韩国首尔设计中心","韩国用户体验协会","奥地利设计协会","英国伦敦设计师部落","开普敦联合会","中国电器工业协会","中意设计创新中心","浙江省工业设计协会","广东省工业设计协会","湖南省工业设计协会","台湾工业设计协会","首尔设计节","北京设计周","深圳设计周","米兰设计周","伦敦设计周","赫尔辛基设计周","中国设计红星奖"]
        }
      }
    },
    computed: {
      expert: function () {
        var slidesPerView = 12;
        var k =0;
        var expertTemp =[];
        for(var i=0;i<this.expertInit.length;i=i+slidesPerView){
          expertTemp[k] = [];
          for(var j=i;j<i+slidesPerView&&j<this.expertInit.length;j++){
            expertTemp[k].push(this.expertInit[j])
          }
          k++;
        }
        return expertTemp
      }
    },
    components: {
      onlineExhibition,bannerMain,news,expert
    }
	}

</script>

<style lang="scss">
  #index {
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
    .wrap1200 {
      padding: 0 30px;
    }
    .news-wrap {
      padding-bottom: 25px;
      background: #f7f8f8;
    }
    .expert-list__wrap {
      margin: 0 -10px;
      padding-bottom: 60px;
    }
    .expert-item__wrap {
      float: left;
      width: 16.66666%;
      padding: 0 10px;
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
        margin: 0 0 15px;
        font-size: 18px;
        color: #fabf1b;
      }
      li {
        line-height: (20/16);
        margin-bottom: 10px;
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
      font-size: 16px;
      text-align: left;
    }

    @media (max-width: 992px) {
      .expert-item__wrap {
        width: 25%;
      }
    }
    @media (max-width: 768px) {
      .wrap1200 {
        padding: 0px;
      }
      .title-simple {
        margin: 0 auto;
        font-size: 18px;
      }
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
