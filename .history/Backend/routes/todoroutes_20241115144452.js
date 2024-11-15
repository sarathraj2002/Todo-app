const express=require('express');
const router=express.Router();
// const courseModel=require('../model/courseData');
const jwt = require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({extended:true}));



















module.exports=router