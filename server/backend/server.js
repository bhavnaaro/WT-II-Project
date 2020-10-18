const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex:true});
// const connection= mongoose.connection;

// connection.once('open',()=>{
//     console.log('mongo db connection established successfully');
// });


mongoose
    .connect(
        "mongodb://USERNAME:PASSWORD@cluster0-shard-00-00-8duwh.mongodb.net:27017,cluster0-shard-00-01-8duwh.mongodb.net:27017,cluster0-shard-00-02-8duwh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
        { useNewUrlParser: true, useCreateIndex: true }
    )
    .then(() => {
        console.log("MongoDB database connection established successfully");
    })
    .catch(err => {
        console.log(err.message);
    });


const studRoutes = require('./routes/studentRoutes');
const instRoutes = require('./routes/instructorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use('/student',studRoutes);
app.use('/instructor', instRoutes);
app.use('/course',courseRoutes);
app.use('/', adminRoutes);


app.listen(port, ()=>{
    console.log("server running at port "+port);
});

