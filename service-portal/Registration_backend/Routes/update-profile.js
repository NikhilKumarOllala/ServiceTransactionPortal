const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')
const signupTemplatecopy2 = require('../models/Signup_model_customer')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const { response } = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const Customer = require('../models/Signup_model_customer');
/*router.get('/cookie' , (req,res) => {
    res.setHeader('Set-Cookie','newUser=true')
    res.send('got the cookies')
})*/

router.post("/update-profile/",checkAuth,function(req,res,next){

    var id=req.body.cID;
     var profilePic= req.file.path;
     userModel.findById(id,function(err,data){
 
      data.email=email?email:data.email;
     
        data.save()
          .then(doc=>{
             res.status(201).json({
                 message:"Email Updated Successfully",
                 results:doc
             });
          })
          .catch(err=>{
              res.json(err);
          })
         
     });
 
 });




module.exports = router;