<template>
  <div class="user-center__wrap">
    <div class="page-bg__letter1 cover"></div>
    <div class="wrap1200">
      <div class="page-bg__letter cover"></div>
      <Form class="user-form" ref="formValidate" :model="userForm.user">
        <div class="user-panel">
          <h3 class="title-yellow">个人信息</h3>
          <div class="text-767676">NewStar 个人ID：{{userForm.user.id}}</div>
          <FormItem>
            <Input v-model="userForm.user.name" placeholder="姓名"></Input>
          </FormItem>
          <Row :gutter="20">
            <Col span="9">
              <RadioGroup class="group-sex" v-model="userForm.user.sex" type="button">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
              </RadioGroup>
            </Col>
            <Col span="15">
              <FormItem>
                <DatePicker :value="userForm.user.birthday" @on-change="userForm.user.birthday=$event" format="yyyy-MM-dd" class="group-date" type="date" placeholder="出生年月日："></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            <Input v-model="userForm.user.IDcard"  placeholder="身份证号码："></Input>
          </FormItem>
          <FormItem>
            <Input v-model="userForm.user.post" placeholder="学校/单位名称："></Input>
          </FormItem>
          <FormItem>
            <DatePicker :value="userForm.user.graduationday" @on-change="userForm.user.graduationday=$event" class="group-date" format="yyyy-MM-dd" type="date" placeholder="毕业年月日："></DatePicker>
          </FormItem>
          <FormItem>
            <Input v-model="userForm.user.department" placeholder="所在院/系:"></Input>
          </FormItem>

          <Row :gutter="20">
            <Col span="12">
            <FormItem>
              <Input v-model="userForm.user.qq" placeholder="QQ:"></Input>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem>
              <Input v-model="userForm.user.wx" placeholder="微信:"></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="20">
            <Col span="17">
            <FormItem>
              <Input v-model="userForm.user.address" placeholder="通讯地址："></Input>
            </FormItem>
            </Col>
            <Col span="7">
            <FormItem>
              <Input v-model="userForm.user.zipcode" placeholder="邮编："></Input>
            </FormItem>
            </Col>
          </Row>

          <Row :gutter="20">
            <Col span="12">
            <FormItem>
              <!--<Input v-model="userForm.tel" placeholder="手机号码:"></Input>-->
              <div class="ivu-input">{{$store.state.user}}</div>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem>
              <Input v-model="userForm.user.email" placeholder="邮箱:"></Input>
            </FormItem>
            </Col>
          </Row>
        </div>
        <div class="user-panel">
          <h3 class="title-yellow">参赛作品</h3>
          <div class="group-opus">
            <span class="order">01.</span>
            <Row :gutter="20">
              <Col span="12">
              <FormItem>
                <Input v-model="userForm.user.title1" placeholder="作品题目:"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.class1" placeholder="作品类别:"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.teacher1" placeholder="指导老师:"></Input>
              </FormItem>
              </Col>
            </Row>
            <FormItem>
              <Input v-model="userForm.user.desc1" placeholder="作品简要说明:"></Input>
            </FormItem>
          </div>
          <div class="group-opus">
            <span class="order">02.</span>
            <Row :gutter="20">
              <Col span="12">
              <FormItem>
                <Input v-model="userForm.user.title2" placeholder="作品题目:"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.class2" placeholder="作品类别:"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.teacher2" placeholder="指导老师:"></Input>
              </FormItem>
              </Col>
            </Row>
            <FormItem>
              <Input v-model="userForm.user.desc2" placeholder="作品简要说明:"></Input>
            </FormItem>
          </div>

          <FormItem>
            <Input v-model="userForm.user.remarks" placeholder="备注:"></Input>
          </FormItem>

        </div>

        <Row :gutter="1">
          <Col :span="20">
          <FormItem>
            <Button class="btn-yellow__linear" type="primary" @click="updateUser()">更新信息</Button>
          </FormItem>
          </Col>
          <Col :span="4">
          <a class="down-link" :href="'http://newstar.91ant.com/api/index/toPDF?mid='+$store.state.user" target="_blank" >下载表格</a>
          </Col>
        </Row>
      </Form>
      <div class="intro">
        <hr/>
        <h3>填表说明：</h3>
        <ol>
          <li>官网报名ID为本届大赛唯一官网（http://newstar.91ant.com）报名所注册的帐号；参赛者请写明院校和系别（单位），填写详细有效的通讯地址，初赛参赛者的表格无需盖章，填妥后发至；如参赛作品入选答辩阶段，则参赛者须用电脑打印该表格，经作者所在院系（单位）盖章后方生效，参赛者携此表与作品一起参加2018NewStar国际设计奖现场答辩。</li>
          <li>如果是团队参赛，作者姓名填写主要设计者姓名，在备注处填写其他参与者姓名。</li>
          <li>参赛作品不超过两份（含两份）。</li>
          <li>进入答辩阶段的参赛者须在此表填写对作品的简要说明。</li>
        </ol>
        <h3>作者声明：</h3>
        <ol>
          <li>本人同意2018NewStar国际设计奖所有参赛细则</li>
          <li>本人确认主办方不以盈利为目的对本人作品的发表权。</li>
          <li>本人确认以上所送作品为本人独立设计与制作，如果为合作作品，已经注明。如果引起著作权纠纷由本人全权负责。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        /*userForm: {
          "id": "NS001",
          "name": "李育梅",
          "sex": "女",
          "birthday": "1970-01-01",
          "IDcard": "445221199312254545",
          "post": "",
          "department": "技术部",
          "qq": "942165624",
          "wx": "13049151587",
          "address": "瀚天科技园",
          "zipcode": "515548",
          "email": "942165624@qq.com",
          "remarks": "这是一段备注",
          "title1": "这是一个标题1",
          "class1": "这是一个类别1",
          "teacher1": "这是一个指导老师1",
          "desc1": "这是说明1",
          "title2": "这是一个标题2",
          "class2": "这是一个类别2",
          "teacher2": "这是一个指导老师2",
          "desc2": "这是说明2"
        },*/
        modal1: false,
        userForm: {
        	user:{}
        },
        ruleValidate: ''
      }
    },
    mounted(){
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/index/user',
        data: {
        	mid: self.$store.state.user
        },
      }).then(function (res) {
        console.log(res)
        self.userForm.user = res.data.user;
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      updateUser(){
      	var self = this;
      	self.$http({
          method: 'post',
          url: '/api/index/update_user',
          data: self.userForm.user,
//          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//          headers: {
//            'X-Requested-With': 'XMLHttpRequest',
//            'Content-Type': 'application/json; charset=UTF-8',
//            'Access-Control-Allow-Origin': '*'
//          },
        }).then(function (res) {
          alert("保存成功");
         /* self.$Modal.confirm({

          })*/
//          console.log(self.userForm)
        }).catch(function (err) {
          console.log("错误")
          console.log(err)
          console.log(self.userForm)
        })
      },
      /*getTime(starTime){
      	console.log(starTime)
      }*/

    }
  }
</script>

<style lang="scss">
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal-body {
      padding: 30px 16px;
    }
    .ivu-modal-footer {

    }
    .ivu-modal{
      top: 0;
    }
  }
  .user-center__wrap {
    position: relative;
    color: #767676;
    >.wrap1200 {
      position: relative;
      text-align: right;
      padding-top: 120px;
      padding-bottom: 50px;
    }
    .page-bg__letter {
      position: absolute;
      left: 0;
      top: 0;
      width: (352/1200)*100%;
    }
    .page-bg__letter1 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: (476/1200)*100%;
    }
    .title-yellow {
      position: absolute;
      left: 0;
      padding-top: 10px;
      margin-top: -10px;
      font-size: 18px;
      color: #fabf1b;
      padding-right: 45px;
      line-height: 1;
      background: url("../../assets/images/icon/i-triangle__gray1.png") no-repeat right bottom;
    }
    .ivu-input {
      height: 46px;
      background: #f7f7f7;
      font-size: 14px;
      line-height: 36px;
    }
    .group-opus {
      position: relative;
      .order {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-130%);
        font-size: 16px;
        line-height: 46px;
        font-weight: bold;
        color: #767676;
      }
    }
    .user-panel {
      padding-bottom: 15px;
      &:first-child {
        padding-bottom: 30px;
      }
    }
    .intro {
      position: relative;
      display: inline-block;
      max-width: 950px;
      width: 100%;
      padding: 0 100px 0 277px;
      text-align: left;
      font-weight: bold;
      font-size: 12px;
      hr {
        margin-bottom: 20px;
      }
      h3 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      ol li{list-style-type:decimal;}
      ol {
        padding-left: 20px;
        line-height: (20/12);
        margin-bottom: 25px;
      }
      /*ol li{ list-style-position:outside !important;}*/
    }
  }
  .group-date {
    width: 100%;
    .ivu-input-icon {
      height: 46px;
      line-height: 46px;
    }
  }
  .group-sex {
    width: 100%;
    border: 1px solid #edecec !important;
    .ivu-radio-group-item{
      position: relative;
      width: 50%;
      height: 46px;
      line-height: 44px;
      text-align: center;
      box-shadow: none !important;
      border: none !important;
      color: #767676;
      background: #f7f7f7;
      &:nth-child(2) {
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 18px;
          margin-top: -9px;
          background: #767676;
          z-index: 2;
        }
      }
      &:hover {
        color: #fabf1b;
      }
    }
    .ivu-radio-wrapper-checked {
      color: #fabf1b;
    }
  }
  .text-767676 {
    color: #767676;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .user-form {
    position: relative;
    display: inline-block;
    max-width: 950px;
    width: 100%;
    padding: 0 100px 0 277px;
    text-align: left;
  }
  .ivu-form{
    .ivu-form-item-label {
      padding-right: 3px;
    }
  }
  .down-link {
    display: block;
    color: #0072a6;
    text-decoration: underline;
    font-weight: bold;
    text-align: center;
    line-height: 44px;
    &:hover {
      color: #0072a6;
      text-decoration: underline;
    }
  }
  @media (max-width: 1200px) {
    .user-form,.user-center__wrap .intro {
      padding: 0 100px 0 250px;
    }
  }
  @media (max-width: 992px) {
    .user-form,.user-center__wrap .intro {
      padding: 0 50px 0 120px;
    }
  }
  @media (max-width: 768px) {
    .user-center__wrap > .wrap1200 {
      padding-top: 40px;
    }
    .user-center__wrap .title-yellow {
      display: inline-block;
      position: relative;
      margin-bottom: 20px;
    }
    .user-form,.user-center__wrap .intro {
      padding: 0 30px;
    }

  }
</style>
