/**
 * Este é o modelo para o armazenamento na collection de Destreza no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Iniciando o Schema  para a criação do model
const DestrezaSchema = new mongoose.Schema({
    /**
     * Valor da destreza sorteado aleatoriamente pelo sistema
     * podendo chegar nos valores entre 3 e 18
     */
    valor: {
        type: Number
    },
    /**
     * Ajuste de destreza de acordo com o valor obtido
     */
    ajuste: {
        type: Number
    },
    /**
     * Porcentagem de habilidade Localizar e desarmar armadilhas
     * de acordo com o valor obtido
     */
    LocalDesarmArm: {
        type: Number
    },
    /**
     * Porcentagem de habilidade Movimentar-se em silencio e abrir trancar portas
     * de acordo com o valor obtido
     */
    movSilAbTranc: {
        type: Number
    },
    /**
     * Porcentagem de habilidade Esconder-se nas sombras e Pungar
     * de acordo com o valor obtido
     */
    EsconSombPungar: {
        type: Number
    }
})

// Criando o model
mongoose.model('Destreza', DestrezaSchema)