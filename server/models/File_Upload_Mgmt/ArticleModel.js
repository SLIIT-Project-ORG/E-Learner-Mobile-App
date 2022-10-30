const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    
    topic : {
        type : String,
        required: true
    },
 
    description : {
        type : String,
        required: true

    },
    thumbnaillink : {
        type : String,
        required: true

    },
    authors : {
        type : String,
        required: true
    }
   
    
   
})
const ArticleModel = mongoose.model("ArticleModel",articleSchema);
module.exports=ArticleModel;