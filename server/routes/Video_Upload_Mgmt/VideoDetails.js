const router= require("express").Router();
let VideoDetails =require("./../../models/Video_Upload_Mgmt/VideoDetails");

router.route("/add").post((req,res)=>{
   
    const title= req.body.title;
    const link= req.body.link;
    const thumbnaillink= req.body.thumbnaillink;
    const description= req.body.description;
   
   
   
    const newVideoDetails = new VideoDetails({
        
        title,
        link,
        thumbnaillink,
        description,
       
    
    })
    newVideoDetails.save().then(()=>{
        res.json("VideoDetails Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    VideoDetails.find().then((VideoDetailss)=>{
        res.json(VideoDetailss)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    VideoDetails.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('VideoDetails updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await VideoDetails.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" VideoDetails deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
    VideoDetails.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
