const express=require('express');
const cors=require('cors')
const app=new express();
app.use(cors())   
const todoRoutes=require('./routes/todoroutes');
app.use('/todo',todoRoutes);
const PORT=process.env.PORT \\;
require('dotenv').config()
require('./db/db')




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
