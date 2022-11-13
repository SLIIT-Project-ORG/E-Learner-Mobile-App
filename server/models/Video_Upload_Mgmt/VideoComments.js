const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoCommentsSchema = new Schema({
    
    title : {
        type : String,
        required: true
    },
 
    videoid : {
        type : String,
        required: true

    },
    name : {
        type : String,
        required: true

    },
    comment : {
        type : String,
        required: true
    }
   
    
   
})
const videocomments = mongoose.model("videocomments",VideoCommentsSchema);
module.exports=videocomments;