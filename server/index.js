console.log("hello world");

// print("hello world") // Dart

// import from packages
const express = require ('express');
// import 'package: express/express.dart'
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
require('dotenv').config();



// import from other file
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');



// init
const PORT = 3000;
const app = express();


//CLIENT -> middleware -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// creating an API 
app.get("/hello-world" , (req , res) => {
res.send("hello world");
});
// GET , PUT , POST , UPDATE , DELETE  => CRUD
       
// connection
const dbs = process.env.db;

mongoose.connect(dbs).then(()=>{
    console.log("connection successful");
}).catch(e => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0",()=> {
    console.log(`connected at port ${PORT}`);
});




