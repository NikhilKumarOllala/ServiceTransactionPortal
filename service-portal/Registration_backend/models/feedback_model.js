 
const mongoose = require('mongoose')

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
    professional_id:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('customer_feedback',loginTemplate)
