<template>
  <div class="expert-library__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <h2 class="title-simple">{{web.title.master}}</h2>
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
        fetchLoading: true
      }
    },
    methods: {
    	change: function (page) {
//        console.log(page)
        var self = this;
        self.fetchLoading = true;
        self.$http({
          method: 'post',
          url: '/api/Text/expertslist',
          data: {
            p: page
          }
        }).then(function (res) {
          self.expert = res.data;
          self.count = res.data.count;
          self.fetchLoading = false;
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
      expert
    }
  }
</script>

