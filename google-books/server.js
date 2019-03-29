var express = require("express");
const cors = require("cors");
var mongoose = require("mongoose")
var path = require("path");
var app = express();
var port = process.env.PORT||3000;
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//static
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}
//api routes
require("./routes/api");
//mongod connection
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/googlebooks")

app.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

app.listen(port,()=>{
    console.log("listening on http://localhost:"+port)
})
