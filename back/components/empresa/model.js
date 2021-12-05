const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaSchema = new Schema({
  url:String,
  nombre:String,
  descripcion:String,
  direccion:String,
  telefono:String,
  instagram:String,
  facebook:String,
  twitter:String,
  imagen:String,
});

const model = mongoose.model('empresa', empresaSchema, 'empresas');

module.exports = model;