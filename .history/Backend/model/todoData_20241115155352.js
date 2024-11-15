const mongoose=require('mongoose');
 
const todoSchema=mongoose.Schema({
    Disc
})
const todoData=mongoose.model('todoapp',todoSchema);
module.exports=todoData;