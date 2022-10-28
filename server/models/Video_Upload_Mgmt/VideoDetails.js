const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoDetailsSchema = new Schema({
    
    title : {
        type : String,
        required: true
    },
 
    link : {
        type : String,
        required: true

    },
    thumbnaillink : {
        type : String,
        required: true

    },
    description : {
        type : String,
        required: true
    }
   
    
   
})
const VideoDetails = mongoose.model("VideoDetails",VideoDetailsSchema);
module.exports=VideoDetails;