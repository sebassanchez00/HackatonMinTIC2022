const store = require('./store');
const response = require('../../network/response');

async function getUsuarios(req, res){
  try {
    const Usuarios = await store.list()
    response.success(req, res, Usuarios, 200)
  } catch (error) {
      response.error(req, res, 'Error al consultar los usuarios', 500, error)
  }
}

async function addUsuario(req, res) {
  try {
    const Usuario = req.body;
    const newUsuario = await store.add(Usuario)
    response.success(req,res, res.json(newUsuario),201)
  } catch (error) {
    response.error(req, res, 'Error al crear el usuario', 500, error)
  }
}
async function deleteUsuario(req, res) {
  try {
    const idUsuario = req.body;
    const newUsuario = await store.del(idUsuario);
    response.success(req,res, res.json(newUsuario),201)
  } catch (error) {
    response.error(req, res, 'Error al eliminar el usuario', 500, error)
  }
}

module.exports = {
  getUsuarios,
  addUsuario,
  deleteUsuario,
}