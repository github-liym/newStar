<template>
  <div id="app" :class="[{ fullScreen: isFull },page]">
    <headerNav :nav="navMain" :language="language" @setLanguage="setLanguage"></headerNav>
    <router-view/>
    <footerMain :footer="footer"></footerMain>
  </div>
</template>

<script>
  import headerNav from '@/components/common/Header'
  import footerMain from '@/components/common/Footer'
  if (!localStorage.language){
    localStorage.language = "zh";
   }
  let configData = require('./assets/data/config.json');
//  全屏的页面
  let fullPage = ["Login"];
  export default {
    name: 'app',
    data(){
      return {
        language: localStorage.language,
      	navMainInit: {},
        footer: configData[localStorage.language].footer,
        isFullInit: false
      }
    },
    computed: {
    	navMain: function () {
        return {
          item: configData[this.language].nav,
          sign: configData[this.language].sign,
        }
      },
      isFull: function () {
    		if (!fullPage.indexOf(this.$route.name)){
    			return true;
        }else {
          return false;
        }
      },
      page: function () {
        return 'page'+this.$route.name
      }
    },
    methods: {
      setLanguage(language){
        this.language = localStorage.language= language;
      }
    },
    components: {
      headerNav,footerMain
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html,body {
    font-size: 14px;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    color: #444444;
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: "Microsoft YaHei",Helvetica , Arial, Microsoft YaHei, Tahoma, Verdana, Georgia;
  }
  textarea {
    resize: none;
  }
  input,button {
    outline: 0;
    &:focus {
      outline: 0;
    }
  }
  ul,ol{
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    &:hover {
      //text-decoration: none;
      color:inherit;
    }
    &:focus {
      @extend a:hover;
      outline: none;
    }
  }
  .wrap1200 {
    width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 970px;
    }
    @media (max-width: 992px) {
      width: 750px;
    }
    @media (max-width: 768px) {
      width: 95%;
    }
  }
  .clearfix:after{
    content:"";
    height:0;
    line-height:0;
    display:block;
    visibility:hidden;
    clear:both;
  }
  .clearfix{
    zoom:1;
  }
  .omit {
    max-width: 100%;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .fullScreen {
    height: 100%;
    padding-top: 300px;
    padding-bottom: 62px;
    #header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    #footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    @media (max-width: 768px) {
      padding-bottom: 80px;
    }

  }
  .cover {
    background: center;
    background-size: cover;
    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }
  i.icon {
    display: block;
    background-size: 100% 100%;
    &:before {
      content: '';
      display: block;
      background: no-repeat center;
      background-size: cover;
      padding-top: 100%;
    }
    &.i-search {
      width: 10px;
      background-image: url("assets/images/icon/i-search.png");
    }
    &.i-prev {
      width: 50px;
      background-image: url("assets/images/icon/i-prev.png");
      &:before {
        padding-top: (36/50)*100%;
      }
    }
    &.i-next {
      width: 50px;
      background-image: url("assets/images/icon/i-next.png");
      &:before {
        padding-top: (36/50)*100%;
      }
    }
  }
</style>
