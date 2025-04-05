const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app')

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('DB connected Successfully...');
    app.listen(3000,()=>{
        console.log('App is listening your request...')
    })
}).catch(()=>{
    console.log('DB connection failed...');
    
})