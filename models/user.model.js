const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    name:{
        type:String,
        required:true,
        max:100
    },

    city:{
        type:String,
        required:true,
        max:100
    },

    email:{
        type:String,
        required:true,
        max:100
    },

    phone:{
        type:String,
        required:true,
        max:11
    },

    dateOfBirth:{
        type:String,
        required:true,
       
    }
});

// exporting our model

module.exports = mongoose.model('User',UserSchema);