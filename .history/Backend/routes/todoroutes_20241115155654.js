const express=require('express');
const router=express.Router();
const todoModel=require('../model/todoData');
// const jwt = require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post()


router.post('/addtodo',async(req,res)=>{
    try{
        var item=req.body;
        const data1=new todoModel(item);
        const savedData=await data1.save();
        res.status(200).send('post successful');

    }catch(error){
    res.status(404).send('post unsuccessful');
}
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
         const data=await todoModel.findByIdAndDelete(id)
         res.status(200).send('delete successful')
    }catch(error){
          res.status(404).send('delete unsuccessful')
    }
})







module.exports=router