const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
require("./config/dbconnection");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const VideoDetailsManage= require("./routes/Video_Upload_Mgmt/VideoDetails");
app.use("/videodetails",VideoDetailsManage);


app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});