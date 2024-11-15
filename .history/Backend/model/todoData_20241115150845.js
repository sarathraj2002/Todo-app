const mongoose=require('mongoose');
 
const todoSchema=mongoose.Schema({
    
})
const todoData=mongoose.model('todoapp',todoSchema);
module.exports=todoData;