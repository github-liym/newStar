<template>
  <div class="login-wrap">
    <loading v-show="fetchLoading"></loading>
    <div class="wrap1200">
      <div class="login-logo__wrap">
        <div class="login-logo cover"></div>
      </div>
      <ul class="contact-inner">
        <li>{{web.form.contact}}：{{contact.tel}}</li>
        <li>{{web.form.email}}：{{contact.email}}</li>
        <li v-if="$store.state.language=='zh'">{{web.form.address}}：{{contact.address}}</li>
        <li v-else>{{web.form.address}}：{{contact.en_address}}</li>
        <li>
          <div class="wxcode">
            <img :src="contact.wx_url">
            <div>{{web.others.weChat}}：{{contact.wx}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
  	name: 'contactUs',
    data () {
      return {
      	contact: {},
        fetchLoading: true
      }
    },
    mounted() {
      var self = this;
      self.$http({
        method: 'post',
        url: '/api/documents/contact'
      }).then(function (res) {
//      	console.log(res.data[0])
        self.contact = res.data[0];
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed: {
  		web(){
  			return this.$store.state.config[this.$store.state.language].web
      }
    }
  }
</script>
