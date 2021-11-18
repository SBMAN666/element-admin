export const passwordValdate = (rule, value, callback) => {
  // 获取倒输入的值做验证 至少是6位
  if (value.length < 6) {
    callback(new Error('密码至少是6位'))
  } else {
    callback()
  }
}
