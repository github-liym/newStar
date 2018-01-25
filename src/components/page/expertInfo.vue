<template>
  <div class="expert-info__wrap wrap1200">
    <loading v-show="fetchLoading"></loading>
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/expert">{{web.title.master}}</BreadcrumbItem>
      <BreadcrumbItem>{{expert.name}}</BreadcrumbItem>
    </Breadcrumb>
    <div class="expert-info">
      <div class="author">
        <div class="cover" :style="{backgroundImage: 'url('+expert.cover+')'}"></div>
      </div>
      <div class="inner">
        <div class="article-til">{{expert.name}}</div>
        <ul class="other">
          <li v-show="expert.class">{{web.others.field}}: {{expert.class}}</li>
          <li v-show="expert.company">{{web.others.enterprise}}: {{expert.company}}</li>
        </ul>
        <div class="article" v-html="expert.content"></div>
      </div>
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
        },
        fetchLoading: true
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
//      	console.log(res.data)
        self.expertInfo = res.data;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
      web(){
        return this.$store.state.config[this.$store.state.language].web
      },
      expert(){
        return this.expertInfo[this.$store.state.language][0]
      }
    },
    components: {
      expert
    }
  }
</script>

