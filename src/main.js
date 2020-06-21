/*
 * @Author: your name
 * @Date: 2020-02-18 20:02:47
 * @LastEditTime: 2020-06-21 22:23:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SellingPlat\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import 'babel-polyfill';
//import VueAwesomeSwiper from 'vue-awesome-swiper'

//import 'swiper/dist/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(ElementUI, {
    size: 'small'
});




new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
