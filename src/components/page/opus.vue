<template>
  <div class="opus-list__wrap wrap1200">
    <div class="opus-list__head clearfix">
      <div class="filter filter-count">
        <div class="filter-count__item" v-for="(item,index) in config.filter[$store.state.language]" :class="{active: config.filter.active==index}">
          <div class="title">{{item.title}}</div>
          <span class="count" @click="">{{item.count}}</span>
        </div>
      </div>
      <div class="sort">
        排序：<div class="sort__item" v-for="(item,index) in config.sort[$store.state.language]" :class="{active: config.sort.active==index}">
          {{item.title}}
        </div>
      </div>
    </div>
    <h2 class="" style="text-align: center; padding-top: 15%;">作品正在征集中，敬请期待...</h2>
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
      	config: {
          filter: {
            active: 0,
            zh: [
              {
                title: "全部作品",
                count: 0
              },
              {
                title: "入围作品",
                count: 0
              },
              {
                title: "获奖作品",
                count: 0
              }
            ]
          },
          sort: {
            active: 0,
            zh: [
              {
                title: "时间",
              },
              {
                title: "浏览",
              },
              {
                title: "推荐",
              }
            ]
          }
        },
        opus: [
         /* {
            cover: "/static/images/opus1.png",
            title: "Free book品牌走概念系列",
            author: "范玮琪-slink",
            nsid: "ID:NS2018001232",
            like: 490,
            view: 808
          }*/
        ],
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
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {

    },
    components: {
      news
    }
  }
</script>

<style lang="scss" scoped>
  $mainColor: #fabf1b;
  .opus-list__wrap {
    padding-top: 25px;
    padding-bottom: 45px;
  }
  .opus-list__head {
    margin-bottom: 20px;
  }
  .filter-count {
    float: left;
    font-size: 18px;
    color: #767676;
    line-height: (30/18);
    .filter-count__item {
      position: relative;
      display: inline-block;
      margin-right: 55px;
      cursor: pointer;
      &:hover {
        color: $mainColor;
      }
    }
    .active {
      color: $mainColor;
    }
    .title {
      font-weight: bold;
    }
    .count {
      position: absolute;
      top: 0;
      left: 100%;
      line-height: 1;
      margin-left: 3px;
      font-size: 12px;
    }
  }
  .sort {
    float: right;
    margin-top: 6px;
    font-size: 14px;
    line-height: (15/14);
    font-weight: bold;
    color: #c9c9c9;
    .sort__item {
      display: inline-block;
      padding: 0 10px;
      border-left: 1px solid #c9c9c9;
      cursor: pointer;
      &:first-child {
        border-left: none;
      }
      &:hover {
        color: $mainColor;
      }
    }
    .active {
      color: $mainColor;
    }
  }
  .opus-list {
    margin: 0 -10px;
    .opus-item__wrap {
      width: 25%;
      padding: 0 10px;
    }
  }
  .opus-item {
    .cover {
      border-radius: 3px;
      &:before {
        padding-top: (192/270)*100%;
      }
    }
  }

  @media (max-width: 768px) {
    .filter-count {
      float: none;
      font-size: 16px;
      margin-bottom: 10px;
      .filter-count__item {
        margin-right: 30px;
      }
    }
    .sort {
      float: none;
    }
  }
</style>
