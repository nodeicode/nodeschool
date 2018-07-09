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

/*5: FILTERED LS
var fs = require('fs')
var path  = require('path')
fs.readdir(process.argv[2],(err,data)=>{
    if(err)console.log(Error)
    else{
        for(var i=0;i<data.length;i++){
            if(path.extname(data[i])== "."+process.argv[3]) console.log(data[i])
        }
    }
})*/

//6:MAKE IT MODULAR
module.exports = function (dir,fil,foo){
    var path  = require('path')
    var fs = require('fs')
    fs.readdir(dir,(err,data)=>{
    if(err) return foo(err)
    for(var i=0;i<data.length;i++){
        if(path.extname(data[i])!= "."+fil){
            data.splice(i,1);i--}
}
return foo(null,data)
}
)
}