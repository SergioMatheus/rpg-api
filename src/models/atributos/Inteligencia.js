/**
 * Este é o modelo para o armazenamento na collection de Inteligencia no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Iniciando o Schema para a criação do model
const InteligenciaSchema = new mongoose.Schema({
    /**
     * Valor da força sorteado aleatoriamente pelo sistema
     * podendo chegar nos valores entre 3 e 18
     */
    valor: {
        type: Number
    },
    /**
     * numero de idiomas de acordo com o valor obtido 
     */
    numIdiomas: {
        type: Number
    },
    /**
     * Cahance (%) de aprender uma magia arcana de acordo
     * com o valor obtido
     */
    chanceMagia: {
        type: Number
    },
    /**
     * Magias arcanas adicionais que o
     * personagem pode ter em seu grimório
     */
    magiasArcAdicionais: {
        type: String
    }
})

// criando o model
mongoose.model('Inteligencia', InteligenciaSchema)