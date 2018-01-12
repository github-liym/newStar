<template>
  <div class="expert-info__wrap wrap1200">
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/expert">大师库</BreadcrumbItem>
      <BreadcrumbItem>{{expert.name}}</BreadcrumbItem>
    </Breadcrumb>
    <div class="expert-info">
      <div class="author">
        <div class="cover" :style="{backgroundImage: 'url('+expert.cover+')'}"></div>

      </div>
      <div class="inner">
        <div class="article-til">{{expert.name}}</div>
        <div class="article" v-html="expert.content"></div>
      </div>
      <!--<div class="inner">
        <div class="article-til">{{expert.name}}</div>
        <div class="article" v-html="expert.content"></div>
      </div>-->
    </div>
  </div>
</template>

<script>
  import expert from '@/components/common/expert.vue'
  export default {
    name: 'expertInfoPage',
    data () {
      return {
        expertInfo: {
          zh: [{title:''}],
          en: [{title:''}]
        }
      }
    },
    methods: {
    	change: function (page) {
        console.log(page)
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/text/experts',
        data: {
          id: self.$route.query.id
        }
      }).then(function (res) {
      	console.log("dddd")
        self.expertInfo = res.data;
        console.log(res.data['zh'][0])
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
      expert(){
        return this.expertInfo[this.$store.state.language][0]
      }
    },
    components: {
      expert
    }
  }
</script>

<style lang="scss">
  .expert-info__wrap {
    padding-top: 30px;
    padding-bottom: 40px;
  }
  .expert-info {
    position: relative;
    padding-left: 280px;
    min-height: 300px;
    .author {
      position: absolute;
      left: 0;
      top:0;
      width: 195px;
      .cover {
        background: rgba(#000,.3) no-repeat center;
        background-size: cover;
        &:before {
          padding-top: (256/182)*100%;
        };
      }
    }
    .article-til {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .inner {

    }
  }
  .ivu-breadcrumb {
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: 25px;
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
    .expert-info {
      padding-left: 0px;
      .author {
        position: relative;
        margin: 0 auto 30px;
      }
    }
  }
</style>
