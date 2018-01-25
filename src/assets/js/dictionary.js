/**
 * Created by 94216 on 2018/1/10.
 */
const zh = {
  // attributes and messages
  messages: {
    required: (field) => field + '不能为空',
    email: (field) => field +'格式不正确',
    date_format: (field) => '请输入有效的日期。如：1993/01/01',
    mobile: (field) => "请输入正确的手机号码"
  }
};
const en = {
  messages: {
    required: (field) => 'The '+field+' field is required.',
    email: (field) => field +' The '+field+' field must be a valid '+field+'',
    date_format: (field) => 'Please enter a valid date. Such as: 1993/01/01',
    mobile: (field) => "Please enter the correct phone number."
  }
};

export default {
  zh,en
}
