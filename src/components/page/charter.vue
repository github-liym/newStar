<template>
  <div class="article__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <div class="position-bottom__right page-bg__triangle cover"></div>
    <div class="page-bg__letter cover"></div>
    <div class="article" v-html="charter[$store.state.language]"></div>
  </div>
</template>

<script>
  export default {
    name: 'charter',
    data () {
      return {
        charter: {},
        fetchLoading: true
      }
    },
    mounted() {
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/documents/rules',
        data: {
          lang: self.$store.state.language,
          p: 1
        }
      }).then(function (res) {
//      	console.log(res.data)
      	self.charter = res.data;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
  }
</script>
