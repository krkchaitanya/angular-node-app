const mongoose=require("mongoose");
var movieSchema=new mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
    
});

module.exports={
    movieSchema
}