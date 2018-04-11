<template>
  <div class="opus-info-wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <div class="article-wrap">
      <div class="article-title">{{article.title}}</div>
      <div class="article-other clearfix">
        <div class="article-type">
          <span class="article-tab">原创</span>{{article.paraclass}}
        </div>
        <div class="article-share">
          分享：<div class="social-share" data-sites="qq,weibo,wechat"></div>
        </div>

      </div>
      <div class="article-content" v-html="article.content"></div>
    </div>
    <div class="author-tab">
      <div class="author-item">
        <span>作者:</span>{{article.author}} {{article.other_author}}
      </div>
      <div class="author-item omit">
        <span>学校/单位:</span>{{article.author_post}}
      </div>
      <div class="author-item omit">
        <span>所在院系:</span>{{article.author_department}}
      </div>
      <div class="like">
        <div class="like-btn" :class="{on: article.is_like, animation: like_animation}" @click="like()">
          <i class="icon i-like2"></i>{{article.like_count}}
          <span class="interactive">+1</span>
        </div>
        作品真不错，点个赞吧！
      </div>
    </div>
  </div>
</template>

<script>
  import Share from 'social-share.js/dist/js/social-share.min.js'
  import 'social-share.js/dist/css/share.min.css';

  export default {
    name: 'articleInfo',
    data () {
      return {
        fetchLoading: true,
        like_animation: false,
        article: {}
      }
    },
    Share,
    methods: {
    	like: function () {
    		var self = this;
    		if (self.article.is_like != 1){
          self.$http({
            method: "post",
            url: "/api/text/take_like",
            data: {
              id: self.$route.query.id
            }
          }).then(function (res) {
//          	console.log(res)
            if (res.data === 1){
              self.article.is_like = 1;
              self.article.like_count ++;
              self.like_animation = true;
            }
          }).catch(function (err) {
            console.log(err)
          })
        }

      }
    },
    mounted() {
    	var self = this;
      self.$http({
        method: 'post',
        url: '/api/text/works',
        data: {
        	id: self.$route.query.id
        }
      }).then(function (res) {
        self.article = res.data[0];
//        console.log(self.article);
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
