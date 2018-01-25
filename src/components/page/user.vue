<template>
  <div class="user-center__wrap">
    <loading v-show="fetchLoading"></loading>
    <div class="page-bg__letter1 cover"></div>
    <div class="wrap1200">
      <div class="page-bg__letter cover"></div>
      <form id="userForm">
        <div class="form-panel__1">
          <h3 class="title-yellow">{{userInfo.title}}</h3>
          <div class="text-767676">{{userInfo.NSId}}：{{userForm.id}}</div>
          <div class="form-item">
            <input v-model="userForm.name" name="username" v-validate="'required'" :data-vv-as="userInfo.name" :class="{ 'is-danger': errors.has('username')}" :placeholder="userInfo.name+'：'" type="text" class="form-controller__gray">
            <span  class="form-text__danger">{{ errors.first('username') }}</span>
          </div>
          <div class="columns">
            <div class="column is-9">
              <div class="form-item radio-group__1 clearfix">
                <div class="radio-item">
                  <input class="radio-item__controller" id="man" type="radio" v-model="userForm.sex" value="1"/>
                  <label class="radio-item__label" for="man">{{web.sex.man}}</label>
                </div>
                <div class="radio-item">
                  <input  class="radio-item__controller" id="woman" type="radio" v-model="userForm.sex" value="0"/>
                  <label class="radio-item__label" for="woman">{{web.sex.woman}}</label>
                </div>
              </div>
            </div>
            <div class="column is-15">
              <div class="form-item">
                <input v-model="userForm.birthday" name="birthday" type="text" v-validate="'required|date_format:YYYY/MM/DD'" :class="{ 'is-danger': errors.has('birthday')}" :data-vv-as="userInfo.birthday" :placeholder="userInfo.birthday+'：DD/MM/YYYY'" class="form-controller__gray" >
                <span  class="form-text__danger">{{ errors.first('birthday') }}</span>
              </div>
            </div>
          </div>

          <div class="form-item">
            <input v-model="userForm.IDcard" name="IDcard" v-validate="'required'" :data-vv-as="userInfo.IDcard" :class="{ 'is-danger': errors.has('IDcard')}" :placeholder="userInfo.IDcard+'：'" type="text" class="form-controller__gray">
            <span  class="form-text__danger">{{ errors.first('IDcard') }}</span>
          </div>
          <div class="form-item">
            <input v-model="userForm.post" name="unit" v-validate="'required'" :data-vv-as="userInfo.unit" :class="{ 'is-danger': errors.has('unit')}" :placeholder="userInfo.unit+'：'" type="text" class="form-controller__gray">
            <span  class="form-text__danger">{{ errors.first('unit') }}</span>
          </div>
          <div class="form-item">
            <input v-model="userForm.graduationday" name="graduation" type="text" v-validate="'required|date_format:YYYY/MM/DD'" :class="{ 'is-danger': errors.has('graduation')}" :data-vv-as="userInfo.graduation" :placeholder="userInfo.graduation+'：DD/MM/YYYY'" class="form-controller__gray" >
            <span  class="form-text__danger">{{ errors.first('graduation') }}</span>
          </div>
          <div class="form-item">
            <input v-model="userForm.department" name="department" v-validate="'required'" :data-vv-as="userInfo.department" :class="{ 'is-danger': errors.has('department')}" :placeholder="userInfo.department+'：'" type="text" class="form-controller__gray">
            <span  class="form-text__danger">{{ errors.first('department') }}</span>
          </div>
          <div class="columns">
            <div class="column is-12">
              <div class="form-item">
                <input v-model="userForm.qq" placeholder="QQ：" type="text" class="form-controller__gray">
              </div>
            </div>
            <div class="column is-12">
              <div class="form-item">
                <input v-model="userForm.wx" :placeholder="userInfo.wx+'：'" type="text" class="form-controller__gray">
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-16">
              <div class="form-item">
                <input v-model="userForm.address" name="address" v-validate="'required'" :data-vv-as="userInfo.address" :class="{ 'is-danger': errors.has('address')}" :placeholder="userInfo.address+'：'" type="text" class="form-controller__gray">
                <span  class="form-text__danger">{{ errors.first('address') }}</span>
              </div>
            </div>
            <div class="column is-8">
              <div class="form-item">
                <input v-model="userForm.zipcode" name="zipcode" v-validate="'required'" :data-vv-as="userInfo.zipcode" :class="{ 'is-danger': errors.has('zipcode')}" :placeholder="userInfo.zipcode+'：'" type="text" class="form-controller__gray">
                <span  class="form-text__danger">{{ errors.first('zipcode') }}</span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <div class="form-item">
                <div class="form-controller__gray">{{$store.state.user}}</div>
              </div>
            </div>
            <div class="column is-12">
              <div class="form-item">
                <input v-model="userForm.email" :placeholder="userInfo.email+'：'" type="text" class="form-controller__gray">
              </div>
            </div>
          </div>
        </div>
        <div class="form-panel__1">
          <h3 class="title-yellow">{{userInfo.opus}}</h3>
          <div class="group-opus">
            <span class="order">01.</span>
            <div class="columns">
              <div class="column is-10">
                <div class="form-item">
                  <input v-model="userForm.title1" name="opusTil" v-validate="'required'" :data-vv-as="userInfo.opusTil" :class="{ 'is-danger': errors.has('opusTil')}" :placeholder="userInfo.opusTil+'：'" type="text" class="form-controller__gray">
                </div>
              </div>
              <div class="column is-7">
                <div class="form-item">
                  <input v-model="userForm.class1" name="opusType" v-validate="'required'" :data-vv-as="userInfo.opusType" :class="{ 'is-danger': errors.has('opusType')}" :placeholder="userInfo.opusType+'：'" type="text" class="form-controller__gray">
                </div>
              </div>
              <div class="column is-7">
                <div class="form-item">
                  <input v-model="userForm.teacher1" name="opusTeacher" v-validate="'required'" :data-vv-as="userInfo.opusTeacher" :class="{ 'is-danger': errors.has('opusTeacher')}" :placeholder="userInfo.opusTeacher+'：'" type="text" class="form-controller__gray">
                </div>
              </div>
            </div>
            <div class="form-item">
              <input v-model="userForm.desc1" name="opusDesc" v-validate="'required'" :data-vv-as="userInfo.opusDesc" :class="{ 'is-danger': errors.has('opusDesc')}" :placeholder="userInfo.opusDesc+'：'" type="text" class="form-controller__gray">
              <span class="form-text__danger" v-if="errors.first('opusTil')||errors.first('opusDesc')||errors.first('opusTil')||errors.first('opusTeacher')">请填写完整的作品信息</span>
            </div>
          </div>
          <div class="group-opus">
            <span class="order">02.</span>
            <div class="columns">
              <div class="column is-10">
                <div class="form-item">
                  <input v-model="userForm.title2" :placeholder="userInfo.opusTil+'：'" type="text" class="form-controller__gray">
                </div>
              </div>
              <div class="column is-7">
                <div class="form-item">
                  <input v-model="userForm.class2" :placeholder="userInfo.opusType+'：'" type="text" class="form-controller__gray">
                </div>
              </div>
              <div class="column is-7">
                <div class="form-item">
                  <input v-model="userForm.teacher2" :placeholder="userInfo.opusTeacher+'：'" type="text" class="form-controller__gray">
                </div>
              </div>
            </div>
            <div class="form-item">
              <input v-model="userForm.desc2" :placeholder="userInfo.opusDesc+'：'" type="text" class="form-controller__gray">
            </div>
          </div>
          <div class="form-item">
            <input v-model="userForm.remarks" :placeholder="userInfo.opusRemarks+'：'" type="text" class="form-controller__gray">
          </div>
        </div>
        <div class="form-panel__1">
          <div class="form-panel__ft">
            <button class="btn-yellow__linear" type="button" @click="updateUser()">{{userInfo.updata}}</button>
            <a class="down-link" :href="'http://newstar.91ant.com/api/index/toPDF?mid='+$store.state.user" target="_blank" >{{userInfo.down}}</a>
          </div>
        </div>
      </form>
      <!--<Form class="user-form" ref="formValidate" :model="userForm.user">
        <div class="user-panel">
          <h3 class="title-yellow">{{userInfo.title}}</h3>
          <div class="text-767676">{{userInfo.NSId}}{{userForm.user.id}}</div>
          <FormItem>
            <Input v-model="userForm.user.name" :placeholder="userInfo.name"></Input>
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
                <DatePicker :value="userForm.user.birthday" @on-change="userForm.user.birthday=$event" format="yyyy-MM-dd" class="group-date" type="date" :placeholder="userInfo.birthday"></DatePicker>
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            <Input v-model="userForm.user.IDcard"  :placeholder="userInfo.IDcard"></Input>
          </FormItem>
          <FormItem>
            <Input v-model="userForm.user.post" :placeholder="userInfo.unit"></Input>
          </FormItem>
          <FormItem>
            <DatePicker :value="userForm.user.graduationday" @on-change="userForm.user.graduationday=$event" class="group-date" format="yyyy-MM-dd" type="date" :placeholder="userInfo.graduation"></DatePicker>
          </FormItem>
          <FormItem>
            <Input v-model="userForm.user.department" :placeholder="userInfo.department"></Input>
          </FormItem>

          <Row :gutter="20">
            <Col span="12">
            <FormItem>
              <Input v-model="userForm.user.qq" placeholder="QQ:"></Input>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem>
              <Input v-model="userForm.user.wx" :placeholder="userInfo.wx"></Input>
            </FormItem>
            </Col>
          </Row>
          <Row :gutter="20">
            <Col span="17">
            <FormItem>
              <Input v-model="userForm.user.address" :placeholder="userInfo.address"></Input>
            </FormItem>
            </Col>
            <Col span="7">
            <FormItem>
              <Input v-model="userForm.user.zipcode" :placeholder="userInfo.zipcode"></Input>
            </FormItem>
            </Col>
          </Row>

          <Row :gutter="20">
            <Col span="12">
            <FormItem>
              &lt;!&ndash;<Input v-model="userForm.tel" placeholder="手机号码:"></Input>&ndash;&gt;
              <div class="ivu-input">{{$store.state.user}}</div>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem>
              <Input v-model="userForm.user.email" :placeholder="userInfo.email"></Input>
            </FormItem>
            </Col>
          </Row>
        </div>
        <div class="user-panel">
          <h3 class="title-yellow">{{userInfo.opus}}</h3>
          <div class="group-opus">
            <span class="order">01.</span>
            <Row :gutter="20">
              <Col span="12">
              <FormItem>
                <Input v-model="userForm.user.title1" :placeholder="userInfo.opusTil"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.class1" :placeholder="userInfo.opusType"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.teacher1" :placeholder="userInfo.opusTeacher"></Input>
              </FormItem>
              </Col>
            </Row>
            <FormItem>
              <Input v-model="userForm.user.desc1" :placeholder="userInfo.opusDesc"></Input>
            </FormItem>
          </div>
          <div class="group-opus">
            <span class="order">02.</span>
            <Row :gutter="20">
              <Col span="12">
              <FormItem>
                <Input v-model="userForm.user.title2" :placeholder="userInfo.opusTil"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.class2" :placeholder="userInfo.opusType"></Input>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem>
                <Input v-model="userForm.user.teacher2" :placeholder="userInfo.opusTeacher"></Input>
              </FormItem>
              </Col>
            </Row>
            <FormItem>
              <Input v-model="userForm.user.desc2" :placeholder="userInfo.opusDesc"></Input>
            </FormItem>
          </div>

          <FormItem>
            <Input v-model="userForm.user.remarks" :placeholder="userInfo.opusRemarks"></Input>
          </FormItem>

        </div>

        <Row :gutter="1">
          <Col :span="20">
          <FormItem>
            <Button class="btn-yellow__linear" type="primary" @click="updateUser()">{{userInfo.updata}}</Button>
          </FormItem>
          </Col>
          <Col :span="4">
          <a class="down-link" :href="'http://newstar.91ant.com/api/index/toPDF?mid='+$store.state.user" target="_blank" >{{userInfo.down}}</a>
          </Col>
        </Row>
      </Form>-->
      <div class="form-panel__1 form-panel__intro">
        <hr/>
        <h3>{{userInfo.description[0].title}}</h3>
        <ol>
          <li v-for="item in userInfo.description[0].list">{{item}}</li>
        </ol>
        <h3>{{userInfo.description[1].title}}</h3>
        <ol>
          <li v-for="item in userInfo.description[1].list">{{item}}</li>
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
        fetchLoading: true,
        modal1: false,
        userForm: {},
        ruleValidate: ''
      }
    },
    mounted(){
      console.log(this.$validator)
    	var self = this;
    	self.$http({
        method: 'post',
        url: '/api/index/user',
        data: {
        	mid: self.$store.state.user
        },
      }).then(function (res) {
//        console.log(res)
        self.userForm = res.data.user;
        self.fetchLoading = false;
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {
    	userInfo(){
    		return this.$store.state.config[this.$store.state.language].web.user
      },
    	web(){
    		return this.$store.state.config[this.$store.state.language].web
      }
    },
    methods: {
      updateUser(){
        var self = this;
        self.$validator.validateAll().then((result) => {
          if (result){
            self.$http({
              method: 'post',
              url: '/api/index/update_user',
              data: self.userForm,
//          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//          headers: {
//            'X-Requested-With': 'XMLHttpRequest',
//            'Content-Type': 'application/json; charset=UTF-8',
//            'Access-Control-Allow-Origin': '*'
//          },
            }).then(function (res) {
              if (res.data == 1){
                alert("保存成功");
              }else {
                alert("保存失败");
              }

            }).catch(function (err) {
              console.log("错误")
              console.log(self.userForm)
            })
          }else {

          }
        })

      },

    }
  }
</script>
