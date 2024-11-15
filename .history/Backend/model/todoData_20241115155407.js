const mongoose=require('mongoose');
 
const todoSchema=mongoose.Schema({
    Discription:String,
})
const todoData=mongoose.model('todoapp',todoSchema);
module.exports=todoData;