<template>
	<header id="header" class="navbar" :class="{'navbar__active': isActive}">
    <div ref="headerTop" class="navbar-top">
      <div class="wrap1200">
        <router-link :to="{path: '/index'}"><img class="logo-head" src="../../assets/images/logo-head.png" alt="2018NewStar国际设计奖LOGO"/></router-link>
        <router-link :to="{path: '/index'}"><img class="logo-head__simple" src="../../assets/images/logo.png"  alt="2018NewStar国际设计奖LOGO"/></router-link>
        <div class="navbar-top__right">
          <ul class="language-trigger">
            <li :class="{active: $store.state.language=='zh'}">
              <a href="javascript:"  @click="setLanguage('zh')"><strong>中文</strong></a>
            </li>
            <li :class="{active: $store.state.language=='en'}">
              <a href="javascript:"  @click="setLanguage('en')">English</a>
            </li>
          </ul>
          <ul>
            <li class="active" v-if="!$store.state.user">
              <router-link :to="{path: sign.signIn.path}"  @click.native="closeNav">
                <strong>{{sign.signIn.name}}</strong>
              </router-link>
            </li>
            <li v-else class="userItem">
              <router-link class="username omit" :to="{path: '/user'}"  @click.native="closeNav"><strong>{{$store.state.user}}</strong></router-link>
              <a href="javascript:" class="signout" @click="loginout()">{{sign.signOut.name}}</a>
            </li>
          </ul>
        </div>
        <div class="navbar-toggle__trigger" @click="navbarTrigger()"></div>
      </div>
    </div>
    <div class="navbar-inner">
      <ul class="navbar-nav__main">
        <li v-for="(item,index) in nav" v-if="$store.state.user&&$store.state.language=='zh'||!$store.state.user&&item.path!='/user'&&$store.state.language=='zh'||!$store.state.user&&item.path!='/user'&&$store.state.language=='en'&&item.path!='/industry'||$store.state.user&&$store.state.language=='en'&&item.path!='/industry'" >
          <!--导航-->
          <router-link :to="{path: item.path}" @click.native="closeNav(item)">
            {{item.name}}<i v-show="item.children" class="iconfont icon-angle__down"></i>
          </router-link>
          <!--子导航-->
          <ul v-if="item.children" class="navbar-nav__sub">
            <li v-for="itemSub in item.children">
              <router-link :to="{path: itemSub.path}" @click.native="closeNav">{{itemSub.name}}</router-link>

            </li>
          </ul>
        </li>
      </ul>
      <!--搜索-->
      <!--<div class="navbar-search">
        <input type="text" class="search-controller">
        <i class="icon i-search"></i>
      </div>-->
    </div>
  </header>
</template>

<script>
	export default {
		name: 'Header',
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
      closeNav(item){
//        console.log()
        if (!item.children){
          this.isActive = false
        }
      },
      loginout(){
        this.$store.commit('loginout');
        this.$router.push({path: '/login'})
      }
    },
    computed: {
    	nav(){
    		return this.$store.state.config[this.$store.state.language].nav
      },
    	sign(){
    		return this.$store.state.config[this.$store.state.language].sign
      }
    }
  }
</script>
