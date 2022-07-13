// global
// console.log(global)

// node是一个模块组成的 var的变量不会上升到全局作用域global中

// module 并不是全局的
// console.log(module)

// console.log(global.module) undefined

module.exports = {
  a: 1,
}

// 包含id 导出的模块 以及文件的路径等信息
console.log(module)
