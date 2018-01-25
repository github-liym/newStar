<template>
  <div class="loading">
    <!--<div class="loader-inner square-spin">
      <div></div>
    </div>-->
    <div class="loader-inner ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'loading',
    data: function () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .loading {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }

  @keyframes square-spin {
    25% {
      -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
      transform: perspective(100px) rotateX(180deg) rotateY(0); }

    50% {
      -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
      transform: perspective(100px) rotateX(180deg) rotateY(180deg); }

    75% {
      -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
      transform: perspective(100px) rotateX(0) rotateY(180deg); }

    100% {
      -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
      transform: perspective(100px) rotateX(0) rotateY(0); } }

  .square-spin {
    position: relative;
    top: 50%;
    width: 50px;
    height: 50px;
    margin: -25px auto 0;
  }
  .square-spin > div {
    animation-fill-mode: both;
    width: 100%;
    height: 100%;
    background: #fabf1b;
    border: 1px solid #fabf1b;
    animation: square-spin 3s 0s cubic-bezier(.09, .57, .49, .9) infinite; }

  @keyframes scale {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1; }

    45% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
      opacity: 0.7; }

    80% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1; } }

  .ball-pulse {
    text-align: center;
    position: relative;
    top: 50%;
  }
  .ball-pulse > div:nth-child(0) {
    animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08); }
  .ball-pulse > div:nth-child(1) {
    animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08); }
  .ball-pulse > div:nth-child(2) {
    animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08); }
  .ball-pulse > div:nth-child(3) {
    animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08); }
  .ball-pulse > div {
    background-color: #fabf1b;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block; }

</style>
