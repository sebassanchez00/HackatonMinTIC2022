
const Model = require('./model');

function addUsuario(Usuario){
  const newUsuario = new Model(Usuario);
  return newUsuario.save()
}

function getUsuarios(){
  const Usuarios = Model.find();
  return Usuarios;
}

function deleteUsuarios(idUsuario){
  Model.findByIdAndDelete(idUsuario,(error,deletedRecord) => {});
}

module.exports = {
  add: addUsuario,
  list: getUsuarios,
  del: deleteUsuarios,
}

