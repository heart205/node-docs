/**
 * @author heart
 * @description 格式化tsconfig
 * @Date 2022-06-08
 */
const fs = require('fs')

const valReg = /(.*?)\s*\/\*/

function formatText(text, length) {
  const reg = /(.*?)\s*?(\/\*.*?\*\/),{0,1}$/
  const array = text.split('\n')
  array.forEach((val, index) => {
    if (reg.test(val)) {
      let prefixString = RegExp.$1
      if (length < prefixString.length) return
      if (prefixString && !prefixString.endsWith(',')) {
        prefixString += ','
      }
      let space = ''
      for (let i = 0; i < length - prefixString.length; i++) {
        space += ' '
      }
      array[index] = prefixString + space + RegExp.$2
    }
  })
  return array.join('\n')
}

function getMaxLength(text) {
  let maxLength = 0
  const array = text.split('\n')
  array.forEach((val) => {
    if (valReg.test(val)) {
      maxLength = Math.max(RegExp.$1.length, maxLength, RegExp.$2.length)
    }
  })
  return maxLength
}

function formatTsConfig(path, fileName, maxLength = 10) {
  const text = fs.readFileSync(path + fileName)
  if (text) {
    const length = getMaxLength(text.toString())
    const t = formatText(text.toString(), length + maxLength)
    fs.writeFileSync(path + fileName, t, {
      encoding: 'utf8',
    })
  }
}

// formatTsConfig(__dirname + '/../../', 'tsconfig.json')

module.exports = {
  formatTsConfig,
}
