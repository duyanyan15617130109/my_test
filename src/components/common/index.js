/**
 * 注册全局组件
 * 所注册的组件会加一个'gc-'(global component)前缀，与'el-'区分开
 */


 import Vue from 'vue'
 let files = require.context('./', false, /\.vue$/)
 files.keys().forEach(file => {
    let module = files(file).default
    Vue.component(`gc-${module.name}`, module)
 })
