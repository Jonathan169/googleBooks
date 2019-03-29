var router=require("express").Router()
var axios= require("axios");
var db=require("../models")
var book=db.book;
module.exports=function(){
    
    router.post("/api/getbookst",function(req,res){
        var title=req.body.title;
        title = id.split(" ").join("+");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyCHHU9xBu9rh9Wi0wBip7SNgsTKrfzvmzQ`)
        .then(data=>{
            console.log(data);
            res.json(data)
        })
    })
    router.post("/api/savebook",function(req,res){
        const {title,imgUrl,sum,link}= req.body
        book.insertMany({title:title,imgUrl:imgUrl,sum:sum,link:link})
        .then(response=>{
            console.log(response)
            res.json(response)
        })

    })

}