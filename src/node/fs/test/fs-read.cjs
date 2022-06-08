const { readEnvFile, readEnvFileRotate } = require('../../case/fs-read.cjs')

const array = [process.cwd() + '/../.env']
const startTime = performance.now()
const result = readEnvFile(array)
const endTime = performance.now()
console.log(`耗时: ${endTime - startTime}ms`, result)

const startTime1 = performance.now()
const result1 = readEnvFileRotate(array)
const endTime1 = performance.now()
console.log(`耗时: ${endTime1 - startTime1}ms`, result1)
