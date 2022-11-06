const router= require("express").Router();
let VideoComments =require("./../../models/Video_Upload_Mgmt/VideoComments");

router.route("/add").post((req,res)=>{
   
    const title= req.body.title;
    const videoid= req.body.videoid;
    const name= req.body.name;
    const comment= req.body.comment;
   
   
   
    const newVideoComments = new VideoComments({
        
        title,
        videoid,
        name,
        comment,
       
    
    })
    newVideoComments.save().then(()=>{
        res.json("VideoComments Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    VideoComments.find().then((VideoCommentss)=>{
        res.json(VideoCommentss)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    VideoComments.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('VideoComments updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await VideoComments.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" VideoComments deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
    VideoComments.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
