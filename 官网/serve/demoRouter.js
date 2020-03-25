const express=require('express');
var router=express.Router();
router.get('/test',function(req,res){
	res.send({data:'test',code:200});
})
router.post('/json',(req,res)=>{
	console.log(req.body) 
	res.send({code:200,msg:'suc'})
})
module.exports=router;