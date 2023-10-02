console.log("hello world");

// print("hello world") // Dart

// import from packages
const express = require ('express');
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// import 'package: express/express.dart'

// import from other file

const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');



// init
const PORT = 3000;

const app = express();

const db = 'mongodb+srv://sakpalsanket966:sanket123@cluster0.dle05ta.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

//middle ware 

//CLIENT -> middleware -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// creating an API 

// https://<youreIPaddress>/path

app.get("/hello-world" , (req , res) => {
res.send("hello world");
});

// GET , PUT , POST , UPDATE , DELETE  => CRUD

// connection

mongoose.connect(db).then(()=>{
    console.log("connection successful");
}).catch(e => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0",()=> {
    console.log(`connected at port ${PORT}`);
});
//local host 

// what is local host ?


