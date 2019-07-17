/**
 * Este é o modelo para o armazenamento na collection de Usuário no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require para a dependecia do mongoose
const ObjectId = mongoose.Schema.Types.ObjectId // Armazenando o tipo de dado ObjectId numa constante

// Iniciando o Schema para a criação do model
const UsuarioSchema = new mongoose.Schema({
    /**
     * Nome real do Usuario
     */
    nome: {
        type: String,
        required: true
    },
    /**
     * Username para acesso do sistema
     */
    usuario: {
        type: String,
        required: true
    },
    /**
     * Email do usuario
     */
    email: {
        type: String,
        required: true
    },
    /**
     * Senha para acesso do sistema
     */
    senha: {
        type: String,
        required: true
    },
    /**
     * Os personagens relacionados na conta, ou seja, os jogos
     * criados e suas informações Referencia ao model de Personagens
     */
    personagens:  [
        {
            type: ObjectId,
            ref: 'Personagem'
        }
    ]
})

// Criando o model
mongoose.model('Usuario', UsuarioSchema)