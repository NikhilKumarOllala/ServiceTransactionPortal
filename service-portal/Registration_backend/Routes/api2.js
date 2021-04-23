const express = require('express');
const { mongo } = require('mongoose');

const router = express.Router();
const BlogPost= require('../models/blogPost');





router.get('/:id', async(req, res) => {
    console.log(req.params.id)
    
    BlogPost.find( {$and:  [{ c_id : req.params.id },{status :'Done'}]}            )
    .then((data)=>{
        console.log('Data ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
    })
 
});


module.exports=router;