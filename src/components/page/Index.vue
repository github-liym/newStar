<template>
  <div id="index">
    <loading v-show="fetchLoading"></loading>
    <bannerMain :swiperData="banner"></bannerMain>
    <div class="online-exhibition__wrap" v-show="onlineExhibition">
      <div class="wrap1200">
        <onlineExhibition class="online-exhibition" :swiperData = "onlineExhibition"></onlineExhibition>
      </div>
    </div>
    <div class="news-wrap" v-show="news">
      <div class="wrap1200">
        <h2 class="title-simple">
          {{web.title.news}}
          <router-link class="news-more" :to="{path: '/news'}">{{web.others.more}}</router-link>
        </h2>
        <news class="news-list__wrap" :news="news"></news>
      </div>
    </div>
    <div class="expert-library__wrap wrap1200"  v-show="expert">
      <h2 class="title-simple">{{web.title.master}}</h2>
      <div class="expert-library__text">{{web.index.master}}</div>
      <div class="expert-list__wrap clearfix">
        <div class="expert-item__wrap" v-for="item in expert">
          <expert :expert="item"></expert>
        </div>
      </div>
    </div>
    <div class="partner-wrap">
      <div class="wrap1200 clearfix">
        <div class="partner-list">
          <div class="partner-item">
            <h3>{{partner[0].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[0].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[1].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[1].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[2].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[2].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[5].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[5].list">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <h3>{{partner[3].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[3].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[6].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[6].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[7].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[7].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[8].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[8].list">{{item}}</li>
            </ul>
          </div>
          <div class="partner-item">
            <h3>{{partner[9].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[9].list">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <h3>{{partner[4].title[0]}}</h3>
            <ul>
              <li  v-for="item in partner[4].list">{{item}}</li>
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
        fetchLoading: true
      }
    },
    mounted(){
			var self = this;
			self.$http({
        method: 'post',
        url: '/api/index/index'
      }).then(function (res) {
      	self.fetchLoading = false;
      	self.option = res.data;
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {
    	web(){
    		return this.$store.state.config[this.$store.state.language].web
      },
    	banner(){
    		return this.option[this.$store.state.language].banner
      },
      onlineExhibition(){
    		return this.option[this.$store.state.language].onlineExhibition
      },
      news(){
        return this.option[this.$store.state.language].news
      },
      expert(){
      	return this.option[this.$store.state.language].expertInit
      },
      partner(){
      	return this.option[this.$store.state.language].partner
      }
    },
    components: {
      onlineExhibition,bannerMain,news,expert
    }
	}

</script>
