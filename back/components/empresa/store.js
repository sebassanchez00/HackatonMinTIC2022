
const Model = require('./model');

function addEmpresa(Empresa){
  const newEmpresa = new Model(Empresa);
  return newEmpresa.save()
}

function getEmpresas(){
  const Empresas = Model.find();
  return Empresas;
}

function deleteEmpresas(idEmpresa){
  Model.findByIdAndDelete(idEmpresa,(error,deletedRecord) => {});
}

module.exports = {
  add: addEmpresa,
  list: getEmpresas,
  del: deleteEmpresas,
}

