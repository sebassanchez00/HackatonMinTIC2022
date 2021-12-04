const express = require('express');

const router = express.Router();

// const solicitudesRoutes = require('../components/solicitud/routes')
// router.use('/usuario',usuarioRouter);

router.use('/', () => { 'api funcionando'; });
module.exports = router;
