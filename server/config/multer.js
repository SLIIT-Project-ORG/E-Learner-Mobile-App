const path = require('path');
const multer = require('multer');

const Storage = multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage
}).single('image')