const { request, response } = require('express');
var mongoose = require('mongoose');
var  dev_db_url = "mongodb://localhost:27017/BDD_Productos";

var mongodb = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongodb)
.then(() => console.log("Conectando a MongoDB Correctamente"))
.catch((error)=> console.error(error));
//mongoose.Promise = global.Promise;
//var db = mongoose.connection;
//db.on('error', console.error.bind(console,'Error en la conexión con Mongo DB'));

var Producto = require('../modelos/producto')

exports.producto_create = function(request,response) {
    var producto = new Producto ({
        nombre:request.body.nombre,
        tipo:request.body.tipo
    })

    //producto.save(function(err){

    //    if(err){
    //        return next(err)
    //    }

    //    response.send({'message' : 'OK'})
    //})

    producto.save()
    .the((data) => response.json(data))
    .catch((error) => response.json({message:error}));
}

exports.detalle_producto = function(request,response){
    Producto.findById(request.query.id)
    .then((data) => response.json(data))
    .catch((error) => response.json(error))
}

exports.update_producto = function(request,response){
    Producto.findByIdAndUpdate(request.query.id,{$set:request.body})
    .then(() => response.json({'message' : 'UPDATED'}))
    .catch((error) => response.json(error))
}

exports.producto_delete = function(request,response){
    product.findByIdAndDelete(request.id).then(() => response.json({ 'message ': 'DELETED' })).
        catch((error) => response.json(error))
}