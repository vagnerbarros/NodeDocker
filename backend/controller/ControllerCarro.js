var cadCarro = require("../model/CadastroCarro");

class ControllerCarro {
  
    cadastrar(request, response) {
      
      let carro = request.body;

      cadCarro.cadastrar(carro)
      .then(novoCarro => {
          response.status(200).send(novoCarro);
      })
      .catch(err => {
          response.status(500).send({ motivo: err.message });
      });
    }
  
    listar(request, response) {
  
      cadCarro.listar()
      .then(carros => {
          response.status(200).send(carros);
      })
      .catch(err => {
          response.status(500).send({ motivo: err.message });
      });
    }
  
    remover(request, response) {
      
      let json = request.body;
  
      let id = json["_id"];
  
      cadCarro.remover(id)
      .then(removido => {
          response.status(200).send(removido);
      })
      .catch(err => {
          response.status(500).send({ motivo: err.message });
      });
    }
  
    atualizar(request, response) {
      
      let atual = request.body;

      cadCarro.atualizar(atual)
      .then(atualizado => {
        response.status(200).send(atualizado);
      })
      .catch(err => {
        response.status(500).send({ motivo: err.message });
      });
    }
  }

  var carro = new ControllerCarro();

  module.exports = carro;