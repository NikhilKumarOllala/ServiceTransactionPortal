const express= require('express');
const mongoose= require('mongoose');
const morgan= require('morgan');
const path= require('path');

const app=express();
const PORT=process.env.PORT || 4000;

const routes=require('./Routes/api');

const MONGODB_URI='mongodb+srv://nivesh:admin@cluster0.ukfvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//|| 'mongodb://localhost/mern_youtube'

mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});





// Data parsing
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



app.use(morgan('tiny'));
app.use('/api',routes);


app.listen(PORT,console.log(`Server is starting at ${PORT}`));