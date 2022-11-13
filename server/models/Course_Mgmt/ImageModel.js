const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageModel = new Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }

})

const image = mongoose.model("Photoes",ImageModel);
module.exports = image;