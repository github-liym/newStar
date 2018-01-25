<template>
	<footer id="footer">
    <div class="wrap1200 clearfix">
      <ul class="fl">
        <li v-for="item in footer.nav">
          <router-link :to="{path: item.href}">{{item.title}}</router-link>
        </li>
      </ul>
      <div class="fr">
        <p>{{config[$store.state.language].copyright}}</p>
        <p>{{config[$store.state.language].number}}</p>
      </div>
    </div>
  </footer>
</template>

<script>
	export default {
		name: 'Footer',
//    props: ['config'],
    data(){
			return {
				config: {
					zh:{

          },
          en: {

          }
        }
      }
    },
    mounted(){
			var self = this;
      self.$http({
        method: 'post',
        url: '/api/index/index'
      }).then(function (res) {
        self.config = res.data;
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {
			footer(){
				return this.$store.state.config[this.$store.state.language].footer
      },
    }
  }
</script>

