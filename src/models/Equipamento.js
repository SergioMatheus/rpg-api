const mongoose = require('mongoose')

const EquipamentoSchema = new mongoose.Schema({
    item: {
        type: String
    },
    descricao: {
        type: String
    },
    bonusDefesa: {
        type: String
    },
    reducaoMovimento: {
        type: Number
    },
    preco: {
        type: Number
    },
    peso: {
        type: Number
    }
})

mongoose.model('Equipamento', EquipamentoSchema)