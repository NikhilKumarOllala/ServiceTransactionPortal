const express= require('express');
const mongoose= require('mongoose');
const morgan= require('morgan');
const path= require('path');

const app=express();
const PORT=process.env.PORT || 4000;
//pass:admin name:nivesh

const routes = require('./Routes/api');


const URI='mongodb+srv://nivesh:admin@cluster0.ukfvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



mongoose.connect('mongodb://localhost/mern_youtube' || URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

});
mongoose.connection.on('connected',()=>{
    console.log('Moongoose is connected');
});
// const Schema=mongoose.Schema;
// const BlogPostSchema= new Schema({
//     title: String,
//     body: String,
//     date:{
//         type:String,
//         default: Date.now()

//     }

// });

//model
// const BlogPost= mongoose.model('BlogPost',BlogPostSchema);

//daving data to mongo db







app.use(morgan('tiny'));

app.use('/api',routes);




app.listen(PORT,console.log(`Server is starting at ${PORT}`));