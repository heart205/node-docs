/**
 * @author heart
 * @description 添加字段
 * @Date 2022-06-29
 */
const axios = require('axios')
const readFile = require('../case/fs-read.cjs')
const env = readFile.readEnvFile(__dirname + '/../../.env.local')
function request(data) {
  if (!env.translateAdd) return
  axios
    .request({
      url: env.translateAdd,
      method: 'post',
      data,
      Headers: {
        corTicket: env.corTicket,
      },
    })
    .then((res) => {
      const code = res.data
      if (code.code === 0) {
        console.log('新增成功', data)
      }
    })
}

// US简体中文 ZHS 英文
const typeEnum = ['en', 'zh']

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

// addFields({
//   functionCode: 'role',
//   functionId: '29',
//   // field字段名
//   flags: 'bulkCopyTheCharacterMenu',
//   remark: ['角色管理-角色菜单提示语', 'AddManager-bulkCopyTheCharacterMenu'],
//   value: ['确认要批量复制角色菜单嘛', 'Confirm that you want to copy the character menu in bulk'],
// })

module.exports = {
  addFields,
}
