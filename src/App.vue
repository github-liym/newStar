<template>
  <div id="app" ref="app" :class="[{ fullScreen: isFull },page]">
    <headerNav  @setLanguage="setLanguage" ref="header"></headerNav>
    <keep-alive>
      <router-view class="relative" v-if="!$route.meta.keepAlive"  :style="{minHeight: minHeight}"></router-view>
    </keep-alive>
    <router-view class="relative" v-if="$route.meta.keepAlive" :style="{minHeight: minHeight}"></router-view>
    <footerMain ref="footer"></footerMain>
  </div>
</template>

<script>
  import headerNav from '@/components/common/Header'
  import footerMain from '@/components/common/Footer'
  import 'iview/dist/styles/iview.css';
  import '@/assets/css/main.scss'

//  let configData = require('./assets/data/config.json');
//  全屏的页面
  let fullPage = ["Login"];
  export default {
    name: 'app',
    data(){
      return {
        language: this.$store.state.language,
        isFullInit: false,
        minHeight: 0,
      }
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
    mounted() {
      var self = this;
      var viewPort = self.getViewPort();
      var bodyHeight;
      if(viewPort.width>768){
        bodyHeight = viewPort.height - self.$refs.header.$el.clientHeight - self.$refs.footer.$el.clientHeight;
      }else {
        bodyHeight = viewPort.height - self.$refs.header.$refs.headerTop.clientHeight - self.$refs.footer.$el.clientHeight;
      }
      self.minHeight = bodyHeight+"px";

    },
    computed: {
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

</style>
