const express=require('express');
const cors=require('cors')
const app=new express();
app.use(cors())   

const PORT=process.env.PORT;
require('dotenv').config()





           
const todoRoutes=require('./routes/todoroutes');
const user=require('./routes/user')
app.use('/todo',courseRoutes);

app.use("/user",user)

require('./db/db')




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})