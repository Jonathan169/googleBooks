var router=require("express").Router()
var axios= require("axios");
var db=require("../models")
var book=db.book;
module.exports=function(){
    
    router.post("/api/getbooksat",function(req,res){
        var author=req.body.author;
        var title=req.body.title;
        author = id.split(" ").join("+");
        title = id.split(" ").join("+");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=AIzaSyCHHU9xBu9rh9Wi0wBip7SNgsTKrfzvmzQ`)
        .then(data=>{
            console.log(data)
            res.json(data)
        })
    })

    router.post("/api/getbookst",function(req,res){
        var title=req.body.title;
        title = id.split(" ").join("+");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyCHHU9xBu9rh9Wi0wBip7SNgsTKrfzvmzQ`)
        .then(data=>{
            console.log(data);
            res.json(data)
        })
    })
    router.post("/api/getbooksa",function(req,res){
        var author=req.body.author;
        author = id.split(" ").join("+");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=AIzaSyCHHU9xBu9rh9Wi0wBip7SNgsTKrfzvmzQ`)
        .then(data=>{
            console.log(data)
            res.json(data)
        })
    })
    router.post("/api/savebook",function(req,res){
        var book= req.body.book;

    })

}