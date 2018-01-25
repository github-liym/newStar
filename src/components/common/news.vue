<template>
  <div class="news-list">
    <div class="news-item" v-for="item in news">
      <router-link :to="{path: '/newsInfo',query: {id:item.id}}" class="cover" :style="{ backgroundImage: 'url('+item.cover+')' }"></router-link>
      <div class="caption">
        <router-link :to="{path: '/newsInfo',query: {id:item.id}}" class="title omit">{{item.title}}</router-link>
        <div class="time">{{item.time}}</div>
        <div class="desc">{{item.desc}}</div>
        <router-link class="i-triangle" :to="{path: '/newsInfo',query: {id:item.id}}" >more</router-link>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'newsItem',
    props: ['news'],
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>



</style>
