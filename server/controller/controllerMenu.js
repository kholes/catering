const Menu = require ('../models/menu.js');

function getAllMenu(req,res){
    Menu.find({})
    .then(result =>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
}


function getOneMenu(req,res){
    Menu.findById(req.params.id)
    .then(row=>{
    res.send(row)
    })
    .catch(err=>{
        res.send(err)
    })
}


function getByCategory(req,res){
    Menu.find({
        kategori: req.params.kategori
    })
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
}

// CRUD

// Create
function addMenu(req,res){
    Menu.create({
      nama_menu: req.body.nama_menu,
      kategori: req.body.kategori,
      harga: req.body.harga,
      stok: req.body.stok,
      gambar: req.body.gambar
    })
    .then(log=>{
      res.send(log)
    })
    .catch(err=>{
      res.send(err)
    })
  }


//update
function UpdateMenu(req,res){
    Menu.findOneAndUpdate({
      _id:req.params.id
    },{
        nama_menu: req.body.nama_menu,
        kategori: req.body.kategori,
        harga: req.body.harga,
        stok: req.body.stok,
        gambar: req.body.gambar
    })
    .then(log=>{
      res.send(log)
    })
    .catch(err=>{
      res.send(err)
    })
  }


  // edit
  function editStok(req,res){
    Menu.where({
      _id: req.params.id
    })
    .update({
      stok: req.body.stok
    })
    .then(log=>{
      res.send(log)
    })
    .catch(err=>{
      res.send(err)
    })
  }
  

  // Delete
  function deleteMenu(req,res){
    Menu.deleteOne({
      _id: req.params.id
    })
    .then(log=>{
      res.send(log)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  module.exports ={
    getAllMenu,
    getOneMenu,
    getByCategory,
    addMenu,
    UpdateMenu,
    editStok,
    deleteMenu
  };