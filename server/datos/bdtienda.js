 // JavaScript Document

 mongoClient = require('mongodb').MongoClient,
 mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://192.168.56.102/BDTienda',function(error){
  if(error){
    console.log(error.name +" "+ error.message);
  }else{
    console.log('Conectado a MongoDB');
  }
});
module.exports = BDTienda;
