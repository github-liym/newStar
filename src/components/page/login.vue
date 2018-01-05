<template>
  <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
    <FormItem prop="tel">
      <Input type="text" v-model="formCustom.tel" placeholder="手机号码"></Input>
    </FormItem>
    <FormItem prop="code" :class="{'ivu-form-item-error': codeErr }">
      <Input type="password"  v-model="formCustom.code" placeholder="验证码"></Input>
      <Button @click="sendCode()" :disabled="isSend">
        <span v-if="!isSend">发送验证码</span>
        <span v-else>重新发送（{{coutDown}}）</span>
      </Button>
      <div v-if="codeErr" class="ivu-form-item-error-tip">验证码错误</div>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
    </FormItem>
  </Form>
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
      	coutDown: 60,
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
      sendCode () {
        var self = this;
        self.isSend = true;
        var countdown = function () {
          setTimeout(function () {
            if (self.coutDown>0){
              self.coutDown--;
            }else {

            }

            countdown();
          },1000);
        };

      },
      handleSubmit (name) {
        var self = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http({
              method: 'post',
              url: '/api/index/signup_handle',
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
              },
              data: {
                mobile: this.formCustom.tel,
                mcode: this.formCustom.code
              }
            })
              .then(function (res) {
                console.log(res);
                if (res.data == "mobile error"){
                	self.codeErr = true;
                }else {
                  self.codeErr = false;
                  console.log("登录成功")
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

<style lang="scss" scoped>
  .login {
    height: 100%;
    background: #000000 url("../../assets/images/login-bg.jpg") no-repeat center;
    background-size: auto 100%;
    color: #fff;
    >.inner {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  .login-form__wrap {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    max-width: 340px;
    background: #fff;
    color: #333;
  }
  .login-form__header {
    padding: 0px 30px;
    font-size: 16px;
    line-height: 45px;
    border-bottom: 1px solid #333;
  }
  .login-form{
    padding: 0px 30px 40px;
    margin-top: 35px;
  }
  .form-item__last {
    margin-bottom: 35px;
  }
  .el-button {
   width: 100%;
  }
</style>
