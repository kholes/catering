const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerMenu')
const middleware = require('../helper/authAdmin')


router.get('/', middleware.authAdmin, controller.getAllMenu)
router.get('/:id', controller.getOneMenu)
router.get('/by/:kategori', controller.getByCategory)
router.post('/', controller.addMenu)
router.delete('/:id', controller.deleteMenu)
router.put('/stok/:id', controller.editStok)


module.exports = router;