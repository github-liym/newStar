<template>
  <div class="opus-item">
    <router-link :to="{path: '/opusInfo',query: {id: opus.id}}" class="cover" :style="{ backgroundImage: 'url('+opus.cover+')' }" ></router-link>
    <div class="caption">
      <router-link :to="{path: '/opusInfo',query: {id: opus.id}}" class="title omit" >{{opus.title}}</router-link>
      <ul class="count">
        <li>
          <i class="icon i-browse"></i>{{ opus.view || 0 }}
        </li>
        <li>
          <i class="icon i-like"></i>{{ opus.like || 0 }}
        </li>
      </ul>
      <div class="bottom">
        <span class="name">{{opus.name}}</span>
        <span class="nsid">ID:{{opus.signId}}</span>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'opusItem',
    props: ['opus'],
    data: function () {
      return {
      }
    },
  }
</script>
