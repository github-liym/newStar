<template>
  <div class="expert-item">
    <router-link :to="{path: 'expertInfo', query:{id:item.id}}" class="cover" :style="{ backgroundImage: 'url('+item.cover+')' }"></router-link>
    <div class="caption">
      <div class="name omit">{{item.name}}</div>
      <div class="from omit">{{item.from}}</div>
    </div>
    <div class="mask">
      {{item.desc}}
      <div class="more">查看</div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'carrousel',
    props: ['item'],
    data: function () {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
  .expert-item {
    display: block;
    position: relative;
    top: 0;
    transition: all ease .3s;
    .cover {
      &:before {
        padding-top: (256/182)*100%;
      };
    }
    .caption {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 10px;
      text-align: justify;
      color: #fff;
      background: rgba(#454545,.8);
    }
    .name {
      font-size: 18px;
      font-family: SimHei;
    }
    .from {
      font-size: 14px;
      color: #c9c9c9;
    }
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 18px;
      text-align: justify;
      color: #fff;
      background: rgba(#000,.8);
      opacity: 0;
      transition: all ease .3s;
      transform: scale(1.12);
    }
    .more {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
    &:hover {
      top: -8px;
      .mask {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  @media (max-width: 1200px) {
    /*.expert-item {
      .name {
        font-size: 18px;
      }
      .from {
        font-size: 14px;
      }
    }*/
  }
  @media (max-width: 992px) {
   /* .expert-item {
      .name {
        font-size: 18px;
      }
      .from {
        font-size: 14px;
      }
    }*/
  }
  @media (max-width: 768px) {
    /*.expert-item {
      .name {
        font-size: 18px;
      }
      .from {
        font-size: 14px;
      }
    }*/
  }



</style>
