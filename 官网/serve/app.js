const express=require('express');
/* var cors = require('cors'); */
let demoRouter=require('./demoRouter')
const bodyParser=require('body-parser');
var server=express();
/* server.use(cors(
  {
    origin:["http://www.baidu.com"],
    credentials:false   //每次登陆都验证跨域请求,要不会每次报跨域错误
}
)); */
server.listen(8080);
server.use(bodyParser.urlencoded({
  extended:false
}));
server.use('/demo',demoRouter);