const express = require('express');
const { mongo } = require('mongoose');

const router = express.Router();
const BlogPostDone= require('../models/blogPostDone');





router.get('/:id', async(req, res) => {
    console.log(req.params.id)
    
    BlogPostDone.find( { c_id : req.params.id } )
    .then((data)=>{
        //console.log('Data ',data);
        res.status(200).json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
        res.status(404);
    })
 
});


module.exports=router;