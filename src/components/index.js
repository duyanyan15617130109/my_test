/**
 * 注册全局组件
 * 所注册的组件会加一个'gc-'(global component)前缀，与'el-'区分开
 */


import Vue from 'vue'  
// 自动加载同目录下的以.vue文件
let files = require.context('./', false, /\.vue$/)
files.keys().forEach(file => {
   let module = files(file).default
   Vue.component(`dy-${module.name}`, module)
})
