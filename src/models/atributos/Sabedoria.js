/**
 * Este é o modelo para o armazenamento na collection de Sabedoria no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Iniciando o Schema para a criação do model
const SabedoriaSchema = new mongoose.Schema({
    /**
     * Valor da sabedoria sorteado aleatoriamente pelo sistema
     * podendo chegar nos valores entre 3 e 18
     */
    valor: {
        type: Number
    },
    /**
     * Ajuste de Sabedoria de acordo com o valor obtido
     */
    ajuste: {
        type: Number
    },
    /**
     * Magias divinas adicionais que o
     * personagem pode ter em seu grimório
     */
    magiaDivAd: {
        type: String
    }
})

// Criando o model
mongoose.model('Sabedoria', SabedoriaSchema)