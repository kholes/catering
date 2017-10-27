const express = require('express')
const router = express.Router()
const autentifikasi = require('../controller/autentikasi')
const pengguna = require('../models/pengguna')

const jwt = require('jsonwebtoken');
require('dotenv').config()


/* GET Home Page. */

router.get('/', function (req, res, next){
    res.render('index', {title: 'Express'})
});

router.post('/signin', autentifikasi.signin)

module.exports = router;