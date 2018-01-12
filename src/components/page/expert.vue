<template>
  <div class="expert-library__wrap wrap1200">
    <h2 class="title-simple">大师库 | Master library</h2>
    <div class="expert-library clearfix">
      <div class="expert-item__wrap" v-for="(item,index) in expert[$store.state.language]" :key="index">
        <expert :expert="item"></expert>
      </div>
    </div>
    <Page class="pagination-simple" :total="count" :page-size="pageSize" @on-change="change"></Page>
  </div>
</template>

<script>
  import expert from '@/components/common/expert.vue'
  export default {
    name: 'expertPage',
    data () {
      return {
        expert: [],
        count: null,
        pageSize: 20,
      }
    },
    methods: {
    	change: function (page) {
        console.log(page)
        var self = this;
        self.$http({
          method: 'post',
          url: '/api/Text/expertslist',
          data: {
            p: page
          }
        }).then(function (res) {
          self.expert = res.data;
          self.count = res.data.count;
        }).catch(function (err) {
          console.log(err);
        })
      }
    },
    mounted() {
      var self = this;
      self.$http({
        method: 'post',
        url: '/api/Text/expertslist',
        data: {
          p: 1
        }
      }).then(function (res) {
        self.expert = res.data;
        self.count = res.data.count;
      }).catch(function (err) {
        console.log(err);
      })
    },
    watch: {

    },
    components: {
      expert
    }
  }
</script>

<style lang="scss">
  .expert-library__wrap {

  }
  $expert-library__col: 7.5px;
  .expert-library {
    margin: 0 (-$expert-library__col);
    .expert-item__wrap {
      float: left;
      width: 20%;
      padding: 0 $expert-library__col;
      margin-bottom: 10px;
    }
  }
  .expert-library__wrap {
    .pagination-simple {
      margin: 30px 0;
    }
  }
  .pagination-simple {
    text-align: right;
    .ivu-page-item-jump-next, .ivu-page-item-jump-prev, .ivu-page-next, .ivu-page-prev {
      height: 26px;
      line-height: 26px;
      min-width: 26px;
      border: 1px solid #9f9f9f;
      color: #767676;
    }
    %item_active {
      border: 1px solid #fbd25f !important;
      a {
        color: #fabf1b !important;
      }
    }
    a {
      display: block;
    }
    .ivu-page-item {
      height: 26px;
      line-height: 26px;
      min-width: 26px;
      border: 1px solid #9f9f9f;
      a {
        color: #767676;
      }
      &:hover {
        @extend %item_active;
      }
    }
    .ivu-page-item-active {
      background: transparent;
      @extend %item_active;
    }
    .ivu-page-disabled {
      display: none;
    }
  }
  @media (max-width: 1200px) {}
  @media (max-width: 992px) {
    .expert-library {
      .expert-item__wrap {
        width: 25%;
      }
    }
  }
  @media (max-width: 768px) {
    .expert-library {
      .expert-item__wrap {
        width: 50%;
      }
    }
  }
  @media (max-width: 400px) {
    .expert-library {
      .expert-item__wrap {
        width: 100%;
      }
    }
  }
</style>
