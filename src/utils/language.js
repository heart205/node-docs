/**
 * @author heart
 * @description 字段是否有重复字段
 * @Date 2022-06-29
 */
const axios = require('axios')
const enUs = require('./en_us')
const readFile = require('../case/fs-read.cjs')
const zh_cn = require('./zh_cn')
// 是否有相同的字段
let result = []
function isHaveCommonField(array, obj) {
  // console.log('')
  const result = []
  array.forEach((val) => {
    if (Object.prototype.hasOwnProperty.call(obj, val)) {
      result.push(val)
    }
  })

  return result
}
const env = readFile.readEnvFile(__dirname + '/../../.env.local')
function searchCommonField(id, value) {
  if (!env.translateList) return
  axios
    .request({
      url: env.translateList,
      method: 'POST',
      data: {
        functionId: id,
      },
      Headers: {
        corTicket: env.corTicket,
      },
    })
    .then((res) => {
      const { data } = res.data
      result = data.reduce((pre, cur) => {
        if (!pre.includes(cur.flags)) {
          pre.push(cur.flags)
        }
        return pre
      }, [])

      console.log('相同的字段:', isHaveCommonField(result, value))
    })
}

searchCommonField(29, enUs)
searchCommonField(29, zh_cn)

module.exports = {
  searchCommonField,
}
