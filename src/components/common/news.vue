<template>
  <div class="news-list">
    <div class="news-item" v-for="item in news">
      <router-link :to="{path: 'newsInfo',query: {id:item.id}}" class="cover" :style="{ backgroundImage: 'url('+item.cover+')' }"></router-link>
      <div class="caption">
        <div class="title omit">{{item.title}}</div>
        <div class="time">{{item.time}}</div>
        <div class="desc">{{item.desc}}</div>
        <a class="i-triangle" href="">more</a>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'carrousel',
    props: ['news'],
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
  .news-item {
    position: relative;
    margin-bottom: 15px;
    .cover {
      display: block;
      width: 370px;
      &:before {
        padding-top: (208/370)*100%;
      };
    }
    .caption {
      position: absolute;
      left: 390px;
      top: 0;
      max-width: 550px;
      height: 100%;
      padding-top: 5px;
      text-align: justify;
      color: #767676;
    }
    .title {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
      color: #454545;
    }
    .time {
      font-size: 12px;
      margin-bottom: 30px;
    }
    .desc {
      font-size: 14px;
      line-height: (18/14);
    }
    .i-triangle {
      position: absolute;
      bottom: 5px;
      color: #767676;
      padding-left: 18px;
      background: url("../../assets/images/icon/i-triangle__gray.png") left bottom no-repeat;
    }
  }
  @media (max-width: 1200px) {
    .news-item {
      .caption {
        width: 520px;
      }
    }
  }
  @media (max-width: 992px) {
    .news-item {
      .cover {
        width: 48%;
      }
      .caption {
        left: 50%;
        width: 50%;
      }
      .time {
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 768px) {
    .news-item {
      .cover {
        width: 100%;
      }
      .caption {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        max-width: 100%;
        border: 1px solid rgba(#767676,.3);
        border-top: 0px;
        padding: 0 5px 40px;
      }
    }
    .i-triangle {
      right: 25px;
    }

  }



</style>
