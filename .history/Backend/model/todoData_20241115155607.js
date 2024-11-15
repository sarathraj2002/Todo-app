const mongoose=require('mongoose');
 
const todoSchema=mongoose.Schema({
    Discription:{type:String,

})
const todoData=mongoose.model('todoapp',todoSchema);
module.exports=todoData;