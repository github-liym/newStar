<template>
  <div class="about-us__wrap wrap1200">
    <div class="page-bg__triangle cover"></div>
    <div class="page-bg__letter cover"></div>
    <div class="article" v-html="aboutUs[$store.state.language]"></div>
  </div>
</template>

<script>
//  import news from '@/components/common/news.vue'
  export default {
    name: 'aboutUs',
    data () {
      return {
      	aboutUs: {}
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/documents/about',
        data: {
          lang: self.$store.state.language,
          p: 1
        }
      }).then(function (res) {
//      	console.log(res.data)
      	self.aboutUs = res.data;
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .about-us__wrap {
    position: relative;
    padding-top: 70px;
    padding-bottom: 120px;
    .page-bg__letter {
      position: absolute;
      left: 0;
      top: 0;
      width: (352/1200)*100%;
    }
    .page-bg__triangle {
      position: absolute;
      right: 0;
      bottom: 0;
      width: (575/1200)*100%;
    }
    .article {
      position: relative;
      z-index: 2;
      max-width: 760px;
      margin: 0 auto;
      line-height: (22/14);
    }
  }
</style>
