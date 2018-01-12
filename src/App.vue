<template>
  <div id="app" ref="app" :class="[{ fullScreen: isFull },page]">
    <headerNav :nav="navMain" :language="language" @setLanguage="setLanguage" ref="header"></headerNav>
    <!--<router-view :style="{minHeight: minHeight}"></router-view>-->
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :style="{minHeight: minHeight}"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive" :style="{minHeight: minHeight}"></router-view>
    <footerMain ref="footer" :footer="footer"></footerMain>
  </div>
</template>

<script>
  import headerNav from '@/components/common/Header'
  import footerMain from '@/components/common/Footer'
  let configData = require('./assets/data/config.json');
//  全屏的页面
  let fullPage = ["Login"];
  export default {
    name: 'app',
    data(){
      return {
        language: this.$store.state.language,
      	navMainInit: {},
        footer: configData[this.$store.state.language].footer,
        isFullInit: false,
        minHeight: 0
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
      },
     /* minHeight: function () {
        return (this.getViewPort().height-300)+"px"
      }*/
    },
    methods: {
      setLanguage(language){
        this.language = language;
        this.$store.commit('language',language)
      },
      getViewPort(){
        if(document.compatMode == "BackCompat") {   //浏览器嗅探，混杂模式
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
          };
        } else {
          return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
          };
        }
      },
      getDocumentPort() {
        if(document.compatMode == "BackCompat") {
          return {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
          };
        } else {
          return {
            width: Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),
            height: Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)
          }
        }
      }
    },
    watch: {
    	$route(){
    		var self = this;
        var viewPort = self.getViewPort();
        var bodyHeight;
        if(viewPort.width>768){
          bodyHeight = viewPort.height - self.$refs.header.$el.clientHeight - self.$refs.footer.$el.clientHeight;
        }else {
          bodyHeight = viewPort.height - self.$refs.header.$refs.headerTop.clientHeight - self.$refs.footer.$el.clientHeight;
        }
        self.minHeight = bodyHeight+"px";
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
      height: auto;
      background-image: url("assets/images/icon/i-prev.png");
      &:before {
        padding-top: (36/50)*100%;
      }
    }
    &.i-next {
      width: 50px;
      height: auto;
      background-image: url("assets/images/icon/i-next.png");
      &:before {
        padding-top: (36/50)*100%;
      }
    }
    &.i-play {
      width: 80px;
      background-image: url("assets/images/icon/i-play.png");
    }
    &.i-close {
      width: 128px;
      background-image: url("assets/images/icon/i-close.png");
    }
  }


  .article {
    p {
      margin-bottom: 15px;
    }
    img {
      max-width: 100%;
    }
  }
  .wrap1200 {
    padding: 0 30px;

  }
  .title-simple {
    padding: 40px 0 20px;
    margin: 0 auto;
    font-size: 18px;
  }
  .btn-yellow__linear {
    width: 100%;
    font-size: 16px;
    padding: 10px 15px;
    background: linear-gradient(to top, #fabf1b, #ffcf4b);
    border: none;
  }

  .page-bg__triangle {
    width: 575px;
    background-image: url("assets/images/page-bg__triangle.png");
    &:before {
      padding-top: (154/575)*100%;
    }
  }
  .page-bg__letter {
    width: 352px;
    background-image: url("assets/images/page-bg__letter.png");
    &:before {
      padding-top: (185/352)*100%;
    }
  }
  .page-bg__letter1 {
    width: 476px;
    background-image: url("assets/images/page-bg__letter1.png");
    &:before {
      padding-top: (287/476)*100%;
    }
  }

  @media (max-width: 768px) {
    .wrap1200 {
      padding: 0px;
    }
  }
</style>
