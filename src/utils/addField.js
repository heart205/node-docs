/**
 * @author heart
 * @description 添加字段
 * @Date 2022-06-29
 */
const axios = require('axios')

function request(data) {
  axios
    .request({
      url: 'https://office.bairuihe.com:10104/uc/languagePack/v6/translateAdd',
      method: 'post',
      data,
      Headers: {
        corTicket: 1_1655691071825,
      },
    })
    .then((res) => {
      const code = res.data
      if (code.data === 0) {
        console.log('新增成功', data)
      }
    })
}

const typeEnum = ['ZHS', 'US']

function addFields(data) {
  const { flags, functionCode, functionId, remark, value } = data
  const array = []
  for (let i = 0; i < 2; i++) {
    array.push({
      flags,
      function: functionCode,
      functionId,
      remark: remark[i],
      type: typeEnum[i],
      value: value[i],
    })
  }
  array.forEach((val) => {
    request(val)
  })
}

/**
 * flags: "test"
function: "login"
functionId: 1
remark: "角色管理-描述"
type: "US"
value: "Validity"
 */

addFields({
  function: 'addRole',
  functionId: '33',
  // field字段名
  flags: 'test',
  remark: ['1', '2'],
  value: ['v', 's'],
})

module.exports = {
  addFields,
}
