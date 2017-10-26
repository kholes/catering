const mongoose = require('mongoose')


const menuSchema = new mongoose.Schema({
    nama_menu: {
        type: String,
        required: true
    },
    kategori:{
        type: String,
        required: true,        
    },
    harga: {
        type: Number,
        required: true
    },
    stok : {
        type: Number,
        required: true
    },
    gambar: {
        type: String
    }  
})

const Menu = mongoose.model('Menu',menuSchema)

module.exports = Menu