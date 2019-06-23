var repositorio = require('../repositorio/RepositorioCarro');
var Carro = require('../schemas/carro');

class CadastroCarro {

    async cadastrar(carro){

        try{

            let novo = Carro(carro);
            return await repositorio.cadastrar(novo);
        }
        catch(erro){
            throw erro;
        }
    }

    listar() {
        
        try{
            return repositorio.listar();
        }
        catch(erro){
            throw erro;
        }
    }

    async remover(id){
        
        try{

            let carro = await repositorio.buscarId(id);
            if(carro){
                
                return await repositorio.remover(id)
            }
            else{
                throw new Error('Carro não encontrado');
            }
        }
        catch(erro){
            throw erro;
        }
    }

    async atualizar(atual){

        try{
            
            let carro = await repositorio.buscarId(atual._id);  
            if(carro){
                return await repositorio.atualizar(atual);
            }
        }
        catch(err){
            throw err;
        }
    }
}

var carro = new CadastroCarro();

module.exports = carro;