var Carro = require('../schemas/carro');

class RepositorioCarro{

    async cadastrar(novo){

        try{
            let salvo = await novo.save();
            return salvo;
        }
        catch(err){
            throw err;
        }
    }

    async listar(){

        try{
            let carros = await Carro.find({}).exec();
            return carros;
        }
        catch(err){
            throw err;
        }
    }

    async remover(id){

        try{
            let removido = await Carro.findOneAndRemove({_id: id}).exec();
            return removido;
        }
        catch(err){
            throw err;
        }
    }

    async atualizar(carro){

        try{
            let atualizado = await Carro.findOneAndUpdate({_id: carro._id}, carro, {new : true}).exec(); 
            return atualizado;
        }
        catch(err){
            throw err;
        }
    }

    async buscarId(id){
        
        return await this.consultar({_id: id});
    }

    async consultar(query){

        try{
            let carro = await Carro.findOne(query).exec();
            return carro;
        } 
        catch(err){
            throw err;
        }
    }
}

var carro = new RepositorioCarro();

module.exports = carro;

