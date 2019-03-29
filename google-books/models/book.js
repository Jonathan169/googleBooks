var mongoose=require("mongoose");
var schema=mongoose.Schema;
var bookSchema= new schema({
    title:{
        type:String,
        required:true,
    },
    author:String,

})
var book=mongoose.model("Book",bookSchema);
module.exports=book;