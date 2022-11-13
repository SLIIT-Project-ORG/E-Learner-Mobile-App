const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
require("./config/dbconnection");
const multer = require('multer');
const ImageModel = require('./models/Course_Mgmt/ImageModel');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const course = require("./routes/Course_Mgmt/courses.js");
const VideoDetailsManage= require("./routes/Video_Upload_Mgmt/VideoDetails");
const postDetails = require("./routes/Post_Mgmt/postDetails.js");
const articles = require("./routes/File_Upload_Mgmt/ArticleRoutes.js");
const videocomments=require("./routes/Video_Upload_Mgmt/VideoComments");
const SignIn=require("./routes/User_Mgmt/Users")

app.use("/course",course);
app.use("/videodetails",VideoDetailsManage);
app.use("/posts",postDetails);
app.use("/articles",articles);
app.use("/comments",videocomments); 
app.use("/comments",videocomments);
app.use("/signin",SignIn)

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});

