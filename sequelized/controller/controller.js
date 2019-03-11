var db=require("../models")
var burgers=db.burger
var express = require("express");
var router=express.Router();
router.get("/",function(req,res){
    burgers.findAll({}).then(function(data){
        console.log(data)
        res.render("index",{burgers:data})
    })
})
router.post("/api/burger",function(req,res){
    console.log("data body")
    console.log(req.body)
    var name=req.body.name;
    burgers.create({burger_name:name}).then(function(data){
        res.json(data)
    })
})
//Where the Hoes at?
router.put("/update/:id",function(req,res){
    var id= req.params.id;
    var ate=parseInt(req.body.ate);
    console.log("updating.." + id+ate)
    burgers.update(
        {ate:ate},
        {returning: true, where: {id:id} }
      )
      .then(function(data) {
        res.json(data)
      })
})
module.exports=router;