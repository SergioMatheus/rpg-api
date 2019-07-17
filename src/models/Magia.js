const mongoose = require('mongoose')

const MagiaSchema = new mongoose.Schema({
    tipo: {
        type: String
    },
    tamanho: {
        type: String
    },
    dano: {
        type: String
    },
    alcance: {
        type: String
    },
    iniciativa: {
        type: Number
    },
    preco: {
        type: Number
    },
    peso: {
        type: Number
    }
})

mongoose.model('Magia', MagiaSchema)