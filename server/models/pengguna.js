const mongoose = require('mongoose')


const penggunaSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    peran: {
        type: String,
        required: true
    }

    // optional, untuk key masing2 peran
    // key: {
    //     type: String,
    //     required: true
    // }
});

const Pengguna = mongoose.model('Pengguna, penggunaSchema')

module.exports = Pengguna