const express=require('express');
const router=express.Router();
const todoModel=require('../model/todoData');
// const jwt = require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({extended:true}));




router.post('/todo',async(req,res)=>{
    const data=await 
})














module.exports=router