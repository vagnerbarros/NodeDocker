const express = require('express');
const router = express.Router();

var controller = require('../controller/Controller');

//cadastro de carro
router.post('/carros', controller.carro.cadastrar);

//listar todos os carros
router.get('/carros', controller.carro.listar);

//remover o carro
router.delete('/carros', controller.carro.remover);

//atualizar carro
router.put('/carros', controller.carro.atualizar);

module.exports = router;