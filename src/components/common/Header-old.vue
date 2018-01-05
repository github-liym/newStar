<template>
	<header id="header" class="navbar" :class="{'navbar__active': isActive}">
    <div class="navbar-top">
      <div class="wrap1200">
        <img class="logo-head" src="../../assets/images/logo-head.png"/>
        <div class="navbar-top__right">
          <ul>
            <li :class="{active: language=='zh'}">
              <a href="javascript:"  @click="setLanguage('zh')"><strong>中文</strong></a>
            </li>
            <li :class="{active: language=='en'}">
              <a href="javascript:"  @click="setLanguage('en')">English</a>
            </li>
          </ul>
          <ul>
            <li v-for="item in nav.sign" class="active">
              <router-link :to="{path: item.path}"  @click.native="closeNav"><strong>{{item.name}}</strong></router-link>
            </li>
          </ul>
        </div>
        <div class="navbar-toggle__trigger" @click="navbarTrigger()"></div>
      </div>
    </div>
    <div class="navbar-inner">
      <ul class="navbar-nav__main">
        <li v-for="item in nav.item">
          <router-link :to="{path: item.path}" @click.native="closeNav">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="navbar-search">
        <input type="text" class="search-controller">
        <i class="icon i-search"></i>
      </div>
    </div>
  </header>
</template>

<script>
	export default {
		name: 'Header',
    props: ['nav','language'],
    data: function () {
      return {
      	isActive: false
      }
    },
    methods: {
      setLanguage(language){
        this.$emit('setLanguage',language);
      },
      navbarTrigger(){
        this.isActive = !this.isActive
      },
      closeNav(){
        this.isActive = false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    @media (max-width: 768px) {
      padding-top: 69px;
    }
  }
  #header {
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
  .navbar {
    background: #323232;
    color: #fff;
  .navbar-inner {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
      @media (max-width: 1200px) {
        width: 970px;
      }
      @media (max-width: 992px) {
        width: 750px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
  }
  .nav-header {
    display: inline-block;
  }
  .navbar-main {
    display: inline-block;
    margin-left: 50px;

  }
  .newstar {
    vertical-align: middle;
    padding: 14.5px 0;
  }
  .right-panel {
    position: absolute;
    top: 22px;
    right: 0;
  //margin-top: 22px;
    font-size: 12px;
  }
  .navbar-toggle__trigger {
    display: none;
  }
  @media (max-width: 992px) {
    .nav-header {
      display: block;
      text-align: center;
    }
    .navbar-main {
      display: block;
      margin: 0 auto;
      text-align: center;
    }

  }
  @media (max-width: 768px) {
    .navbar-toggle__trigger {
      position: absolute;
      top: 12px;
      left: 10px;
      display: block;
    }
    .nav-header {
      display: block;
      text-align: center;
    }
    .navbar-main {
      text-align: left;
    }
    .nav-main {
      display: block;
      margin: 0;
    li {
      display: block;
      width: 100%;
  >a {
     width: 100%;
     border-radius: 0;
   }
  }
  }
  .right-panel {
    position: inherit;
    right: 0;
    top: 0;
    text-align: right;
  }
  }
  }
  .logo-head {
    display: inline-block;
    vertical-align: middle;
    margin-left: 80px;
  }
  .navbar-top {
    font-size: 11.5px;
    height: 240px;
    background: url("../../assets/images/head-top__bg.jpg") center;
    >.wrap1200 {
      position: relative;
      height: 100%;
      &:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
    }
  }
  .navbar-top__right {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 15px;
    line-height: 1;
    padding-top: 9px;
    text-align: left;
    ul {
      margin-top: 30px;
    }
    li {
      background: url("../../assets/images/icon/i-triangle.png") left bottom no-repeat;
      padding-left: 25px;
      margin-bottom: 10px;
      &.active {
        color: #fabf1b;
      }
    }
  }
  .navbar-nav__main {
    display: inline-block;
    line-height: 60px;
    li {
      position: relative;
      display: inline-block;
      &:after {
        position: absolute;
        top: 50%;
        right: 0;
        content: '';
        width: 1px;
        height: 14px;
        margin-top: -7px;
        background: #fff;
      }
      a {
        padding: 0 40px;
      }
    }
  }
  .navbar-search {
    position: absolute;
    top: 50%;
    right: 40px;
    margin-top: -9px;
    .i-search {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -5px;
    }
  }
  .search-controller {
    display: block;
    width: 140px;
    height: 18px;
    font-size: 11px;
    line-height: 18px;
    border: 0;
    background: url("../../assets/images/search-box__bg.png") no-repeat center;
    background-size: 100% 100%;
    color: #fff;
    padding: 0 30px 0 10px;
  }
  @media (max-width: 768px) {
    .navbar-top {
      text-align: center;
      height: auto;
      padding: 15px 0;
    }
    .logo-head {
      width: 25%;
      margin: 0 auto;
    }
    .navbar-main {
      height: 0;
      overflow: hidden;
      transition: height .5s ease;
       .navbar__active & {
        height: 200px;
      }
    }
    .navbar-nav__main {
      .navbar__active & {
        /*height: 200px;*/
      }
    }
  }
  .nav-main {
    display: inline-block;
    vertical-align: middle;
    li {
      display: inline-block;
      margin-right: 18px;
    >a {
       line-height: 33px;
       padding: 0 20px;
       border-radius: 3px;
      &.router-link-exact-active,&:hover {
        background: #202020;
      }
     }
    }
  }
  $general-transition-speed: .4s;
  $accent: #ff6589;
  $accent: rgba(#fff,1);
  $trigger-active-style: jumbled-x;
  $trigger-active-shape: leaf;
  .navbar-toggle__trigger {
    display: block;
    font-size: .78em;
    width: 4em;
    height: 4em;
    background: rgba(#fff, .05);
    color: #fff;
    transition: $general-transition-speed;
    &:before {
      position: absolute;
      top: .76em;
      left: .5em;
      height: .5em;
      width: .5em;
      content: '';
      background: $accent;
      border-radius: 0;
      box-shadow:
        .5em 0 0 0 adjust-hue($accent, 20%),
        1em 0 0 0 adjust-hue($accent, 40%),
        1.5em 0 0 0 adjust-hue($accent, 60%),
        2em 0 0 0 adjust-hue($accent, 80%),
        2.5em 0 0 0 adjust-hue($accent, 100%),

        0 1em 0 0 adjust-hue($accent, 0),
        .5em 1em 0 0 adjust-hue($accent, 20%),
        1em 1em 0 0 adjust-hue($accent, 40%),
        1.5em 1em 0 0 adjust-hue($accent, 60%),
        2em 1em 0 0 adjust-hue($accent, 80%),
        2.5em 1em 0 0 adjust-hue($accent, 100%),

        0 2em 0 0 adjust-hue($accent, 0),
        .5em 2em 0 0 adjust-hue($accent, 20%),
        1em 2em 0 0 adjust-hue($accent, 40%),
        1.5em 2em 0 0 adjust-hue($accent, 60%),
        2em 2em 0 0 adjust-hue($accent, 80%),
        2.5em 2em 0 0 adjust-hue($accent, 100%);
      transition: $general-transition-speed;
    }

    &:hover {
      background: rgba(#fff, .1);

      &:before {
        background: adjust-hue($accent, 100%);
        box-shadow:
          .5em 0 0 0 adjust-hue($accent, 80%),
          1em 0 0 0 adjust-hue($accent, 60%),
          1.5em 0 0 0 adjust-hue($accent, 40%),
          2em 0 0 0 adjust-hue($accent, 20%),
          2.5em 0 0 0 adjust-hue($accent, 0),

          0 1em 0 0 adjust-hue($accent, 100%),
          .5em 1em 0 0 adjust-hue($accent, 80%),
          1em 1em 0 0 adjust-hue($accent, 60%),
          1.5em 1em 0 0 adjust-hue($accent, 40%),
          2em 1em 0 0 adjust-hue($accent, 20%),
          2.5em 1em 0 0 adjust-hue($accent, 0),

          0 2em 0 0 adjust-hue($accent, 100%),
          .5em 2em 0 0 adjust-hue($accent, 80%),
          1em 2em 0 0 adjust-hue($accent, 60%),
          1.5em 2em 0 0 adjust-hue($accent, 40%),
          2em 2em 0 0 adjust-hue($accent, 20%),
          2.5em 2em 0 0 adjust-hue($accent, 0);
      }

    }

    .navbar__active & {
      background: rgba(#fff, .1);

      &:before {
        background: $accent;

        @if $trigger-active-style == wave {
          box-shadow:
            .5em .5em 0 0 adjust-hue($accent, 20%),
            1em 1em 0 0 adjust-hue($accent, 40%),
            1.5em .5em 0 0 adjust-hue($accent, 60%),
            2em 0 0 0 adjust-hue($accent, 80%),
            2.5em .5em 0 0 adjust-hue($accent, 100%),

            0 1em 0 0 adjust-hue($accent, 0),
            .5em 1.5em 0 0 adjust-hue($accent, 20%),
            1em 2em 0 0 adjust-hue($accent, 40%),
            1.5em 1.5em 0 0 adjust-hue($accent, 60%),
            2em 1em 0 0 adjust-hue($accent, 80%),
            2.5em 1.5em 0 0 adjust-hue($accent, 100%),

            0 2em 0 0 transparent,
            .5em 2em 0 0 transparent,
            1em 2em 0 0 transparent,
            1.5em 2em 0 0 transparent,
            2em 2em 0 0 transparent,
            2.5em 2em 0 0 transparent;
        }

        @if $trigger-active-style == x {
          left: .5em;
          box-shadow:
            .5em .5em 0 0 adjust-hue($accent, 20%),
            1em 1em 0 0 adjust-hue($accent, 40%),
            1.5em .5em 0 0 adjust-hue($accent, 60%),
            2em 0 0 0 adjust-hue($accent, 80%),
            2.5em .5em 0 0 transparent,

            0 2em 0 0 adjust-hue($accent, 0),
            .5em 1.5em 0 0 adjust-hue($accent, 20%),
            1em 2em 0 0 transparent,
            1.5em 1.5em 0 0 adjust-hue($accent, 60%),
            2em 2em 0 0 adjust-hue($accent, 80%),
            2.5em 1.5em 0 0 transparent,

            0 2em 0 0 transparent,
            .5em 2em 0 0 transparent,
            1em 2em 0 0 transparent,
            1.5em 2em 0 0 transparent,
            2em 2em 0 0 transparent,
            2.5em 2em 0 0 transparent;
        }

        @if $trigger-active-style == jumbled-x {
          left: .75em;
          box-shadow:
            .5em .5em 0 0 adjust-hue($accent, 20%),
            1em 1em 0 0 adjust-hue($accent, 40%),
            1.5em .5em 0 0 adjust-hue($accent, 60%),
            2em 0 0 0 adjust-hue($accent, 80%),

            0 2em 0 0 adjust-hue($accent, 0),
            .5em 1.5em 0 0 adjust-hue($accent, 20%),
            1.5em 1.5em 0 0 adjust-hue($accent, 60%),
            2em 2em 0 0 adjust-hue($accent, 80%),
        }

        @if $trigger-active-shape == rounded {
          border-radius: .1em;
        }

        @if $trigger-active-shape == circle {
          border-radius: .25em;
        }

        @if $trigger-active-shape == leaf {
          border-radius: .15em 0 .15em;
        }

      }

    }
  }

</style>
