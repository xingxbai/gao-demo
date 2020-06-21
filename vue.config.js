/*
 * @Author: your name
 * @Date: 2020-06-21 21:03:01
 * @LastEditTime: 2020-06-21 21:05:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \gao\vue.config.js
 */ 
module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    // devServer: {
    //     disableHostCheck: true
    // },
    devServer: {
        disableHostCheck: true,
        public: 'http://localhost:8080',
        //sockHost: 'http://172.16.17.54:8080',
    },
}