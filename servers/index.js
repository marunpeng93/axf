var express = require('express');
var fs = require('fs');//加载框架
var app = express();
app.use(express.static('node'));////把相对于“我”的目录a作为我们的web服务目录目录与服务器同级目录
app.all('*',(req,res,next) =>{
	res.header("Access-Control-Allow-Origin","*");
    next();
})
//主页端口
app.get('/swiper',function(req,res){
    fs.readFile('node/swiper.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/hot',function(req,res){
    fs.readFile('node/hot.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/seckill',function(req,res){
   fs.readFile('node/seckill.json',function(err,data){
    	res.send(data)//发送json文件
    });
})
app.get('/reserve',function(req,res){
   fs.readFile('node/reserve.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.get('/sale',function(req,res){
   fs.readFile('node/sale.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.get('/seckill',function(req,res){
   fs.readFile('node/seckill.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.get('/bread',function(req,res){
   fs.readFile('node/bread.json',function(err,data){
        res.send(data)//发送json文件
    });
})
app.listen(4320,function(){
	console.log('服务已启动')
})