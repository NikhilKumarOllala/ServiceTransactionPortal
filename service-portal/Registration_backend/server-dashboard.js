const express= require('express');
const mongoose= require('mongoose');
const morgan= require('morgan');
const path= require('path');
const cors =require('cors');



const app=express();
const PORT=process.env.PORT || 8000;
//http://localhost:8000
const routes=require('./Routes/api');
const routes1=require('./Routes/api1');
const routes2=require('./Routes/api2');


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
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));


app.use(cors());
app.use(morgan('tiny'));
app.use('/api',routes);
app.use('/api1',routes1);
app.use('/api2',routes2);


app.listen(PORT,console.log(`Server is starting at ${PORT}`));