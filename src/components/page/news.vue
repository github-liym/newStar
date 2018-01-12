<template>
  <div class="news-list__wrap wrap1200">
    <h2 class="title-simple">大赛动态 | Competition dynamics</h2>
    <news v-if="newlist[$store.state.language]" class="news-list" :news="newlist[$store.state.language]"></news>

    <div  v-show="newlist[$store.state.language]" class="news-more" @click="getData()" v-if="count>pageSize && count>pageSize*p">加载更多</div>
    <div  v-show="newlist[$store.state.language]" class="news-more" v-if="!(count>pageSize*p)">没有更多数据了</div>
  </div>
</template>

<script>
  import news from '@/components/common/news.vue'
  export default {
    name: 'newsPage',
    data () {
      return {
      	newlist: {

        },
        news: [
          /*{
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
          },
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
          },
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
          }*/
        ],
        pageSize: 4,
        count: null,
        p: 1
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/Text/postslist',
        data: {
          lang: self.$store.state.language,
          p: self.p
        }
      }).then(function (res) {
//      	console.log(res.data)
        self.newlist = res.data;
      	self.count = res.data.count;
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {
    	getData(){
        var self = this;
        self.$http({
          method: 'post',
          url: '/api/Text/postslist',
          data: {
            lang: self.$store.state.language,
            p: self.p+1
          }
        }).then(function (res) {
//          self.newlist = res.data;
          for (var i=0;i<res.data['zh'].length;i++){
          	self.newlist['zh'].push(res.data['zh'][i]);
          	self.newlist['en'].push(res.data['en'][i]);
          }
          self.count = res.data.count;
          self.p++;

        }).catch(function (err) {
          console.log(err);
        })
      }
    },
    components: {
      news
    }
  }
</script>

<style scoped>
  .news-list__wrap {
    padding-bottom: 45px;
    min-height: 590px;
  }
  .news-list {
    padding-bottom: 10px;
  }
  .news-more {
    display: block;
    cursor: pointer;
    background: #f1f1f1;
    text-align: center;
    color: #767676;
    line-height: 46px;
  }
  .data-none {

  }
</style>
