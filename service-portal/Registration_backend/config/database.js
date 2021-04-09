const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
mongoose.feedback = mongoose.createConnection(process.env.ACCESS_feedback)


module.exports = mongoose;