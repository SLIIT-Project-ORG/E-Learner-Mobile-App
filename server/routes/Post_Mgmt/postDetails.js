const router = require("express").Router();
const postModel = require("../../models/Post_Mgmt/PostDetails");

router.route("/").post((req,res)=>{

    const reqBody = req.body;

    postModel.create(reqBody)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json(err.message);
    })

})

router.route("/").get((req,res)=>{
    
    postModel.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json(err.message);
    })

})


router.route("/:id").get((req,res)=>{

    const id = req.params.id;

    postModel.findById(id)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json(err.message);
    })

})

router.route("/:id").delete((req,res)=>{

    const id = req.params.id;

    postModel.findByIdAndDelete(id)
    .then(()=>{
        res.json({message : "deleted"});
    })
    .catch((err)=>{
        res.json(err.message);
    })

})


router.route("/:id").put((req,res)=>{
    const id = req.params.id;
    const body = req.body;

    postModel.findByIdAndUpdate(id,body)
    .then(()=>{
        res.json("Updated");
    })
    .catch((err)=>{
        res.json(err.message);
    })
})

module.exports = router;