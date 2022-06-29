/**
 * @author heart
 * @description 字段是否有重复字段
 * @Date 2022-06-29
 */
const axios = require('axios')
let result = []
const enUs = require('./en_us')
const zh_cn = require('./zh_cn')
// 是否有相同的字段
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

function searchCommonField(id, value) {
  axios
    .request({
      url: 'https://office.bairuihe.com:10104/uc/languagePack/v6/translateList',
      method: 'POST',
      data: {
        functionId: id,
      },
      Headers: {
        corTicket: 1_1655691071825,
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
