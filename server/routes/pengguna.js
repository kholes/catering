const express = require('express')
const router = express.Router();
const pengguna = require ('../controller/controllerPengguna.js')
const verifyAdmin = require('../helper/authAdmin')
const autentifikasi = require('../controller/autentikasi')

router.get('/', verifyAdmin.authAdmin, pengguna.getPengguna)
router.post('/', pengguna.insertPengguna)
router.post('/signin', autentifikasi.signin)


module.exports = router;


