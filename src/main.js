import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
// import '@/components'
Vue.prototype.$echarts = echarts //挂载到Vue实例上面
import ElementUI from "element-ui";
import "@/components/common/index";
import "@/styles/index.scss"; // global css
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')