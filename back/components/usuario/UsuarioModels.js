const mongoose = require('mongoose')
const {Schema}= mongoose

const UsuarioSchema = new Schema({
// id:String,
nombre:String,
apellido:String,
correo:String,
username:String,
contrasena: String,




})

module.exports= mongoose.model('usuario',UsuarioSchema)