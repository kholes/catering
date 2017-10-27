const Transaksi = require('../models/transaksi')
const Menu = require('../models/menu')

function createTransaksi(req,res){
  Transaksi.create({
    tanggal: new Date(),
    listMenu: req.body.listMenu,
    total: req.body.total
  })
  .then(log=>{
    for (var i = 0; i < req.body.listMenu.length; i++) {
      let data = req.body.listMenu[i];
      Menu.findById(req.body.listMenu[i].idMenu)
      .then(row=>{
        console.log(row, 'ini row');
        console.log(data);
        Menu.findOneAndUpdate({
          _id: row._id
        },{
          stok: row.stok - data.quantity
        })
        .then(log=>{
          console.log(log);
        })
        .catch(err=>{
          console.log(err);
        })
      })
      .catch(err=>{
        console.log(err);
      })
      console.log('something');
    }
    res.send(log)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getAllTransaksi(req,res){
  Transaksi.find()
  .populate('idBarang')
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getOneTransaksi(req,res){
  Transaksi.findById(req.params.id)
  .then(row=>{
    res.send(row)
  })
  .catch(err=>{
    res.send(err)
  })
}


function pushMenuToTransaksi(req,res){
  Transaksi.where({
    _id:req.params.id
  })
  .update({
    $push:{
      listMenu:req.body.Menu
    }
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  createTransaksi,
  getAllTransaksi,
  pushMenuToTransaksi,
  getOneTransaksi
};