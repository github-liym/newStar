<template>
	<header id="header" class="navbar" :class="{'navbar__active': isActive}">
    <div ref="headerTop" class="navbar-top">
      <div class="wrap1200">
        <router-link :to="{path: '/'}"><img class="logo-head" src="../../assets/images/logo-head.png"/></router-link>
        <router-link :to="{path: '/'}"><img class="logo-head__simple" src="../../assets/images/logo.png"/></router-link>
        <div class="navbar-top__right">
          <!--<ul class="language-trigger">
            <li :class="{active: language=='zh'}">
              <a href="javascript:"  @click="setLanguage('zh')"><strong>中文</strong></a>
            </li>
            <li :class="{active: language=='en'}">
              <a href="javascript:"  @click="setLanguage('en')">English</a>
            </li>
          </ul>-->
          <ul>
            <li v-for="item in nav.sign" class="active" v-if="!$store.state.user">
              <router-link :to="{path: item.path}"  @click.native="closeNav"><strong>{{item.name}}</strong></router-link>
            </li>
            <li v-else class="userItem">
              <router-link class="username omit" :to="{path: '/user'}"  @click.native="closeNav"><strong>{{$store.state.user}}</strong></router-link>
              <a href="javascript:" @click="loginout()">退出</a>
            </li>
          </ul>
        </div>
        <div class="navbar-toggle__trigger" @click="navbarTrigger()"></div>
      </div>
    </div>
    <div class="navbar-inner">
      <ul class="navbar-nav__main">
        <li v-for="item in nav.item" v-if="$store.state.user||item.path!='/user'" :class="{active: false}">
          <!--{{item}}-->
          <router-link v-if="!item.children" :to="{path: item.path}" @click.native="closeNav">{{item.name}}</router-link>
          <router-link v-else :to="{path: item.path}">{{item.name}}</router-link>
          <ul v-if="item.children" class="navbar-nav__sub">
            <li v-for="itemSub in item.children">
              <router-link :to="{path: itemSub.path}" @click.native="closeNav">{{itemSub.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
     <!-- <div class="navbar-search">
        <input type="text" class="search-controller">
        <i class="icon i-search"></i>
      </div>-->
    </div>
  </header>
</template>

<script>
	export default {
		name: 'Header',
    props: ['nav','language'],
    data: function () {
//			console.log(this.$route)
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
      },
      loginout(){
        this.$store.commit('loginout')
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style lang="scss">
  #app {
    @media (max-width: 768px) {
      padding-top: 59.27px;
    }
  }
  .userItem {
    a {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .username {
    max-width: 70px;
  }
  .newstar {
    display: inline-block;
    width: 137px;
    background: url("../../assets/images/logo.png") no-repeat center;
    background-size: 100% auto;
  &:before {
     content: '';
     display: block;
     padding-top: (40/137)*100%;
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
  .item-sign {
    display: inline-block;
    margin-right: 20px;
    li {
      display: inline-block;
    }
  a {
    line-height: 26px;
    margin-left: 15px;
  }
  }
  .item-lang {
    display: inline-block;
    a {
      width: 64px;
      line-height: 26px;
      border: 1px solid #202020;
      text-align: center;
      border-radius: 5px;
      margin-left: 15px;
      &:first-child {
         margin-left: 0;
       }
  }
  .active {
    background: #202020;
    display: none;
  }
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
  .item-sign {
    display: block;
    margin: 0;
  a {
    display: block;
    margin: 0;
    padding-right: 15px;
    line-height: 33px;
  }
  }
  .item-lang {
    position: absolute;
    top: 22px;
    right: 10px;
  .active {
    display: none;
  }
  }
  }
  }
  .logo-head {
    display: inline-block;
    vertical-align: middle;
    margin-left: 80px;
  }
  .logo-head__simple {
    display: none;
    width: 90px;
  }
  .navbar-top {
    font-size: 10.3px;
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
      margin-top: 120px;
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
    >li {
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
      &:hover,&.active {
        .navbar-nav__sub {
          display: block;
        }
        > a {
          color: #fabf1b;
        }
      }
      >a {
        display: block;
        padding: 0 40px;
      }
    }
  }
  .navbar-nav__sub {
    display: none;
    position: absolute;
    left: 50%;
    z-index: 2;
    background: #333;
    width: 100px;
    transform: translateX(-50%);
    box-shadow: inset 0px 3px 10px 0px #242424;
    li {
      line-height: (40/14);
      text-align: center;
      &:hover {
        color: #fabf1b;
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
    height: 24px;
    font-size: 11px;
    line-height: 24px;
    border: 0;
    background: url("../../assets/images/search-box__bg.png") no-repeat center;
    background-size: 100% 100%;
    color: #fff;
    padding: 0 30px 0 10px;
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
    display: none;
    position: absolute;
    top: 50%;
    left: 0px;
    font-size: .78em;
    width: 4em;
    height: 4em;
    margin-top: -2em;
    background: rgba(#fff, .2);
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

  @media (max-width: 1200px) {
    .navbar-nav__main {
      >li {
        >a {
          padding: 0 30px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .navbar-nav__main {
      >li {
        >a {
          padding: 0 15px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    #header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 8;
    }
    .navbar-top {
      text-align: center;
      height: auto;
      padding: 15px 0;
    }
    .logo-head {
      display: none;
    }
    .logo-head__simple {
      display: inline-block;
    }
    .navbar-nav__main {
      display: block;
      transition: all ease .3s;
      height: 0;
      line-height: 45px;
      overflow: hidden;
      li {
        display: block;
        &:after {
          display: none;
        }
      }
      .navbar__active & {
        height: 270px;
        overflow: auto;
      }
    }
    .navbar-toggle__trigger {
      display: block;
    }
    .navbar-search {
      display: none;
    }
    .navbar-top__right {
      top: 0;
      ul {
        display: inline-block;
        margin: 0;
      }
      .language-trigger {
        .active {
          display: none;
        }
      }
    }
    .navbar-top__right {
      li {
        padding-left: 15px;
      }
    }
    .navbar-nav__sub {
      position: relative;
      left: 0;
      transform: translateX(0);
      width: 100%;
      li {
        text-align: left;
        a {
          padding: 0 30px;
        }
      }

    }
  }

</style>
