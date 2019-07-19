/**
 * Este é o modelo para o armazenamento na collection de Magia no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Inicindo o Schema para a criação do model
const MagiaSchema = new mongoose.Schema({
    /**
     * O tipo da magia
     * Existem dois tipos de magias:
     * Arcanas e Divinas
     * 
     * Arcanas: geralmente usadas por personagem de classe mago.
     * Divinas: Geralmente usadas por personagem de classe clerigo.
     */
    tipo: {
        type: String
    },
    /**
     * Especifica a duraçã da magia em minutos
     */
    duracao: {
        type: Number
    },
    /**
     * O dano que a magia vai causar no oponente
     */
    dano: {
        type: Number
    },
    /**
     * O alcance da magia em raios os ou direção
     */
    alcance: {
        type: Number
    }
})

// Criando o model
mongoose.model('Magia', MagiaSchema)