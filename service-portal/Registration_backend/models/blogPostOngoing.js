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

    p_id:String

});

const BlogPost = mongoose.model('PostDBOngoing',BlogPostSchema);

module.exports =BlogPost;