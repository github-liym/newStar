<template>
  <div class="login-wrap">
    <div class="wrap1200">
      <div class="login-logo__wrap">
        <div class="login-logo cover"></div>
      </div>
      <ul class="contact-inner">
        <li>联系方式：{{contact.tel}}</li>
        <li>电子邮箱：{{contact.email}}</li>
        <li>地址：{{contact.address}}</li>
        <li>
          <div class="wxcode">
            <img :src="contact.wx_url">
            <div>公众号：{{contact.wx}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      	contact: {}
      }
    },
    mounted() {
      var self = this;
      self.$http({
        method: 'post',
        url: '/api/documents/contact',
        data: {
          lang: self.$store.state.language,
          p: 1
        }
      }).then(function (res) {
      	console.log(res.data[0])
        self.contact = res.data[0];
      }).catch(function (err) {
        console.log(err);
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .contact-inner {
    float: left;
    width: 100%;
    max-width: 350px;
    padding: 0 15px 0;
    li {
      margin-bottom: 10px;
    }
    .wxcode {
      display: block;
      text-align: center;
      font-size: 12px;
      padding-top: 20px;
      img {
        width: 150px;
      }
    }
  }
  .login-wrap {
    height: 100%;
    background: url("../../assets/images/login-bg.jpg") no-repeat center;
    background-size: cover;
    overflow: hidden;
    >.wrap1200 {
      position: relative;
      margin-top: 5%;
    }
  }
  .login-logo__wrap {
    float: left;
    width: 60%;
  }
  .login-panel {
    float: left;
    width: 320px;
    padding-top: 30px;
  }
  .login-logo {
    width: 340px;
    margin: 0 auto;
    background-image: url("../../assets/images/login-gif.gif");
  }
  .login-title {
    margin: 0 auto 5px;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    text-align: center;
  }
  .login-title__sub {
    margin-bottom: 15px;
    font-size: 12px;
    text-align: center;
    color: #666666;
  }
  @media (max-width: 992px) {
    .login-logo__wrap {
      width: 430px;
      .login-logo {
        margin: 0;
      }
    }
    .login-wrap>.wrap1200 {
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    .login-logo__wrap {
      display: none;
    }
    .login-panel {
      float: none;
      margin: 0 auto;
    }
  }
</style>
