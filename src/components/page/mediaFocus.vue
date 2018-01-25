<template>
  <div class="news-list__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <h2 class="title-simple">{{web.title.media}}</h2>
    <news v-if="newlist[$store.state.language]" class="news-list" :news="newlist[$store.state.language]"></news>

    <h2 v-if="!newlist[$store.state.language]" style="text-align: center; padding-top: 12%;">{{web.media.empty}}</h2>

    <div  v-show="newlist[$store.state.language]" class="news-more" @click="getData()" v-if="count>pageSize && count>pageSize*p">{{web.tips.loadMore}}</div>
    <div  v-show="newlist[$store.state.language]" class="news-more" v-if="!(count>pageSize*p)&&p>1">{{web.others.notMore}}</div>
  </div>
</template>

<script>
  import news from '@/components/common/news.vue'
  export default {
    name: 'newsPage',
    data () {
      return {
        fetchLoading: true,
      	newlist: {},
        news: [],
        pageSize: 4,
        count: null,
        p: 1
      }
    },
    computed: {
      web(){
        return this.$store.state.config[this.$store.state.language].web
      },

    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/text/medialist',
        data: {
          lang: self.$store.state.language,
          p: self.p
        }
      }).then(function (res) {
//      	console.log(res.data)
        self.newlist = res.data;
      	self.count = res.data.count;
        self.fetchLoading = false;
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
