const express=require('express');
const router=express.Router();
const todoModel=require('../model/todoData');
// const jwt = require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({extended:true}));




router.post('/todo',async(req,res)=>{
    const data=await todoData
})





//post
router.post('/addCourse',verifyToken,async(req,res)=>{
    try{
        var item=req.body;
        const data1=new courseModel(item);
        const savedData=await data1.save();
        res.status(200).send('post successful');

    }catch(error){
        res.status(404).send('post unsuccessful');
    }
})









module.exports=router