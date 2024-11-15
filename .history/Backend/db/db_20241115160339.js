const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.ongoDB_URL).then(()=>{
    console.log('connection established')
}).catch(()=>{
    console.log('Error in connection')
})