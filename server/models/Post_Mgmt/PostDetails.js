const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

    topic:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    relevantLink:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:Object,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    createdBy:{
        type:String,
    }

})

const postExport = mongoose.model("Post Details",postSchema);
module.exports = postExport;