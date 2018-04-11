<template>
  <div class="opus-list__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <div class="opus-list__head clearfix">
      <div class="filter filter-count">
        <div class="filter-count__item" v-for="(item,index) in web.works.filter.type" :class="{active: filter.activeIndex==index}"  @click="getData(index,sort.activeIndex,filter.para[index].val,sort.para[sort.activeIndex].val)">
          <div class="title">{{item.title}}</div>
          <span class="count">{{config.filter.count[index]}}</span>
        </div>
      </div>
      <div class="filter-sort">
        {{web.others.sort}}：<div class="sort__item" v-for="(item,index) in web.works.filter.sort" :class="{active: sort.activeIndex==index}"  @click="getData(filter.activeIndex,index,filter.para[filter.activeIndex].val,sort.para[index].val)">
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="opus-list clearfix" v-if="opus">
      <div class="opus-item__wrap" v-for="item in opus">
        <opus :opus="item"></opus>
      </div>
    </div>
    <h2 style="text-align: center; padding-top: 15%;" v-if="!opus">{{web.works.empty}}</h2>
    <div v-show="count>1&&page<count"  class="news-more" @click="getNext()" >{{web.others.loadMore}}</div>
    <div v-show="count>1&&page===count"  class="news-more" >{{web.others.notMore}}</div>

  </div>
</template>

<script>
  import opus from '@/components/common/opus.vue'
  export default {
    name: 'newsPage',
    data () {
      return {
        fetchLoading: true,
      	config: {
          filter: {
            activeIndex: 0,
            count: [0,0,0],
          },
          sort: {
            active: 0,
            type: [0,0,0]
          }
        },
        filter: {
          activeIndex: 0,
          para: [
            {count:0, val: null},
            {count:0, val: 5},
            {count:0, val: 6}
          ]
        },
        sort: {
          activeIndex: 0,
          para: [
            { val: 1 },
            { val: 2 },
            { val: 3 }
          ]
        },
        opus: [],
        count: 0,
        page: 1,
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/text/workslist',
        data: {
          p: 1,
          o: 1
        }
      }).then(function (res) {
      	self.config.filter.count[0] = res.data.All;
      	self.config.filter.count[1] = res.data.FinalistCount;
      	self.config.filter.count[2] = res.data.AwardCount;
      	self.opus = res.data.zh;
      	self.count = res.data.PageCount;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {
    	getData(filterIndex,sortIndex,type,sort){
    		var self = this;
        self.filter.activeIndex = filterIndex;
        self.sort.activeIndex = sortIndex;
    		self.$http({
          method: 'post',
          url: '/api/text/workslist',
          data: {
          	p: 1,
            c: type,
            o: sort
          }
        }).then(function (res) {
        	self.page = 1;
        	self.opus = res.data.zh;
          self.count = res.data.PageCount;
        }).catch(function (err) {
          console.log(err);
        });

      },
      getNext(){
    		var self = this;

    		if (self.page===self.count) return;

    		self.$http({
          method: "post",
          url: "/api/text/workslist",
          data: {
          	p: self.page+1,
            c: self.filter.para[self.filter.activeIndex].val,
            o: self.sort.para[self.sort.activeIndex].val
          }
        }).then(function (res) {
          for (var i=0;i<res.data.zh.length;i++){
            self.opus.push(res.data.zh[i]);
          }
          self.page++;
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    computed: {
    	web(){
    		return this.$store.state.config[this.$store.state.language].web
      }
    },
    components: {
      opus
    }
  }
</script>
