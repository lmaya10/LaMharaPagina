//Utilizar modo estricto
var express = require("express");
var router = express.Router();


function connectProductos(callback){
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb+srv://admin:admin@lamharadb-yinqm.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url,{useNewUrlParser:true});

  client.connect(function(err) {

    if (err) throw err;

    console.log("Conectado con mongo");
    var db = client.db("ProductosDB");
    var colProds = db.collection("producto");

    callback(colProds, client);
  })
}

function connectComentarios(callback){
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb+srv://admin:admin@lamharadb-yinqm.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url,{useNewUrlParser:true});

  client.connect(function(err) {

    if (err) throw err;

    console.log("Conectado con mongo");
    var db = client.db("Comentarios");
    var colComment = db.collection("comentarios");

    callback(colComment, client);
  })
}

function getProductos(callback){

  connectProductos(function(colProds, client){
    colProds.find({})
      .toArray(function(err2,docs)
      {
        if (err2) throw err2;

        console.log("got " + docs.length + "'products");

        callback(docs);
        client.close();
      });
  });
}

function getComentarios(callback){
  connectComentarios(function(colComment, client){
    colComment.find({})
      .toArray(function(err2,docs)
      {
        if (err2) throw err2;

        console.log("got" + docs.length + "comments");

        callback(docs);
        client.close();
      });
  });
}

function crearProducto(content, callback){
  connectProductos(function(colProds, client){
    colProds.insertOne(content, function(err){
      if(err) throw err;
      console.log("Inserto el producto");
      client.close();
    });
  })
}


function crearComentario(content, callback){
  connectComentarios(function(colComment, client){
    colComment.insertOne(content, function(err){
      if(err) throw err;
      console.log("Inserto el producto");
      client.close();
    });
  })
}


router.get("/productos", function(req, res, next) {
  getProductos(function(docs)
  {
     res.send(docs);
  })

});

router.post("/crearProducto", function(req,res,next) {

  console.log("crearProducto", req.body);
  crearProducto(req.body);
  res.redirect("/nuestrosProductos");


})

router.get("/comentarios", function(req,res,next){
  getComentarios(function(docs){
    res.send(docs);
  })
  });

router.post("/crearComentario", function(req,res,next) {

  console.log("crearComentario", req.body);
  crearComentario(req.body);
  res.redirect("/nuestrosProductos");


})

module.exports = router;
