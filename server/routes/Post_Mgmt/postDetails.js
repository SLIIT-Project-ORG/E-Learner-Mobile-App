const router = require("express").Router();
const postModel = require("../../models/Post_Mgmt/PostDetails");
//const ImageModel = require("../../models/Post_Mgmt/ImageModel");
// const multer = require("multer");

router.route("/").post(async (req, res) => {


    let topic = req.body.topic;
    let category = req.body.category;
    let relevantLink = req.body.relevantLink;
    let description = req.body.description;
  
  

    const postobj = new postModel({

       topic,category,relevantLink,description
    
    });

   
    postobj.save().then(()=>{
        res.json("Post Successfully Added")
    }).catch((err)=>{
        console.log(err);
    })

//     const Storage = multer.diskStorage({
//         destination: "upload",
//         filename: (req, file, cb) => {
//             cb(null, file.originalname);
//         }
//     });

//     const upload = multer({
//         storage: Storage
//     }).single('image')

//     let imageData = null;

//     await upload(req, res, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             newImage = new ImageModel({
//                 image: {
//                     data: req.body.image,
//                     contentType: 'image/png'
//                 }
//             })
//             newImage.save()
//                 .then((data) => {
//                     console.log(data._id);

//                     let reqBody = req.body;

//                     reqBody.image = data;
//                     postModel.create(reqBody)
//                         .then((data) => {
//                             res.json(data);
//                         })
//                         .catch((err) => {
//                             res.json(err.message);
//                         })
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 })
//         }
//     })

})

router.route("/").get((req, res) => {

    postModel.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err.message);
        })

})


router.route("/:id").get((req, res) => {

    const id = req.params.id;

    postModel.findById(id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err.message);
        })

})

router.route("/:id").delete((req, res) => {

    const id = req.params.id;

    postModel.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: "deleted" });
        })
        .catch((err) => {
            res.json(err.message);
        })

})


router.route("/:id").put((req, res) => {
    const id = req.params.id;
    const body = req.body;

    postModel.findByIdAndUpdate(id, body)
        .then(() => {
            res.json("Updated");
        })
        .catch((err) => {
            res.json(err.message);
        })
})







// router.route("/").post(async (req, res) => {

//     let reqBody = req.body;
//     console.log(reqBody);
//     postModel.create(reqBody)
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((err) => {
//             res.json(err.message);
//         })
// })







module.exports = router;