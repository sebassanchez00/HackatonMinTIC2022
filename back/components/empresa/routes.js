const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getEmpresas)
router.post('/', controller.addEmpresa)
router.delete('/', controller.deleteEmpresa)
module.exports = router;