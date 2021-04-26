const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')
const signupTemplatecopy2 = require('../models/Signup_model_customer')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const { response } = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const Professional = require('../models/Signup_model');
/*router.get('/cookie' , (req,res) => {
    res.setHeader('Set-Cookie','newUser=true')
    res.send('got the cookies')
})*/

router.get('/:id', async(req, res) => {
   
    Professional.find({_id : req.params.id})
    .then((data)=>{
        //console.log('Data ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
    })
 
});



module.exports = router;