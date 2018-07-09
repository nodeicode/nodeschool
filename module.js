var fs = require('fs')
var path  = require('path')
var mod = require('./node.js')
mod(process.argv[2],process.argv[3],function foo(err,data){
if(err)console.log(Error)
for(var i=0;i<data.length;i++){
    console.log(data[i])}})
