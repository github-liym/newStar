<template>
  <router-link :to="{path: '/expertInfo', query:{id:expert.id}}" class="expert-item">
    <div class="cover" :style="{ backgroundImage: 'url('+expert.cover+')' }"></div>
    <div class="caption">
      <div class="name omit">{{expert.name}}</div>
      <div class="from omit">{{expert.from}}</div>
    </div>
    <div class="mask">
      {{expert.desc}}
      <div class="more">{{check}}</div>
    </div>
  </router-link>
</template>


<script>
  export default {
    name: 'expert',
    props: ['expert'],
    data: function () {
      return {
      }
    },
    filters: {
      /*ellipsis: function () {

      }*/
    },
    computed: {
      check(){
        return this.$store.state.config[this.$store.state.language].web.others.check
      }
    }
  }
</script>
