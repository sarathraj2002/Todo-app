const mongoose=require('mongoose');
 
const todoSchema=mongoose.Schema({
    Discription:{type:String,required:true}

})
const todoData=mongoose.model('todoapp',todoSchema);
module.exports=todoData;