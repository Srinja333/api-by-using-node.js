const express= require('express');
const app=express();
const mongoose=require('mongoose');
const morgan=require('morgan');
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
const expressValidator=require("express-validator");
dotenv.config();


//db
//MONGO_URI=mongodb://localhost/nodeapi
mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser:true}    
)

.then(()=>console.log('db connected'))



mongoose.connection.on('error',err => {
    console.log(`db connection error:${err.message}`)
});
//bringin routes
const postRoutes =require("./routes/post");


const myOwnMiddleware=(req,rest,next)=>{
    console.log("my own middleware applied");
    next();
};

//middleware


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(myOwnMiddleware);

app.use("/",postRoutes);//we can also use get if not use routes






const port=process.env.PORT || 8080;

app.listen(port,() =>{
    console.log(`A NODE JS API is listening on port:${port}`);
});