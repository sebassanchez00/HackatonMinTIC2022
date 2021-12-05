const express = require('express');
const router = express.Router();

const empresaRouter = require('../components/empresa/routes');
const usuarioRouter = require('../components/usuario/routes');

// const solicitudesRoutes = require('../components/solicitud/routes')
// router.use('/usuario',usuarioRouter);

router.use('/empresa', empresaRouter);
router.use('/usuario', usuarioRouter);
module.exports = router;
