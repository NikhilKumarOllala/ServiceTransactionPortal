
const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')
const signupTemplatecopy2 = require('../models/Signup_model_customer')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const { response } = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


router.get('/signupProfessional',async (req,res) => {
    
    let loginemail = req.query.loginEmail.toString()
    let  loginpassword=req.query.loginPassword.toString()
    signupTemplatecopy.findOne({
        'email': loginemail
    }
    ).exec((err,user) =>{
        if (err) {
            console.log('error getting users');
        }else{
            if (!user) {
                console.log("user dosent exist!!");
                res.send('-2')
            }else(bcrypt.compare(loginpassword,user.password,(error,response) => {
                if (error) {
                    console.log(error);
                    
                }else{
                    if (response) {
                        console.log('login successfull');
                        var id = user._id
                        var name = user.fullName                           
                        var a={
                            id : id,
                            name : name
                        }        
                        var token = jwt.sign({id:id,name:name},process.env.PRIVATE_KEY_JWT,{expiresIn:24*60*60})             
                        res.send(token);                       
                        
                    }else{
                        res.send('-1')
                        console.log("wrong password!!");
                        
                        
                    }
                
            }})) 
            
            
            
        }
    })

    
    
})
router.get('/signupCustomer',async (req,res) => {
    console.log(req.query.loginEmail);
    let loginemail = req.query.loginEmail.toString()
    let  loginpassword=req.query.loginPassword.toString()
    signupTemplatecopy2.findOne({
        'email': loginemail
    }
    ).exec((err,user) =>{
        if (err) {
            console.log('error getting users');
        }else{
            if (!user) {
                console.log("user dosent exist!!");
            }else(bcrypt.compare(loginpassword,user.password,(error,response) => {
                if (error) {
                    console.log(error);
                    
                }else{
                    if (response) {
                        console.log('login successfull');
                        var id = user._id
                        var name = user.fullName                           
                        var a={
                            id : id,
                            name : name
                        }        
                        var token = jwt.sign({id:id,name:name},process.env.PRIVATE_KEY_JWT,{expiresIn:24*60*60})             
                        res.send(token); 
                    }else{
                        console.log('wrong password!!');
                    }
                
            }})) 
            
            
            
        }
    })

    
    
})

router.post('/signupProfessional',async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedupUser = new signupTemplatecopy({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        occupation:request.body.occupation,
        location:request.body.location,
        password:securedPassword,
        experience:request.body.experience,
    })
    signedupUser.save()
    .then(data => {
        response.json(data)
        response.send('ok')
    })
    .catch(error => {
        response.send('not-ok')
        response.json(error)
        
    })
})
router.post('/signupCustomer',async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedupUser = new signupTemplatecopy2({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        
        password:securedPassword
        
    })
    signedupUser.save()
    .then(data => {
        response.json(data)
        response.send('ok')
    })
    .catch(error => {
        response.json(error)
        response.send('not-ok')
    })
})



module.exports = router;