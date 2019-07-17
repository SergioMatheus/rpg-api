const mongoose = require('mongoose')

const PersonangemSchema = new mongoose.Schema({
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
        // TODO Ver como referenciar o models de Equipamentos puxando apenas os equipamentos deste personagem
    ],
    acessoMagia: {
        type: String
    },
    magias: [
        // TODO Ver como referenciar o models de Magia puxando apenas as magias deste personagem
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
        // TODO Ver como referenciar o models de Armas e Magias puxando apenas as magias e armas deste personagem
    ]
})

mongoose.model('Personagem', PersonangemSchema)