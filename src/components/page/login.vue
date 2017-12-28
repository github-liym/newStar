<template>
	<div class="login fullPage">
    <div class="inner">
      {{loginForm}}
      <div class="login-form__wrap">
        <div class="login-form__header">报名</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
          <el-form-item prop="phoneNumber">
            <el-input size="medium" v-model="loginForm.phoneNumber" placeholder="请输入手机号码"  suffix-icon="el-icon-mobile-phone"></el-input>
          </el-form-item>
          <el-form-item class="form-item__last" prop="code">
            <el-col :span="13">
              <el-input size="medium" placeholder="请输入验证码" v-model="loginForm.code"></el-input>
            </el-col>
            <el-col :span="1"><div class="grid-content bg-purple-light">&nbsp;</div></el-col>
            <el-col :span="10">
              <el-button size="medium">发送验证码</el-button>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">报名</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
    data() {
			var validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号码不能为空'));
        }
      };
			var validateCode = (rule, value, callback) => {
        if (!value) {
          console.log("if")
          return callback(new Error('验证码不能为空'));
        }else {
        	console.log("else")
        }
      };
      return {
        loginForm: {
          phoneNumber: '',
          codeInit: '',
          code: '',
        },
        rules: {
        	phoneNumber: [
            { validator: validatePhone, trigger: 'blur' }
          ],
        	code: [
            { validator: validateCode, trigger: 'blur' }
          ],

        }
      };
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
