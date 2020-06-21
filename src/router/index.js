/*
 * @Author: your name
 * @Date: 2020-06-21 21:03:01
 * @LastEditTime: 2020-06-21 21:10:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\router\index.js
 */ 
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "form" */ '../components/dashboard.vue'),
            meta: { title: '基本公告' }
        },
    ]
});
