const mongoose =  require('mongoose')

const Personagem = mongoose.model('Personagem')

module.exports = {
    async store(req, res) {
        const dadosPersonagem = req.body
        // TODO Criar Geração automatica dos dados para os atributos
        //const personagem = await Personagem.create()

        return res.json(dadosPersonagem)
    }
}