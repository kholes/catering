const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')

//db mongoo Atlas
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://admin123:admin123@cluster0-shard-00-00-cquc7.mongodb.net:27017,cluster0-shard-00-01-cquc7.mongodb.net:27017,cluster0-shard-00-02-cquc7.mongodb.net:27017/catering?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  db.close();
});


app.get('/', (req,res)=>{
    res.json('mongoose connected')
})



const index = require('./routes/index')
const menu = require("./routes/menu")
const pengguna = require("./routes/pengguna")
const transaksi = require("./routes/transaksi")


app.use('/', index);
app.use('/menu', menu)
app.use('/pengguna', pengguna)
app.use('/transaksi', transaksi)


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))
app.use(cors())



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


// app.use((req,res) => {
//     res.status(404).send("Oop's..sorry menu not found?")
// })






app.listen(3000, () => {
    console.log('Ready port 3000')
})


