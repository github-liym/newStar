<template>
  <div class="article__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <div class="page-bg__triangle cover"></div>
    <div class="page-bg__letter cover"></div>
    <div class="article" v-html="statement[$store.state.language]"></div>
  </div>
</template>

<script>
//  import news from '@/components/common/news.vue'
  export default {
    name: 'aboutUs',
    data () {
      return {
        fetchLoading: true,
        statement: {}
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/documents/statement'
      }).then(function (res) {
//      	console.log(res.data);
      	self.statement = res.data;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {

    }
  }
</script>
