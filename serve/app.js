/*
 * @Author: your name
 * @Date: 2020-07-04 18:50:13
 * @LastEditTime: 2020-07-04 18:56:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\serve\app.js
 */ 
var express = require('express')
var path = require('path')
var app = express()
 
app.use(express.static(path.join(__dirname, '../dist')))
app.listen(8088);