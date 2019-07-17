const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const PersonangemSchema = new mongoose.Schema({
    usuario_id: {
        type: ObjectId,
        ref: 'Usuario'
    },
    nome: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
    alinhamento: {
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        default: 0
    },
    experiencia: {
        type: Number,
        default: 0
    },
    isHardcore: {
        type: Boolean,
        default: false
    },
    atributos: {
        forca: {
            type: Number
        },
        inteligencia: {
            type: Number
        },
        sabedoria: {
            type: Number
        },
        destresa: {
            type: Number
        },
        constituicao: {
            type: Number
        },
        carisma: {
            type: Number
        }
    },
    subatributos: {
        pontosVida: {
            type: Number
        },
        bonusAtaque: {
            type: Number
        },
        classeArmadura: {
            type: Number
        },
        jogadaProtecao: {
            type: Number
        }
    },
    idiomas: [
        {
            idioma: {
                type: String
            }
        }
    ],
    dinheiro: {
        type: Number
    },
    equipamentos: [
        {
            type: ObjectId,
            ref: 'Equipamento'
        }
    ],
    acessoMagia: {
        type: String
    },
    magias: [
        {
            type: ObjectId,
            ref: 'Magia'
        }
    ],
    expulsarMortos: [
        {
            tipo: {
                type: String
            }
        }
    ],
    talentosLadinos: [
        {
            talento: {
                type: String
            }
        }
    ],
    armasAtaque: [
        {
            type: ObjectId,
            ref: 'Magia'
        },
        {
            type: ObjectId,
            ref: 'Arma'
        }
    ]
})

mongoose.model('Personagem', PersonangemSchema)