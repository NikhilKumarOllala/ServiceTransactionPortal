const express = require('express');
const { mongo } = require('mongoose');

const router = express.Router();
const BlogPost= require('../models/blogPost');





router.get('/:profession', async(req, res) => {
    console.log(req.params.profession)
    
    BlogPost.find({ profession : req.params.profession })
    .then((data)=>{
        console.log('Data ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
    })
 
});






module.exports=router;