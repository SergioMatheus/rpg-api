/**
 * Este é o modelo para o armazenamento na collection de Personagem no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require para a dependencia do mongoose
const ObjectId = mongoose.Schema.Types.ObjectId // Armazenando o tipo de dado ObjectId numa constante

// Inicindo o Schema para a criação do model
const PersonangemSchema = new mongoose.Schema({
    usuario_id: {
        type: ObjectId,
        ref: 'Usuario'
    },
    /**
     * Nome do personagem
     */
    nome: {
        type: String,
        required: true
    },
    /**
     * Raça do personagem
     * Tem como base principal 4 raças:
     * Humano, Anão, Elfo e Halfling
     * Obs.: terão as raças acrescentadas, essas informações serão
     * setadas no fromulario de criação do personagem no Frontend.
     */
    raca: {
        type: String,
        required: true
    },
    /**
     * Classe do personagem
     * Tem como base principal 4 classes:
     * Mago, Clerigo, Homem de Armas, Ladrão
     * Obs.: Cada classe tem entre 3 e 4 subclasses
     * cada uma de acordo com a o alinhamento escolhido.
     */
    classe: {
        type: String,
        required: true
    },
    /**
     * Alinhamento do personangem
     * Existem 3 alinhamentos:
     * Ordem, Neutro, Caotico
     * Estes alinhamentos definem o futuro do personangem
     * em varios aspectos, durante o jogo na história e na
     * definição das subclasses, estabelecida depois do
     * nível 5 independente da raça do mesmo.
     */
    alinhamento: {
        type: String,
        required: true
    },
    /**
     * Nivel do persoágem de acordo com a experiencia,
     * cada classe tem seus níveis de experiencia para
     * evolução, o nível determina o quão forte é o
     * personágem para a execução do jogo.
     */
    nivel: {
        type: Number,
        default: 0
    },
    /**
     * A experiencia é adquirida a cada feito do personagem
     * junto ao seu grupo ou até mesmo só, ela é acumulada,
     * e determina o nivel de cada personágem de acordo com
     * sua classe, é com a experiencia que é determinada a
     * evolução do mesmo
     */
    experiencia: {
        type: Number,
        default: 0
    },
    /**
     * o isHardcore é uma propriedade que determina a
     * dificuldade do jogo, se a a mesma for true, o jogo
     * é nível hardcore se fro false o jogo é normal:
     * 
     * Hardcore: O usuário não pode deletar esse tipo de
     * personagem, e ao morrer ele não terá mas acesso a
     * este personagem, ficando com o mesmo apenas na
     * lembrança.
     * 
     * Normal: O usuário pode deletar esse tipo de personagem
     * o momento que quiser, podendo reviver o mesmo iniciando
     * o jogo todo de novo no mercado, com o nível inicial e os
     * números iniciais de criação do personagem caso ele morra.
     */
    isHardcore: {
        type: Boolean,
        default: false
    },
    /**
     * A propriedade atributos é um array de objetos,
     * onde cada uma vai relacionar a um model de atributos
     * em especifico, esses atributos determinam muitas coisas
     * dos personagens, tanto na capacidade fisica, intelectual,
     * etc.
     * 
     * Mais informações de cada atributo nos models epecificos
     */
    atributos: [
        {
            type: ObjectId,
            ref: 'Forca'
        },
        {
            type: ObjectId,
            ref: 'Inteligencia'
        },
        {
            type: ObjectId,
            ref: 'Sabedoria'
        },
        {
            type: ObjectId,
            ref: 'Destreza'
        },
        {
            type: ObjectId,
            ref: 'Constituicao'
        },
        {
            type: ObjectId,
            ref: 'Carisma'
        }
    ],
    /**
     * Esta propriedade é um objeto que armazena os
     * subatributos que são calculados apartir das informações
     * colhidas dos atributos.
     */
    subatributos: {
        /**
         * Os pontos de vida determinam o quanto
         * de vida perante um inimigo ou desafio
         * o personagem tem, com essa vida chegando
         * em 0 o personagem fica desacordado, podendo
         * ter alguma chance, mas chegando a -10 ele morre,
         * podendo também obter morte instantanea, por diversas
         * situações.
         * 
         * Esta propriedade é definida pelo seguinte calculo:
         * pontos de vida = dado de vida (determinado pela classe) + Ajuste de constituição
         */
        pontosVida: {
            type: Number
        },
        /**
         * Os bonus de ataque da ao personagem de
         * atacar podendo ter uma força auxilir em
         * determinado ataque.
         * 
         * Esta propriedade é definida pelo seguinte calculo:
         * Bonu de ataque = Ajuste de força + ajuste de destreza + Ajuste de classe + Ajuste de raça
         */
        bonusAtaque: {
            type: Number
        },
        /**
         * A classe de armadura determina o quanto o personagem
         * se defende de um ataque fisico se o calculo eceder
         * este valor o ataque atinge os potos de vida reduzindo-os.
         * 
         * Esta propriedade é definida pelo seguinte calculo:
         * Classe de armadura = 10 + Ajuste de destreza +  Ajuste de força + Ajuste de Raça +  Ajuste de equipamentos (Como escudos e ou armaduras)
         */
        classeArmadura: {
            type: Number
        },
        /**
         * A Jogada de proteção determina o quanto o personagem
         * pode se defender de um ataque previsto eu uma luta
         * corpo a corpo por exemplo.
         * 
         * Esta propriedade pe definida pelo seguinte calculo:
         * Jogada de proteção = Ajuste de destreza + Ajuste de constituição + Ajuste de sabedoria
         */
        jogadaProtecao: {
            type: Number
        }
    },
    /**
     * este array determina quais idiomas o personagem conhece
     * alem do seu nativo, dependendo da inteligencia que o mesmo possua.
     */
    idiomas: [
        {
            type: String
        }
    ],
    /**
     * O dinheiro determina quantas peças de ouro o personagem terá,
     * obtendo um sorteio alatório de inicio podendo variar entre
     * 30 e 180 peças de ouro dependendo da sorte do jogador.
     */
    dinheiro: {
        type: Number
    },
    /**
     * Esta propriedade é um array que de termina quantos
     * equipamentos e quais o personagem possue para a sua
     * jornada, tendo sua capacidade de até 10 itens.
     */
    equipamentos: [
        {
            type: ObjectId,
            ref: 'Equipamento'
        }
    ],
    /**
     * Esta propriedade é um arrai que armazena os ciclos
     * de magia que o personagem de classe Mago ou Clerigo
     * tem acesso para uso.
     * Obs.: Podendo também se estender para outras classes se o
     * personagem possuir inteligencia suficiente.
     */
    acessoMagia: [
        {
            type: String
        }
    ],
    /**
     * Esta propriedade representa o grimório do personagem
     * de Classe Clerigo ou Mago possui quais magias ele
     * conhece para usar com capacidade para 16 magias.
     * 
     * Obs.: Podendo também se estender para outras classes se o
     * personagem possuir inteligencia suficiente.
     */
    magias: [
        {
            type: ObjectId,
            ref: 'Magia'
        }
    ],
    /**
     * Esta propriedade é um array que armazena quais mortos
     * vivos o personagem pode espulsar dando a capacidade do
     * jogador escolher quais, a capacidade é determinada pelo
     * atributo carisma.
     */
    expulsarMortos: [
        {
            type: String
        }
    ],
    /**
     * Esta propriedade determina os talentos ladinos que o
     * personagem conhece, a capacidade é determinada pelo
     * atributo destreza. 
     */
    talentosLadinos: [
        {
            type: String
        }
    ],
    /**
     * Esta propriedade é um array que armazena as armas e
     * magias que o personagem irá utilizar para determinada,
     * batalha e/ou aventura, tendo a capacidade de tres armas,
     * ou magias.
     */
    armasAtaques: [
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

// Criando o model
mongoose.model('Personagem', PersonangemSchema)