 
const mongoose = require('mongoose')
const conn = require('../config/database')
const loginTemplate = new mongoose.Schema({
    rating:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    customer_id:{
        type:String,
        required:true
    },
    profession_id:{
        type:String,
        required:true
    }
})

module.exports = conn.feedback.model('customer_feedback',loginTemplate)
