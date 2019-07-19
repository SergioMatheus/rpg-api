/**
 * Este é o modelo para o armazenamento na collection de Carisma no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Iniciando o Schema para a criação do model
const CarismaSchema = new mongoose.Schema({
    /**
     * Valor da carisma sorteado aleatoriamente pelo sistema
     * podendo chegar nos valores entre 3 e 18
     */
    valor: {
        type: Number
    },
    /**
     * Numero de seguidores de acordo com o valor obtido
     */
    numSeg: {
        type: Number
    },
    /**
     * Ajuste de Carisma de acordo com o valor obtido
     */
    ajuste: {
        type: Number
    },
    /**
     * Nomero da capacidade de mortos vivos que podem ser
     * afastados pelo personagem de acordo com o valor obtido.
     */
    morVivAf: {
        type: String
    }
})

// Criando o model
mongoose.model('Carisma', CarismaSchema)