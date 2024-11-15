const express=require('express');
const cors=require('cors')
const app=new express();


const PORT=process.env.PORT;
require('dotenv').config()





           //must be
const courseRoutes=require('./routes/courseroutes');
const user=require('./routes/user')
app.use('/course',courseRoutes);
// app.use('/delete/:id',courseRoutes);
app.use("/user",user)
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/db')




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
