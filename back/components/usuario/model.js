const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
nombre:String,
apellido:String,
cedula: String,
telefono: String,
correo:String,
username:String,
contrasena: String,
});

const model = mongoose.model('usuario', usuarioSchema, 'usuarios');

module.exports = model;