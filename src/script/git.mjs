#!/usr/bin/env zx
/**
 * @author heart
 * @description 获取git提交的历史记录 需要依赖zx库
 * @Date 2022-07-16
 */
import { $ } from 'zx'
const log = await $`git log -a`
const authors = []
const reg = /Author:\s*(.*?)\s*</g
while (reg.test(log)) {
  if (authors.indexOf(RegExp.$1) === -1) authors.push(RegExp.$1)
}

console.log(authors)
