const express = require('express');
const { mongo } = require('mongoose');

const router = express.Router();
const BlogPost= require('../models/blogPost');
const BlogPostOngoing= require('../models/blogPostOngoing');






router.post('/getprofdata', async(req, res) => {
    console.log(req.body.role)
    var location1=req.body.place;
    var profession1=req.body.role;
    console.log(req.body);
    
//    BlogPost.aggregate([
//         {
//             // $lookup:
//             //   {
//             //     from: 'customers',
//             //     localField: 'c_id',
//             //     foreignField:'_id',
//             //     as: 'c_id'
//             //   },
//                $match: { 'profession': req.params.profession  } 
//          }
//     ]).exec((err,result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if (result) {
//                 return  res.status(200).json(result);
//             }
//         }
//     })



    BlogPost.find({ $and: [ {profession: profession1 }, { location :location1 }   ] } )
    .then((data)=>{
        //console.log('Data ',data);
        res.status(200).json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
        res.status(404);
    })
 
});
router.post('/getongoing', async(req, res) => {
    
     var cid=req.body.id
    BlogPostOngoing.find(  {c_id:cid}  )
    .then((data)=>{
        //console.log('Data ongoing',data);
        res.status(200).json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
        res.status(404);
    })
 
});
router.post('/deleteongoing', async(req, res) => {
    
    var pid=req.body.postid
   BlogPostOngoing.deleteOne(  {_id:pid}  )
   .then((data)=>{
      // console.log('Data ongoing',data);
       res.status(200).json(data);
   })
   .catch((error)=>{
       console.log('error ',error);
       res.status(404);
   })

});

router.post('/ongoing', (req, res) => {
  
    const data=req.body;
    const newBlogPost= new BlogPostOngoing(data);

    newBlogPost.save((error)=>{
        if(error){
            res.status(404).json({msg: 'Sorry,server error'});
        }
        else{
            console.log('Added in ongoing');
            res.status(200).json({
                msg:'data has been stored in db'
            });

        }

    });

});






module.exports=router;