/**
 * @author heart
 * @description
 * @Date 2022-07-04
 */
const isBrowser = () => typeof window !== 'undefined'

module.exports = {
  isBrowser,
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof
// let 和const 之前使用typeof 会造成暂时性死区
