const express = require('express');
const router = express.Router()
const controller = require('../controller/controllerMenu')
router.get('/', controller.getAllMenu)
module.exports = router