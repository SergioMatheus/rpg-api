const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    personagens:  [
        {
            type: ObjectId,
            ref: 'Personagem'
        }
    ]
})

mongoose.model('Usuario', UsuarioSchema)