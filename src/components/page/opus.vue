<template>
  <div class="opus-list__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <div class="opus-list__head clearfix">
      <div class="filter filter-count">
        <div class="filter-count__item" v-for="(item,index) in web.works.filter.type" :class="{active: config.filter.active==index}">
          <div class="title">{{item.title}}</div>
          <span class="count" @click="">{{item.count}}</span>
        </div>
      </div>
      <div class="filter-sort">
        {{web.others.sort}}：<div class="sort__item" v-for="(item,index) in web.works.filter.sort" :class="{active: config.sort.active==index}">
          {{item.title}}
        </div>
      </div>
    </div>
    <h2 class="" style="text-align: center; padding-top: 15%;">{{web.works.empty}}</h2>
    <div class="opus-list">
      <div class="opus-item__wrap" v-for="item in opus">
        <div class="opus-item">
          <div class="cover" :style="{ backgroundImage: 'url('+item.cover+')' }" ></div>
          <div class="caption">
            <div class="title">{{item.title}}</div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import news from '@/components/common/news.vue'
  export default {
    name: 'newsPage',
    data () {
      return {
        fetchLoading: true,
      	config: {
          filter: {
            active: 0
          },
          sort: {
            active: 0
          }
        },
        opus: [],
        pageSize: 4,
        count: null
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/Text/postslist',
        data: {
          lang: self.$store.state.language,
          p: 1
        }
      }).then(function (res) {
      	self.news = res.data.posts;
      	self.count = res.data.count;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
    	web(){
    		return this.$store.state.config[this.$store.state.language].web
      }
    },
    components: {
      news
    }
  }
</script>
