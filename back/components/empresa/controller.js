const store = require('./store');
const response = require('../../network/response');

async function getEmpresas(req, res){
  try {
    const Empresas = await store.list()
    response.success(req, res, Empresas, 200)
  } catch (error) {
      response.error(req, res, 'Error al consultar las empresas', 500, error)
  }
}

async function addEmpresa(req, res) {
  try {
    const Empresa = req.body;
    const newEmpresa = await store.add(Empresa)
    response.success(req,res, res.json(newEmpresa),201)
  } catch (error) {
    response.error(req, res, 'Error al crear la empresa', 500, error)
  }
}
async function deleteEmpresa(req, res) {
  try {
    const idEmpresa = req.body;
    const newEmpresa = await store.del(idEmpresa);
    response.success(req,res, res.json(newEmpresa),201)
  } catch (error) {
    response.error(req, res, 'Error al eliminar la empresa', 500, error)
  }
}

module.exports = {

  getEmpresas,
  addEmpresa,
  deleteEmpresa,

}