const express = require('express');
const { mongo } = require('mongoose');

const router = express.Router();
const BlogPost= require('../models/blogPost');
const BlogPostDone= require('../models/blogPostDone');





router.get('/:id', async(req, res) => {
    console.log(req.params.id)
    var cid=req.params.id;
    
    BlogPost.find( { c_id : cid }  )
    .then((data)=>{
        // console.log('Data ',data);
        res.status(200).json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
        res.status(404);
    })
 
});

// router.patch('/:pid',async(req,res)=>{
//    await BlogPost.findOneAndUpdate({_id: req.params.pid},{status: req.body.status}, 
//     function (err, docs) {
//    if (err){
//        console.log(err)
//    }
//    else{
//     //    console.log("Updated Docs : ", docs);
//    }
// });

    

// });



router.post('/available', (req, res) => {
  
    const data=req.body;
    const newBlogPost= new BlogPost(data);

    newBlogPost.save((error)=>{
        if(error){
            res.status(404).json({msg: 'Sorry,server error'});
        }
        else{
            console.log('Added');
            res.status(200).json({
                msg:'data has been stored in db'
            });

        }

    });

});
router.post('/deleteavailable', async(req, res) => {
    
    var pid=req.body.postid
   BlogPost.deleteOne(  {_id:pid}  )
   .then((data)=>{
      // console.log('Data ongoing',data);
       res.status(200).json(data);
   })
   .catch((error)=>{
       console.log('error ',error);
       res.status(404);
   })

});


router.post('/done', (req, res) => {
  
    const data=req.body;
    const newBlogPost= new BlogPostDone(data);

    newBlogPost.save((error)=>{
        if(error){
            res.status(404).json({msg: 'Sorry,server error'});
        }
        else{
            console.log('Added Done');
            res.status(200).json({
                msg:'data has been stored in db'
            });

        }

    });

});

module.exports=router;