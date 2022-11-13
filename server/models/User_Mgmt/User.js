const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:false
    },
    mobilenumber:{
        type:String,
        required:false
       
    },
    address:{
        type:String,
        required:false
    }

})

const userExport = mongoose.model("User Details",userSchema);
module.exports = userExport;