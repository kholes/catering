const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerTransaksi')


router.get('/', controller.getAllTransaksi)
router.post('/', controller.createTransaksi)
router.get('/:id', controller.getOneTransaksi)
router.put('/:id', controller.pushMenuToTransaksi)


module.exports = router;