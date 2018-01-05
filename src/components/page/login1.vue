<template>
  <div class="login-wrap">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
      <el-form-item prop="tel">
        <el-row :gutter="10">
          <el-col :span="5">手机号码</el-col>
          <el-col :span="19"><el-input v-model="loginForm.tel"></el-input></el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="10">
          <el-col :span="10"><el-input v-model="loginForm.code" placeholder="验证码"></el-input></el-col>
          <el-col :span="14"><el-button>发送验证码</el-button></el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">主要按钮</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>

<script>
	export default {
		name: 'Login',
    data() {
			var validateTel = (rule, value, callback) => {
        if (!value) {
          callback(new Error('手机号码不能为空'));
        }else {
        	
        }
      };
			var validateCode = (rule, value, callback) => {
        if (!value) {
          callback(new Error('验证码不能为空'));
        }else {
        	/* 通过 */
        }
      };
      return {
        loginForm: {
          tel: '',
          code: '',
        },
        rules: {
        	tel: [
            { validator: validateTel, trigger: 'blur' }
          ],
        	code: [
            { validator: validateCode, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$http({
              method: 'post',
              url: '/api/index/signup_handle',
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
              },
              data: {
                mobile: this.loginForm.tel,
                mcode: this.loginForm.code
              }
            })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
