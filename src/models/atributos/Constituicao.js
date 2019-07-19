/**
 * Este é o modelo para o armazenamento na collection de Constituição no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Iniciando o Schema para a criação do model
const ConstituicaoSchema = new mongoose.Schema({
    /**
     * Valor da constituição sorteado aleatoriamente pelo sistema
     * podendo chegar nos valores entre 3 e 18
     */
    valor: {
        type: Number
    },
    /**
     * Ajuste de constituição de acordo com o valor btido
     */
    ajuste: {
        type: Number
    },
    /**
     * Chance de ressureição de acordo com o resultado obtid (%)
     */
    chanceRes: {
        type: Number
    }
})

// Criando o model
mongoose.model('Constituicao', ConstituicaoSchema)