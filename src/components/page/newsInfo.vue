<template>
  <div class="news-info__wrap wrap1200">
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/expert">新闻动态</BreadcrumbItem>
      <BreadcrumbItem>{{news.title}}</BreadcrumbItem>
    </Breadcrumb>
    <div class="news-info">
      <div class="news-title">{{news.title}}</div>
      <div class="news-other clearfix">
        <ul class="type list-inline pull-left">
          <li>浏览量：{{news.view}}</li>
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
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
      news(){
      	return this.newsInfo[this.$store.state.language][0]
      }
    }
  }
</script>

<style lang="scss">
  .news-info__wrap {
    padding-top: 30px;
    padding-bottom: 45px;
    /*max-width: 770px;*/
    .type {
      float: left;
      margin-top: 10px;
      li {
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
        &:first-child {
          border-left: none;
        }
      }
    }
  }
  .social-share {
    float: right;
  }
  .news-title {
    margin-bottom: 25px;
    color: #292929;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2;
  }
  .news-other {
    margin-bottom: 30px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #888;
    border-bottom: 1px solid #e9e9e9;
  }
  .news-info {
    font-size: 14px;
    img {
      max-width: 100%;
    }
    p {
      margin-bottom: 10px;
    }
  }
  .ivu-breadcrumb {
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: 40px;
    padding-bottom: 3px;
    a{
      color: #888;
      &:hover {
        color: #fabf1b;
      }
    }
    .ivu-breadcrumb-item-separator {
      color: #888;
      margin: 0 3px;
    }
    >span:last-child {
      color: #282828;
      font-weight: normal;
    }
  }
  @media (max-width: 1200px) {}
  @media (max-width: 992px) {

  }
  @media (max-width: 768px) {

  }
</style>
