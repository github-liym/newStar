<template>
  <div class="login-wrap">
    <loading v-show="fetchLoading"></loading>
    <div class="wrap1200 clearfix">
      <div class="login-logo__wrap">
        <div class="login-logo cover"></div>
      </div>
      <div class="login-panel" v-if="!$store.state.user">
        <h3 class="login-title">{{web.login.title}}</h3>
        <div class="login-title__sub">{{web.login.titleSub}}</div>
        <form>
          <div class="form-item">
            <input v-model="formCustom.tel" name="mobile" v-validate="'required|mobile'" :data-vv-as="web.form.phoneTip" :class="{ 'is-danger': errors.has('mobile')}" :placeholder="web.form.phoneTip+'：'" type="text" class="form-controller__gray">
            <span  class="form-text__danger">{{ errors.first('mobile') }}</span>
          </div>
          <div class="columns">
            <div class="column is-16">
              <div class="form-item">
                <input v-model="formCustom.code" name="code" v-validate="'required|mobile'" :data-vv-as="web.form.code" :class="{ 'is-danger': errors.has('code')}" :placeholder="web.form.codeTip+'：'" type="text" class="form-controller__gray">
                <span  class="form-text__danger">{{ errors.first('code') }}</span>
              </div>
            </div>
            <div class="column is-8">
              <div class="form-item">
                <button type="button" class="btn-code" @click="getCode()" :disabled="isSend">
                  <span v-show="!isSend">{{web.form.sendCode}}</span>
                  <span v-show="isSend">{{coutDown}}s</span>
                </button>
              </div>

            </div>
          </div>
          <div class="form-item">
            <button class="btn-yellow__linear"  type="button" @click="handleSubmit('formCustom')">{{web.others.signIn}}</button>
          </div>
        </form>
       <!-- <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
          <FormItem prop="tel">
            <Input type="text" class="ivu-controller" v-model="formCustom.tel" :placeholder="web.form.phoneTip"></Input>
          </FormItem>
          <FormItem prop="code" :class="{'ivu-form-item-error': codeErr }">
            <Row :gutter="6">
              <Col span="16" ><Input type="text" class="ivu-controller"  v-model="formCustom.code" :placeholder="web.form.codeTip"></Input></Col>
              <Col span="8">
              <Button type="primary" class="btn-code" @click="getCode()" :disabled="isSend">
                <span v-show="!isSend">{{web.form.sendCode}}</span>
                <span v-show="isSend">{{coutDown}}s</span>
              </Button>
              </Col>
            </Row>
            <div v-if="codeErr" class="ivu-form-item-error-tip">验证码错误</div>
          </FormItem>
          <FormItem>
            <Button class="btn-yellow__linear"  type="primary" @click="handleSubmit('formCustom')">{{web.others.signIn}}</Button>
          </FormItem>
        </Form>-->

      </div>
      <div v-else><h3 class="login-title">{{$store.state.user}},欢迎您</h3></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      /*const validateTel = (rule, value, callback) => {
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
      };*/

      return {
        fetchLoading: true,
      	coutDown: '',
        timer: null,
        isSend: false,
        codeErr: false,
        formCustom: {
          tel: '',
          code: ''
        },
        /*ruleCustom: {
          tel: [
            { validator: validateTel, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' },
          ]
        }*/
      }
    },
    mounted(){
      this.fetchLoading = false;
    },
    methods: {
      getCode () {
        var self = this;
        self.$validator.validate('mobile',self.formCustom.tel).then(result => {
          if (result){
            self.isSend = true;
            const TIME_COUNT = 60;
            if (!self.timer) {
             /* self.$http({
                method: 'post',
                url: 'api/Index/sendMsg',
                data: {
                  m: self.formCustom.tel
                }
              }).then(function (res) {
                  console.log(res)
                }).catch(function (err) {
                  /!*console.log("Err")
                   console.log(err)*!/
                });*/
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
    },
    computed: {
    	web(){
    		return this.$store.state.config[this.$store.state.language].web
      }
    }
  }
</script>

