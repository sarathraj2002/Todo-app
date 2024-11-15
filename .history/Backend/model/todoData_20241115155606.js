const mongoose=require('mongoose');
 
const todoSchema=mongoose.Schema({
    Discription:{typeString,

})
const todoData=mongoose.model('todoapp',todoSchema);
module.exports=todoData;