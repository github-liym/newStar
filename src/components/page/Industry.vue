<template>
  <div class="news-list__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <h2 class="title-simple">{{web.industry.title}}</h2>
    <div v-if="newlist" class="news-list">
      <div class="news-item" v-for="item in newlist">
        <a :href="'/news/'+item.id+'.shtml'" class="cover" :style="{ backgroundImage: 'url('+item.cover+')' }"></a>
        <div class="caption">
          <a :href="'/news/'+item.id+'.shtml'" class="title omit">{{item.title}}</a>
          <div class="time">{{item.time}}</div>
          <div class="desc">{{item.desc}}</div>
          <a class="i-triangle" :href="'/news/'+item.id+'.shtml'" >more</a>
        </div>
      </div>
    </div>
    <h2 v-if="!newlist" style="text-align: center; padding-top: 12%;">{{web.industry.empty}}</h2>
    <div  v-show="newlist" class="news-more" @click="getData()" v-if="count>pageSize && count>pageSize*p">{{web.others.loadMore}}</div>
    <div  v-show="newlist" class="news-more" v-if="!(count>pageSize*p)&&p>1">{{web.others.notMore}}</div>
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
        pageSize: 5,
        count: null,
        p: 1
      }
    },
    computed: {
      web(){
        return this.$store.state.config['zh'].web
      },

    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/text/industrylist',
        data: {
          lang: self.$store.state.language,
          p: self.p
        }
      }).then(function (res) {
        self.newlist = res.data['zh'];
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
          url: '/api/text/industrylist',
          data: {
            lang: self.$store.state.language,
            p: self.p+1
          }
        }).then(function (res) {
          for (var i=0;i<res.data['zh'].length;i++){
          	self.newlist.push(res.data['zh'][i]);
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
