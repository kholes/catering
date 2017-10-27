const mongoose = require('mongoose')
const Schema = mongoose.Schema


var transaksiSchema = new mongoose.Schema({
    tanggal : {
      type : Date,
      required :true
    },
    listMenu : {
      type : [{
          idMenu:{type:Schema.Types.ObjectId, ref: 'Menu'},
          quantity: {type: Number, required:true}
      }],
      required :true
    },
    total : {
      type : Number,
      required :true
    }
  })
  
  var Transaksi = mongoose.model('Transaksi',transaksiSchema)
  
  module.exports = Transaksi;