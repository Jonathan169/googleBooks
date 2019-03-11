var express=require("express");
var handle=require("express-handlebars");
var port=process.env.PORT||3000;
var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine("handlebars", handle({ defaultLayout: "main" }));
app.use(express.static("public"));
app.set("view engine", "handlebars");

var router=require("./controller/controller")
app.use(router)
var db = require("./models");
db.sequelize.sync().then(function(){
    app.listen(port,function(){
        console.log("listening on http://localhost:"+port)
    })
})