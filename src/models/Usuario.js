const mongoose = require('mongoose')

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
        // TODO Ver como referenciar o models de Personagem puxando apenas os personagens criados por este usuario
    ]
})

mongoose.model('Usuario', UsuarioSchema)