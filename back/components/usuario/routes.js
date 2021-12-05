const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUsuarios)
router.post('/', controller.addUsuario)
router.delete('/', controller.deleteUsuario)
module.exports = router;