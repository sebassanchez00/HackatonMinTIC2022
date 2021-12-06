const {Router}= require('express')
const router = Router()
const usuarioCtrl= require('./UsuarioController')

router.post('/crear',usuarioCtrl.crearUsuario)
router.post('/login',usuarioCtrl.login)
router.get('/listar/:id',usuarioCtrl.listarId)
router.put('/actualizar/:id',usuarioCtrl.actualizar)


module.exports = router