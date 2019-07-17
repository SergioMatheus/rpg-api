/**
 * Este é o modelo para o armazenamento na collection de Arma no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Inicindo o Schema para a criação do model
const ArmaSchema = new mongoose.Schema({
    /**
     * Identificação da arma:
     * 
     * Exemplo:
     * 'Espada grande'
     */
    arma: {
        type: String
    },
    /**
     * Tamanho da arma: P, M, G
     * 
     * P -> Pequena
     * M -> Media
     * G -> Grande
     */
    tamanho: {
        type: String
    },
    /**
     * Dano que a arma pode causar ao oponente
     */
    dano: {
        type: String
    },
    /**
     * Alcance que a arma chega se for lançavel
     */
    alcance: {
        type: String
    },
    /**
     * A iniciativa que a arma terá para iniciar um combate
     */
    iniciativa: {
        type: Number
    },
    /**
     * Preço da arma em moedads de Ouro
     */
    preco: {
        type: Number
    },
    /**
     * Peso da arma em quilos(KG)
     */
    peso: {
        type: Number
    }
})

// Criando o model
mongoose.model('Arma', ArmaSchema)