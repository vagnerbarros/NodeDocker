import axios from '@/util/axios';

export default{
    
    namespaced: true,

    //equivalente ao data
    state: {

        carros: [],
        carroAtual: {
            marca: '',
            ano: '',
            valor: ''
        },
        modoEdicao: false,
        carregando: false
    },

    //equivalente ao computed properties
    getters: {

        estaEditando(state){
            return state.modoEdicao;
        },
        textoBtnConfirmar(state){
            if(state.modoEdicao){
                return 'Salvar';
            }
            else{
                return 'Cadastrar';
            }
        }
    },

    //equivalente aos methods
    //responsável por chamar a api externa
    actions: {

        
        carregar({commit}){

            commit('setCarregando', true);
            axios.get('/carros')
            .then((response) => {
                commit('setCarros', response.data);
            })
            .catch((erro) => {
                commit('setCarros', []);
                commit('setCarregando', false);
            });  
        },
        salvar({commit, state, rootState}, dados){
            
            commit('setCarregando', true);

            let carro = Object.assign({}, state.carroAtual);
            if(state.modoEdicao){
                axios.put('/carros', carro)
                .then((response) => {
                    let retorno = response.data;                    
                    commit('atualizar', retorno);
                    commit('estadoInicial', dados.router);
                    commit('setMensagemSucesso', 'Carro Atualizado com Sucesso', {root: true});
                })
                .catch((erro) => {
                    commit('setCarregando', false);
                });
            }
            else{
                
                delete(carro._id);
                axios.post('/carros', carro)
                .then((response) => {
                    let retorno = response.data;
                    commit('adicionar', retorno);
                    commit('estadoInicial', dados.router);
                    commit('setMensagemSucesso', 'Carro Cadastrado com Sucesso', {root: true});
                })
                .catch((erro) => {
                    commit('setCarregando', false);
                });
            }
        },
        editar({commit}, dados){
            commit('setCarregando', true);
            dados.router.push('/carros/editar');
            commit('editar', dados.carro);
        },
        novo({commit}, dados){
            commit('setCarregando', true);
            dados.router.push('/carros/novo');
            commit('novo');
        },
        remover({commit, rootState}, remover){
            commit('setCarregando', true);
            axios.delete('/carros', {
                data: { _id: remover._id }
            })
            .then((response) => {
                commit('remover', remover);
                commit('setMensagemSucesso', 'Carro Removido com Sucesso', {root: true});
            })
            .catch((erro) => {
                commit('setCarregando', false);
            });
        },
        cancelar({commit}, dados){
            commit('estadoInicial', dados.router);
        }
    },

    //responsável por alterar o state.
    mutations: {

        setCarros(state, carros){
            state.carros = carros;
            state.carregando = false;
        },
        setCarregando(state, valor){
            state.carregando = valor;
        },
        remover(state, removido){
            state.carros = state.carros.filter(carro => carro._id !== removido._id);
            state.carregando = false;
        },
        novo(state){
            state.modoEdicao = false;
            state.carroAtual = {
                marca: '',
                ano: '',
                valor: ''
            }
            state.carregando = false;
        },
        editar(state, editar){
            state.modoEdicao = true;
            state.carroAtual = editar;
            state.carregando = false;
        },
        adicionar(state, carro){
            state.carros.push(carro);
            state.carregando = false;
        },
        atualizar(state, atual){
            state.carros.forEach(carro => {
                if(carro._id === atual._id){
                    carro = atual;
                }
            });
            state.carregando = false;
        },
        estadoInicial(state, router){
            state.carroAtual = {
                marca: '',
                ano: '',
                valor: ''
            }
            router.push('/carros');
            state.carregando = false;
        }
    }
}