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

/*6:MAKE IT MODULAR
module.exports = function (dir,fil,foo){
    var path  = require('path')
    var fs = require('fs')
    fs.readdir(dir,(err,data)=>{
    if(err) return foo(err)
    for(var i=0;i<data.length;i++){
        if(path.extname(data[i])!= "."+fil){
            data.splice(i,1);i--}
}return foo(null,data)
})}*/

/*7:HTTP CLEINT
var http = require('http')
http.get(process.argv[2],function foo(nso){
    nso.setEncoding('utf8')
    nso.on("data",(data)=>{
        console.log(data)
    })
})*/

/*8:HTTP COLLECT
var http = require('http')
http.get(process.argv[2],function foo(nso){
    nso.setEncoding('utf8')
    var res = ""
    nso.on("data",(data)=>{
        res+=data
    })
    nso.on("end",()=>{
        console.log(res.length)
        console.log(res)
    })
})*/

/*9:JUGGLING ASYNC
var http = require('http')
http.get(process.argv[2],function foo(nso){
    http.get(process.argv[3],(nso1)=>{
        http.get(process.argv[4],(nso2)=>{
    var res=""
    nso.on("data",(data)=>{
        res+=data
    })

    var res1=""
        nso1.on("data",(data)=>{
            res1+=data
        })

    var res2=""
        nso2.on("data",(data)=>{
            res2+=data
        })
        nso.on("end",()=>{console.log(res)
        nso1.on("end",()=>{console.log(res1)
        nso2.on("end",()=>{console.log(res2)
        })})})
})
})
})*/

/*10:TIME SERVER
var net = require('net')
var strftime = require('strftime')
var date = Date()
     var server = net.createServer(function (socket) {
       socket.end(strftime('%F %R\n', new Date()))
     })
     server.listen(process.argv[2])*/

/*11:HTTP FILE SERVER
var fs = require('fs')
var http = require('http')

var server = http.createServer((req,res)=>{
    var str = fs.createReadStream(process.argv[3])
    str.pipe(res)

})
server.listen(process.argv[2])*/

/*12:HTTP UPPERCASER
var http = require('http')
var map = require('through2-map')
var fs = require('fs')
var server = http.createServer((req,res)=>{

    req.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase()
        })).pipe(res)
})
server.listen(process.argv[2])*/

//13:HTTP JSON API SERVER
var http = require("http");
var path = require("path");
var url = require("url");

var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  var ob = url.parse(req.url, true);
  var data = new Date(ob.query.iso);
  if (ob.pathname == "/api/parsetime") {
    res.write(
      JSON.stringify({
        hour: data.getHours(),
        minute: data.getMinutes(),
        second: data.getSeconds()
      }),
      (err, data) => {
        if (err) {
          console.log(Error);
        }
      }
    );
  } else {
    res.write(
      JSON.stringify({ unixtime: data.getTime() }, (err, data) => {
        if (err) {
          console.log(Error);
        }
        return data;
      })
    );
  }
  res.end();
});
server.listen(process.argv[2]);
