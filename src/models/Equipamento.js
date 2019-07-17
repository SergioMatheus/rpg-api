/**
 * Este é o modelo para o armazenamento na collection de Equipamento no MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require da dependencia do mongoose

// Inicindo o Schema para a criação do model
const EquipamentoSchema = new mongoose.Schema({
    /**
     * Nome do item comprado
     */
    item: {
        type: String
    },
    /**
     * Descrição do item para o jogador
     */
    descricao: {
        type: String
    },
    /**
     * Bonos de defesa do item
     * para itens de defesa
     * 
     * esta propriedade é usada para o calculo da classe de armadura
     */
    bonusDefesa: {
        type: String
    },
    /**
     * Redução de movimento que o item pode causar no personagem
     * para itens de defesa.
     */
    reducaoMovimento: {
        type: Number
    },
    /**
     * preco do item para a compra do mesmo
     */
    preco: {
        type: Number
    },
    /**
     * Peso do item em quilos(KG)
     */
    peso: {
        type: Number
    }
})

// Criando o model
mongoose.model('Equipamento', EquipamentoSchema)