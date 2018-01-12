/**
 * Created by 94216 on 2018/1/10.
 */
var ruleValidate = {
  name: [
    { required: true, message: '姓名不能为空', trigger: 'blur' }
  ],
  birthday: [
    { required: true, message: '出生年月日不能为空', trigger: 'blur' }
  ],
  IDcard: [
    { required: true, message: '身份证号码不能为空', trigger: 'blur' }
  ],
  post: [
    { required: true, message: '学校/单位名称不能为空', trigger: 'blur' }
  ],
  department: [
    { required: true, message: '所在院/系:不能为空', trigger: 'blur' }
  ],
  qq: [
    { required: true, message: 'QQ不能为空', trigger: 'blur' }
  ],
  wx: [
    { required: true, message: '微信不能为空', trigger: 'blur' }
  ],
  address: [
    { required: true, message: '通讯地址不能为空', trigger: 'blur' }
  ],
  zipcode: [
    { required: true, message: '邮编不能为空', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
  ]
}

export default {
  ruleValidate
}
