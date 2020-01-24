const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zaidTest',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log("error: "+err)
    }
})

require('./user.model');