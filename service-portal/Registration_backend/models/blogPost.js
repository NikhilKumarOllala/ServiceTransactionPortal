const mongoose =require('mongoose');


const Schema= mongoose.Schema;
const BlogPostSchema= new Schema({
    c_id:String,
   
    body: String,
    date:{
        type: String,
        default: Date.now()
    },
    location:String,
    profession:String,
    p_id:String,
    price:String,
    phoneNo:String,
    email:String,
    name:String

});

const BlogPost = mongoose.model('PostDBAvailable',BlogPostSchema);

module.exports =BlogPost;