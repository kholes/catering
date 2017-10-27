const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
app.use(bodyParser.json());
app.use(cors())
//db mongoo Atlas
/* ========= ini di skip dulu==============
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://admin123:admin123@cluster0-shard-00-00-cquc7.mongodb.net:27017,cluster0-shard-00-01-cquc7.mongodb.net:27017,cluster0-shard-00-02-cquc7.mongodb.net:27017/catering?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  db.close();
});
app.get('/', (req,res)=>{
    res.json('mongoose connected')
})
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))
app.use(cors())
*/
/* ========= HARD CODE LOGIN =========== */
app.post('/login', (req,res) => {
    res.send(req.body)
    console.log(req.body)
})
app.post('/signup', (req,res) => {
    console.log(req.body)
})
app.get('/menu', (req,res) => {
    res.send([{
        _id:'2wras5456sd',
        nama_menu:"Nasi goreng seafood",
        komposisi:'Nasi, Udang segar, Cumi, Ayam, Telor',
        harga:55000,
        gambar:'http://www.agrowindo.com/wp-content/uploads/2017/06/Peluang-usaha-nasi-goreng-seafood.jpg'
    },{
        _id:'2wnksds5456sd',
        nama_menu:"Tumis kacang special",
        komposisi:'Kacang panjang, Tahu, Udang',
        harga:6000,
        gambar:"http://4.bp.blogspot.com/-18diwQi5Rxk/VR6Skg0dk8I/AAAAAAAAAC0/Qf8ZgRZgAxw/s640/resep-tumis-kacang-panjang.jpg"
    }])    
})
app.get('/menu/:id', (req,res) => {
    res.send({
        _id:'2wras5456sd',
        nama_menu:"Nasi goreng seafood",
        komposisi:'Nasi, udang segar, Cumi, Ayam, Telor',
        harga:55000,
        gambar:'http://www.agrowindo.com/wp-content/uploads/2017/06/Peluang-usaha-nasi-goreng-seafood.jpg'
    })    
})
app.post('/menu', (req,res) => {
    res.send(req.body)    
})
app.put('/menu/:id', (req,res) => {
    res.send(req.body)    
})
app.delete('/menu/:id', (req,res) => {
    console.log("delete log", req.params.id)
    res.send(req.params.id)    
})


/* ========= END CODE LOGIN =========== */

app.use((req,res) => {
    res.status(404).send("Oop's..sorry menu not found?")
})
app.listen(3000, () => {
    console.log('Ready port 3000')
})