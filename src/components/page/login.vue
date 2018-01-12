<template>
  <div class="login-wrap">
    <div class="wrap1200 clearfix">
      <div class="login-logo__wrap">
        <div class="login-logo cover"></div>
      </div>
      <div class="login-panel" v-if="!$store.state.user">
        <h3 class="login-title">登录 | Login</h3>
        <div class="login-title__sub">免注册，使用手机动态验证码登录。</div>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
          <FormItem prop="tel">
            <Input type="text" class="ivu-controller" v-model="formCustom.tel" placeholder="输入手机号码"></Input>
          </FormItem>
          <FormItem prop="code" :class="{'ivu-form-item-error': codeErr }">
            <Row :gutter="6">
              <Col span="16" ><Input type="text" class="ivu-controller"  v-model="formCustom.code" placeholder="输入验证码"></Input></Col>
              <Col span="8">
              <Button type="primary" class="btn-code" @click="getCode()" :disabled="isSend">
                <span v-show="!isSend">发送验证码</span>
                <span v-show="isSend">{{coutDown}}s</span>
              </Button>
              </Col>
            </Row>
            <div v-if="codeErr" class="ivu-form-item-error-tip">验证码错误</div>
          </FormItem>
          <FormItem>
            <Button class="btn-yellow__linear"  type="primary" @click="handleSubmit('formCustom')">登录</Button>
          </FormItem>
        </Form>

      </div>
      <div v-else><h3 class="login-title">{{$store.state.user}},欢迎您</h3></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      const validateTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号码不能为空'));
        }else if(!/^1[34578]\d{9}$/.test(value)) {
          callback(new Error('手机号码格式错误'));
        }else {
          callback();
        }
      };
      const validateCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }else {
          callback();
        }
      };

      return {
      	coutDown: '',
        timer: null,
        isSend: false,
        codeErr: false,
        formCustom: {
          tel: '',
          code: ''
        },
        ruleCustom: {
          tel: [
            { validator: validateTel, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      getCode () {
        var self = this;
        this.$refs.formCustom.validateField('tel',function (err) {
          if(!err){
            self.isSend = true;
            const TIME_COUNT = 60;
            if (!self.timer) {
            	self.$http({
                method: 'post',
                url: 'api/Index/sendMsg',
                data: {
                	m: self.formCustom.tel
                }
              })
                .then(function (res) {
//                  console.log(res)
                })
                .catch(function (err) {
                  /*console.log("Err")
                  console.log(err)*/
                });
              self.coutDown = TIME_COUNT;
              self.timer = setInterval(() => {
                if (self.coutDown > 1 && self.coutDown <= TIME_COUNT) {
                  self.coutDown--;
                } else {
                  self.isSend = false;
                  clearInterval(self.timer);
                  self.timer = null;
                }
              }, 1000)
            }
          }
        })
      },
      handleSubmit (name) {
        var self = this;
        self.$refs[name].validate((valid) => {
          if (valid) {
          	self.$http({
            method: 'post',
            url: '/api/index/signup_handle',
            data: {
              mobile: self.formCustom.tel,
              mcode: self.formCustom.code
            }
          })
              .then(function (res) {

                if (res.data == "mobile error"){
                  self.codeErr = true;
//                  console.log("验证码错误")
                }else {
                  self.codeErr = false;
                  /*console.log(res)
                  console.log("登录成功")*/
                  self.$store.commit('isLogin',res.data);
                  self.$router.push({path: '/'})
                }
              })
              .catch(function (error) {
                console.log(error)
              });
          } else {
//            this.$Message.error('验证码错误');
          }
        })
      }
    }
  }
</script>

<style lang="scss">
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
  .btn-code {
    width: 100%;
    border: 1px solid #fabf1b;
    color: #fff;
    background: #fabf1b;
    padding: 7px 15px;
    margin-top: 8px;
    &:hover {
      border: 1px solid #fabf1b;
      background: rgba(#fabf1b,.8);
    }
  }
  .ivu-controller {
    .ivu-input {
      background: #f5f5f5;
      height: 50px;
      &:hover {
        border-color: #fabf1b;
      }
      &:focus {
        box-shadow: none;
        border-color: #fabf1b;
      }
    }
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
