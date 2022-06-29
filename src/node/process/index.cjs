// process.cwd
// console.log(process.cwd()) // /Users/heart/Desktop/i/node/process

new Promise((resolve) => {
  resolve(1)
}).then(() => {
  console.log('then')
})
// process.nexttick是在宏任务结束后微任务开始执行前的回调，
console.log(
  process.nextTick(() => {
    console.log('nextTick')
  })
)
