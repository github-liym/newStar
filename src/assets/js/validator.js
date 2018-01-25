/**
 * Created by 94216 on 2018/1/22.
 */
import VeeValidate, { Validator } from 'vee-validate';
Validator.extend('mobile', {
  getMessage: field => 'Please enter the correct phone number.',
  validate: (value,args) => {
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
  }
});
