<template>
  <div class="news-info__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/Information/news">{{web.title.news}}</BreadcrumbItem>
      <BreadcrumbItem>{{news.title}}</BreadcrumbItem>
    </Breadcrumb>
    <div class="news-info">
      <div class="news-title">{{news.title}}</div>
      <div class="news-other clearfix">
        <ul class="type list-inline pull-left">
          <li>{{web.others.view}}：{{news.view}}</li>
        </ul>
        <div class="social-share" data-sites="qq,weibo,wechat"></div>
      </div>
      <div class="article" v-html="news.content"></div>
    </div>
  </div>
</template>

<script>
  import Share from 'social-share.js/dist/js/social-share.min.js'
  import 'social-share.js/dist/css/share.min.css';

  export default {
    name: 'newsInfo',
    data () {
      return {
        fetchLoading: true,
        newsInfo: {
        	zh: [{title:''}],
        	en: [{title:''}]
        }
      }
    },
    Share,
    methods: {
    	change: function (page) {
        console.log(page)
      }
    },
    mounted() {
    	var self = this;
      self.$http({
        method: 'post',
        url: '/api/text/posts',
        data: {
        	id: self.$route.query.id,
          lang: self.$store.state.language
        }
      }).then(function (res) {
        self.newsInfo = res.data;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
    	web(){
    		return this.$store.state.config[this.$store.state.language].web
      },
      news(){
      	return this.newsInfo[this.$store.state.language][0]
      }
    }
  }
</script>
