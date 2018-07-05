/* 1:HELLO WORLD
console.log("HELLO WORLD") */

/*2:BABY STEPS
var sum=0;
for(i =2;i<process.argv.length;i++){
sum+=Number(process.argv[i]);
};
console.log(sum);*/

/*3: FIRST I/O!
const fs  = require('fs')
var str = fs.readFileSync(process.argv[2]).toString()
str = str.split('\n')
console.log(str.length-1)*/

/*4: FIRST ASYNC I/O:
const fs = require('fs')
fs.readFile(process.argv[2],'utf8',(err,str)=>{if(err)console.log(Error);else console.log(str.split('\n').length-1)})*/

//5: FILTERED LS
var fs = require('fs')
fs.readdir(process.argv[2],(err,data)=>{
    if(err)console.log(Error)
    else


)})