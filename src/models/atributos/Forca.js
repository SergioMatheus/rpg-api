/**
 * Este é o modelo para o armazenamento na collection de Forca no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Iniciando o Schema para a criação do model
const ForcaSchema = new mongoose.Schema({
    /**
     * Valor da força sorteado aleatoriamente pelo sistema
     * podendo chegar nos valores entre 3 e 18
     */
    valor: {
        type: Number
    },
    /**
     * Ajuste de força de acordo com o valor obtido
     */
    ajuste: {
        type: Number
    }
})

// criando o model
mongoose.model('Forca', ForcaSchema)