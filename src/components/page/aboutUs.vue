<template>
  <div class="article__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
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
      	aboutUs: {},
        fetchLoading: true
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
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {

    }
  }
</script>
