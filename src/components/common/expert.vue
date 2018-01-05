<template>
  <div class="expert-item">
    <div class="cover" :style="{ backgroundImage: 'url('+expert.cover+')' }"></div>
    <div class="caption">
      <div class="name omit">{{expert.name}}</div>
      <div class="from omit">{{expert.from}}</div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'carrousel',
    props: ['expert'],
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .expert-item {
    position: relative;
    margin-bottom: 10px;
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
    }
  }
  @media (max-width: 1200px) {
    .expert-item {
      .name {
        font-size: 18px;
      }
      .from {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 992px) {
    .expert-item {
      .name {
        font-size: 18px;
      }
      .from {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 768px) {
    .expert-item {
      .name {
        font-size: 18px;
      }
      .from {
        font-size: 14px;
      }
    }
  }



</style>
