const router= require("express").Router();
let Articles =require("./../../models/File_Upload_Mgmt/ArticleModel");

router.route("/submit").post((req,res)=>{
   
    const topic= req.body.topic;
    const description= req.body.description;
    const thumbnaillink= req.body.thumbnaillink;
    const authors= req.body.authors;
   
   
   
    const newArticles = new Articles({
        
        topic,
        description,
        thumbnaillink,
        authors
        
       
    
    })
    newArticles.save().then(()=>{
        res.json("Article Successfully Added to the System")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Articles.find().then((Articles)=>{
        res.json(Articles)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    Articles.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Article updated successfully !')
      }
      
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let articleID=req.params.id;

    await Articles.findByIdAndDelete(articleID)
    .then(()=>{
        res.status(200).send({status:" Article Deleted Successfully"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
    Articles.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;